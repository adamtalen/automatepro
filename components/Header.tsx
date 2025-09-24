import React from 'react';
import type { Language, HeaderContent } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: HeaderContent;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, content }) => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 backdrop-blur-lg bg-white/80 sticky top-0 z-50 border-b border-slate-900/10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-black text-slate-900 tracking-tighter">
          {content.logo}
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-cyan-500 transition-colors">{content.nav.services}</a>
          <a href="#examples" className="hover:text-cyan-500 transition-colors">{content.nav.examples}</a>
          <a href="#contact-form" className="hover:text-cyan-500 transition-colors">{content.nav.contact}</a>
        </nav>
        <div className="flex items-center space-x-2 text-sm">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-md transition-colors font-medium ${
              language === 'en' ? 'bg-cyan-500 text-white' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            EN
          </button>
          <span className="text-slate-300">|</span>
          <button
            onClick={() => setLanguage('fr')}
            className={`px-3 py-1 rounded-md transition-colors font-medium ${
              language === 'fr' ? 'bg-cyan-500 text-white' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            FR
          </button>
           <span className="text-slate-300">|</span>
          <button
            onClick={() => setLanguage('it')}
            className={`px-3 py-1 rounded-md transition-colors font-medium ${
              language === 'it' ? 'bg-cyan-500 text-white' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            IT
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;