import React, { useState } from 'react';
import type { FormTestContent } from '../types.ts';

interface FormTestProps {
  content: FormTestContent;
}

const TEST_WEBHOOK_URL = 'https://n8nserver.wbcpartners.com/webhook-test/5b877d84-c425-4b95-b884-457cac1de7de';

const FormTest: React.FC<FormTestProps> = ({ content }) => {
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [testResponse, setTestResponse] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!query || !email) {
      setError('Please fill out both fields.');
      return;
    }

    setIsLoading(true);
    setError('');
    setTestResponse(null);

    try {
      const response = await fetch(TEST_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setTestResponse(result);

    } catch (err) {
      console.error("Error submitting test form:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(`Failed to fetch from webhook. ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="form-test" className="py-20 sm:py-24 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">{content.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{content.description}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-white p-4 border border-slate-300 rounded-xl shadow-sm space-y-4">
              <textarea
                name="query"
                rows={4}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={content.queryPlaceholder}
                className="block w-full p-3 rounded-lg border-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                aria-label="Test query"
              />
              <div>
                <label htmlFor="test-email" className="sr-only">{content.emailPlaceholder}</label>
                <input
                  type="email"
                  name="email"
                  id="test-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.emailPlaceholder}
                  className="block w-full px-4 py-3 rounded-md border-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  aria-label={content.emailPlaceholder}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto bg-cyan-500 text-white font-bold px-6 py-4 rounded-lg shadow-lg shadow-cyan-500/30 hover:bg-cyan-600 transform hover:-translate-y-1 transition-all duration-300 disabled:bg-slate-400 disabled:shadow-none disabled:transform-none disabled:cursor-not-allowed"
              >
                {isLoading ? content.buttonLoadingText : content.buttonText}
              </button>
            </div>
          </form>

          {error && <p className="text-red-600 text-sm text-center bg-red-100 p-3 rounded-md mt-6">{error}</p>}
          
          {isLoading && (
            <div className="mt-12 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
              <p className="mt-4 text-slate-600">Sending test data...</p>
            </div>
          )}

          {testResponse && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-4">{content.resultsTitle}</h3>
              <pre className="bg-slate-800 text-white p-4 rounded-lg overflow-x-auto">
                {JSON.stringify(testResponse, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormTest;
