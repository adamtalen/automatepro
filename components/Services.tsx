import React from 'react';
import type { ServicesContent, Service } from '../types';

interface ServicesProps {
  content: ServicesContent;
}

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:-translate-y-1">
    <div className="mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
    <p className="text-slate-600">{service.description}</p>
  </div>
);

const Services: React.FC<ServicesProps> = ({ content }) => {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">{content.title}</h2>
          <div className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 space-y-4">
            {content.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;