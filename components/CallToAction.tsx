import React from 'react';
import type { CallToActionContent } from '../types';

interface CallToActionProps {
  content: CallToActionContent;
}

const CallToAction: React.FC<CallToActionProps> = ({ content }) => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl p-10 sm:p-16 text-center shadow-2xl shadow-cyan-500/20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter">
            {content.title}
          </h2>
          <div className="mt-10">
            <a
              href="#contact-form"
              className="inline-block bg-white text-cyan-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-slate-100 transform hover:-translate-y-1 transition-all duration-300"
            >
              {content.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;