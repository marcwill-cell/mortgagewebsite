import React, { useState, useId } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw, HelpCircle, ArrowRight, Shield } from 'lucide-react';
import { AiChatMessage } from '../types';

interface AiMortgageAdvisorProps {
  onOpenPreQual: () => void;
  onOpenCalculator: () => void;
}

export const AiMortgageAdvisor: React.FC<AiMortgageAdvisorProps> = ({ onOpenPreQual, onOpenCalculator }) => {
  const [messages, setMessages] = useState<AiChatMessage[]>([
    {
      id: 'm1',
      sender: 'assistant',
      text: "Hello! I'm your Golden State AI Mortgage Specialist. Ask me anything about California conforming loan limits, FHA vs Conventional rules, DSCR investor loans, or down payment assistance options in your county!",
      timestamp: 'Just now',
    },
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const aiChatInputId = useId();

  const samplePrompts = [
    "What is the conforming loan limit in Los Angeles & Orange County?",
    "Can I qualify for a California home with 3.5% down and a 620 credit score?",
    "How do DSCR investor loans work for California short-term rentals?",
    "What are California property tax rates and closing cost estimates?"
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim() || loading) return;

    const userMsg: AiChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: textToSend }),
      });

      const data = await response.json();

      const assistantMsg: AiChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: data.answer || "I am glad to assist with California mortgages. Please feel free to calculate your payments or speak to our team for a rate quote!",
        timestamp: 'Just now'
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      const fallbackMsg: AiChatMessage = {
        id: `ai-err-${Date.now()}`,
        sender: 'assistant',
        text: "In California, conforming loan limits range from $766,550 up to $1,149,825 for high-cost counties like LA, Orange, San Francisco, and San Diego. FHA allows down payments from 3.5%, while VA loans offer 0% down for veterans.",
        timestamp: 'Just now'
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-16 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-teal-800/60 border border-teal-500/30 text-teal-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" /> Instant AI Loan Guidance
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Ask Our California Mortgage AI
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Get instant answers regarding California loan rules, down payments, county limits, and income guidelines.
          </p>
        </div>

        {/* Chat Widget Container */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px]">
          {/* Top Bar */}
          <div className="bg-teal-950 px-6 py-3.5 border-b border-teal-900/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-800 text-teal-200 flex items-center justify-center border border-teal-600">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Golden State AI Advisor</span>
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                </div>
                <div className="text-[10px] text-teal-200/70">California Mortgage Guidelines Expert</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={onOpenCalculator}
                className="text-[11px] bg-teal-900 hover:bg-teal-800 text-teal-100 px-3 py-1.5 rounded-lg border border-teal-700/60 font-bold"
              >
                Open Calculator
              </button>
              <button
                onClick={onOpenPreQual}
                className="text-[11px] bg-white hover:bg-teal-50 text-teal-900 px-3 py-1.5 rounded-lg font-bold"
              >
                Get Rate Quote
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 max-w-[85%] ${m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                    m.sender === 'user' ? 'bg-white text-teal-900' : 'bg-teal-900 text-teal-200 border border-teal-700'
                  }`}
                >
                  {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div
                  className={`p-4 rounded-2xl text-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-teal-700 text-white font-medium'
                      : 'bg-slate-900 border border-slate-800 text-slate-200'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-7 h-7 rounded-full bg-teal-900 text-teal-300 flex items-center justify-center shrink-0 text-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                  <span>Analyzing California mortgage guidelines...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div className="p-3 bg-slate-900/50 border-t border-slate-800 flex gap-2 overflow-x-auto text-[11px]">
            {samplePrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-teal-200 px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 transition-colors"
              >
                "{prompt}"
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <label htmlFor={aiChatInputId} className="sr-only">Ask California Mortgage AI a question</label>
              <input
                id={aiChatInputId}
                type="text"
                placeholder="Ask about CA loan limits, down payment, rates, or qualifications..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading || !inputQuery.trim()}
                className="bg-teal-700 hover:bg-teal-600 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all disabled:opacity-50 flex items-center gap-1.5"
              >
                <span>Ask</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
