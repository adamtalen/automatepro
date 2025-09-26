import React from 'react';
import type { Content } from '../types';

const iconBaseProps = {
  className: "h-12 w-12 text-cyan-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1,
};

const iconBasePropsExamples = {
    ...iconBaseProps,
    className: "h-8 w-8 text-cyan-600 flex-shrink-0 mt-1",
};

const DataProcessingIcon = () => (
    <svg {...iconBaseProps}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
);

const WorkflowIcon = () => (
    <svg {...iconBaseProps}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6.75A2.25 2.25 0 0111.25 4.5h1.5A2.25 2.25 0 0115 6.75V19m-6 0h6m-6 0H6.75A2.25 2.25 0 004.5 21.25v0A2.25 2.25 0 006.75 19h2.25m6 0h2.25a2.25 2.25 0 012.25 2.25v0a2.25 2.25 0 01-2.25-2.25H15" /></svg>
);

const IntegrationIcon = () => (
    <svg {...iconBaseProps}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25z" /></svg>
);

const ReportingIcon = () => (
    <svg {...iconBaseProps}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" /></svg>
);

const EmailIcon = () => (
    <svg {...iconBasePropsExamples}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
);
const InvoiceIcon = () => (
    <svg {...iconBasePropsExamples}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
);
const ReportIcon = () => (
    <svg {...iconBasePropsExamples}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.871a3 3 0 01-.879-2.122v-1.007M15 15.75a3 3 0 00-3-3M15 15.75a3 3 0 01-3-3m-3.75 0A3.75 3.75 0 0112 6v2.25M16.5 12a3.75 3.75 0 00-7.5 0" /></svg>
);
const CrmIcon = () => (
    <svg {...iconBasePropsExamples}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.037 1.253-2.022 2.062-2.962m-2.062 2.962a3.5 3.5 0 01-3.5-3.5V7.5a3.5 3.5 0 013.5-3.5h7a3.5 3.5 0 013.5 3.5v1.5a3.5 3.5 0 01-3.5 3.5m-7.5-2.962v.003c.571 1.036 1.254 2.022 2.062 2.962m-2.062-2.962V7.5a3.5 3.5 0 013.5-3.5h3.5a3.5 3.5 0 013.5 3.5v3.5a3.5 3.5 0 01-3.5 3.5H9.75" /></svg>
);

