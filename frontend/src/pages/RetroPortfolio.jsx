import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/mock';
import PixelCard from '../components/pixel/PixelCard';
import PixelButton from '../components/pixel/PixelButton';
import '../styles/pixel-theme.css';
import { Heart, Battery, Zap, Trophy, Sword, Mail, Github, Linkedin } from 'lucide-react';

const RetroPortfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate "Loading Cartridge" effect
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <div className="min-h-screen bg-slate-900 font-pixel text-slate-900 relative overflow-x-hidden">
      {/* CRT Overlay */}
      <div className="scanlines"></div>

      {/* Navigation / HUD */}
      <nav className="fixed top-0 left-0 right-0 bg-black border-b-4 border-gray-700 z-40 p-4 flex justify-between items-center text-white text-xs md:text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-red-500">
            <Heart className="w-4 h-4 fill-current" /> 
            <span>HP {portfolioData.stats.hp}</span>
          </div>
          <div className="flex items-center gap-2 text-blue-500">
            <Zap className="w-4 h-4 fill-current" />
            <span>MP {portfolioData.stats.mp}</span>
          </div>
        </div>
        <div className="hidden md:flex gap-4">
          <button onClick={() => setActiveSection('hero')} className={`hover:text-yellow-400 ${activeSection === 'hero' ? 'text-yellow-400' : ''}`}>START</button>
          <button onClick={() => setActiveSection('stats')} className={`hover:text-yellow-400 ${activeSection === 'stats' ? 'text-yellow-400' : ''}`}>STATS</button>
          <button onClick={() => setActiveSection('quests')} className={`hover:text-yellow-400 ${activeSection === 'quests' ? 'text-yellow-400' : ''}`}>QUESTS</button>
          <button onClick={() => setActiveSection('contact')} className={`hover:text-yellow-400 ${activeSection === 'contact' ? 'text-yellow-400' : ''}`}>CONTACT</button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-24 pb-12 px-4 container mx-auto max-w-5xl relative z-10">
        
        {/* HERO SECTION */}
        {activeSection === 'hero' && (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center animate-in fade-in zoom-in duration-500">
            <div className="mb-8 relative">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-blue-600 mx-auto border-4 border-white shadow-[8px_8px_0_0_rgba(0,0,0,0.5)] overflow-hidden">
                 <img 
                   src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Rizal" 
                   alt="Avatar" 
                   className="w-full h-full object-cover"
                 />
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
              <PixelButton onClick={() => setActiveSection('quests')} variant="primary">
                START GAME
              </PixelButton>
              <PixelButton onClick={() => setActiveSection('stats')} variant="warning">
                VIEW STATS
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
                  <div className="flex items-center gap-4 p-2 border-2 border-gray-200 bg-gray-50">
                    <div className="w-10 h-10 bg-gray-300 flex items-center justify-center border-2 border-black">☕</div>
                    <div>
                      <div className="font-bold">Infinite Coffee</div>
                      <div className="text-gray-500">Restores MP</div>
                    </div>
                  </div>
                </div>
              </PixelCard>
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
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t-4 border-gray-700 p-2 flex justify-around z-50">
        <button onClick={() => setActiveSection('hero')} className="flex flex-col items-center text-[10px] text-white">
          <div className="w-8 h-8 bg-gray-800 border-2 border-gray-600 mb-1 flex items-center justify-center">🏠</div>
          HOME
        </button>
        <button onClick={() => setActiveSection('stats')} className="flex flex-col items-center text-[10px] text-white">
          <div className="w-8 h-8 bg-gray-800 border-2 border-gray-600 mb-1 flex items-center justify-center">📊</div>
          STATS
        </button>
        <button onClick={() => setActiveSection('quests')} className="flex flex-col items-center text-[10px] text-white">
          <div className="w-8 h-8 bg-gray-800 border-2 border-gray-600 mb-1 flex items-center justify-center">⚔️</div>
          QUESTS
        </button>
        <button onClick={() => setActiveSection('contact')} className="flex flex-col items-center text-[10px] text-white">
          <div className="w-8 h-8 bg-gray-800 border-2 border-gray-600 mb-1 flex items-center justify-center">✉️</div>
          MAIL
        </button>
      </div>
    </div>
  );
};

export default RetroPortfolio;
