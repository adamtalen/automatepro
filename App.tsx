import React, { useState } from 'react';
// Fix: Added file extensions to imports
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import AutomationExamples from './components/AutomationExamples.tsx';
import IdeaGenerator from './components/IdeaGenerator.tsx';
import CallToAction from './components/CallToAction.tsx';
import ContactForm from './components/ContactForm.tsx';
import ThankYouPage from './components/ThankYouPage.tsx';
import Footer from './components/Footer.tsx';
import { content } from './constants/content.ts';
import type { Language, FormData } from './types.ts';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fr');
  const [view, setView] = useState<'landing' | 'thankyou'>('landing');
  const [submittedUserEmail, setSubmittedUserEmail] = useState<string>('');
  const currentContent = content[language];

  const handleFormSuccess = (formData: FormData) => {
    setSubmittedUserEmail(formData.email);
    window.scrollTo(0, 0);
    setView('thankyou');
  };
  
  const handleReturnHome = () => {
    setView('landing');
    setSubmittedUserEmail('');
  };

  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen selection:bg-cyan-500 selection:text-white">
      {view === 'landing' ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-200/[0.6] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <div className="relative z-10">
            <Header language={language} setLanguage={setLanguage} content={currentContent.header} />
            <main>
              <Hero content={currentContent.hero} />
              <Services content={currentContent.services} />
              <AutomationExamples content={currentContent.automationExamples} />
              <IdeaGenerator content={currentContent.ideaGenerator} />
              <CallToAction content={currentContent.cta} />
              <ContactForm content={currentContent.contact} onSuccess={handleFormSuccess} />
            </main>
            <Footer content={currentContent.footer} />
          </div>
        </>
      ) : (
        <ThankYouPage 
            content={currentContent.thankYou} 
            onReturnHome={handleReturnHome} 
            userEmail={submittedUserEmail}
        />
      )}
    </div>
  );
};

export default App;
