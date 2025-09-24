import React, { useState } from 'react';
import type { ContactContent } from '../types';

interface ContactFormProps {
  content: ContactContent;
  onSuccess: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ content, onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            setError('Please fill in your name and email address.');
            return;
        }
        setError('');
        setIsSubmitting(true);

        // --- SIMULATED BACKEND CALL ---
        // In a real application, you would make an API call here to your backend
        // or a service like Formspree, Netlify Forms, etc.
        // This endpoint would handle sending the two emails.

        console.log("--- SIMULATING FORM SUBMISSION ---");
        console.log("Submitting data:", formData);
        
        // 1. Email to Admin
        console.log(`Email to Admin (adam.f@talent-associates.com) would be sent with the following details:
        Name: ${formData.name}
        Company: ${formData.company}
        Phone: ${formData.phone}
        Email: ${formData.email}
        `);

        // 2. Confirmation Email to User
        console.log(`Confirmation email to User (${formData.email}) would be sent with a message like:
        "Thank you for your inquiry. We will be in contact with you shortly."
        `);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log("--- SIMULATION COMPLETE ---");

        setIsSubmitting(false);
        onSuccess();
    };

  return (
    <section id="contact-form" className="py-20 sm:py-24 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">{content.title}</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">{content.nameLabel}</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700">{content.companyLabel}</label>
                <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
              </div>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">{content.phoneLabel}</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">{content.emailLabel}</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
              </div>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center bg-cyan-500 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-cyan-500/30 hover:bg-cyan-600 transform hover:-translate-y-1 transition-all duration-300 disabled:bg-slate-400 disabled:shadow-none disabled:transform-none"
              >
                {isSubmitting ? content.submittingButton : content.submitButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;