export const content: Content = {
    en: {
        header: {
            logo: "AutomatePro AI",
            nav: { services: "Services", examples: "Examples", contact: "Contact" },
        },
        hero: {
            heading: "Automate Your Business with AI",
            subheading: "We build custom AI-powered workflows to streamline your operations, save time, and boost profitability.",
            ctaButton: "Get a Free Consultation",
        },
        services: {
            title: "Our AI Automation Services",
            description: [
                "We specialize in creating intelligent automation solutions tailored to your unique business needs.",
                "From simplifying complex data workflows to integrating smart AI into your daily operations, we're here to help you unlock your business's full potential."
            ],
            services: [
                { icon: <DataProcessingIcon />, title: "Intelligent Data Processing", description: "Automate data extraction, cleaning, and analysis from any source, including documents, emails, and databases." },
                { icon: <WorkflowIcon />, title: "Custom Workflow Automation", description: "Design and implement end-to-end automated workflows for tasks like invoicing, customer onboarding, and report generation." },
                { icon: <IntegrationIcon />, title: "AI System Integration", description: "Seamlessly connect your existing software (CRM, ERP, etc.) with powerful AI models like Gemini to enhance their capabilities." },
                { icon: <ReportingIcon />, title: "Smart Analytics & Reporting", description: "Generate insightful reports and dashboards automatically, allowing you to make data-driven decisions faster." },
            ],
        },
        automationExamples: {
            title: "Real-World Automation Examples",
            examples: [
                { icon: <EmailIcon />, title: "Email Triage & Routing", for: "Customer Support Teams", description: "AI analyzes incoming support emails, categorizes them by urgency and topic, and routes them to the right agent.", roi: "30% faster response times" },
                { icon: <InvoiceIcon />, title: "Invoice Data Extraction", for: "Accounting Departments", description: "Automatically extracts key information like invoice number, amount, and due date from PDF invoices and enters it into your accounting software.", roi: "85% reduction in manual data entry" },
                { icon: <ReportIcon />, title: "Monthly Performance Reports", for: "Marketing Agencies", description: "Aggregates data from Google Analytics, social media, and ad platforms to auto-generate comprehensive client performance reports.", roi: "Saves 20+ hours per month" },
                { icon: <CrmIcon />, title: "CRM Lead Enrichment", for: "Sales Teams", description: "When a new lead is added to the CRM, AI automatically finds and adds relevant information like company size, industry, and social profiles.", roi: "50% more qualified leads" },
            ],
        },
        ideaGenerator: {
            title: "Get a Custom Automation Idea",
            description: "Not sure where to start? Describe your business or a tedious task you'd like to automate, and our AI will generate a tailored workflow idea for you.",
            placeholder: "e.g., a real estate agency that wants to automate client follow-ups and property matching...",
            emailLabel: "Your Email Address",
            emailPlaceholder: "Enter your email to see the magic",
            buttonText: "Generate Workflow",
            buttonLoadingText: "Generating...",
            examplePrompt: "Try an example",
            resultsTitle: "Your Custom AI Workflow",
        },
        cta: {
            title: "Ready to Transform Your Business?",
            ctaButton: "Let's Talk",
        },
        contact: {
            title: "Get in Touch",
            nameLabel: "Your Name",
            companyLabel: "Company (Optional)",
            phoneLabel: "Phone (Optional)",
            emailLabel: "Your Email",
            messageLabel: "How can we help you?",
            submitButton: "Send Message",
            submittingButton: "Sending...",
        },
        thankYou: {
            title: "Thank You!",
            message: "Your message has been sent successfully. We'll get back to you within 24 hours.",
            backButton: "Back to Home",
        },
        footer: {
            copyright: "© 2024 AutomatePro AI. All rights reserved.",
        },
    },
    fr: {
        header: {
            logo: "AutomatePro IA",
            nav: { services: "Services", examples: "Exemples", contact: "Contact" },
        },
        hero: {
            heading: "Automatisez Votre Entreprise avec l'IA",
            subheading: "Nous créons des workflows personnalisés basés sur l'IA pour optimiser vos opérations, gagner du temps et augmenter votre rentabilité.",
            ctaButton: "Obtenir une Consultation Gratuite",
        },
        services: {
            title: "Nos Services d'Automatisation IA",
            description: [
                "Nous sommes spécialisés dans la création de solutions d'automatisation intelligentes adaptées à vos besoins métier uniques.",
                "De la simplification des flux de données complexes à l'intégration d'une IA intelligente dans vos opérations quotidiennes, nous vous aidons à libérer tout le potentiel de votre entreprise."
            ],
            services: [
                { icon: <DataProcessingIcon />, title: "Traitement Intelligent des Données", description: "Automatisez l'extraction, le nettoyage et l'analyse de données de n'importe quelle source (documents, e-mails, bases de données)." },
                { icon: <WorkflowIcon />, title: "Automatisation de Workflows", description: "Concevez et mettez en œuvre des workflows automatisés de bout en bout pour la facturation, l'accueil des clients et la génération de rapports." },
                { icon: <IntegrationIcon />, title: "Intégration de Systèmes d'IA", description: "Connectez vos logiciels existants (CRM, ERP, etc.) avec de puissants modèles d'IA comme Gemini pour améliorer leurs capacités." },
                { icon: <ReportingIcon />, title: "Analyses et Rapports Intelligents", description: "Générez automatiquement des rapports et des tableaux de bord pertinents pour prendre des décisions basées sur les données plus rapidement." },
            ],
        },
        automationExamples: {
            title: "Exemples Concrets d'Automatisation",
            examples: [
                { icon: <EmailIcon />, title: "Tri et Routage d'E-mails", for: "Équipes de Support Client", description: "L'IA analyse les e-mails de support, les classe par urgence et sujet, et les dirige vers le bon agent.", roi: "Temps de réponse 30% plus rapide" },
                { icon: <InvoiceIcon />, title: "Extraction de Données de Factures", for: "Services Comptables", description: "Extrait automatiquement les informations clés des factures PDF (numéro, montant, etc.) et les saisit dans votre logiciel comptable.", roi: "85% de réduction de la saisie manuelle" },
                { icon: <ReportIcon />, title: "Rapports de Performance Mensuels", for: "Agences Marketing", description: "Agrège les données de Google Analytics, des réseaux sociaux et des pubs pour générer automatiquement des rapports de performance pour les clients.", roi: "Économie de 20+ heures par mois" },
                { icon: <CrmIcon />, title: "Enrichissement de Leads CRM", for: "Équipes Commerciales", description: "Lorsqu'un nouveau lead est ajouté au CRM, l'IA trouve et ajoute automatiquement des informations pertinentes (taille de l'entreprise, secteur, etc.).", roi: "50% de leads plus qualifiés" },
            ],
        },
        ideaGenerator: {
            title: "Obtenez une Idée d'Automatisation",
            description: "Vous ne savez pas par où commencer ? Décrivez votre entreprise ou une tâche fastidieuse, et notre IA générera une idée de workflow sur mesure pour vous.",
            placeholder: "ex: une agence immobilière qui souhaite automatiser le suivi des clients...",
            emailLabel: "Votre Adresse E-mail",
            emailPlaceholder: "Entrez votre e-mail pour voir la magie",
            buttonText: "Générer le Workflow",
            buttonLoadingText: "Génération...",
            examplePrompt: "Essayer un exemple",
            resultsTitle: "Votre Workflow IA Personnalisé",
        },
        cta: {
            title: "Prêt à Transformer Votre Entreprise ?",
            ctaButton: "Discutons-en",
        },
        contact: {
            title: "Nous Contacter",
            nameLabel: "Votre Nom",
            companyLabel: "Société (Optionnel)",
            phoneLabel: "Téléphone (Optionnel)",
            emailLabel: "Votre E-mail",
            messageLabel: "Comment pouvons-nous vous aider ?",
            submitButton: "Envoyer le Message",
            submittingButton: "Envoi en cours...",
        },
        thankYou: {
            title: "Merci !",
            message: "Votre message a été envoyé avec succès. Nous vous répondrons dans les 24 heures.",
            backButton: "Retour à l'Accueil",
        },
        footer: {
            copyright: "© 2024 AutomatePro IA. Tous droits réservés.",
        },
    },
    it: {
        header: {
            logo: "AutomatePro AI",
            nav: { services: "Servizi", examples: "Esempi", contact: "Contatti" },
        },
        hero: {
            heading: "Automatizza la Tua Azienda con l'IA",
            subheading: "Creiamo flussi di lavoro personalizzati basati sull'IA per ottimizzare le tue operazioni, risparmiare tempo e aumentare la redditività.",
            ctaButton: "Richiedi una Consulenza Gratuita",
        },
        services: {
            title: "I Nostri Servizi di Automazione AI",
            description: [
                "Siamo specializzati nella creazione di soluzioni di automazione intelligenti su misura per le tue specifiche esigenze aziendali.",
                "Dalla semplificazione di flussi di dati complessi all'integrazione di IA intelligente nelle tue operazioni quotidiane, siamo qui per aiutarti a sbloccare il pieno potenziale della tua azienda."
            ],
            services: [
                { icon: <DataProcessingIcon />, title: "Elaborazione Dati Intelligente", description: "Automatizza l'estrazione, la pulizia e l'analisi dei dati da qualsiasi fonte, inclusi documenti, e-mail e database." },
                { icon: <WorkflowIcon />, title: "Automazione Flussi di Lavoro", description: "Progetta e implementa flussi di lavoro automatizzati end-to-end per attività come fatturazione, onboarding dei clienti e generazione di report." },
                { icon: <IntegrationIcon />, title: "Integrazione di Sistemi AI", description: "Collega senza problemi il tuo software esistente (CRM, ERP, ecc.) con potenti modelli di IA come Gemini per potenziarne le capacità." },
                { icon: <ReportingIcon />, title: "Analisi e Report Intelligenti", description: "Genera automaticamente report e dashboard approfonditi, consentendoti di prendere decisioni basate sui dati più velocemente." },
            ],
        },
        automationExamples: {
            title: "Esempi Reali di Automazione",
            examples: [
                { icon: <EmailIcon />, title: "Smistamento e Instradamento Email", for: "Team di Assistenza Clienti", description: "L'IA analizza le email di supporto in arrivo, le classifica per urgenza e argomento e le instrada all'agente giusto.", roi: "Tempi di risposta più rapidi del 30%" },
                { icon: <InvoiceIcon />, title: "Estrazione Dati da Fatture", for: "Dipartimenti Contabili", description: "Estrae automaticamente informazioni chiave come numero di fattura, importo e data di scadenza da fatture PDF e le inserisce nel tuo software di contabilità.", roi: "Riduzione dell'85% dell'inserimento manuale dei dati" },
                { icon: <ReportIcon />, title: "Report Mensili sulle Performance", for: "Agenzie di Marketing", description: "Aggrega dati da Google Analytics, social media e piattaforme pubblicitarie per generare automaticamente report completi sulle performance dei clienti.", roi: "Risparmia oltre 20 ore al mese" },
                { icon: <CrmIcon />, title: "Arricchimento Lead CRM", for: "Team di Vendita", description: "Quando un nuovo lead viene aggiunto al CRM, l'IA trova e aggiunge automaticamente informazioni pertinenti come dimensioni dell'azienda, settore e profili social.", roi: "50% di lead più qualificati" },
            ],
        },
        ideaGenerator: {
            title: "Ottieni un'Idea di Automazione",
            description: "Non sai da dove cominciare? Descrivi la tua attività o un compito noioso che vorresti automatizzare e la nostra IA genererà un'idea di flusso di lavoro su misura per te.",
            placeholder: "es: un'agenzia immobiliare che vuole automatizzare il follow-up dei clienti...",
            emailLabel: "Il Tuo Indirizzo Email",
            emailPlaceholder: "Inserisci la tua email per vedere la magia",
            buttonText: "Genera Flusso di Lavoro",
            buttonLoadingText: "Generazione in corso...",
            examplePrompt: "Prova un esempio",
            resultsTitle: "Il Tuo Flusso di Lavoro AI Personalizzato",
        },
        cta: {
            title: "Pronto a Trasformare la Tua Attività?",
            ctaButton: "Parliamone",
        },
        contact: {
            title: "Contattaci",
            nameLabel: "Il Tuo Nome",
            companyLabel: "Azienda (Opzionale)",
            phoneLabel: "Telefono (Opzionale)",
            emailLabel: "La Tua Email",
            messageLabel: "Come possiamo aiutarti?",
            submitButton: "Invia Messaggio",
            submittingButton: "Invio in corso...",
        },
        thankYou: {
            title: "Grazie!",
            message: "Il tuo messaggio è stato inviato con successo. Ti risponderemo entro 24 ore.",
            backButton: "Torna alla Home",
        },
        footer: {
            copyright: "© 2024 AutomatePro AI. Tutti i diritti riservati.",
        },
    },
};
