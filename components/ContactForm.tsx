import React, { useState } from 'react';
// @ts-ignore
import { GoogleGenAI } from 'https://aistudiocdn.com/google-genai-v0.15.0/index.js';
import type { ContactContent, FormData } from '../types';

interface ContactFormProps {
  content: ContactContent;
  onSuccess: (emails: { adminEmail: string; userEmail: string; }, formData: FormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ content, onSuccess }) => {
    const [formData, setFormData] = useState<FormData>({
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

        try {
            if (!process.env.API_KEY) {
                throw new Error("API_KEY environment variable not set");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            const adminPrompt = `You are a helpful assistant. A potential client has submitted an inquiry through the website contact form. Your task is to format this information into a professional email for the business owner. The email should be clear, concise, and easy to read. Use the following details:
- Name: ${formData.name}
- Company: ${formData.company || 'Not provided'}
- Phone: ${formData.phone || 'Not provided'}
- Email: ${formData.email}

The subject line should be: "New Website Inquiry from ${formData.name}".
Start the email body with a clear summary. Structure the contact details neatly.
Do not add any introductory or concluding remarks beyond the raw email content.
Output the full email, including "Subject: ..." line.`;

            const userPrompt = `You are a helpful assistant for AutomatePro AI. A user has just submitted an inquiry. Your task is to draft a friendly and professional confirmation email to be sent to them. The email should:
1. Have the subject line: "Thank you for your inquiry with AutomatePro AI!".
2. Thank them for their interest using their name, ${formData.name}.
3. Confirm that their message has been received.
4. Let them know that the team will review their request and get back to them shortly (usually within 24 business hours).
5. Be signed off from "The AutomatePro AI Team".
Do not add any introductory or concluding remarks beyond the raw email content.
Output the full email, including "Subject: ..." line.`;

            const [adminResponse, userResponse] = await Promise.all([
                ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: adminPrompt,
                }),
                ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: userPrompt,
                })
            ]);

            const adminEmail = adminResponse.text;
            const userEmail = userResponse.text;

            onSuccess({ adminEmail, userEmail }, formData);

        } catch (err) {
            console.error("Error generating email content:", err);
            setError("Sorry, we couldn't process your request at the moment. Please try again later.");
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