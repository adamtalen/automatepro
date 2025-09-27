import React, { useState } from 'react';
// Fix: Added file extension to import path
import type { HeaderContent, Language } from '../types.ts';

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
  content: HeaderContent;
}

const LanguageSwitcher: React.FC<{ language: Language; setLanguage: (language: Language) => void; isMobile?: boolean }> = ({ language, setLanguage, isMobile }) => {
    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'EN' },
        { code: 'fr', label: 'FR' },
        { code: 'it', label: 'IT' },
    ];

    const baseClasses = "flex items-center space-x-2 text-sm";
    const mobileClasses = "px-4 pt-4 pb-2 border-t border-slate-200";

    return (
        <div className={`${baseClasses} ${isMobile ? mobileClasses : ''}`}>
            {languages.map((lang, index) => (
                <React.Fragment key={lang.code}>
                    <button
                        onClick={() => setLanguage(lang.code)}
                        className={`px-3 py-1 rounded-md transition-colors font-medium ${
                            language === lang.code ? 'bg-cyan-500 text-white' : 'text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        {lang.label}
                    </button>
                    {index < languages.length - 1 && <span className="text-slate-300">|</span>}
                </React.Fragment>
            ))}
        </div>
    );
};

const Header: React.FC<HeaderProps> = ({ language, setLanguage, content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', text: content.nav.services },
    { href: '#examples', text: content.nav.examples },
    { href: '#idea-generator', text: content.nav.ideaGenerator },
    { href: '#contact-form', text: content.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-slate-900">
              {content.logo}
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-cyan-500 transition-colors font-medium"
              >
                {link.text}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Desktop Language Switcher */}
            <div className="hidden md:flex">
                <LanguageSwitcher language={language} setLanguage={setLanguage} />
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-600 hover:bg-slate-100 hover:text-cyan-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.text}
              </a>
            ))}
          </div>
          {/* Mobile Language Switcher */}
          <LanguageSwitcher language={language} setLanguage={setLanguage} isMobile={true} />
        </div>
      )}
    </header>
  );
};

export default Header;