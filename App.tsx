import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AutomationExamples from './components/AutomationExamples';
import CallToAction from './components/CallToAction';
import ContactForm from './components/ContactForm';
import ThankYouPage from './components/ThankYouPage';
import Footer from './components/Footer';
import { content } from './constants/content';
import type { Language, FormData } from './types';

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