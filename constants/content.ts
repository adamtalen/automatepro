import React from 'react';
// Fix: Added file extension to import path
import type { AllContent } from '../types.ts';

// Placeholder icons for demonstration
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const ChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const BotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414M19.778 4.222l-1.414 1.414M4.222 19.778l1.414-1.414M12 18a6 6 0 100-12 6 6 0 000 12z" /></svg>;
const CloudIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>;

const ECommerceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const HrIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const MarketingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514M15 13h-3" /></svg>;
const FinanceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;

export const content: AllContent = {
  fr: {
    header: {
      languageSwitcher: 'English',
      navLinks: [
        { href: '#services', label: 'Services' },
        { href: '#examples', label: 'Exemples' },
        { href: '#idea-generator', label: 'Générateur d\'idées' },
        { href: '#contact-form', label: 'Contact' },
      ],
    },
    hero: {
      heading: 'Automatisez Votre Entreprise avec l\'IA et N8N',
      subheading: 'Nous concevons des solutions d\'automatisation sur mesure pour les entreprises, en combinant la puissance de l\'IA de Google Gemini avec la flexibilité de N8N pour optimiser vos processus, réduire les coûts et augmenter l\'efficacité.',
      ctaButton: 'Obtenez votre consultation gratuite',
    },
    services: {
        title: 'Nos Services d\'Automatisation',
        description: [
            "Nous analysons vos processus métiers pour identifier les opportunités d'automatisation les plus impactantes. Ensuite, nous construisons et déployons des workflows intelligents et robustes qui s'intègrent parfaitement à vos outils existants.",
            "De la simple tâche répétitive à l'orchestration complexe de plusieurs applications, nous vous aidons à libérer le plein potentiel de votre entreprise."
        ],
        services: [
          { icon: <CodeIcon />, title: 'Développement sur Mesure', description: 'Création de workflows N8N personnalisés et de nœuds customisés pour répondre à des besoins uniques.' },
          { icon: <ChartIcon />, title: 'Optimisation de Processus', description: 'Analyse et refonte de vos opérations pour une efficacité maximale grâce à l\'automatisation.' },
          { icon: <BotIcon />, title: 'Intégration d\'IA', description: 'Incorporation de modèles d\'IA (comme Google Gemini) pour des tâches de traitement de langage, d\'analyse de données, etc.' },
          { icon: <CloudIcon />, title: 'Intégration d\'API', description: 'Connexion de tous vos services cloud et applications (CRM, ERP, etc.) en un système unifié.' },
        ],
    },
    automationExamples: {
        title: 'Exemples Concrets d\'Automatisation',
        examples: [
            { icon: <ECommerceIcon />, title: 'Gestion de Commandes', for: 'Pour E-commerce', description: 'Automatisation de la confirmation de commande, de la mise à jour des stocks et de la notification d\'expédition.', roi: 'Économie de 15h/semaine' },
            { icon: <HrIcon />, title: 'Onboarding RH', for: 'Pour les Ressources Humaines', description: 'Création automatique de comptes, envoi de documents et planification de formations pour les nouvelles recrues.', roi: 'Réduction de 80% du temps d\'intégration' },
            { icon: <MarketingIcon />, title: 'Génération de Leads', for: 'Pour le Marketing', description: 'Qualification automatique des leads depuis les formulaires, enrichissement des données et assignation aux commerciaux.', roi: 'Augmentation de 30% des leads qualifiés' },
            { icon: <FinanceIcon />, title: 'Reporting Financier', for: 'Pour la Finance', description: 'Extraction automatique de données de plusieurs sources pour générer des rapports hebdomadaires.', roi: 'Rapports 95% plus rapides et sans erreur' },
        ],
    },
    ideaGenerator: {
        title: 'Trouvez Votre Prochaine Automatisation',
        description: 'Décrivez une tâche ou un processus dans votre entreprise, et notre IA vous proposera un workflow d\'automatisation potentiel que nous pourrions construire pour vous.',
        placeholder: 'Ex: "Je suis un restaurateur à Antibes et je veux automatiser la prise de réservations et les commandes fournisseurs..."',
        emailLabel: 'Votre adresse e-mail',
        emailPlaceholder: 'Saisissez votre e-mail pour voir les résultats',
        buttonText: 'Générer mon Workflow',
        buttonLoadingText: 'Génération en cours...',
        examplePrompt: 'Essayez un exemple',
        resultsTitle: 'Votre Workflow d\'Automatisation Suggéré :',
    },
    cta: {
        title: 'Prêt à Transformer Votre Entreprise ?',
        ctaButton: 'Discutons de votre projet',
    },
    contact: {
        title: 'Contactez-nous',
        nameLabel: 'Nom',
        companyLabel: 'Entreprise (Optionnel)',
        phoneLabel: 'Téléphone (Optionnel)',
        emailLabel: 'Adresse e-mail',
        messageLabel: 'Votre message',
        submitButton: 'Envoyer ma demande',
        submittingButton: 'Envoi en cours...',
    },
    thankYou: {
        title: 'Merci !',
        message: 'Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.',
        backButton: 'Retour à l\'accueil',
    },
    footer: {
        copyright: `© ${new Date().getFullYear()} AI Automation Services. Tous droits réservés.`,
    },
  },
  en: {
    header: {
      languageSwitcher: 'Français',
      navLinks: [
        { href: '#services', label: 'Services' },
        { href: '#examples', label: 'Examples' },
        { href: '#idea-generator', label: 'Idea Generator' },
        { href: '#contact-form', label: 'Contact' },
      ],
    },
    hero: {
      heading: 'Automate Your Business with AI and N8N',
      subheading: 'We design custom automation solutions for businesses, combining the power of Google Gemini AI with the flexibility of N8N to optimize your processes, reduce costs, and increase efficiency.',
      ctaButton: 'Get Your Free Consultation',
    },
    services: {
        title: 'Our Automation Services',
        description: [
            "We analyze your business processes to identify the most impactful automation opportunities. Then, we build and deploy robust, intelligent workflows that integrate seamlessly with your existing tools.",
            "From simple repetitive tasks to complex orchestration of multiple applications, we help you unlock your business's full potential."
        ],
        services: [
          { icon: <CodeIcon />, title: 'Custom Development', description: 'Creation of personalized N8N workflows and custom nodes to meet unique needs.' },
          { icon: <ChartIcon />, title: 'Process Optimization', description: 'Analysis and redesign of your operations for maximum efficiency through automation.' },
          { icon: <BotIcon />, title: 'AI Integration', description: 'Incorporation of AI models (like Google Gemini) for language processing, data analysis tasks, etc.' },
          { icon: <CloudIcon />, title: 'API Integration', description: 'Connecting all your cloud services and applications (CRM, ERP, etc.) into a unified system.' },
        ],
    },
    automationExamples: {
        title: 'Concrete Automation Examples',
        examples: [
            { icon: <ECommerceIcon />, title: 'Order Management', for: 'For E-commerce', description: 'Automate order confirmations, stock updates, and shipping notifications.', roi: 'Saves 15h/week' },
            { icon: <HrIcon />, title: 'HR Onboarding', for: 'For Human Resources', description: 'Automatically create accounts, send documents, and schedule training for new hires.', roi: '80% reduction in onboarding time' },
            { icon: <MarketingIcon />, title: 'Lead Generation', for: 'For Marketing', description: 'Automatically qualify leads from forms, enrich data, and assign them to sales reps.', roi: '30% increase in qualified leads' },
            { icon: <FinanceIcon />, title: 'Financial Reporting', for: 'For Finance', description: 'Automatically extract data from multiple sources to generate weekly reports.', roi: '95% faster, error-free reports' },
        ],
    },
    ideaGenerator: {
        title: 'Find Your Next Automation',
        description: 'Describe a task or process in your business, and our AI will suggest a potential automation workflow we could build for you.',
        placeholder: 'E.g., "I own a restaurant in Antibes and want to automate booking reservations and supplier orders..."',
        emailLabel: 'Your Email Address',
        emailPlaceholder: 'Enter your email to see the results',
        buttonText: 'Generate My Workflow',
        buttonLoadingText: 'Generating...',
        examplePrompt: 'Try an example',
        resultsTitle: 'Your Suggested Automation Workflow:',
    },
    cta: {
        title: 'Ready to Transform Your Business?',
        ctaButton: 'Let\'s Discuss Your Project',
    },
    contact: {
        title: 'Contact Us',
        nameLabel: 'Name',
        companyLabel: 'Company (Optional)',
        phoneLabel: 'Phone (Optional)',
        emailLabel: 'Email Address',
        messageLabel: 'Your Message',
        submitButton: 'Send My Request',
        submittingButton: 'Sending...',
    },
    thankYou: {
        title: 'Thank You!',
        message: 'Your message has been sent successfully. We will get back to you as soon as possible.',
        backButton: 'Back to Home',
    },
    footer: {
        copyright: `© ${new Date().getFullYear()} AI Automation Services. All rights reserved.`,
    },
  },
};
