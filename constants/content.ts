import React from 'react';
import type { Content } from '../types';

// Fix: Use React.createElement instead of JSX syntax to prevent parsing errors in a .ts file.
const icons = {
    Strategy: (props: React.SVGProps<SVGSVGElement>) => (
        React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props }, 
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" }),
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" })
        )
    ),
    Development: (props: React.SVGProps<SVGSVGElement>) => (
        React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" })
        )
    ),
    AI: (props: React.SVGProps<SVGSVGElement>) => (
        React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }),
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" })
        )
    ),
    Support: (props: React.SVGProps<SVGSVGElement>) => (
        React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" })
        )
    ),
    Onboarding: (props: React.SVGProps<SVGSVGElement>) => (
        React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3.375 19.5h17.25a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 20.625 4.5H3.375A2.25 2.25 0 0 0 1.125 6.75v10.5A2.25 2.25 0 0 0 3.375 19.5Z" })
        )
    ),
    LeadQualification: (props: React.SVGProps<SVGSVGElement>) => (
        React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" })
        )
    ),
    Invoicing: (props: React.SVGProps<SVGSVGElement>) => (
        React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.75A.75.75 0 0 1 3 4.5h.75m0 0h1.5m3.75 0h1.5m9 0h1.5m-11.25 0h1.5m-6 16.5c.64-.724 1.25-1.452 1.83-2.182a44.965 44.965 0 0 0 6.33-6.425a.75.75 0 0 0-.585-1.152 44.912 44.912 0 0 0-6.33-2.182c-.341-.086-.682.062-.85.385a48.11 48.11 0 0 0-2.525 6.425.75.75 0 0 0 .585 1.152 44.918 44.918 0 0 0 6.33 2.182Z" })
        )
    ),
    Receptionist: (props: React.SVGProps<SVGSVGElement>) => (
        React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 0 1-2.53-0.474l-4.5 1.5a.563.563 0 0 1-.657-.657l1.5-4.5A9.76 9.76 0 0 1 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" })
        )
    ),
};
const iconProps = { className: "h-8 w-8 text-cyan-500" };

