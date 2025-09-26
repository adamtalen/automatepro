import React, { useState } from 'react';
// Fix: Added file extension to import path
import type { ContactContent, FormData } from '../types.ts';

interface ContactFormProps {
  content: ContactContent;
  onSuccess: (formData: FormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ content, onSuccess }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in your name, email address, and message.');
            return;
        }
        setError('');
        setIsSubmitting(true);

        try {
            // The URL is the path to the PHP script on the server
            const response = await fetch('/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                onSuccess(formData);
            } else {
                setError(result.message || "Sorry, we couldn't process your request. Please try again later.");
            }
        } catch (err) {
            console.error("Error submitting form:", err);
            setError("Could not reach the server. Please check your internet connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
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
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">{content.messageLabel}</label>
                <textarea name="message" id="message" required rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"></textarea>
            </div>
            {error && <p className="text-red-600 text-sm text-center bg-red-100 p-3 rounded-md">{error}</p>}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center bg-cyan-500 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-cyan-500/30 hover:bg-cyan-600 transform hover:-translate-y-1 transition-all duration-300 disabled:bg-slate-400 disabled:shadow-none disabled:transform-none disabled:cursor-not-allowed"
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
