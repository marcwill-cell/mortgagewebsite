import React, { useState } from 'react';
import { LOAN_PROGRAMS } from '../data/loanPrograms';
import { LoanProgram } from '../types';
import { Check, ArrowRight, ShieldCheck, HelpCircle, Layers } from 'lucide-react';

interface LoanProgramsProps {
  onSelectProgram: (program: LoanProgram) => void;
}

export const LoanPrograms: React.FC<LoanProgramsProps> = ({ onSelectProgram }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedModalProgram, setSelectedModalProgram] = useState<LoanProgram | null>(null);

  const categories = ['All', 'Popular', 'Government', 'High Value', 'Alternative'];

  const filteredPrograms = activeCategory === 'All'
    ? LOAN_PROGRAMS
    : LOAN_PROGRAMS.filter(p => p.category === activeCategory);

  return (
    <section id="programs" className="py-16 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-teal-700" /> Tailored Mortgages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            California Loan Options & Programs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Explore competitive financing programs tailored for California home buyers, real estate investors, high-net-worth buyers, and self-employed entrepreneurs.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-teal-800 hover:border-teal-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white border border-slate-200 hover:border-teal-500 rounded-2xl p-6 transition-all shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800">
                    {program.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {program.minDownPercent}% Min Down
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {program.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 mb-4 line-clamp-2">
                  {program.tagline}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl text-xs mb-4 border border-slate-100">
                  <div>
                    <div className="text-[10px] text-slate-500 font-medium">Min Credit Score</div>
                    <div className="font-bold text-slate-900">{program.minCreditScore}+</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-medium">Max Financing</div>
                    <div className="font-bold text-teal-700 font-mono text-[11px] truncate">{program.maxLoanAmount}</div>
                  </div>
                </div>

                {/* Key Benefits */}
                <ul className="space-y-2 text-xs text-slate-700 mb-6">
                  {program.keyBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedModalProgram(program)}
                  className="text-xs text-slate-500 hover:text-teal-700 font-bold flex items-center gap-1"
                >
                  <HelpCircle className="w-3.5 h-3.5" /> Details
                </button>

                <button
                  onClick={() => onSelectProgram(program)}
                  className="bg-teal-50 hover:bg-teal-700 text-teal-800 hover:text-white text-xs font-bold px-3.5 py-2 rounded-lg border border-teal-200 hover:border-teal-700 transition-all flex items-center gap-1.5"
                >
                  <span>Select & Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Detail Modal */}
      {selectedModalProgram && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">{selectedModalProgram.category}</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{selectedModalProgram.name}</h3>
              </div>
              <button
                onClick={() => setSelectedModalProgram(null)}
                className="text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedModalProgram.description}
            </p>

            <div className="p-4 bg-teal-50 border border-teal-100 rounded-xl space-y-2 text-xs">
              <div className="font-bold text-teal-900 uppercase tracking-wider">Ideal Borrower Profile</div>
              <p className="text-teal-800">{selectedModalProgram.idealFor}</p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setSelectedModalProgram(null)}
                className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl text-xs"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const p = selectedModalProgram;
                  setSelectedModalProgram(null);
                  onSelectProgram(p);
                }}
                className="w-2/3 bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <span>Get Instant Quote for {selectedModalProgram.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
