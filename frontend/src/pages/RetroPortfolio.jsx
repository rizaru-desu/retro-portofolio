import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/mock';
import PixelCard from '../components/pixel/PixelCard';
import PixelButton from '../components/pixel/PixelButton';
import { soundManager } from '../utils/SoundController';
import '../styles/pixel-theme.css';
import { Heart, Zap, Mail, Github, Linkedin, Volume2, VolumeX, Play } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const RetroPortfolio = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('hero');
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const handleStart = () => {
    soundManager.init();
    soundManager.playClick();
    soundManager.startBGM();
    setHasInteracted(true);
  };

  const handleNavClick = (section) => {
    soundManager.playClick();
    setActiveSection(section);
  };

  const handleNavHover = () => {
    soundManager.playHover();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center font-pixel text-white">
        <div className="mb-8 text-2xl animate-pulse">LOADING CARTRIDGE...</div>
        <div className="w-64 h-8 border-4 border-white p-1">
          <div className="h-full bg-green-500 animate-[width_2s_ease-in-out_forwards]" style={{ width: '100%' }}></div>
        </div>
      </div>
    );
  }

  // Initial "Press Start" Screen to handle Audio Context policy
  if (!hasInteracted) {
    return (
      <div className="min-h-screen bg-slate-900 font-pixel text-white flex flex-col items-center justify-center relative overflow-hidden">
        <div className="scanlines"></div>
        <div className="z-10 text-center animate-in zoom-in duration-500">
          <h1 className="text-4xl md:text-6xl mb-8 text-shadow-pixel text-yellow-400">
            {portfolioData.hero.name.split(' ')[0]}'S<br/>ADVENTURE
          </h1>
          <div className="animate-bounce">
            <PixelButton onClick={handleStart} variant="success" className="text-lg px-8 py-4">
              <Play className="mr-2 w-4 h-4" /> PRESS START
            </PixelButton>
          </div>
          <p className="mt-8 text-gray-500 text-xs">ENABLES AUDIO EXPERIENCE</p>
        </div>
      </div>
    );
  }

  const NavButton = ({ section, label, icon }) => (
    <button 
      onClick={() => handleNavClick(section)}
      onMouseEnter={handleNavHover}
      className={`hover:text-yellow-400 flex items-center gap-2 ${activeSection === section ? 'text-yellow-400 underline decoration-4 decoration-yellow-400 underline-offset-4' : ''}`}
    >
      {icon && <span className="hidden lg:inline">{icon}</span>}
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-900 font-pixel text-slate-900 relative overflow-x-hidden pb-20 md:pb-0">
      {/* CRT Overlay */}
      <div className="scanlines"></div>

      {/* Navigation / HUD */}
      <nav className="fixed top-0 left-0 right-0 bg-black border-b-4 border-gray-700 z-40 p-4 flex flex-col md:flex-row justify-between items-center text-white text-[10px] md:text-xs lg:text-sm gap-4 md:gap-0">
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2 text-red-500">
            <Heart className="w-4 h-4 fill-current" /> 
            <span>HP {portfolioData.stats.hp}</span>
          </div>
          <div className="flex items-center gap-2 text-blue-500">
            <Zap className="w-4 h-4 fill-current" />
            <span>MP {portfolioData.stats.mp}</span>
          </div>
          
          {/* Mute Button */}
          <button 
            onClick={toggleMute}
            className="ml-4 text-gray-400 hover:text-white"
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 flex-wrap justify-center">
          <NavButton section="hero" label="HOME" />
          <NavButton section="stats" label="STATS" />
          <NavButton section="guilds" label="GUILDS" />
          <NavButton section="quests" label="QUESTS" />
          <NavButton section="logs" label="LOGS" />
          <NavButton section="reputation" label="CHAT" />
          <NavButton section="contact" label="CONTACT" />
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-32 md:pt-24 pb-12 px-4 container mx-auto max-w-5xl relative z-10">
        
        {/* HERO SECTION */}
        {activeSection === 'hero' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-in fade-in zoom-in duration-500">
            <div className="mb-8 relative group cursor-pointer">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-blue-600 mx-auto border-4 border-white shadow-[8px_8px_0_0_rgba(0,0,0,0.5)] overflow-hidden relative">
                 <img 
                   src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Rizal" 
                   alt="Avatar" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 border-2 border-black text-xs whitespace-nowrap">
                LVL {portfolioData.hero.level}
              </div>
            </div>
            
            <h1 className="text-2xl md:text-4xl text-white mb-4 text-shadow-pixel leading-relaxed">
              {portfolioData.hero.name}
            </h1>
            <p className="text-green-400 text-sm md:text-lg mb-8 animate-pulse">
              &lt; {portfolioData.hero.role} /&gt;
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <PixelButton onClick={() => handleNavClick('quests')} variant="primary">
                START GAME
              </PixelButton>
              <PixelButton onClick={() => handleNavClick('guilds')} variant="warning">
                VIEW HISTORY
              </PixelButton>
            </div>
          </div>
        )}

        {/* STATS SECTION */}
        {activeSection === 'stats' && (
          <div className="animate-in slide-in-from-right duration-500">
            <h2 className="text-2xl text-white mb-8 text-center border-b-4 border-white pb-4 inline-block w-full">CHARACTER STATS</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <PixelCard title="ATTRIBUTES">
                <div className="space-y-6">
                  {portfolioData.stats.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2 text-xs">
                        <span className="flex items-center gap-2">{skill.icon} {skill.name}</span>
                        <span>{skill.power}/100</span>
                      </div>
                      <div className="w-full h-4 bg-gray-200 border-2 border-black p-0.5">
                        <div 
                          className="h-full bg-green-500" 
                          style={{ width: `${skill.power}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </PixelCard>

              <PixelCard title="EQUIPMENT">
                <div className="space-y-4 text-xs md:text-sm">
                  <div className="flex items-center gap-4 p-2 border-2 border-gray-200 bg-gray-50">
                    <div className="w-10 h-10 bg-gray-300 flex items-center justify-center border-2 border-black">💻</div>
                    <div>
                      <div className="font-bold">MacBook Pro</div>
                      <div className="text-gray-500">Legendary Item</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-2 border-2 border-gray-200 bg-gray-50">
                    <div className="w-10 h-10 bg-gray-300 flex items-center justify-center border-2 border-black">⌨️</div>
                    <div>
                      <div className="font-bold">Mech Keyboard</div>
                      <div className="text-gray-500">+10 Typing Speed</div>
                    </div>
                  </div>
                </div>
              </PixelCard>
            </div>
          </div>
        )}

        {/* GUILDS (WORK HISTORY) SECTION */}
        {activeSection === 'guilds' && (
          <div className="animate-in slide-in-from-left duration-500">
            <h2 className="text-2xl text-white mb-8 text-center border-b-4 border-white pb-4 inline-block w-full">GUILD HISTORY</h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              {portfolioData.guilds.map((guild) => (
                <div key={guild.id} className="relative pl-8 md:pl-0">
                  {/* Timeline Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-700 md:left-1/2 md:-ml-0.5"></div>
                  
                  <div className={`md:flex items-center justify-between w-full ${guild.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="hidden md:block w-5/12"></div>
                    
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 -ml-4 bg-yellow-400 border-4 border-black flex items-center justify-center z-10 rounded-full text-xs">
                      {guild.icon}
                    </div>
                    
                    <div className="w-full md:w-5/12 mb-8 md:mb-0">
                      <PixelCard className="hover:scale-105 transition-transform">
                        <div className="text-xs text-blue-600 font-bold mb-1">{guild.period}</div>
                        <h3 className="text-lg font-bold mb-1">{guild.name}</h3>
                        <div className="text-sm text-gray-500 mb-2 italic">{guild.role}</div>
                        <p className="text-xs text-gray-600 leading-relaxed">{guild.description}</p>
                      </PixelCard>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* QUESTS / PROJECTS SECTION */}
        {activeSection === 'quests' && (
          <div className="animate-in slide-in-from-bottom duration-500">
            <h2 className="text-2xl text-white mb-8 text-center border-b-4 border-white pb-4 inline-block w-full">SELECT MISSION</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioData.quests.map((quest) => (
                <div key={quest.id} className="bg-gray-800 border-4 border-white p-1 relative group hover:-translate-y-2 transition-transform duration-200">
                  <div className="bg-black p-4 h-full flex flex-col">
                    <div className="h-32 mb-4 overflow-hidden border-2 border-gray-600 relative">
                      <img src={quest.image} alt={quest.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-2 py-1 border border-white">
                        {quest.difficulty}
                      </div>
                    </div>
                    
                    <h3 className="text-yellow-400 text-sm mb-2">{quest.title}</h3>
                    <p className="text-gray-400 text-[10px] mb-4 flex-grow leading-relaxed">
                      {quest.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {quest.loot.map((tech, i) => (
                        <span key={i} className="text-[8px] bg-blue-900 text-blue-200 px-2 py-1 border border-blue-500">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <PixelButton className="w-full text-[10px]" variant="success">
                      VIEW CODE
                    </PixelButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ADVENTURE LOGS (BLOG) */}
        {activeSection === 'logs' && (
          <div className="animate-in fade-in duration-500 max-w-3xl mx-auto">
            <h2 className="text-2xl text-white mb-8 text-center border-b-4 border-white pb-4 inline-block w-full">ADVENTURE LOGS</h2>
            
            <div className="space-y-4">
              {portfolioData.logs.map((log) => (
                <div key={log.id} className="bg-black border-2 border-green-500 p-4 text-green-500 font-mono text-xs md:text-sm hover:bg-green-900/20 cursor-pointer transition-colors" onClick={() => { soundManager.playClick(); navigate(`/logs/${log.id}`); }}>
                  <div className="flex justify-between border-b border-green-800 pb-2 mb-2">
                    <span>FILE_ID: {log.id}</span>
                    <span>DATE: {log.date}</span>
                  </div>
                  <h3 className="text-lg mb-2 text-white">>> {log.title}</h3>
                  <p className="mb-4 opacity-80">{log.snippet}</p>
                  <div className="flex gap-2">
                    {log.tags.map((tag, i) => (
                      <span key={i} className="bg-green-900 text-green-100 px-2 py-0.5 text-[10px]">#{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REPUTATION (TESTIMONIALS) */}
        {activeSection === 'reputation' && (
          <div className="animate-in zoom-in duration-500">
            <h2 className="text-2xl text-white mb-8 text-center border-b-4 border-white pb-4 inline-block w-full">NPC CHAT</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.reputation.map((rep) => (
                <div key={rep.id} className="bg-blue-900 border-4 border-white p-6 relative">
                  {/* Speech Bubble Tail */}
                  <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
                  
                  <p className="text-white text-xs md:text-sm leading-relaxed mb-4">
                    "{rep.message}"
                  </p>
                  
                  <div className="flex items-center gap-4 border-t-2 border-blue-700 pt-4">
                    <div className="w-10 h-10 bg-white flex items-center justify-center text-xl border-2 border-black">
                      {rep.avatar}
                    </div>
                    <div>
                      <div className="text-yellow-400 text-xs font-bold">{rep.name}</div>
                      <div className="text-blue-300 text-[10px]">{rep.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACT SECTION */}
        {activeSection === 'contact' && (
          <div className="animate-in zoom-in duration-500 max-w-2xl mx-auto">
            <PixelCard title="GAME OVER?" className="text-center py-12">
              <h2 className="text-xl md:text-2xl mb-6">CONTINUE?</h2>
              <p className="text-sm text-gray-600 mb-8">Insert coin (or email) to start a new project together.</p>
              
              <div className="flex flex-col gap-4 max-w-xs mx-auto">
                <a href={`mailto:${portfolioData.contact.email}`} className="no-underline">
                  <PixelButton className="w-full flex items-center justify-center gap-2" variant="primary">
                    <Mail size={16} /> {portfolioData.contact.email}
                  </PixelButton>
                </a>
                <a href={`https://${portfolioData.contact.github}`} target="_blank" rel="noreferrer" className="no-underline">
                  <PixelButton className="w-full flex items-center justify-center gap-2" variant="secondary">
                    <Github size={16} /> GITHUB
                  </PixelButton>
                </a>
                <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" rel="noreferrer" className="no-underline">
                  <PixelButton className="w-full flex items-center justify-center gap-2" variant="secondary">
                    <Linkedin size={16} /> LINKEDIN
                  </PixelButton>
                </a>
              </div>

              <div className="mt-12 text-[10px] text-gray-400">
                CREDITS: RIZAL ACHMAD SAPUTRA © 2025
              </div>
            </PixelCard>
          </div>
        )}

      </main>

      {/* Mobile Menu Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t-4 border-gray-700 p-2 flex justify-between overflow-x-auto z-50 no-scrollbar">
        <button 
          onClick={() => handleNavClick('hero')} 
          onMouseEnter={handleNavHover}
          className={`flex flex-col items-center text-[8px] text-white min-w-[50px] ${activeSection === 'hero' ? 'text-yellow-400' : ''}`}
        >
          <div className="w-6 h-6 bg-gray-800 border border-gray-600 mb-1 flex items-center justify-center">🏠</div>
          HOME
        </button>
        <button 
          onClick={() => handleNavClick('stats')} 
          onMouseEnter={handleNavHover}
          className={`flex flex-col items-center text-[8px] text-white min-w-[50px] ${activeSection === 'stats' ? 'text-yellow-400' : ''}`}
        >
          <div className="w-6 h-6 bg-gray-800 border border-gray-600 mb-1 flex items-center justify-center">📊</div>
          STATS
        </button>
        <button 
          onClick={() => handleNavClick('guilds')} 
          onMouseEnter={handleNavHover}
          className={`flex flex-col items-center text-[8px] text-white min-w-[50px] ${activeSection === 'guilds' ? 'text-yellow-400' : ''}`}
        >
          <div className="w-6 h-6 bg-gray-800 border border-gray-600 mb-1 flex items-center justify-center">🏰</div>
          GUILDS
        </button>
        <button 
          onClick={() => handleNavClick('quests')} 
          onMouseEnter={handleNavHover}
          className={`flex flex-col items-center text-[8px] text-white min-w-[50px] ${activeSection === 'quests' ? 'text-yellow-400' : ''}`}
        >
          <div className="w-6 h-6 bg-gray-800 border border-gray-600 mb-1 flex items-center justify-center">⚔️</div>
          QUESTS
        </button>
        <button 
          onClick={() => handleNavClick('logs')} 
          onMouseEnter={handleNavHover}
          className={`flex flex-col items-center text-[8px] text-white min-w-[50px] ${activeSection === 'logs' ? 'text-yellow-400' : ''}`}
        >
          <div className="w-6 h-6 bg-gray-800 border border-gray-600 mb-1 flex items-center justify-center">📜</div>
          LOGS
        </button>
        <button 
          onClick={() => handleNavClick('reputation')} 
          onMouseEnter={handleNavHover}
          className={`flex flex-col items-center text-[8px] text-white min-w-[50px] ${activeSection === 'reputation' ? 'text-yellow-400' : ''}`}
        >
          <div className="w-6 h-6 bg-gray-800 border border-gray-600 mb-1 flex items-center justify-center">💬</div>
          CHAT
        </button>
      </div>
    </div>
  );
};

export default RetroPortfolio;
