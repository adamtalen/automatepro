import type { ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'it';

export interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

export interface HeaderContent {
  logo: string;
  nav: {
    services: string;
    examples: string;
    ideaGenerator: string;
    contact: string;
  }
}

export interface HeroContent {
  heading: string;
  subheading: string;
  ctaButton: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ServicesContent {
  title: string;
  description: string[];
  services: Service[];
}

export interface AutomationExample {
  icon: ReactNode;
  title: string;
  for: string;
  description: string;
  roi: string;
}

export interface AutomationExamplesContent {
  title: string;
  examples: AutomationExample[];
}

export interface IdeaGeneratorContent {
    title: string;
    description: string;
    placeholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    buttonText: string;
    buttonLoadingText: string;
    examplePrompt: string;
    resultsTitle: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
}

export interface CallToActionContent {
  title: string;
  ctaButton: string;
}

export interface ContactContent {
  title: string;
  nameLabel: string;
  companyLabel: string;
  phoneLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitButton: string;
  submittingButton: string;
}

export interface ThankYouContent {
    title: string;
    message: string;
    backButton: string;
}

export interface FooterContent {
  copyright: string;
}

export interface AppContent {
  header: HeaderContent;
  hero: HeroContent;
  services: ServicesContent;
  automationExamples: AutomationExamplesContent;
  ideaGenerator: IdeaGeneratorContent;
  cta: CallToActionContent;
  contact: ContactContent;
  thankYou: ThankYouContent;
  footer: FooterContent;
}

export type Content = {
  [key in Language]: AppContent;
};
