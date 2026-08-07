import React, { useState } from 'react';
import { Phone, Shield, ArrowRight, Menu, X, ChevronRight, Calculator, FileText, Compass, Award } from 'lucide-react';

interface HeaderProps {
  onOpenPreQual: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPreQual, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-slate-800 border-b border-slate-200 shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-teal-900 text-teal-100 text-xs font-semibold py-1.5 px-4 text-center tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="bg-teal-700 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">2026 CA Limits</span>
            <span>California Conforming Limit: <strong className="text-white font-extrabold">$766,550</strong> | High-Cost Counties up to <strong className="text-white font-extrabold">$1,149,825</strong></span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-teal-200 font-medium">
            <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-teal-400" /> NMLS #1387796</span>
            <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-teal-400" /> Equal Housing Lender</span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-teal-700 flex items-center justify-center text-white shadow-md group-hover:bg-teal-800 transition-colors">
            <Compass className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-1.5 font-sans">
              GOLDEN STATE <span className="text-teal-700 font-bold text-sm bg-teal-50 px-2 py-0.5 rounded border border-teal-200">HOME LOAN</span>
            </div>
            <p className="text-[10px] text-slate-500 tracking-wider uppercase font-semibold">California Direct Mortgage Specialist</p>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <button 
            onClick={() => handleNavClick('about-marc')}
            className="hover:text-teal-700 transition-colors py-2 flex items-center gap-1 font-extrabold text-teal-800"
          >
            <span>About Marc</span>
            <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded font-bold">ADVISOR</span>
          </button>
          <button 
            onClick={() => handleNavClick('heloc')}
            className="hover:text-teal-700 transition-colors h-9 px-3 min-w-[180px] flex items-center justify-center gap-1 font-bold text-xs text-teal-900 bg-teal-50 rounded-lg border border-teal-200 whitespace-nowrap"
          >
            <span>HELOC (600 FICO)</span>
          </button>
          <button 
            onClick={() => handleNavClick('reverse-mortgage')}
            className="hover:text-emerald-700 transition-colors h-9 px-3 min-w-[180px] flex items-center justify-center gap-1 font-bold text-xs text-emerald-900 bg-emerald-50 rounded-lg border border-emerald-200 whitespace-nowrap"
          >
            <span>Reverse Mortgage (Age 55+)</span>
          </button>
          <button 
            onClick={() => handleNavClick('calculator')}
            className="hover:text-teal-700 transition-colors flex items-center gap-1 py-2"
          >
            <Calculator className="w-4 h-4 text-teal-700" />
            <span>Loan Calculator</span>
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="hover:text-teal-700 transition-colors flex items-center gap-1 py-2"
          >
            <FileText className="w-4 h-4 text-teal-700" />
            <span>Rate Quote Form</span>
          </button>
          <button 
            onClick={() => handleNavClick('programs')}
            className="hover:text-teal-700 transition-colors py-2"
          >
            Programs
          </button>
          <button 
            onClick={() => handleNavClick('county-limits')}
            className="hover:text-teal-700 transition-colors py-2"
          >
            CA Limits
          </button>
          <button 
            onClick={() => handleNavClick('ai-advisor')}
            className="hover:text-teal-700 transition-colors py-2 flex items-center gap-1"
          >
            <span>AI Rate Advisor</span>
          </button>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <a 
            href="tel:2132943747" 
            className="flex items-center gap-2.5 text-slate-700 hover:text-teal-700 transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase text-teal-800 font-extrabold tracking-wider">Speak to a Calif Advisor Marc Williamson</div>
              <div className="text-xs font-extrabold text-slate-900 tracking-tight">213-294-3747 Direct</div>
              <div className="text-[10px] text-slate-500 font-medium">marcwill@goldenstatehomeloan.com</div>
            </div>
          </a>

          <button
            onClick={onOpenPreQual}
            className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-teal-700/20 flex items-center gap-2 active:scale-95"
          >
            <span>Get Rate Quote</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenPreQual}
            className="bg-teal-700 text-white text-xs font-bold px-3 py-2 rounded-lg"
          >
            Get Quote
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('about-marc')}
            className="w-full text-left px-4 py-3 rounded-lg bg-teal-50 border border-teal-200 text-teal-900 font-extrabold flex items-center justify-between"
          >
            <span>About Marc Williamson (Calif Advisor)</span>
            <ChevronRight className="w-4 h-4 text-teal-700" />
          </button>

          <button
            onClick={() => handleNavClick('heloc')}
            className="w-full text-left px-4 py-3 rounded-lg bg-teal-900 text-white font-extrabold flex items-center justify-between"
          >
            <span>HELOC & 2nd Mortgages (Down to 600 FICO)</span>
            <ChevronRight className="w-4 h-4 text-teal-300" />
          </button>

          <button
            onClick={() => handleNavClick('reverse-mortgage')}
            className="w-full text-left px-4 py-3 rounded-lg bg-emerald-900 text-white font-extrabold flex items-center justify-between"
          >
            <span>Reverse Mortgages (Starting at Age 55+)</span>
            <ChevronRight className="w-4 h-4 text-emerald-300" />
          </button>

          <button
            onClick={() => handleNavClick('calculator')}
            className="w-full text-left px-4 py-3 rounded-lg bg-slate-50 text-slate-800 font-semibold flex items-center justify-between"
          >
            <span className="flex items-center gap-2"><Calculator className="w-4 h-4 text-teal-700" /> Integrated Loan Calculator</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-left px-4 py-3 rounded-lg bg-slate-50 text-slate-800 font-semibold flex items-center justify-between"
          >
            <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-teal-700" /> Streamlined Contact & Pre-Qual</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => handleNavClick('programs')}
            className="w-full text-left px-4 py-3 rounded-lg bg-slate-50 text-slate-800 font-semibold flex items-center justify-between"
          >
            <span>California Mortgage Programs</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => handleNavClick('county-limits')}
            className="w-full text-left px-4 py-3 rounded-lg bg-slate-50 text-slate-800 font-semibold flex items-center justify-between"
          >
            <span>CA County Conforming Limits</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => handleNavClick('ai-advisor')}
            className="w-full text-left px-4 py-3 rounded-lg bg-slate-50 text-slate-800 font-semibold flex items-center justify-between"
          >
            <span>AI Mortgage Advisor</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <div className="pt-2 border-t border-slate-100 space-y-1 px-2 text-xs text-slate-700 font-medium">
            <div className="font-extrabold text-teal-800">Speak to a Calif Advisor Marc Williamson</div>
            <div>Direct Phone: <a href="tel:2132943747" className="text-teal-700 font-bold underline">213-294-3747 Direct</a></div>
            <div>Email: <a href="mailto:marcwill@goldenstatehomeloan.com" className="text-teal-700 font-bold underline">marcwill@goldenstatehomeloan.com</a></div>
            <div className="text-[10px] text-slate-500 pt-1">NMLS #1387796 | Powered by Omni-Fund, Inc NMLS# 4869 DRE License# 0143-0833</div>
          </div>
        </div>
      )}
    </header>
  );
};
