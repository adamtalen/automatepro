import React from 'react';
import type { ThankYouContent } from '../types';

interface ThankYouPageProps {
  content: ThankYouContent;
  onReturnHome: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ content, onReturnHome }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-8">
        <div className="mb-6">
            <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
          {content.title}
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg text-slate-600">
          {content.message}
        </p>
        <div className="mt-10">
          <button
            onClick={onReturnHome}
            className="inline-block bg-cyan-500 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-cyan-500/30 hover:bg-cyan-600 transform hover:-translate-y-1 transition-all duration-300"
          >
            {content.backButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
