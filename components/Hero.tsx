import React from 'react';
// Fix: Added file extension to import path
import type { HeroContent } from '../types.ts';

interface HeroProps {
  content: HeroContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 leading-tight tracking-tighter">
              {content.heading}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg text-slate-600">
              {content.subheading}
            </p>
            <div className="mt-10">
              <a
                href="#contact-form"
                className="inline-block bg-cyan-500 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-cyan-500/30 hover:bg-cyan-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                {content.ctaButton}
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://picsum.photos/id/42/800/800"
              alt="AI Automation"
              className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-none aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
