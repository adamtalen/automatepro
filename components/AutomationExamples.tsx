import React from 'react';
// Fix: Added file extension to import path
import type { AutomationExamplesContent, AutomationExample } from '../types.ts';

interface AutomationExamplesProps {
  content: AutomationExamplesContent;
}

const ExampleCard: React.FC<{ example: AutomationExample }> = ({ example }) => (
  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="p-6 flex-grow">
      <div className="flex items-start space-x-4">
        {example.icon}
        <div>
          <h3 className="text-xl font-bold text-slate-900">{example.title}</h3>
          <p className="text-sm text-cyan-600 font-medium mt-1">{example.for}</p>
        </div>
      </div>
      <p className="text-slate-600 mt-4">{example.description}</p>
    </div>
    <div className="bg-slate-100 p-4 mt-auto border-t border-slate-200">
        <p className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">{example.roi}</p>
    </div>
  </div>
);

const AutomationExamples: React.FC<AutomationExamplesProps> = ({ content }) => {
  return (
    <section id="examples" className="py-20 sm:py-24 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">{content.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.examples.map((example, index) => (
            <ExampleCard key={index} example={example} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationExamples;
