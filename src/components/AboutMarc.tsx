import React from 'react';
import { MARC_PHOTO_DATA_URI } from '../data/marcPhotoDataUri';
import { Shield, Phone, Mail, Award, CheckCircle2, ArrowRight, Building2, Zap, Clock } from 'lucide-react';
import deskImage from '../assets/images/art_deco_closing_desk_1790618664377.jpg';

interface AboutMarcProps {
  onOpenPreQual: () => void;
}

export const AboutMarc: React.FC<AboutMarcProps> = ({ onOpenPreQual }) => {
  return (
    <section id="about-marc" className="py-20 border-b border-[#D4AF37]/35 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#0A0D14] border border-[#D4AF37]/50 text-xs uppercase tracking-[0.25em] text-[#F5D77F] font-semibold shadow-md">
            <span>◈</span>
            <span>Executive Leadership · Dedicated Broker Advocate</span>
            <span>◈</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0D14]">
            MEET MARC WILLIAMSON <span className="gold-gradient-text">· SENIOR DIRECTOR</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-normal">
            With over 20 years of mortgage lending and contract processing leadership, Marc Williamson serves as your direct operations partner, scaling brokerages and originators nationwide.
          </p>
        </div>

        {/* Art Deco Profile Dossier */}
        <div className="art-deco-card rounded-sm p-6 sm:p-10 border border-[#D4AF37]/35 shadow-2xl relative max-w-5xl mx-auto">
          
          {/* Stepped Art Deco Corners */}
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D4AF37]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Marc's Portrait in Art Deco Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-xs">
                {/* Gold Glow Aura */}
                <div className="absolute -inset-1 gold-gradient-bg rounded-sm blur-sm opacity-30 group-hover:opacity-60 transition duration-300" />
                
                {/* Main Frame */}
                <div className="relative rounded-sm overflow-hidden border-2 border-[#D4AF37] bg-[#0A0D14] shadow-2xl">
                  <img
                    src={MARC_PHOTO_DATA_URI}
                    alt="Marc Williamson - Senior Loan Processor & Main Contact"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 object-cover object-top filter contrast-105"
                  />
                  
                  {/* Bottom Overlay Plate */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#080A0E] via-[#080A0E]/90 to-transparent p-4 text-center">
                    <span className="font-cinzel text-base font-bold text-white block">
                      MARC WILLIAMSON
                    </span>
                    <span className="text-[11px] text-[#F5D77F] font-semibold uppercase tracking-widest block">
                      Senior Loan Processor & Main Contact
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">
                      NMLS #1387796 · DRE #0143-0833
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Trust Badges */}
              <div className="mt-4 p-3 rounded-sm bg-[#121622] border border-[#D4AF37]/25 w-full max-w-xs text-center">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-200">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>20+ Years Mortgage Industry Mastery</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  California Specialist & Nationwide Processing Partner
                </div>
              </div>
            </div>

            {/* Right: Bio & Partnership Strengths */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-1">
                  Your Dedicated Executive Contact · Golden State 3rd Party Loan Processing
                </span>
                <div className="text-[10px] text-slate-400 font-normal mb-1">
                  Powered by 1 Touch Processing Arizona NMLS # 2337071
                </div>
                <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                  &ldquo;I approach every loan with meticulous, personal attention so your borrowers will come back to you again and again!&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light mt-3 leading-relaxed">
                  Marc Williamson is Golden State 3rd Party Loan Processing's specialized Senior Processor. Whether you are an independent mortgage broker, top-producing branch manager, or direct retail lender, Marc provides high-touch operational expertise that clears underwriting bottlenecks before they occur.
                </p>
              </div>

              {/* Direct Call & Email Card */}
              <div className="p-4 sm:p-5 rounded-sm bg-gradient-to-r from-[#141926] to-[#0E121C] border border-[#D4AF37]/40 shadow-lg space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-[#D4AF37]/20 pb-2">
                  <span className="text-[#F5D77F] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Direct Priority Line
                  </span>
                  <span className="text-[10px] text-slate-400">Available Mon-Sat</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href="tel:2132943747"
                    className="p-3 rounded-sm bg-[#090C12] hover:bg-[#121622] border border-slate-800 hover:border-[#D4AF37]/60 transition-all flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Direct Cell / Call & Text</span>
                      <strong className="text-xs text-white group-hover:text-[#F5D77F] transition-colors font-mono">(213) 294-3747</strong>
                    </div>
                  </a>

                  <a
                    href="mailto:marc@goldenstatehomeloan.com"
                    className="p-3 rounded-sm bg-[#090C12] hover:bg-[#121622] border border-slate-800 hover:border-[#D4AF37]/60 transition-all flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Direct Email Address</span>
                      <strong className="text-xs text-white group-hover:text-[#F5D77F] transition-colors truncate block max-w-[200px]">marc@goldenstatehomeloan.com</strong>
                    </div>
                  </a>
                </div>
              </div>

              {/* Four Pillar Highlights */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                <div className="p-2.5 rounded-sm bg-[#10141D] border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Non-QM & DSCR Investor Specialty</span>
                </div>
                <div className="p-2.5 rounded-sm bg-[#10141D] border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>$0 Upfront Broker Cost</span>
                </div>
                <div className="p-2.5 rounded-sm bg-[#10141D] border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>24-Hour Condition Turnaround</span>
                </div>
                <div className="p-2.5 rounded-sm bg-[#10141D] border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Jumbo & Super Jumbo ($4M+)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onOpenPreQual}
                  className="px-6 py-3 rounded-sm font-cinzel font-bold text-xs uppercase tracking-wider text-[#0A0D14] gold-gradient-bg hover:brightness-110 shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Connect With Marc & Submit Scenario</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:2132943747"
                  className="px-5 py-3 rounded-sm font-semibold text-xs text-slate-200 bg-[#121622] hover:bg-[#1A2030] border border-[#D4AF37]/35 transition-all flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call (213) 294-3747</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
