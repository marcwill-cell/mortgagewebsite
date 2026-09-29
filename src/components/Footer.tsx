import React from 'react';
import { Shield, Award, Phone, Mail, MapPin, Zap } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (id: string) => void;
  onOpenPreQual: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenPreQual }) => {
  return (
    <footer className="bg-[#06080B] text-slate-400 text-xs border-t border-[#D4AF37]/25 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-[#D4AF37]/50 rounded-sm bg-[#121622] flex items-center justify-center text-[#D4AF37] font-cinzel font-bold text-base shrink-0">
                  GS
                </div>
                <span className="font-cinzel text-base sm:text-lg font-bold text-white tracking-[0.12em] leading-tight">
                  GOLDEN STATE <span className="gold-gradient-text block sm:inline">3RD PARTY LOAN PROCESSING</span>
                </span>
              </div>
              <div className="text-[10px] text-amber-200/90 font-medium tracking-wide mt-1 pl-12">
                Powered by 1 Touch Processing Arizona NMLS # 2337071
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-light">
              Premier third-party contract mortgage processing for mortgage brokers, loan officers, and lenders. Integrated natively into Arive, LendingPad, and Encompass with $0 upfront cost.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-slate-300 text-xs pt-1">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" /> 
                <span>NMLS #1387796</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" /> 
                <span>Equal Housing Opportunity</span>
              </span>
            </div>
          </div>

          {/* Nav: Solutions */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-cinzel text-xs font-bold uppercase tracking-wider text-white">
              Processing
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('packages')} className="hover:text-[#D4AF37] transition-colors">
                  Processing Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('workflow')} className="hover:text-[#D4AF37] transition-colors">
                  How It Works (LOS)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('loan-types')} className="hover:text-[#D4AF37] transition-colors">
                  Loan Programs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('state-intel')} className="hover:text-[#D4AF37] transition-colors">
                  State-By-State Intel
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('calculator')} className="hover:text-[#D4AF37] transition-colors">
                  Overhead Savings ROI
                </button>
              </li>
            </ul>
          </div>

          {/* Nav: Specialized Products */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-cinzel text-xs font-bold uppercase tracking-wider text-white">
              Specialized Programs
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('loan-types')} className="hover:text-[#D4AF37] text-amber-200 transition-colors flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#D4AF37]" />
                  <span>Jumbo & High-Balance</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('loan-types')} className="hover:text-[#D4AF37] transition-colors">
                  FHA, VA & USDA Government
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('loan-types')} className="hover:text-[#D4AF37] transition-colors">
                  Non-QM Bank Statements
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('loan-types')} className="hover:text-[#D4AF37] transition-colors">
                  DSCR Real Estate Investor
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('reviews')} className="hover:text-[#D4AF37] transition-colors">
                  Broker Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Executive Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-cinzel text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </div>
            <div className="p-4 rounded-sm bg-[#0E121A] border border-[#D4AF37]/30 space-y-2">
              <div className="text-white font-semibold text-xs flex items-center justify-between">
                <span>Marc Williamson</span>
                <span className="text-[10px] text-[#F5D77F] uppercase tracking-wider">Senior Loan Processor</span>
              </div>
              <div className="text-slate-400 text-xs">
                California License · Nationwide Processing Support
              </div>
              <div className="pt-2 border-t border-slate-800 space-y-1.5">
                <a
                  href="tel:2132943747"
                  className="flex items-center gap-2 text-slate-200 hover:text-[#F5D77F] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="font-mono font-semibold">(213) 294-3747 Direct Cell</span>
                </a>
                <a
                  href="mailto:marc@goldenstatehomeloan.com"
                  className="flex items-center gap-2 text-slate-200 hover:text-[#F5D77F] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[11px] truncate">marc@goldenstatehomeloan.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimers */}
        <div className="pt-8 border-t border-slate-900 text-[11px] text-slate-500 space-y-3 leading-relaxed">
          <p>
            <strong>Regulatory &amp; Compliance Disclosure:</strong> Golden State 3rd Party Loan Processing provides independent third-party contract mortgage loan processing services pursuant to applicable federal and state mortgage licensing laws and RESPA Section 8. Processing fees are disclosed on the Loan Estimate (LE) and Closing Disclosure (CD) and collected at closing through Title/Escrow. Marc Williamson (NMLS #1387796, CA DRE #0143-0833). Equal Housing Opportunity.
          </p>
          <div className="p-3 rounded-sm bg-[#0B0E14] border border-[#D4AF37]/25 text-[10px] text-slate-400 font-mono leading-relaxed">
            <strong className="text-amber-200">State Licensing Directory:</strong> 1 Touch Processing LLC | NMLS#: 2337071 | AZ Mortgage Broker License #: MB-1037930 | CA LICENSE #: CA-DBO1289441 | CO LICENSE #: 100535928 | FL License #: LO113558 | FL License #: LO114744 | IL License #: EEP.0000049 | MI License # 2337071 | OK License #: MB016515 | PA License #: 112928 | TX SML Licensed
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between text-slate-600 text-[10px] gap-2 pt-1">
            <span>© {new Date().getFullYear()} Golden State 3rd Party Loan Processing. All rights reserved. Powered by 1 Touch Processing Arizona NMLS # 2337071.</span>
            <span>Licensed in AZ, CA, CO, FL, IL, MI, OK, PA &amp; TX</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
