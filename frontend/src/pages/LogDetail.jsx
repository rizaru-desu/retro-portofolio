import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/mock';
import PixelButton from '../components/pixel/PixelButton';
import { soundManager } from '../utils/SoundController';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import '../styles/pixel-theme.css';

const LogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [log, setLog] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    const foundLog = portfolioData.logs.find(l => l.id === parseInt(id));
    setLog(foundLog);
  }, [id]);

  const handleBack = () => {
    soundManager.playBack();
    navigate('/');
  };

  if (!log) {
    return (
      <div className="min-h-screen bg-slate-900 font-pixel text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">404 - FILE NOT FOUND</h1>
          <PixelButton onClick={handleBack} variant="primary">RETURN TO BASE</PixelButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 font-pixel text-slate-900 relative overflow-x-hidden pb-20">
      <div className="scanlines"></div>
      
      <nav className="fixed top-0 left-0 right-0 bg-black border-b-4 border-gray-700 z-40 p-4 flex items-center text-white">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
        >
          <ArrowLeft size={16} /> BACK TO MENU
        </button>
      </nav>

      <main className="pt-24 px-4 container mx-auto max-w-3xl relative z-10">
        <div className="bg-black border-4 border-green-500 p-6 md:p-10 text-green-500 shadow-[8px_8px_0_0_rgba(0,0,0,0.5)]">
          
          <div className="border-b-2 border-green-800 pb-4 mb-6">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-2">
              <span className="bg-green-900 text-green-100 px-2 py-1 text-xs">FILE_ID: {log.id}</span>
              <div className="flex items-center gap-2 text-xs opacity-80">
                <Calendar size={12} /> {log.date}
              </div>
            </div>
            <h1 className="text-xl md:text-3xl text-white leading-relaxed">{log.title}</h1>
          </div>

          <div className="prose prose-invert prose-p:font-mono prose-headings:font-pixel prose-headings:text-yellow-400 max-w-none mb-8">
            <div dangerouslySetInnerHTML={{ __html: log.content }} />
          </div>

          <div className="flex flex-wrap gap-2 border-t-2 border-green-800 pt-6">
            {log.tags.map((tag, i) => (
              <div key={i} className="flex items-center gap-1 text-xs bg-green-900/50 px-3 py-1 border border-green-700">
                <Tag size={10} /> {tag}
              </div>
            ))}
          </div>

        </div>
        
        <div className="mt-8 text-center">
           <PixelButton onClick={handleBack} variant="secondary">
             CLOSE FILE
           </PixelButton>
        </div>
      </main>
    </div>
  );
};

export default LogDetail;
