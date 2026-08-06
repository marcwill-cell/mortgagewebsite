import React, { useState } from 'react';
import { CreditCard, CheckCircle2, ShieldCheck, DollarSign, Calculator, ArrowRight, Phone, Mail, Sparkles, Percent, ShieldAlert } from 'lucide-react';

interface HelocSectionProps {
  onOpenPreQual: () => void;
}

export const HelocSection: React.FC<HelocSectionProps> = ({ onOpenPreQual }) => {
  // HELOC Estimator State
  const [homeValue, setHomeValue] = useState<number>(900000);
  const [firstMortgageBalance, setFirstMortgageBalance] = useState<number>(500000);
  const [creditTier, setCreditTier] = useState<string>('600-639');
  const [maxCltv, setMaxCltv] = useState<number>(85); // 85% default max CLTV

  // Calculations
  const maxTotalFinancing = Math.round(homeValue * (maxCltv / 100));
  const maxHelocLine = Math.max(0, maxTotalFinancing - firstMortgageBalance);

  // Interest rate estimate based on credit tier
  let estRate = 8.75;
  if (creditTier === '600-639') estRate = 9.875;
  else if (creditTier === '640-679') estRate = 9.25;
  else if (creditTier === '680-739') estRate = 8.50;
  else if (creditTier === '740+') estRate = 7.99;

  // Estimated monthly interest-only payment if full line is drawn
  const estMonthlyPayment = Math.round((maxHelocLine * (estRate / 100)) / 12);

  return (
    <section id="heloc" className="py-16 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Accent glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-950 border border-teal-500/40 text-teal-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-sm">
            <CreditCard className="w-3.5 h-3.5 text-teal-400" /> Standalone Second Mortgages & HELOCs
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            California HELOC Loans Down to <span className="text-teal-400 underline decoration-teal-500 underline-offset-4">600 FICO</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Tap into your home's equity without giving up your low 1st mortgage interest rate! Our specialized California HELOC programs offer credit score flexibility down to a 600 FICO score.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/80 border border-teal-500/30 rounded-2xl p-6 shadow-xl relative hover:border-teal-400 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center mb-4">
              <Percent className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">Flexible Credit Guidelines</div>
            <h3 className="text-lg font-bold text-white mb-2">600 FICO Minimum Score</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              While major banks demand 700+ credit scores for equity lines, our California standalone HELOC program accommodates credit scores down to 600 FICO with flexible underwriting.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-teal-500/30 rounded-2xl p-6 shadow-xl relative hover:border-teal-400 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">Protect Your Low Rate</div>
            <h3 className="text-lg font-bold text-white mb-2">Keep Your 1st Mortgage Intact</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Don't replace your 2.75% or 3.5% first mortgage with a high cash-out refi rate. A standalone HELOC sits as a 2nd lien, leaving your existing low rate untouched.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-teal-500/30 rounded-2xl p-6 shadow-xl relative hover:border-teal-400 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center mb-4">
              <DollarSign className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">High Equity Leverage</div>
            <h3 className="text-lg font-bold text-white mb-2">Up to 85% - 90% CLTV</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Access up to $500,000+ in cash equity. Draw funds as needed for home remodels, high-interest debt payoff, investment property purchases, or emergency reserves.
            </p>
          </div>
        </div>

        {/* Interactive HELOC Line Estimator Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 bg-teal-950 border border-teal-800 px-2.5 py-1 rounded-md mb-1">
                <Calculator className="w-3.5 h-3.5" /> Quick HELOC Line Estimator
              </div>
              <h3 className="text-2xl font-black text-white">
                Calculate Your Available California HELOC Credit Line
              </h3>
            </div>
            <div className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg font-mono">
              600 FICO Minimum Accepted
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Home Value Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-300">Estimated Home Value</span>
                  <span className="text-teal-400 font-mono text-sm">${homeValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="400000"
                  max="3000000"
                  step="25000"
                  value={homeValue}
                  onChange={(e) => setHomeValue(Number(e.target.value))}
                  className="w-full accent-teal-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>$400,000</span>
                  <span>$3,000,000</span>
                </div>
              </div>

              {/* 1st Mortgage Balance */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-300">Current 1st Mortgage Balance</span>
                  <span className="text-teal-400 font-mono text-sm">${firstMortgageBalance.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={Math.min(homeValue, 2000000)}
                  step="10000"
                  value={firstMortgageBalance}
                  onChange={(e) => setFirstMortgageBalance(Number(e.target.value))}
                  className="w-full accent-teal-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>$0 (Free & Clear)</span>
                  <span>${Math.min(homeValue, 2000000).toLocaleString()}</span>
                </div>
              </div>

              {/* Credit Tier & Max CLTV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">Credit Score Tier</label>
                  <select
                    value={creditTier}
                    onChange={(e) => setCreditTier(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs font-bold text-white focus:border-teal-500 focus:outline-none"
                  >
                    <option value="600-639">600 - 639 FICO (Qualified)</option>
                    <option value="640-679">640 - 679 FICO</option>
                    <option value="680-739">680 - 739 FICO</option>
                    <option value="740+">740+ FICO (Lowest Rate)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">Target Max CLTV</label>
                  <select
                    value={maxCltv}
                    onChange={(e) => setMaxCltv(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs font-bold text-white focus:border-teal-500 focus:outline-none"
                  >
                    <option value={80}>80% Max Combined LTV</option>
                    <option value={85}>85% Max Combined LTV</option>
                    <option value={90}>90% Max Combined LTV</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 bg-teal-950/70 border border-teal-500/40 rounded-2xl p-6 text-center space-y-4 shadow-inner">
              <div className="text-xs uppercase font-extrabold text-teal-300 tracking-wider">Estimated HELOC Available</div>
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight text-teal-300">
                ${maxHelocLine.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Based on {maxCltv}% max CLTV (${maxTotalFinancing.toLocaleString()} max total financing minus your ${firstMortgageBalance.toLocaleString()} 1st mortgage).
              </p>

              <div className="pt-3 border-t border-teal-800/60 grid grid-cols-2 gap-2 text-left text-xs">
                <div className="bg-teal-900/50 p-2.5 rounded-lg border border-teal-800/80">
                  <div className="text-[10px] text-teal-300 uppercase font-semibold">Est. Rate (As low as)</div>
                  <div className="font-extrabold text-white text-sm">{estRate.toFixed(3)}% Variable</div>
                </div>
                <div className="bg-teal-900/50 p-2.5 rounded-lg border border-teal-800/80">
                  <div className="text-[10px] text-teal-300 uppercase font-semibold">Est. I/O Payment</div>
                  <div className="font-extrabold text-white text-sm">${estMonthlyPayment.toLocaleString()}/mo</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenPreQual}
                  className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Lock In HELOC Quote (600 FICO)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Advisor Callout Banner */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-extrabold uppercase text-teal-400 tracking-wider">Speak to a Calif Advisor</div>
            <h4 className="text-xl font-black text-white">
              Marc Williamson — California Senior HELOC Specialist
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl">
              Have questions about qualifying with a 600 FICO score, calculating your debt-to-income ratio, or drawing equity for home renovations? Speak directly with Marc Williamson today.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:2132943747"
              className="bg-teal-700 hover:bg-teal-600 text-white font-extrabold text-xs px-5 py-3 rounded-xl transition-all flex items-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-teal-200" />
              <span>213-294-3747 Direct</span>
            </a>
            <a
              href="mailto:marcwill@goldenstatehomeloan.com"
              className="bg-slate-900 hover:bg-slate-950 text-white border border-slate-700 font-extrabold text-xs px-4 py-3 rounded-xl transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-teal-400" />
              <span>marcwill@goldenstatehomeloan.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
