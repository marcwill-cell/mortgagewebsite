import React, { useState } from 'react';
import { Home, HeartHandshake, ShieldCheck, DollarSign, Calculator, ArrowRight, Phone, Mail, Sparkles, CheckCircle2, UserCheck, Calendar, SunMedium } from 'lucide-react';

interface ReverseMortgageProps {
  onOpenPreQual: () => void;
}

export const ReverseMortgage: React.FC<ReverseMortgageProps> = ({ onOpenPreQual }) => {
  // Reverse Mortgage Estimator State
  const [homeValue, setHomeValue] = useState<number>(950000);
  const [borrowerAge, setBorrowerAge] = useState<number>(60);
  const [existingMortgage, setExistingMortgage] = useState<number>(250000);

  // Approximate Principal Limit Factor (PLF) calculation based on age
  // Proprietary reverse mortgages start at age 55 in CA (approx 35-40% PLF at age 55 scaling up to 60%+ for 75+)
  let plfPercentage = 0.35;
  if (borrowerAge >= 55 && borrowerAge < 60) plfPercentage = 0.38;
  else if (borrowerAge >= 60 && borrowerAge < 65) plfPercentage = 0.43;
  else if (borrowerAge >= 65 && borrowerAge < 70) plfPercentage = 0.48;
  else if (borrowerAge >= 70 && borrowerAge < 75) plfPercentage = 0.53;
  else if (borrowerAge >= 75) plfPercentage = 0.60;

  const totalGrossProceeds = Math.round(homeValue * plfPercentage);
  const netTaxFreeCashAvailable = Math.max(0, totalGrossProceeds - existingMortgage);
  const estimatedMonthlyPayout = Math.round((netTaxFreeCashAvailable / 12) / 15); // rough 15yr tenure distribution

  return (
    <section id="reverse-mortgage" className="py-16 bg-emerald-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Subtle Accent Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-sm">
            <SunMedium className="w-3.5 h-3.5 text-emerald-400" /> Retirement & Senior Equity Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            California Reverse Mortgages Starting at <span className="text-emerald-400 underline decoration-emerald-500 underline-offset-4">Age 55+</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Discover modern California reverse mortgage solutions for homeowners age 55+. Refinance to eliminate monthly mortgage payments or access tax-free cash with a standalone 2nd reverse mortgage without touching your low 1st rate.
          </p>
        </div>

        {/* Dual Path Comparison: Reverse Refinance vs 2nd Reverse Mortgage */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Path 1: Reverse Mortgage Refinance */}
          <div className="bg-slate-900 border-2 border-emerald-500/50 rounded-2xl p-6 sm:p-8 relative shadow-2xl flex flex-col justify-between">
            <div className="absolute -top-3 left-6 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-md">
              Option A: Reverse Refinance
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Reverse Mortgage Refinance (Age 55+)</h3>
                  <div className="text-xs text-emerald-400 font-semibold">Pay Off Existing Mortgage & Eliminate Payments</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Refinance your current traditional mortgage into a California Proprietary or Jumbo Reverse Mortgage starting at age 55. The reverse loan pays off your existing balance in full, freeing up monthly cash flow by wiping out mandatory principal & interest payments.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-200 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Required Monthly Payments:</strong> Eliminate ongoing monthly principal & interest strain during retirement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Qualify Starting at Age 55:</strong> California proprietary jumbo reverse guidelines start 7 years earlier than traditional FHA HECM (Age 62).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Retain Full Ownership:</strong> Stay on title. Pay only property taxes, homeowner's insurance, and general maintenance.</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onOpenPreQual}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Explore Reverse Refinance Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Path 2: 2nd Reverse Mortgage / Second Lien Equity */}
          <div className="bg-slate-900 border-2 border-teal-500/50 rounded-2xl p-6 sm:p-8 relative shadow-2xl flex flex-col justify-between">
            <div className="absolute -top-3 left-6 bg-teal-400 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-md">
              Option B: 2nd Reverse Mortgage
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/40 flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">2nd Reverse Mortgage Cash-Out (Age 55+)</h3>
                  <div className="text-xs text-teal-300 font-semibold">Keep Your Low 1st Rate + Tap Tax-Free Cash</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Already have a low 2.75% – 3.5% first mortgage? A 2nd reverse mortgage (standalone junior equity line) sits safely behind your existing first mortgage starting at age 55, allowing you to pull out tax-free cash equity without refinancing your low first rate.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-200 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Protect Low 1st Rate:</strong> Leave your existing low-interest 1st mortgage completely untouched.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Tax-Free Cash Out:</strong> Access lump-sum equity or a flexible draw line for home renovations, healthcare, or debt consolidation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>No Monthly Payments on 2nd:</strong> The 2nd reverse line accrues interest into the loan balance, requiring no monthly payment.</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onOpenPreQual}
              className="w-full bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Check 2nd Reverse Cash-Out Limit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Reverse Equity Estimator */}
        <div className="bg-slate-950 border border-emerald-800/80 rounded-2xl p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-md mb-1">
                <Calculator className="w-3.5 h-3.5" /> Age 55+ Reverse Equity Estimator
              </div>
              <h3 className="text-2xl font-black text-white">
                Calculate Your Reverse Mortgage Proceeds
              </h3>
            </div>
            <div className="text-xs text-emerald-300 bg-emerald-950 border border-emerald-800 px-3 py-1.5 rounded-lg font-mono">
              Age 55+ Proprietary & HECM Guidelines
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Inputs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Borrower Age Selector */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-300">Youngest Homeowner Age</span>
                  <span className="text-emerald-400 font-mono text-sm">{borrowerAge} Years Old</span>
                </div>
                <input
                  type="range"
                  min="55"
                  max="85"
                  step="1"
                  value={borrowerAge}
                  onChange={(e) => setBorrowerAge(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>Age 55 (CA Proprietary)</span>
                  <span>Age 62+ (FHA HECM)</span>
                  <span>Age 85+</span>
                </div>
              </div>

              {/* Home Value */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-300">Estimated Home Value</span>
                  <span className="text-emerald-400 font-mono text-sm">${homeValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="4000000"
                  step="50000"
                  value={homeValue}
                  onChange={(e) => setHomeValue(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>$500,000</span>
                  <span>$4,000,000+</span>
                </div>
              </div>

              {/* Existing Mortgage Balance to Pay Off */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-300">Current Mortgage to Pay Off</span>
                  <span className="text-emerald-400 font-mono text-sm">${existingMortgage.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={Math.min(homeValue * 0.5, 1000000)}
                  step="10000"
                  value={existingMortgage}
                  onChange={(e) => setExistingMortgage(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>$0 (Owned Free & Clear)</span>
                  <span>${Math.min(homeValue * 0.5, 1000000).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Results Output */}
            <div className="lg:col-span-5 bg-emerald-950/80 border border-emerald-500/50 rounded-2xl p-6 text-center space-y-4 shadow-inner">
              <div className="text-xs uppercase font-extrabold text-emerald-300 tracking-wider">Est. Net Tax-Free Cash Proceeds</div>
              <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-emerald-300">
                ${netTaxFreeCashAvailable.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Total gross limit of ${totalGrossProceeds.toLocaleString()} (~{Math.round(plfPercentage * 100)}% of home value at age {borrowerAge}) minus payoff of existing ${existingMortgage.toLocaleString()} mortgage.
              </p>

              <div className="pt-3 border-t border-emerald-800/80 grid grid-cols-2 gap-2 text-left text-xs">
                <div className="bg-emerald-900/60 p-2.5 rounded-lg border border-emerald-800">
                  <div className="text-[10px] text-emerald-300 uppercase font-semibold">Monthly Payment Saved</div>
                  <div className="font-extrabold text-white text-sm">Eliminated</div>
                </div>
                <div className="bg-emerald-900/60 p-2.5 rounded-lg border border-emerald-800">
                  <div className="text-[10px] text-emerald-300 uppercase font-semibold">Est. Tenure Payout</div>
                  <div className="font-extrabold text-white text-sm">${estimatedMonthlyPayout.toLocaleString()}/mo</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenPreQual}
                  className="w-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Request Custom Age 55+ Reverse Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Advisor Callout Banner */}
        <div className="bg-slate-900 border border-emerald-800/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-extrabold uppercase text-emerald-400 tracking-wider">Speak to a Calif Senior Advisor</div>
            <h4 className="text-xl font-black text-white">
              Marc Williamson — Senior Reverse Mortgage Specialist
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl">
              Reverse mortgages require specialized care and transparent counseling. Marc Williamson works directly with California homeowners and their families to structure custom equity plans starting at age 55.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:2099146037"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs px-5 py-3 rounded-xl transition-all flex items-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-emerald-200" />
              <span>209-914-6037 Direct</span>
            </a>
            <a
              href="mailto:marcwill@goldenstatehomeloan.com"
              className="bg-slate-950 hover:bg-black text-white border border-slate-700 font-extrabold text-xs px-4 py-3 rounded-xl transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>marcwill@goldenstatehomeloan.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
