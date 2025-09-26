import React from 'react';
import type { Content } from '../types';

// ====================================================================================
// ICONS
// ====================================================================================

// Icons for Services section
const ProcessIcon = <svg className="w-12 h-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>;
const WorkflowIcon = <svg className="w-12 h-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>;
const AIIcon = <svg className="w-12 h-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" /></svg>;
const SupportIcon = <svg className="w-12 h-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>;


// Icons for Automation Examples section
const EmailIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
const InvoiceIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const SupportChatIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-15.022.001A2.013 2.013 0 012.25 15V9.117c0-1.042.782-1.903 1.803-2.035l12.44-.001c.607.028 1.135.284 1.503.666z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 8.25V6.75a2.25 2.25 0 012.25-2.25h9a2.25 2.25 0 012.25 2.25v1.5" /></svg>;
const DataEntryIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125V6.375m1.125 13.125A1.125 1.125 0 004.5 18.375h15.75m-16.875-1.125V6.375c0-.621.504-1.125 1.125-1.125h15.75c.621 0 1.125.504 1.125 1.125v12c0 .621-.504 1.125-1.125 1.125M9 14.25h6M9 10.5h3" /></svg>;


// ====================================================================================
// CONTENT OBJECT
// ====================================================================================

export const content: Content = {
  en: {
    header: {
      logo: "AI Automate",
      nav: {
        services: "Services",
        examples: "Examples",
        contact: "Contact",
      },
    },
    hero: {
      heading: "Automate Your Business with the Power of AI",
      subheading: "We build custom AI solutions and automation workflows to increase your productivity and reduce operational costs. Let our expertise work for you.",
      ctaButton: "Get a Free Consultation",
    },
    services: {
      title: "Our AI Automation Services",
      description: [
          "We analyze your business processes to identify automation opportunities.",
          "From simple task automation to complex AI-driven workflows, we offer tailor-made solutions to meet your specific needs."
      ],
      services: [
        {
          icon: ProcessIcon,
          title: "Process Analysis",
          description: "We map your current workflows to find the best opportunities for automation.",
        },
        {
          icon: WorkflowIcon,
          title: "Custom Workflow Creation",
          description: "Development of automated workflows using tools like n8n, Zapier, and custom scripts.",
        },
        {
          icon: AIIcon,
          title: "AI Model Integration",
          description: "We integrate powerful AI models like Gemini to handle complex tasks like data analysis, content generation, and decision-making.",
        },
        {
          icon: SupportIcon,
          title: "Support & Maintenance",
          description: "Ongoing support to ensure your automations run smoothly and adapt to your evolving needs.",
        },
      ],
    },
    automationExamples: {
      title: "See What You Can Automate",
      examples: [
        {
          icon: EmailIcon,
          title: "Automated Email Marketing",
          for: "For Marketing Teams",
          description: "Automatically segment leads, send personalized follow-ups, and track campaign performance, saving hours of manual work.",
          roi: "Up to 300% ROI in 6 months",
        },
        {
          icon: InvoiceIcon,
          title: "Invoice Processing",
          for: "For Finance Departments",
          description: "Extract data from invoices, validate it, and enter it into your accounting software without manual data entry.",
          roi: "Reduce processing time by 80%",
        },
        {
          icon: SupportChatIcon,
          title: "AI Customer Support",
          for: "For Support Teams",
          description: "Deploy AI-powered chatbots to answer common customer questions 24/7, freeing up your agents for complex issues.",
          roi: "Improve response times by 90%",
        },
        {
          icon: DataEntryIcon,
          title: "Data Entry & Migration",
          for: "For Operations",
          description: "Automate the transfer of data between different applications, eliminating errors and saving countless hours.",
          roi: "100% data accuracy and 40+ hours saved per month",
        },
      ],
    },
    ideaGenerator: {
        title: "Not Sure Where to Start? Let AI Inspire You.",
        description: "Describe your business or a task you find repetitive, and our AI will generate a custom automation workflow idea for you.",
        placeholder: "e.g., I run a small e-commerce store and spend hours manually updating inventory...",
        emailLabel: "Your Email Address",
        emailPlaceholder: "you@company.com",
        buttonText: "Generate My Workflow",
        buttonLoadingText: "Generating...",
        examplePrompt: "Try an example",
        resultsTitle: "Your Custom AI Workflow",
    },
    cta: {
      title: "Ready to Transform Your Business?",
      ctaButton: "Schedule Your Free Call",
    },
    contact: {
      title: "Let's Talk About Your Project",
      nameLabel: "Your Name",
      companyLabel: "Company Name",
      phoneLabel: "Phone Number",
      emailLabel: "Email Address",
      messageLabel: "How can we help you?",
      submitButton: "Send Message",
      submittingButton: "Sending...",
    },
    thankYou: {
        title: "Thank You!",
        message: "Your message has been received. We'll get back to you within 24 hours.",
        backButton: "Back to Home",
    },
    footer: {
      copyright: "© 2024 AI Automate. All rights reserved.",
    },
  },
  fr: {
    header: {
      logo: "AI Automatise",
      nav: {
        services: "Services",
        examples: "Exemples",
        contact: "Contact",
      },
    },
    hero: {
      heading: "Automatisez Votre Entreprise avec la Puissance de l'IA",
      subheading: "Nous créons des solutions d'IA et des workflows d'automatisation sur mesure pour augmenter votre productivité et réduire vos coûts opérationnels. Laissez notre expertise travailler pour vous.",
      ctaButton: "Obtenez une Consultation Gratuite",
    },
    services: {
      title: "Nos Services d'Automatisation IA",
      description: [
          "Nous analysons vos processus métier pour identifier les opportunités d'automatisation.",
          "De l'automatisation de tâches simples aux workflows complexes pilotés par l'IA, nous offrons des solutions sur mesure pour répondre à vos besoins spécifiques."
      ],
      services: [
        {
          icon: ProcessIcon,
          title: "Analyse des Processus",
          description: "Nous cartographions vos workflows actuels pour trouver les meilleures opportunités d'automatisation.",
        },
        {
          icon: WorkflowIcon,
          title: "Création de Workflows Personnalisés",
          description: "Développement de workflows automatisés avec des outils comme n8n, Zapier et des scripts personnalisés.",
        },
        {
          icon: AIIcon,
          title: "Intégration de Modèles d'IA",
          description: "Nous intégrons des modèles d'IA puissants comme Gemini pour gérer des tâches complexes telles que l'analyse de données et la prise de décision.",
        },
        {
          icon: SupportIcon,
          title: "Support & Maintenance",
          description: "Support continu pour garantir que vos automatisations fonctionnent sans problème et s'adaptent à l'évolution de vos besoins.",
        },
      ],
    },
    automationExamples: {
      title: "Découvrez Ce Que Vous Pouvez Automatiser",
      examples: [
        {
          icon: EmailIcon,
          title: "Marketing par E-mail Automatisé",
          for: "Pour les Équipes Marketing",
          description: "Segmentez automatiquement les leads, envoyez des suivis personnalisés et suivez les performances des campagnes.",
          roi: "Jusqu'à 300% de ROI en 6 mois",
        },
        {
          icon: InvoiceIcon,
          title: "Traitement des Factures",
          for: "Pour les Départements Financiers",
          description: "Extrayez les données des factures, validez-les et saisissez-les dans votre logiciel comptable sans saisie manuelle.",
          roi: "Réduisez le temps de traitement de 80%",
        },
        {
          icon: SupportChatIcon,
          title: "Support Client par IA",
          for: "Pour les Équipes de Support",
          description: "Déployez des chatbots IA pour répondre aux questions fréquentes 24/7, libérant vos agents pour les cas complexes.",
          roi: "Améliorez les temps de réponse de 90%",
        },
        {
          icon: DataEntryIcon,
          title: "Saisie et Migration de Données",
          for: "Pour les Opérations",
          description: "Automatisez le transfert de données entre applications, éliminant les erreurs et économisant d'innombrables heures.",
          roi: "100% de précision, 40h+ sauvées par mois",
        },
      ],
    },
     ideaGenerator: {
        title: "Pas sûr par où commencer ? Laissez l'IA vous inspirer.",
        description: "Décrivez votre entreprise ou une tâche répétitive, et notre IA générera une idée de workflow d'automatisation pour vous.",
        placeholder: "ex: Je gère une boutique en ligne et je passe des heures à mettre à jour manuellement les stocks...",
        emailLabel: "Votre Adresse E-mail",
        emailPlaceholder: "vous@entreprise.com",
        buttonText: "Générer Mon Workflow",
        buttonLoadingText: "Génération en cours...",
        examplePrompt: "Essayez un exemple",
        resultsTitle: "Votre Workflow IA Personnalisé",
    },
    cta: {
      title: "Prêt à Transformer Votre Entreprise ?",
      ctaButton: "Planifiez Votre Appel Gratuit",
    },
    contact: {
      title: "Parlons de Votre Projet",
      nameLabel: "Votre Nom",
      companyLabel: "Nom de l'entreprise",
      phoneLabel: "Numéro de téléphone",
      emailLabel: "Adresse e-mail",
      messageLabel: "Comment pouvons-nous vous aider ?",
      submitButton: "Envoyer le Message",
      submittingButton: "Envoi en cours...",
    },
    thankYou: {
        title: "Merci !",
        message: "Votre message a bien été reçu. Nous vous recontacterons dans les 24 heures.",
        backButton: "Retour à l'accueil",
    },
    footer: {
      copyright: "© 2024 AI Automatise. Tous droits réservés.",
    },
  },
  it: {
    header: {
      logo: "AI Automatizza",
      nav: {
        services: "Servizi",
        examples: "Esempi",
        contact: "Contatti",
      },
    },
    hero: {
      heading: "Automatizza la Tua Azienda con il Potere dell'IA",
      subheading: "Creiamo soluzioni AI personalizzate e flussi di lavoro di automazione per aumentare la tua produttività e ridurre i costi operativi. Lascia che la nostra esperienza lavori per te.",
      ctaButton: "Richiedi una Consulenza Gratuita",
    },
    services: {
      title: "I Nostri Servizi di Automazione AI",
      description: [
          "Analizziamo i tuoi processi aziendali per identificare le opportunità di automazione.",
          "Dall'automazione di compiti semplici a flussi di lavoro complessi basati sull'IA, offriamo soluzioni su misura per soddisfare le tue esigenze specifiche."
      ],
      services: [
        {
          icon: ProcessIcon,
          title: "Analisi dei Processi",
          description: "Mappiamo i tuoi flussi di lavoro attuali per trovare le migliori opportunità di automazione.",
        },
        {
          icon: WorkflowIcon,
          title: "Creazione di Flussi di Lavoro Personalizzati",
          description: "Sviluppo di flussi di lavoro automatizzati utilizzando strumenti come n8n, Zapier e script personalizzati.",
        },
        {
          icon: AIIcon,
          title: "Integrazione di Modelli AI",
          description: "Integriamo potenti modelli di IA come Gemini per gestire compiti complessi come analisi dei dati e processi decisionali.",
        },
        {
          icon: SupportIcon,
          title: "Supporto e Manutenzione",
          description: "Supporto continuo per garantire che le tue automazioni funzionino senza problemi e si adattino alle tue esigenze in evoluzione.",
        },
      ],
    },
    automationExamples: {
      title: "Guarda Cosa Puoi Automatizzare",
      examples: [
        {
          icon: EmailIcon,
          title: "Email Marketing Automatizzato",
          for: "Per i Team di Marketing",
          description: "Segmenta automaticamente i lead, invia follow-up personalizzati e monitora le performance delle campagne, risparmiando ore di lavoro.",
          roi: "Fino al 300% di ROI in 6 mesi",
        },
        {
          icon: InvoiceIcon,
          title: "Elaborazione Fatture",
          for: "Per i Dipartimenti Finanziari",
          description: "Estrai dati dalle fatture, convalidali e inseriscili nel tuo software di contabilità senza inserimento manuale.",
          roi: "Riduci i tempi di elaborazione dell'80%",
        },
        {
          icon: SupportChatIcon,
          title: "Assistenza Clienti AI",
          for: "Per i Team di Supporto",
          description: "Implementa chatbot AI per rispondere alle domande comuni 24/7, liberando i tuoi agenti per problemi complessi.",
          roi: "Migliora i tempi di risposta del 90%",
        },
        {
          icon: DataEntryIcon,
          title: "Inserimento e Migrazione Dati",
          for: "Per le Operazioni",
          description: "Automatizza il trasferimento di dati tra applicazioni, eliminando errori e risparmiando innumerevoli ore.",
          roi: "100% accuratezza, 40+ ore risparmiate/mese",
        },
      ],
    },
    ideaGenerator: {
        title: "Non sai da dove iniziare? Lasciati ispirare dall'IA.",
        description: "Descrivi la tua attività o un compito che trovi ripetitivo e la nostra IA genererà un'idea di flusso di lavoro personalizzato per te.",
        placeholder: "es: Gestisco un piccolo e-commerce e passo ore ad aggiornare manualmente l'inventario...",
        emailLabel: "Il Tuo Indirizzo Email",
        emailPlaceholder: "tu@azienda.com",
        buttonText: "Genera il Mio Workflow",
        buttonLoadingText: "Generazione...",
        examplePrompt: "Prova un esempio",
        resultsTitle: "Il Tuo Workflow AI Personalizzato",
    },
    cta: {
      title: "Pronto a Trasformare la Tua Attività?",
      ctaButton: "Pianifica la Tua Chiamata Gratuita",
    },
    contact: {
      title: "Parliamo del Tuo Progetto",
      nameLabel: "Il Tuo Nome",
      companyLabel: "Nome dell'Azienda",
      phoneLabel: "Numero di Telefono",
      emailLabel: "Indirizzo Email",
      messageLabel: "Come possiamo aiutarti?",
      submitButton: "Invia Messaggio",
      submittingButton: "Invio in corso...",
    },
    thankYou: {
        title: "Grazie!",
        message: "Il tuo messaggio è stato ricevuto. Ti risponderemo entro 24 ore.",
        backButton: "Torna alla Home",
    },
    footer: {
      copyright: "© 2024 AI Automatizza. Tutti i diritti riservati.",
    },
  },
};
