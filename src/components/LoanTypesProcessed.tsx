import React, { useState } from 'react';
import { Shield, Zap, Home, Building2, Briefcase, Landmark, CheckCircle, ArrowRight } from 'lucide-react';

interface LoanTypesProcessedProps {
  onSelectProgram: (programId: string) => void;
  onOpenConsultation: () => void;
}

export const LoanTypesProcessed: React.FC<LoanTypesProcessedProps> = ({
  onSelectProgram,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'conforming' | 'non_qm' | 'specialty'>('all');

  const PROGRAMS = [
    {
      id: 'conventional',
      name: 'Conventional & High-Balance',
      category: 'conforming',
      tagline: 'Fannie Mae DU & Freddie Mac LPA conforming up to $1,149,825 high-cost',
      details: 'Full automated underwriting AUS run, guideline overlay check, day-one appraisal/title orders, and rapid clearing of Fannie/Freddie conditions.',
      highlights: ['Desktop Underwriter (DU) / LPA expert scrub', 'Primary, 2nd home & investment properties', 'High-balance conforming county limits'],
      icon: Home
    },
    {
      id: 'government',
      name: 'Government (FHA, VA & USDA)',
      category: 'conforming',
      tagline: 'FHA 3.5% down, VA 0% down military, and VA IRRRL / FHA streamline refis',
      details: 'Deep familiarity with FHA total scorecard, CAIVRS verification, VA COE retrieval, termite/pest clearance, and military entitlement rules.',
      highlights: ['VA IRRRL & FHA Streamline expedited packages', '0% down VA military loans', 'Lenient credit down to 580 FICO'],
      icon: Landmark
    },
    {
      id: 'non_qm',
      name: 'Non-QM & Bank Statements',
      category: 'non_qm',
      tagline: 'Alternative income solutions for self-employed entrepreneurs & 1099 contractors',
      details: 'We specialize in calculating alternative income: 12 & 24-month bank statement cash flow, CPA profit & loss letters, and asset depletion models.',
      highlights: ['No tax returns or W-2s required', '12 & 24 Month bank statements analyzed', 'Loans up to $3,500,000+'],
      icon: Briefcase
    },
    {
      id: 'dscr',
      name: 'DSCR Real Estate Investor',
      category: 'non_qm',
      tagline: 'Qualified strictly on property rental income — no personal DTI calculation',
      details: 'Expert handling of Form 1007 rent schedules, short-term rental AirDNA reports, entity LLC vesting, and multi-property portfolio schedules.',
      highlights: ['DSCR down to 0.75 or no-ratio', 'Vesting in LLCs, Corporations & Trusts', 'Short-term and long-term rental income'],
      icon: Building2
    },
    {
      id: 'jumbo',
      name: 'Jumbo & High-Balance',
      category: 'conventional',
      tagline: 'High-balance conforming and proprietary non-conforming luxury financing up to $4M+',
      badge: 'Up to $4M+',
      details: 'Specialized packaging for high-net-worth borrowers: complex tax returns, K-1 schedules, asset amortization, and multi-tier reserve requirements.',
      highlights: ['Loan amounts up to $4,000,000+', 'Interest-only and fixed options', 'California high-cost county expertise'],
      icon: Landmark
    },
    {
      id: 'commercial',
      name: 'Commercial & Business Purpose',
      category: 'specialty',
      tagline: 'Fix & flip, ground-up construction, bridge loans, and multi-family commercial',
      details: 'Tailored processing for investor commercial files: draw schedules, contractor reviews, environmental audits, and cross-collateralized bridge financing.',
      highlights: ['Fix & Flip and rehab construction', 'Multi-family 5+ units and mixed-use', 'Cross-collateralized commercial portfolios'],
      icon: Shield
    }
  ];

  const filteredPrograms = selectedCategory === 'all'
    ? PROGRAMS
    : PROGRAMS.filter(p => p.category === selectedCategory);

  return (
    <section id="loan-types" className="py-20 border-b border-[#D4AF37]/35 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#0A0D14] border border-[#D4AF37]/50 text-xs uppercase tracking-[0.25em] text-[#F5D77F] font-semibold shadow-md">
            <span>◈</span>
            <span>Comprehensive Product Matrix</span>
            <span>◈</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0D14]">
            LOAN PROGRAMS <span className="gold-gradient-text">PROCESSED FLAWLESSLY</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-normal">
            From agency conventional to complex multi-million dollar Non-QM and investor DSCR, our processors master every guideline, condition type, and wholesale lender overlay.
          </p>

          {/* Category Filter Controls */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Loan Types' },
              { id: 'conforming', label: 'Agency & Government' },
              { id: 'non_qm', label: 'Non-QM & DSCR' },
              { id: 'specialty', label: 'Commercial & Specialty' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition-all ${
                  selectedCategory === tab.id
                    ? 'gold-gradient-bg text-[#0A0D14] shadow-md font-bold'
                    : 'bg-[#0A0D14] text-slate-300 hover:text-white border border-[#D4AF37]/40 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map(prog => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.id}
                className="art-deco-card rounded-sm p-6 flex flex-col justify-between group transition-all hover:border-[#D4AF37]/60 relative"
              >
                {/* Stepped corner accents */}
                <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#D4AF37]/50" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#D4AF37]/50" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    {prog.badge && (
                      <span className="text-[10px] font-bold text-[#F5D77F] uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                        {prog.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-white mb-1 group-hover:text-[#F5D77F] transition-colors">
                    {prog.name}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-medium mb-3">
                    {prog.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {prog.details}
                  </p>

                  <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-800">
                    {prog.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectProgram(prog.id)}
                  className="w-full py-2.5 rounded-sm bg-[#131722] hover:bg-[#1C2230] border border-[#D4AF37]/35 hover:border-[#D4AF37] text-xs font-semibold text-amber-200 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Submit {prog.name} Scenario</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
