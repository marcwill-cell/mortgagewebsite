import React, { useState } from 'react';
import { GOLDEN_STATE_PACKAGES, ProcessingPackage } from '../data/processingData';
import { Check, ArrowRight, ShieldCheck, Zap, HelpCircle, FileText } from 'lucide-react';

interface ProcessingPackagesProps {
  onSelectPackage: (pkg: ProcessingPackage) => void;
  onOpenConsultation: () => void;
}

export const ProcessingPackages: React.FC<ProcessingPackagesProps> = ({
  onSelectPackage,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'cards' | 'comparison'>('cards');

  return (
    <section id="packages" className="py-20 border-b border-[#D4AF37]/35 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#0A0D14] border border-[#D4AF37]/50 text-xs uppercase tracking-[0.25em] text-[#F5D77F] font-semibold shadow-md">
            <span>◈</span>
            <span>Transparent Pricing · $0 Upfront Overhead</span>
            <span>◈</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0D14]">
            FOUR TAILORED <span className="gold-gradient-text">PROCESSING PACKAGES</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-normal">
            All processing fees are billed directly to the borrower through Title on the Closing Disclosure (CD). You never pay out of pocket, and you only pay when the loan closes.
          </p>
          <p className="text-[11px] text-slate-600 font-medium">
            Powered by 1 Touch Processing Arizona NMLS # 2337071
          </p>

          {/* Segmented Control: Cards vs Comparison */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 bg-[#121622] rounded border border-[#D4AF37]/30">
              <button
                onClick={() => setActiveTab('cards')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition-all ${
                  activeTab === 'cards' 
                    ? 'gold-gradient-bg text-[#0A0D14] shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Package Overview
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition-all ${
                  activeTab === 'comparison' 
                    ? 'gold-gradient-bg text-[#0A0D14] shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Feature Comparison Matrix
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: 4 Package Cards */}
        {activeTab === 'cards' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GOLDEN_STATE_PACKAGES.map((pkg) => {
              const isPopular = pkg.isPopular;
              return (
                <div
                  key={pkg.id}
                  className={`relative art-deco-card rounded-sm p-6 flex flex-col justify-between transition-all duration-300 ${
                    isPopular 
                      ? 'border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10 -translate-y-1' 
                      : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                  }`}
                >
                  {/* Top Badge */}
                  {pkg.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient-bg text-[#0A0D14] text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-sm shadow-md whitespace-nowrap">
                      {pkg.badge}
                    </div>
                  )}

                  {/* Art Deco Corner Notches */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#D4AF37]/60" />
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#D4AF37]/60" />

                  {/* Card Header */}
                  <div>
                    <div className="border-b border-[#D4AF37]/20 pb-4 mb-4">
                      <h3 className="font-cinzel text-xl font-bold text-white tracking-wide">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 min-h-[36px] line-clamp-2">
                        {pkg.tagline}
                      </p>
                      <div className="mt-4 flex items-baseline gap-1">
                        <span className="font-cinzel text-3xl font-extrabold text-[#F5D77F] tabular-nums">
                          ${pkg.price}
                        </span>
                        <span className="text-xs text-slate-400 tracking-wider uppercase font-medium">
                          / closed loan
                        </span>
                      </div>
                      <div className="mt-1 text-[11px] text-[#D4AF37] font-medium flex items-center gap-1">
                        <span>Turnaround:</span>
                        <strong className="text-white">{pkg.turnaroundTime}</strong>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 mb-6">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                        Included Processing Scope:
                      </div>
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-4 border-t border-[#D4AF37]/15">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className={`w-full py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                        isPopular
                          ? 'gold-gradient-bg text-[#0A0D14] hover:brightness-110 shadow-lg'
                          : 'bg-[#151A26] hover:bg-[#1E2536] text-amber-200 border border-[#D4AF37]/30 hover:border-[#D4AF37]'
                      }`}
                    >
                      <span>Choose {pkg.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <p className="text-[10px] text-center text-slate-500 mt-2">
                      $0 due today · Added to Closing Disclosure
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Tab 2: Feature Comparison Matrix */
          <div className="art-deco-card rounded-sm p-6 overflow-x-auto border border-[#D4AF37]/30">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#D4AF37]/30 text-slate-300">
                  <th className="py-3 px-4 font-cinzel text-sm text-white">Processing Capability</th>
                  <th className="py-3 px-3 text-center">Streamline ($695)</th>
                  <th className="py-3 px-3 text-center">Standard ($995)</th>
                  <th className="py-3 px-3 text-center text-amber-200 font-bold bg-[#D4AF37]/10">Preferred ($1,195)</th>
                  <th className="py-3 px-3 text-center">Elite LOA ($1,495)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Initial Disclosure Generation & Retrieval</td>
                  <td className="py-3 px-3 text-center text-slate-600">—</td>
                  <td className="py-3 px-3 text-center text-slate-600">—</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37] font-bold bg-[#D4AF37]/5">✓ Yes</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37] font-bold">✓ Yes</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Direct Borrower Document Collection</td>
                  <td className="py-3 px-3 text-center text-slate-600">—</td>
                  <td className="py-3 px-3 text-center text-slate-400">Basic</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37] font-bold bg-[#D4AF37]/5">✓ Full Chasing</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37] font-bold">✓ White Glove Concierge</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">All 3rd Party Orders (Appraisal, Title, VOE)</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37]">✓ Yes</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37]">✓ Yes</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37] font-bold bg-[#D4AF37]/5">✓ Yes</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37] font-bold">✓ Rush Priority</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Complex Income Analysis (P&L, K-1s, 1099, Bank Statements)</td>
                  <td className="py-3 px-3 text-center text-slate-600">—</td>
                  <td className="py-3 px-3 text-center text-slate-600">—</td>
                  <td className="py-3 px-3 text-center text-slate-400 bg-[#D4AF37]/5">Standard DU/LPA</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37] font-bold">✓ Full LOA Calculation</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Wholesale Underwriting Submission & Condition Clearing</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37]">✓ Yes</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37]">✓ Yes</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37] font-bold bg-[#D4AF37]/5">✓ Yes</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37] font-bold">✓ Underwriter Direct Calls</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Closing Disclosure Balancing & Notary Coordination</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37]">✓ Yes</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37]">✓ Yes</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37] font-bold bg-[#D4AF37]/5">✓ Yes</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37] font-bold">✓ Priority Expedited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Direct Access to Marc Williamson</td>
                  <td className="py-3 px-3 text-center text-slate-400">Standard Email</td>
                  <td className="py-3 px-3 text-center text-slate-400">Phone & Email</td>
                  <td className="py-3 px-3 text-center text-amber-200 bg-[#D4AF37]/5">Dedicated Pipeline Line</td>
                  <td className="py-3 px-3 text-center text-[#D4AF37] font-bold">✓ Direct Cell & Weekend</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-6 rounded-sm bg-gradient-to-r from-[#121622] via-[#171D2A] to-[#121622] border border-[#D4AF37]/35 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-cinzel text-lg font-bold text-white">
                100% Performance Guarantee
              </h4>
              <p className="text-xs text-slate-300">
                If a loan does not close due to title or borrower withdrawal, you owe $0. No retainer, no cancellation penalty, no monthly subscription.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-sm font-semibold text-xs uppercase tracking-wider text-[#0A0D14] gold-gradient-bg hover:brightness-110 whitespace-nowrap shadow transition-all"
          >
            Schedule Onboarding Call
          </button>
        </div>

      </div>
    </section>
  );
};
