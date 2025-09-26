import React, { useState } from 'react';
import type { Language, HeaderContent } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: HeaderContent;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : language === 'en' ? 'it' : 'fr';
    setLanguage(newLang);
  };
  
  const getLanguageName = (lang: Language) => {
      if (lang === 'en') return 'EN';
      if (lang === 'fr') return 'FR';
      return 'IT';
  }

  return (
    <header className="py-4 sm:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <svg className="h-8 w-8 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414M19.778 4.222l-1.414 1.414M4.222 19.778l1.414-1.414M12 18a6 6 0 100-12 6 6 0 000 12z" />
            </svg>
            <span className="font-bold text-xl text-slate-800">{content.logo}</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-600 hover:text-cyan-600 transition-colors font-medium">
              {content.nav.services}
            </a>
            <a href="#examples" className="text-slate-600 hover:text-cyan-600 transition-colors font-medium">
              {content.nav.examples}
            </a>
            <a href="#idea-generator" className="text-slate-600 hover:text-cyan-600 transition-colors font-medium">
              {content.nav.ideaGenerator}
            </a>
            <a href="#contact-form" className="text-slate-600 hover:text-cyan-600 transition-colors font-medium">
              {content.nav.contact}
            </a>
            <button onClick={toggleLanguage} className="text-sm font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-md hover:bg-slate-200 transition-colors w-12">
              {getLanguageName(language)}
            </button>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-slate-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden bg-white rounded-lg shadow-lg p-4">
            <nav className="flex flex-col space-y-4">
               <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-cyan-600 transition-colors font-medium px-2 py-1 rounded-md">
                {content.nav.services}
              </a>
               <a href="#examples" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-cyan-600 transition-colors font-medium px-2 py-1 rounded-md">
                {content.nav.examples}
              </a>
               <a href="#idea-generator" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-cyan-600 transition-colors font-medium px-2 py-1 rounded-md">
                {content.nav.ideaGenerator}
              </a>
               <a href="#contact-form" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-cyan-600 transition-colors font-medium px-2 py-1 rounded-md">
                {content.nav.contact}
              </a>
              <button onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} className="text-sm font-semibold bg-slate-100 text-slate-700 px-3 py-2 rounded-md hover:bg-slate-200 transition-colors text-left">
                {getLanguageName(language)}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
