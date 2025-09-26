import React, { useState } from 'react';
// Fix: Added file extensions to import paths
import type { IdeaGeneratorContent, WorkflowStep } from '../types.ts';
import { N8NIcon, TriggerIcon, GeminiIcon, StepIcon } from './icons/NodeIcons.tsx';

interface IdeaGeneratorProps {
  content: IdeaGeneratorContent;
}

// ====================================================================================
// IMPORTANT: This is the user's configured N8N Production Webhook URL 
// ====================================================================================
// TEST URL const N8N_WEBHOOK_URL = 'https://n8nserver.wbcpartners.com/webhook-test/5b877d84-c425-4b95-b884-457cac1de7de';

const N8N_WEBHOOK_URL = 'https://n8nserver.wbcpartners.com/webhook/5b877d84-c425-4b95-b884-457cac1de7de';
// ====================================================================================


const StepDisplay: React.FC<{ step: WorkflowStep, index: number, totalSteps: number }> = ({ step, index, totalSteps }) => {
    const getIcon = (title: string, index: number) => {
        const lowerTitle = title.toLowerCase();
        if (index === 0 || lowerTitle.includes('trigger') || lowerTitle.includes('déclencheur')) {
            return <TriggerIcon className="w-6 h-6 text-white" />;
        }
        if (lowerTitle.includes('n8n')) {
            return <N8NIcon className="w-6 h-6 text-white" />;
        }
        if (lowerTitle.includes('ai') || lowerTitle.includes('gemini') || lowerTitle.includes('ia')) {
            return <GeminiIcon className="w-6 h-6 text-white" />;
        }
        return <StepIcon className="w-6 h-6 text-white" />;
    };

    return (
        <div className="relative flex items-start">
            <div className="flex flex-col items-center mr-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center z-10">
                    {getIcon(step.title, index)}
                </div>
                {index < totalSteps - 1 && (
                    <div className="w-0.5 h-16 bg-slate-300"></div>
                )}
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 w-full mt-1.5">
                <h4 className="font-bold text-slate-800">{step.title}</h4>
                <p className="text-slate-600 mt-1">{step.description}</p>
            </div>
        </div>
    );
};


const IdeaGenerator: React.FC<IdeaGeneratorProps> = ({ content }) => {
  const [prompt, setPrompt] = useState('');
  const [email, setEmail] = useState('');
  const [workflow, setWorkflow] = useState<WorkflowStep[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const taskDescription = prompt;

    if (!taskDescription) {
        setError('Please describe your business.');
        return;
    }
    if (!email) {
        setError('Please enter your email address to continue.');
        return;
    }
    
    if (N8N_WEBHOOK_URL.includes('PASTE_YOUR_N8N_WEBHOOK_URL_HERE')) {
        setError('The N8N Webhook URL has not been configured by the developer. Please replace the example URL in components/IdeaGenerator.tsx.');
        return;
    }

    setIsLoading(true);
    setError('');
    setWorkflow([]);

    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ taskDescription, email }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        const steps = result.steps || result.workflow || result.data || result;
        
        if (Array.isArray(steps)) {
            setWorkflow(steps);
        } else {
             try {
                const parsedSteps = JSON.parse(steps);
                if (Array.isArray(parsedSteps)) {
                    setWorkflow(parsedSteps);
                } else {
                    throw new Error("Parsed data is not an array.");
                }
            } catch (parseError) {
                console.error("Error parsing response:", parseError);
                throw new Error("Received an invalid format from the server.");
            }
        }

    } catch (err) {
        console.error("Error generating workflow:", err);
        setError("Sorry, we couldn't generate the workflow. The AI might be busy. Please try again in a moment.");
    } finally {
        setIsLoading(false);
    }
  };
  
  const handleExampleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const exampleText = "a successful restaurant in Antibes that wants to automate reservations and supplier orders";
      setPrompt(exampleText);
  }

  return (
    <section id="idea-generator" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">{content.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{content.description}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-white p-4 border border-slate-300 rounded-xl shadow-sm space-y-4">
              <textarea
                name="prompt"
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={content.placeholder}
                className="block w-full p-3 rounded-lg border-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                aria-label="Business overview"
              />
              <div>
                <label htmlFor="idea-email" className="sr-only">{content.emailLabel}</label>
                <input
                    type="email"
                    name="email"
                    id="idea-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={content.emailPlaceholder}
                    className="block w-full px-4 py-3 rounded-md border-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                    aria-label={content.emailLabel}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto flex-grow bg-cyan-500 text-white font-bold px-6 py-4 rounded-lg shadow-lg shadow-cyan-500/30 hover:bg-cyan-600 transform hover:-translate-y-1 transition-all duration-300 disabled:bg-slate-400 disabled:shadow-none disabled:transform-none disabled:cursor-not-allowed"
                >
                    {isLoading ? content.buttonLoadingText : content.buttonText}
                </button>
                 <button type="button" onClick={handleExampleClick} className="text-sm text-slate-500 hover:text-cyan-600 transition-colors flex-shrink-0">
                    {content.examplePrompt}
                </button>
            </div>
          </form>

          {error && <p className="text-red-600 text-sm text-center bg-red-100 p-3 rounded-md mt-6">{error}</p>}
          
          {isLoading && (
              <div className="mt-12 text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
                  <p className="mt-4 text-slate-600">AI is crafting your workflow...</p>
              </div>
          )}

          {workflow.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">{content.resultsTitle}</h3>
              <div className="space-y-0">
                  {workflow.map((step, index) => (
                      <StepDisplay key={index} step={step} index={index} totalSteps={workflow.length} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IdeaGenerator;
