import React from 'react';
import type { ThankYouContent } from '../types';

type GeneratedEmails = {
    adminEmail: string;
    userEmail: string;
} | null;

interface ThankYouPageProps {
  content: ThankYouContent;
  onReturnHome: () => void;
  generatedEmails: GeneratedEmails;
  userEmail: string;
}

const EmailPreview: React.FC<{ title: string; content: string | undefined }> = ({ title, content }) => {
    if (!content) return null;

    const lines = content.split('\n');
    const subjectLine = lines.find(line => line.toLowerCase().startsWith('subject:')) || '';
    const bodyContent = lines.filter(line => !line.toLowerCase().startsWith('subject:')).join('\n').trim();

    return (
        <div className="mt-8 text-left h-full flex flex-col">
            <h3 className="text-lg font-bold text-slate-800">{title}</h3>
            <div className="mt-2 p-4 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 whitespace-pre-wrap font-sans flex-grow">
                {subjectLine && <p className="font-bold">{subjectLine}</p>}
                {subjectLine && <div className="border-t border-slate-300 my-2"></div>}
                <p>{bodyContent}</p>
            </div>
        </div>
    );
};


const ThankYouPage: React.FC<ThankYouPageProps> = ({ content, onReturnHome, generatedEmails, userEmail }) => {
  return (
    <div className="flex items-center justify-center min-h-screen py-12">
      <div className="text-center p-8 max-w-5xl mx-auto">
        <div className="mb-6">
            <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
          {content.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            {content.message} A confirmation for <strong className="text-slate-800">{userEmail}</strong> has been generated below.
        </p>
        
        {generatedEmails ? (
            <div className="mt-12 pt-8 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800">Email Simulation</h2>
                <p className="mt-2 text-slate-600">In a live application, the following emails would be sent automatically.</p>
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    <EmailPreview title="To: Business Owner (Admin)" content={generatedEmails.adminEmail} />
                    <EmailPreview title={`To: User (${userEmail})`} content={generatedEmails.userEmail} />
                </div>
            </div>
        ) : (
             <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex justify-center items-center gap-4 text-slate-600">
                    <svg className="animate-spin h-5 w-5 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Generating email previews with Gemini AI...</span>
                </div>
             </div>
        )}

        <div className="mt-12">
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