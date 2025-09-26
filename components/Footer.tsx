import React from 'react';
// Fix: Added file extension to import path
import type { FooterContent } from '../types.ts';

interface FooterProps {
  content: FooterContent;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="py-8 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
        <p>{content.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
