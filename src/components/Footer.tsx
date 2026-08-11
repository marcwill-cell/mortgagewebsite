import React from 'react';
import { Compass, Shield, Award, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (id: string) => void;
  onOpenPreQual: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenPreQual }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-teal-700 flex items-center justify-center text-white font-bold shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">GOLDEN STATE HOME LOAN</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Direct California mortgage lender providing competitive rates, fast 14-day approvals, and zero-junk-fee home purchase and refinance options across all 58 California counties.
            </p>
            <div className="flex items-center gap-3 text-slate-300 font-semibold text-xs">
              <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-teal-400" /> NMLS #1387796</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-teal-400" /> Equal Housing Lender</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Loan Calculators</div>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigateSection('calculator')} className="hover:text-teal-400 transition-colors">Mortgage Calculator</button></li>
              <li><button onClick={() => onNavigateSection('calculator')} className="hover:text-teal-400 transition-colors">Home Affordability</button></li>
              <li><button onClick={() => onNavigateSection('calculator')} className="hover:text-teal-400 transition-colors">Refinance Savings</button></li>
              <li><button onClick={() => onNavigateSection('county-limits')} className="hover:text-teal-400 transition-colors">2026 CA County Limits</button></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">California Programs</div>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigateSection('programs')} className="hover:text-teal-400 transition-colors">Conventional Loans</button></li>
              <li><button onClick={() => onNavigateSection('programs')} className="hover:text-teal-400 transition-colors">FHA Home Financing</button></li>
              <li><button onClick={() => onNavigateSection('programs')} className="hover:text-teal-400 transition-colors">VA 0% Down Loans</button></li>
              <li><button onClick={() => onNavigateSection('programs')} className="hover:text-teal-400 transition-colors">Jumbo & High-Cost Tiers</button></li>
              <li><button onClick={() => onNavigateSection('programs')} className="hover:text-teal-400 transition-colors">DSCR Investor Loans</button></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Speak to a Calif Advisor</div>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="font-bold text-teal-300">Marc Williamson</div>
              <a href="tel:2099146037" className="flex items-center gap-2 hover:text-teal-400 transition-colors font-semibold">
                <Phone className="w-3.5 h-3.5 text-teal-400" /> 209-914-6037 Direct
              </a>
              <a href="mailto:marcwill@goldenstatehomeloan.com" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-teal-400" /> marcwill@goldenstatehomeloan.com
              </a>
              <div className="text-[11px] text-slate-400">
                NMLS #1387796
              </div>
              <div className="flex items-start gap-2 text-[11px] text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>Headquarters: 100 Wilshire Blvd, Suite 1200, Santa Monica, CA 90401</span>
              </div>
            </div>
          </div>
        </div>

        {/* NMLS & Legal Disclosures */}
        <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500 space-y-3 leading-relaxed">
          <p>
            <strong>Licensing & Legal Compliance:</strong> Golden State Home Loan LLC. NMLS Unique Identifier #1387796. Licensed by the California Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. Equal Housing Lender. All rights reserved.
          </p>
          <p>
            <strong>Rate & APR Disclosures:</strong> Interest rates and APRs quoted are for informational purposes only, subject to market volatility, credit approval, underwriting guidelines, and property valuation. Advertised 30-Year Fixed rates assume a conforming loan amount of $650,000, 740 credit score, and 20% down payment unless stated otherwise.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 text-slate-400 pt-3 border-t border-slate-800">
            <span>© {new Date().getFullYear()} Golden State Home Loan. All Rights Reserved.</span>
            <div className="flex gap-4 text-[11px]">
              <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy: Golden State Home Loan respects consumer data privacy. We do not sell personal financial information.'); }} className="hover:underline">Privacy Policy</a>
              <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Use: All mortgage calculations provided are estimates for planning purposes.'); }} className="hover:underline">Terms of Use</a>
              <a href="#nmls" onClick={(e) => { e.preventDefault(); window.open('https://www.nmlsconsumeraccess.org', '_blank'); }} className="hover:underline flex items-center gap-1">NMLS Consumer Access <ExternalLink className="w-3 h-3" /></a>
            </div>
          </div>

          {/* Very bottom Powered By Banner */}
          <div className="pt-4 border-t border-slate-800/80 text-center text-xs font-bold text-slate-300 tracking-wide bg-slate-900/60 py-3 rounded-xl border border-slate-800">
            <span>Powered by Omni-Fund, Inc NMLS# 4869 DRE License# 0143-0833</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
