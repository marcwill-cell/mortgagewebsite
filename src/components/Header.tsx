import React, { useState } from 'react';
import { Phone, Shield, ArrowRight, Menu, X, ChevronRight, Calculator, FileText, Zap } from 'lucide-react';

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
    <header className="sticky top-0 z-40 bg-[#090C10]/95 backdrop-blur-md text-slate-100 border-b border-[#D4AF37]/25 shadow-2xl">
      {/* Top Gilded Ribbon */}
      <div className="bg-[#0D1017] border-b border-[#D4AF37]/15 text-xs py-1.5 px-4 text-center tracking-wider text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 text-[11px] sm:text-xs">
            <span className="text-[#D4AF37] font-semibold uppercase tracking-widest flex items-center gap-1">
              <span className="text-[10px]">◈</span> GOLDEN STATE 3RD PARTY LOAN PROCESSING
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="text-[10px] text-amber-200/90 hidden sm:inline font-normal">Powered by 1 Touch Processing Arizona NMLS # 2337071</span>
            <span className="text-[#D4AF37] font-medium hidden lg:inline">· $0 Upfront Overhead</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-slate-300 text-xs font-medium">
            <a 
              href="tel:2132943747"
              className="flex items-center gap-1.5 text-amber-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span className="font-semibold">(213) 294-3747</span>
            </a>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>NMLS #1387796</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar - Strict 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 border border-[#D4AF37]/50 rounded-sm bg-gradient-to-br from-[#1A1F2B] to-[#0A0D14] flex items-center justify-center text-[#D4AF37] shadow-lg group-hover:border-[#D4AF37] transition-all shrink-0">
            <span className="font-cinzel text-base font-bold tracking-tighter">GS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-sm sm:text-base lg:text-lg font-bold tracking-[0.12em] text-white group-hover:text-[#F5D77F] transition-colors leading-tight">
              GOLDEN STATE <span className="gold-gradient-text">3RD PARTY LOAN PROCESSING</span>
            </span>
            <span className="text-[10px] tracking-normal text-slate-300 font-normal">
              Powered by 1 Touch Processing Arizona NMLS # 2337071
            </span>
          </div>
        </div>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button 
            onClick={() => handleNavClick('packages')}
            className="hover:text-[#D4AF37] transition-colors tracking-wide cursor-pointer"
          >
            Packages
          </button>
          <button 
            onClick={() => handleNavClick('workflow')}
            className="hover:text-[#D4AF37] transition-colors tracking-wide cursor-pointer"
          >
            How It Works
          </button>
          <button 
            onClick={() => handleNavClick('loan-types')}
            className="hover:text-[#D4AF37] transition-colors tracking-wide cursor-pointer"
          >
            Loan Types
          </button>
          <button 
            onClick={() => handleNavClick('state-intel')}
            className="hover:text-[#D4AF37] transition-colors tracking-wide cursor-pointer"
          >
            State Intel
          </button>
          <button 
            onClick={() => handleNavClick('calculator')}
            className="hover:text-[#D4AF37] transition-colors tracking-wide cursor-pointer"
          >
            Overhead Calculator
          </button>
          <button 
            onClick={() => handleNavClick('about-marc')}
            className="hover:text-[#D4AF37] transition-colors tracking-wide cursor-pointer flex items-center gap-1 text-amber-200/90"
          >
            <span>Marc Williamson</span>
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">

          {/* Primary CTA button */}
          <button
            onClick={onOpenPreQual}
            className="relative px-5 py-2.5 rounded-sm font-semibold text-xs uppercase tracking-[0.15em] text-[#0A0D14] gold-gradient-bg hover:brightness-110 shadow-lg transition-all flex items-center gap-1.5 border border-[#F5D77F]/60"
          >
            <span>Submit Loan / Partner</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#141822] rounded-sm transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D4AF37]/20 bg-[#090C10] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-300 pb-2 border-b border-slate-800">
            <button
              onClick={() => handleNavClick('packages')}
              className="p-2.5 text-left rounded bg-[#10141D] hover:text-[#D4AF37] border border-slate-800"
            >
              Packages & Fees
            </button>
            <button
              onClick={() => handleNavClick('workflow')}
              className="p-2.5 text-left rounded bg-[#10141D] hover:text-[#D4AF37] border border-slate-800"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('loan-types')}
              className="p-2.5 text-left rounded bg-[#10141D] hover:text-[#D4AF37] border border-slate-800"
            >
              Loan Programs
            </button>
            <button
              onClick={() => handleNavClick('state-intel')}
              className="p-2.5 text-left rounded bg-[#10141D] hover:text-[#D4AF37] border border-slate-800"
            >
              State-By-State Intel
            </button>
            <button
              onClick={() => handleNavClick('calculator')}
              className="p-2.5 text-left rounded bg-[#10141D] hover:text-[#D4AF37] border border-slate-800"
            >
              Overhead Savings
            </button>
            <button
              onClick={() => handleNavClick('about-marc')}
              className="p-2.5 text-left rounded bg-[#10141D] text-amber-200 border border-[#D4AF37]/30"
            >
              About Marc Williamson
            </button>
          </div>


          {/* Mobile Primary Submit */}
          <button
            onClick={() => {
              onOpenPreQual();
              setMobileMenuOpen(false);
            }}
            className="w-full py-3 rounded text-xs font-bold uppercase tracking-widest text-[#0A0D14] gold-gradient-bg flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Submit File / Partner Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-2 text-center text-xs text-slate-400 flex flex-col items-center justify-center gap-1">
            <div className="text-[10px] text-amber-200/90 font-normal">
              Powered by 1 Touch Processing Arizona NMLS # 2337071
            </div>
            <div className="flex items-center justify-center gap-3">
              <a href="tel:2132943747" className="text-amber-200 font-semibold hover:underline">
                Call Marc: (213) 294-3747
              </a>
              <span>·</span>
              <span>NMLS #1387796</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