export const content: Content = {
  en: {
    header: {
      logo: "Talent Associates",
      nav: {
        services: "Services",
        examples: "Use Cases",
        ideaGenerator: "Idea Generator",
        contact: "Contact",
      },
    },
    hero: {
      heading: "Reclaim Your Time. Automate Your Business with AI.",
      subheading:
        "We build intelligent automation workflows for small businesses, connecting your apps to eliminate repetitive tasks and unlock growth. Focus on what you do best, we'll automate the rest.",
      ctaButton: "Book a Free Discovery Call",
    },
    services: {
      title: "How We Supercharge Your Business",
      description: [
        "Talent Associates has embraced the new nimble AI toolsets to bring ROI to small businesses and unburden your talented personnel.",
        "We invite you to investigate the new tools available, to claim back your time, improve your margins and grow your business."
      ],
      services: [
        {
          icon: React.createElement(icons.Strategy, iconProps),
          title: "Automation Strategy & Discovery",
          description: "We analyze your current processes to identify the highest-impact automation opportunities for maximum ROI.",
        },
        {
          icon: React.createElement(icons.Development, iconProps),
          title: "Custom AI Workflow Development",
          description: "We design and build robust, custom workflows that connect your favorite tools and run like clockwork.",
        },
        {
          icon: React.createElement(icons.AI, iconProps),
          title: "AI & LLM Integration",
          description: "Leverage the power of AI to make your automations smarter: content generation, data analysis, decision making, and more.",
        },
        {
          icon: React.createElement(icons.Support, iconProps),
          title: "Ongoing Support & Optimization",
          description: "We ensure your automations run smoothly and evolve with your business, providing continuous monitoring and improvements.",
        },
      ],
    },
    automationExamples: {
      title: "High-ROI Automations in Action",
      examples: [
        {
          icon: React.createElement(icons.Receptionist, iconProps),
          title: "AI Multilingual Receptionist",
          for: "For: Professional Services, Clinics, Salons",
          description: "AI receptionist that handles calls in multiple languages, checks your calendar, books appointments, and sends SMS confirmations automatically.",
          roi: "Handle 90% of bookings automatically",
        },
        {
          icon: React.createElement(icons.Onboarding, iconProps),
          title: "Automated Client Onboarding",
          for: "For: Consultants, Agencies, Lawyers",
          description: "A new client signs a contract? Automatically create their Google Drive folder, send a welcome email, create projects in Asana, and update your CRM.",
          roi: "Saves ~5 hours per new client",
        },
        {
          icon: React.createElement(icons.LeadQualification, iconProps),
          title: "AI-Powered Lead Qualification",
          for: "For: Real Estate, Professional Services",
          description: "When a new lead comes in, AI analyzes their needs, scores their potential, and routes high-value leads directly to your calendar for a meeting.",
          roi: "2x faster response to qualified leads",
        },
        {
          icon: React.createElement(icons.Invoicing, iconProps),
          title: "Smart Invoicing & Follow-up",
          for: "For: Freelancers, Small Businesses",
          description: "Connect your project management tool to your accounting software. Generate and send invoices automatically when tasks are completed, and send polite reminders for late payments.",
          roi: "Get paid up to 30% faster",
        },
      ],
    },
    ideaGenerator: {
        title: "Business automation idea generator",
        description: "Every successful business runs on 5-7 core processes that eat 80% of the time. Put AI to work to start to identify broad areas for automations to claim back your time.",
        placeholder: "Write a short overview of your business, ie law firm with 20 staff, successful restaurant in Antibes, luxury yacht management firm in Monaco and lets see what broad ideas we can generate.",
        emailLabel: "Your Email Address",
        emailPlaceholder: "Enter your email to receive a copy",
        buttonText: "Generate My Automation ideas",
        buttonLoadingText: "Generating...",
        examplePrompt: "Need inspiration? Try an example",
        resultsTitle: "Your Custom Automation ideas:",
    },
    formTest: {
        title: "Webhook Test Form",
        description: "Use this form to send a simple test request to the N8N test webhook.",
        queryPlaceholder: "Enter your test query here...",
        emailPlaceholder: "Enter your email address",
        buttonText: "Send Test Request",
        buttonLoadingText: "Sending...",
        resultsTitle: "Webhook Response:",
    },
    cta: {
      title: "Ready to put your business on autopilot?",
      ctaButton: "Start Automating Today",
    },
    contact: {
        title: "Let's Get in Touch",
        nameLabel: "Full Name",
        companyLabel: "Company Name",
        phoneLabel: "Phone Number",
        emailLabel: "Email Address",
        messageLabel: "Your Message",
        submitButton: "Send Inquiry",
        submittingButton: "Sending...",
    },
    thankYou: {
        title: "Thank You!",
        message: "Your inquiry was sent successfully. We'll be in contact with you shortly.",
        backButton: "Back to Home",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Talent Associates. All rights reserved.`,
    },
  },
  fr: {
    header: {
      logo: "Talent Associates",
      nav: {
        services: "Services",
        examples: "Cas d'usages",
        ideaGenerator: "Générateur d'idées",
        contact: "Contact",
      },
    },
    hero: {
      heading: "Récupérez votre temps. Automatisez votre entreprise avec l'IA.",
      subheading:
        "Nous créons des flux d'automatisation intelligents pour les petites entreprises, connectant vos applications pour éliminer les tâches répétitives et stimuler la croissance. Concentrez-vous sur votre cœur de métier, nous automatisons le reste.",
      ctaButton: "Réserver un appel découverte gratuit",
    },
    services: {
      title: "Comment nous propulsons votre entreprise",
      description: [
        "Talent Associates a adopté les nouveaux outils d'IA agiles pour apporter un retour sur investissement aux petites entreprises et soulager votre personnel talentueux.",
        "Nous vous invitons à découvrir les nouveaux outils disponibles, pour récupérer votre temps, améliorer vos marges et développer votre entreprise."
      ],
      services: [
        {
          icon: React.createElement(icons.Strategy, iconProps),
          title: "Stratégie d'automatisation et découverte",
          description: "Nous analysons vos processus actuels pour identifier les opportunités d'automatisation à plus fort impact pour un ROI maximal.",
        },
        {
          icon: React.createElement(icons.Development, iconProps),
          title: "Développement de workflows d'IA sur mesure",
          description: "Nous concevons et construisons des workflows robustes et personnalisés qui connectent vos outils préférés et fonctionnent sans accroc.",
        },
        {
          icon: React.createElement(icons.AI, iconProps),
          title: "Intégration d'IA & LLM",
          description: "Exploitez la puissance de l'IA pour rendre vos automatisations plus intelligentes : génération de contenu, analyse de données, prise de décision, etc.",
        },
        {
          icon: React.createElement(icons.Support, iconProps),
          title: "Support et optimisation continus",
          description: "Nous veillons à ce que vos automatisations fonctionnent parfaitement et évoluent avec votre entreprise, en assurant un suivi et des améliorations continus.",
        },
      ],
    },
    automationExamples: {
      title: "Automatisations à haut ROI en action",
      examples: [
        {
          icon: React.createElement(icons.Receptionist, iconProps),
          title: "Réceptionniste IA multilingue",
          for: "Pour : Services professionnels, cliniques, salons de coiffure",
          description: "Une réceptionniste IA gère les appels en plusieurs langues, consulte votre calendrier, prend des rendez-vous et envoie des confirmations par SMS automatiquement.",
          roi: "Gère 90% des réservations automatiquement",
        },
        {
          icon: React.createElement(icons.Onboarding, iconProps),
          title: "Intégration client automatisée",
          for: "Pour : Consultants, Agences, Avocats",
          description: "Un nouveau client signe un contrat ? Créez automatiquement son dossier Google Drive, envoyez un e-mail de bienvenue, créez des projets dans Asana et mettez à jour votre CRM.",
          roi: "Économise ~5 heures par nouveau client",
        },
        {
          icon: React.createElement(icons.LeadQualification, iconProps),
          title: "Qualification de prospects par l'IA",
          for: "Pour : Immobilier, Services professionnels",
          description: "Lorsqu'un nouveau prospect arrive, l'IA analyse ses besoins, évalue son potentiel et dirige les prospects de grande valeur directement vers votre calendrier pour une réunion.",
          roi: "Réponse 2x plus rapide aux prospects qualifiés",
        },
        {
          icon: React.createElement(icons.Invoicing, iconProps),
          title: "Facturation et suivi intelligents",
          for: "Pour : Indépendants, PME",
          description: "Connectez votre outil de gestion de projet à votre logiciel de comptabilité. Générez et envoyez des factures automatiquement lorsque les tâches sont terminées, et envoyez des rappels polis pour les retards de paiement.",
          roi: "Soyez payé jusqu'à 30% plus vite",
        },
      ],
    },
    ideaGenerator: {
        title: "Générateur d'idées d'automatisation d'entreprise",
        description: "Chaque entreprise prospère repose sur 5 à 7 processus clés qui consomment 80% du temps. Mettez l'IA au travail pour identifier les grands domaines d'automatisation afin de récupérer votre temps.",
        placeholder: "Rédigez un bref aperçu de votre entreprise, par ex. cabinet d'avocats de 20 employés, restaurant à succès à Antibes, société de gestion de yachts de luxe à Monaco et voyons quelles grandes idées nous pouvons générer.",
        emailLabel: "Votre adresse e-mail",
        emailPlaceholder: "Entrez votre e-mail pour recevoir une copie",
        buttonText: "Générer mes idées d'automatisation",
        buttonLoadingText: "Génération...",
        examplePrompt: "Besoin d'inspiration ? Essayez un exemple",
        resultsTitle: "Vos idées d'automatisation personnalisées :",
    },
    formTest: {
        title: "Formulaire de Test Webhook",
        description: "Utilisez ce formulaire pour envoyer une simple requête de test au webhook de test N8N.",
        queryPlaceholder: "Entrez votre requête de test ici...",
        emailPlaceholder: "Entrez votre adresse e-mail",
        buttonText: "Envoyer la requête de test",
        buttonLoadingText: "Envoi en cours...",
        resultsTitle: "Réponse du Webhook :",
    },
    cta: {
      title: "Prêt à mettre votre entreprise en pilote automatique ?",
      ctaButton: "Commencez à automatiser aujourd'hui",
    },
    contact: {
        title: "Contactez-nous",
        nameLabel: "Nom complet",
        companyLabel: "Nom de l'entreprise",
        phoneLabel: "Numéro de téléphone",
        emailLabel: "Adresse e-mail",
        messageLabel: "Votre message",
        submitButton: "Envoyer la demande",
        submittingButton: "Envoi...",
    },
    thankYou: {
        title: "Merci !",
        message: "Votre demande a été envoyée avec succès. Nous vous contacterons sous peu.",
        backButton: "Retour à l'accueil",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Talent Associates. Tous droits réservés.`,
    },
  },
  it: {
    header: {
      logo: "Talent Associates",
      nav: {
        services: "Servizi",
        examples: "Casi d'uso",
        ideaGenerator: "Generatore di Idee",
        contact: "Contatti",
      },
    },
    hero: {
      heading: "Riprenditi il tuo tempo. Automatizza la tua attività con l'IA.",
      subheading:
        "Creiamo flussi di lavoro di automazione intelligenti per piccole imprese, collegando le tue app per eliminare compiti ripetitivi e sbloccare la crescita. Concentrati su ciò che sai fare meglio, al resto pensiamo noi.",
      ctaButton: "Prenota una chiamata esplorativa gratuita",
    },
    services: {
      title: "Come potenziamo la tua attività",
      description: [
        "Talent Associates ha abbracciato i nuovi e agili strumenti di IA per portare ROI alle piccole imprese e alleggerire il carico del tuo personale di talento.",
        "Ti invitiamo a scoprire i nuovi strumenti disponibili, per recuperare il tuo tempo, migliorare i tuoi margini e far crescere la tua attività."
      ],
      services: [
        {
          icon: React.createElement(icons.Strategy, iconProps),
          title: "Strategia di automazione e scoperta",
          description: "Analizziamo i tuoi processi attuali per identificare le opportunità di automazione a più alto impatto per il massimo ROI.",
        },
        {
          icon: React.createElement(icons.Development, iconProps),
          title: "Sviluppo di flussi di lavoro d'IA personalizzati",
          description: "Progettiamo e costruisons flussi di lavoro robusti e personalizzati che collegano i tuoi strumenti preferiti e funzionano alla perfezione.",
        },
        {
          icon: React.createElement(icons.AI, iconProps),
          title: "Integrazione di IA e LLM",
          description: "Sfrutta la potenza dell'IA per rendere le tue automazioni più intelligenti: generazione di contenuti, analisi dei dati, processi decisionali e altro ancora.",
        },
        {
          icon: React.createElement(icons.Support, iconProps),
          title: "Supporto e ottimizzazione continui",
          description: "Garantiamo che le tue automazioni funzionino senza problemi ed evolvano con la tua attività, fornendo monitoraggio e miglioramenti continui.",
        },
      ],
    },
    automationExamples: {
      title: "Automazioni ad alto ROI in azione",
      examples: [
        {
          icon: React.createElement(icons.Receptionist, iconProps),
          title: "Receptionist IA multilingue",
          for: "Per: Servizi professionali, Cliniche, Saloni",
          description: "Un receptionist IA gestisce le chiamate in più lingue, controlla il tuo calendario, prenota appuntamenti e invia conferme via SMS automaticamente.",
          roi: "Gestisci il 90% delle prenotazioni automaticamente",
        },
        {
          icon: React.createElement(icons.Onboarding, iconProps),
          title: "Onboarding clienti automatizzato",
          for: "Per: Consulenti, Agenzie, Avvocati",
          description: "Un nuovo cliente firma un contratto? Crea automaticamente la sua cartella su Google Drive, invia un'email di benvenuto, crea progetti in Asana e aggiorna il tuo CRM.",
          roi: "Risparmia ~5 ore per ogni nuovo cliente",
        },
        {
          icon: React.createElement(icons.LeadQualification, iconProps),
          title: "Qualificazione dei lead basata su IA",
          for: "Per: Immobiliare, Servizi professionali",
          description: "Quando arriva un nuovo lead, l'IA analizza le sue esigenze, ne valuta il potenziale e indirizza i lead di alto valore direttamente al tuo calendario per un incontro.",
          roi: "Risposta 2 volte più rapida ai lead qualificati",
        },
        {
          icon: React.createElement(icons.Invoicing, iconProps),
          title: "Fatturazione e solleciti intelligenti",
          for: "Per: Liberi professionisti, Piccole imprese",
          description: "Collega il tuo strumento di gestione progetti al tuo software di contabilità. Genera e invia fatture automaticamente al completamento delle attività e invia solleciti cortesi per i pagamenti in ritardo.",
          roi: "Ricevi i pagamenti fino al 30% più velocemente",
        },
      ],
    },
    ideaGenerator: {
        title: "Generatore di idee per l'automazione aziendale",
        description: "Ogni azienda di successo si basa su 5-7 processi chiave che consumano l'80% del tempo. Metti l'IA al lavoro per iniziare a identificare ampie aree di automazione e recuperare il tuo tempo.",
        placeholder: "Scrivi una breve panoramica della tua attività, ad es. studio legale con 20 dipendenti, ristorante di successo ad Antibes, società di gestione di yacht di lusso a Monaco e vediamo quali idee generali possiamo generare.",
        emailLabel: "Il tuo indirizzo email",
        emailPlaceholder: "Inserisci la tua email per ricevere una copia",
        buttonText: "Genera le mie idee di automazione",
        buttonLoadingText: "Generazione in corso...",
        examplePrompt: "Bisogno di ispirazione? Prova un esempio",
        resultsTitle: "Le tue idee di automazione personalizzate:",
    },
    formTest: {
        title: "Modulo Test Webhook",
        description: "Usa questo modulo per inviare una semplice richiesta di test al webhook di test di N8N.",
        queryPlaceholder: "Inserisci qui la tua query di test...",
        emailPlaceholder: "Inserisci il tuo indirizzo email",
        buttonText: "Invia Richiesta di Test",
        buttonLoadingText: "Invio in corso...",
        resultsTitle: "Risposta dal Webhook:",
    },
    cta: {
      title: "Pronto a mettere la tua attività con il pilota automatico?",
      ctaButton: "Inizia ad automatizzare oggi",
    },
    contact: {
        title: "Mettiamoci in contatto",
        nameLabel: "Nome e Cognome",
        companyLabel: "Nome dell'azienda",
        phoneLabel: "Numero di telefono",
        emailLabel: "Indirizzo email",
        messageLabel: "Il tuo messaggio",
        submitButton: "Invia richiesta",
        submittingButton: "Invio in corso...",
    },
    thankYou: {
        title: "Grazie!",
        message: "La tua richiesta è stata inviata con successo. Ti contatteremo a breve.",
        backButton: "Torna alla Home",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Talent Associates. Tutti i diritti riservati.`,
    },
  },
};