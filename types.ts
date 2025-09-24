import React from 'react';

export type Language = 'en' | 'fr' | 'it';

export interface HeaderContent {
  logo: string;
  nav: {
    services: string;
    examples: string;
    contact: string;
  };
}

export interface HeroContent {
  heading: string;
  subheading: string;
  ctaButton: string;
}

export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ServicesContent {
  title: string;
  description: string[];
  services: Service[];
}

export interface AutomationExample {
  icon: JSX.Element;
  title: string;
  for: string;
  description: string;
  roi: string;
}

export interface AutomationExamplesContent {
  title: string;
  examples: AutomationExample[];
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
  cta: CallToActionContent;
  contact: ContactContent;
  thankYou: ThankYouContent;
  footer: FooterContent;
}

export interface Content {
  en: AppContent;
  fr: AppContent;
  it: AppContent;
}