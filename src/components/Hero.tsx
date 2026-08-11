import React from 'react';
import { ShieldCheck, TrendingDown, Clock, CheckCircle2, ArrowRight, Calculator, Star, Sparkles, UserCheck, Phone, Mail } from 'lucide-react';
import { CURRENT_RATES } from '../data/loanPrograms';
import heroHomeImg from '../assets/images/hero_california_home_1786052838025.jpg';
import marcPhoto from '../../assets/photo.png';

interface HeroProps {
  onOpenPreQual: () => void;
  onNavigateCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPreQual, onNavigateCalculator }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden pt-10 pb-16 lg:pb-24">
      {/* Background with radial teal glow & subtle luxury home image overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/60 via-slate-900 to-slate-950 z-10" />
        <img
          src={heroHomeImg}
          alt="Modern California Home"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Highlight Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 bg-teal-950/80 border border-teal-500/30 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-teal-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Direct Wholesale California Rates • 14-Day Fast Close</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>Outstanding 5 star ratings from home buyers and home owners for over 25 years</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Headline Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Your Future Starts with the <br />
              <span className="text-teal-400">
                Perfect Home Loan.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Competitive California mortgage rates with the personalized service of a local expert across all 58 California counties with zero junk fees and fast approvals.
            </p>

            {/* Value Bullets */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/60 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span><strong>No Lender Fees</strong> on standard purchase loans</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/60 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span><strong>Instant Pre-Qual</strong> in 3 minutes or less</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/60 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span><strong>High-Cost CA Limits</strong> up to $1,149,825</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/60 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span><strong>Self-Employed & DSCR</strong> No tax return options</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onOpenPreQual}
                className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-base px-8 py-4 rounded-full shadow-xl hover:shadow-teal-700/30 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                <span>Get Today's Rate Quote</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={onNavigateCalculator}
                className="bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-base px-6 py-4 rounded-full border border-slate-600 hover:border-teal-400/50 transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5 text-teal-400" />
                <span>Calculate Monthly Payment</span>
              </button>
            </div>
          </div>

          {/* Right Card: Live Rate Snapshot & Quick Qualifier Preview */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/95 border border-slate-700 rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative">
              <div className="absolute -top-3 right-6 bg-teal-500 text-slate-950 text-[11px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-md">
                Live Daily Market Rates
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>California Rate Monitor</span>
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  </h3>
                  <p className="text-xs text-slate-400">Updated today for conforming & jumbo tiers</p>
                </div>
                <Clock className="w-5 h-5 text-teal-400" />
              </div>

              {/* Rates List */}
              <div className="divide-y divide-slate-700/80 my-3">
                {CURRENT_RATES.slice(0, 4).map((r, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-slate-200">{r.programName}</div>
                      <div className="text-[11px] text-slate-400">APR: {r.apr.toFixed(3)}% • 0 Points</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-extrabold text-teal-400 font-mono">{r.rate.toFixed(3)}%</div>
                      <div className="text-[10px] text-teal-300 font-semibold flex items-center justify-end gap-0.5">
                        <TrendingDown className="w-3 h-3" />
                        <span>{r.change}% today</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Advisor Callout box */}
              <div className="mt-4 p-3.5 bg-teal-900/80 border border-teal-500/40 rounded-xl text-xs text-teal-200 space-y-2">
                <div className="font-bold text-white flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={marcPhoto}
                      alt="Marc Williamson"
                      referrerPolicy="no-referrer"
                      className="w-9 h-9 rounded-full object-cover border border-teal-400 shrink-0"
                    />
                    <div>
                      <div className="text-white font-extrabold text-xs">Marc Williamson</div>
                      <div className="text-[10px] text-teal-300">California Senior Advisor</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-teal-800 text-teal-100 px-2 py-0.5 rounded font-mono shrink-0">NMLS #1387796</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-200 font-medium">
                  <a href="tel:2099146037" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors bg-teal-950/60 p-2 rounded border border-teal-700/60">
                    <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span className="font-bold text-white">209-914-6037 Direct</span>
                  </a>
                  <a href="mailto:marcwill@goldenstatehomeloan.com" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors bg-teal-950/60 p-2 rounded border border-teal-700/60 truncate">
                    <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span className="font-bold text-white truncate">marcwill@goldenstatehomeloan.com</span>
                  </a>
                </div>
              </div>

              <button
                onClick={onOpenPreQual}
                className="w-full mt-4 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold py-3 rounded-xl border border-teal-600 transition-colors flex items-center justify-center gap-2"
              >
                <span>Check Your Exact Personalized Rate</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
