
class RetroSound {
  constructor() {
    this.context = null;
    this.muted = false;
    this.initialized = false;
    this.bgmNodes = [];
    this.bgmInterval = null;
    this.isBgmPlaying = false;
  }

  init() {
    if (!this.initialized) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.context = new AudioContext();
      this.initialized = true;
    }
    if (this.context && this.context.state === 'suspended') {
      this.context.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.muted) {
      this.stopBGM();
    } else {
      if (this.isBgmPlaying) {
        this.startBGM();
      }
    }
    return this.muted;
  }

  playTone(freq, type, duration, vol = 0.1) {
    if (this.muted || !this.context) return;

    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.context.currentTime);
    
    gain.gain.setValueAtTime(vol, this.context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.context.destination);

    osc.start();
    osc.stop(this.context.currentTime + duration);
  }

  playHover() {
    this.init();
    this.playTone(440, 'square', 0.05, 0.05);
  }

  playClick() {
    this.init();
    if (this.muted || !this.context) return;
    
    const now = this.context.currentTime;
    
    const osc1 = this.context.createOscillator();
    const gain1 = this.context.createGain();
    osc1.type = 'square';
    osc1.frequency.setValueAtTime(523.25, now); // C5
    gain1.gain.setValueAtTime(0.1, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc1.connect(gain1);
    gain1.connect(this.context.destination);
    osc1.start();
    osc1.stop(now + 0.1);

    const osc2 = this.context.createOscillator();
    const gain2 = this.context.createGain();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(659.25, now + 0.05); // E5
    gain2.gain.setValueAtTime(0.1, now + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc2.connect(gain2);
    gain2.connect(this.context.destination);
    osc2.start(now + 0.05);
    osc2.stop(now + 0.15);
  }

  // Simple 8-bit Arpeggio BGM
  startBGM() {
    this.isBgmPlaying = true;
    if (this.muted || !this.initialized) return;

    this.stopBGM(false); // Clear existing interval but keep playing state

    const sequence = [
      { f: 110.00, d: 0.2 }, // A2
      { f: 130.81, d: 0.2 }, // C3
      { f: 164.81, d: 0.2 }, // E3
      { f: 196.00, d: 0.2 }, // G3
    ];
    
    let noteIndex = 0;

    const playNextNote = () => {
      if (!this.isBgmPlaying || this.muted) return;
      
      const note = sequence[noteIndex];
      
      const osc = this.context.createOscillator();
      const gain = this.context.createGain();
      
      osc.type = 'triangle'; // Softer than square for BGM
      osc.frequency.setValueAtTime(note.f, this.context.currentTime);
      
      // Low volume for background
      gain.gain.setValueAtTime(0.03, this.context.currentTime);
      gain.gain.linearRampToValueAtTime(0.03, this.context.currentTime + note.d - 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + note.d);
      
      osc.connect(gain);
      gain.connect(this.context.destination);
      
      osc.start();
      osc.stop(this.context.currentTime + note.d);
      
      this.bgmNodes.push(osc);
      
      noteIndex = (noteIndex + 1) % sequence.length;
    };

    playNextNote();
    this.bgmInterval = setInterval(playNextNote, 250); // 4 notes per second (approx 120 BPM)
  }

  stopBGM(fullyStop = true) {
    if (this.bgmInterval) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }
    this.bgmNodes.forEach(node => {
      try { node.stop(); } catch(e) {}
    });
    this.bgmNodes = [];
    
    if (fullyStop) {
      this.isBgmPlaying = false;
    }
  }
}

export const soundManager = new RetroSound();
