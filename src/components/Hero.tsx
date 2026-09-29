import React from 'react';
import { MARC_PHOTO_DATA_URI } from '../data/marcPhotoDataUri';
import { Shield, Phone, Mail, ArrowRight, Zap, CheckCircle2, Award, Clock, FileSpreadsheet } from 'lucide-react';
import heroBgImage from '../assets/images/art_deco_hero_bg_1790618639084.jpg';

interface HeroProps {
  onOpenPreQual: () => void;
  onNavigateCalculator: () => void;
  onNavigatePackages?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenPreQual, 
  onNavigateCalculator,
  onNavigatePackages 
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 border-b border-[#D4AF37]/35">
      {/* Decorative Art Deco Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top of Wallpaper: Official Entity & State Licensing Registry */}
        <div className="mb-10 p-5 sm:p-6 rounded-sm bg-gradient-to-r from-[#121622]/95 via-[#0A0D14]/98 to-[#121622]/95 border-2 border-[#D4AF37]/75 shadow-2xl relative text-center">
          {/* Stepped Art Deco Corners */}
          <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

          <div className="space-y-2 mb-6">
            <div className="font-cinzel text-lg sm:text-2xl md:text-3xl font-extrabold tracking-[0.16em] text-[#F5D77F] uppercase flex items-center justify-center gap-2.5">
              <span className="text-[#D4AF37]">◈</span>
              <span>GOLDEN STATE 3RD PARTY LOAN PROCESSING</span>
              <span className="text-[#D4AF37]">◈</span>
            </div>
            <div className="text-sm sm:text-base md:text-lg font-bold text-amber-300 tracking-wider">
              Powered by 1 Touch Processing Arizona NMLS # 2337071
            </div>
          </div>

          {/* List of States in Bold - Large Size Easier to Read */}
          <div className="pt-5 border-t border-[#D4AF37]/40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3.5 text-left font-mono">
              <div className="text-white font-bold text-sm sm:text-base md:text-[17px] flex items-start gap-2 p-2.5 rounded bg-black/50 border border-[#D4AF37]/30 shadow-sm">
                <span className="text-[#D4AF37] text-xl font-black leading-none mt-0.5">•</span>
                <span><strong className="text-[#F5D77F] text-base sm:text-lg tracking-wide">AZ:</strong> Mortgage Broker License #: MB-1037930</span>
              </div>
              <div className="text-white font-bold text-sm sm:text-base md:text-[17px] flex items-start gap-2 p-2.5 rounded bg-black/50 border border-[#D4AF37]/30 shadow-sm">
                <span className="text-[#D4AF37] text-xl font-black leading-none mt-0.5">•</span>
                <span><strong className="text-[#F5D77F] text-base sm:text-lg tracking-wide">CA:</strong> LICENSE #: CA-DBO1289441</span>
              </div>
              <div className="text-white font-bold text-sm sm:text-base md:text-[17px] flex items-start gap-2 p-2.5 rounded bg-black/50 border border-[#D4AF37]/30 shadow-sm">
                <span className="text-[#D4AF37] text-xl font-black leading-none mt-0.5">•</span>
                <span><strong className="text-[#F5D77F] text-base sm:text-lg tracking-wide">CO:</strong> LICENSE #: 100535928</span>
              </div>
              <div className="text-white font-bold text-sm sm:text-base md:text-[17px] flex items-start gap-2 p-2.5 rounded bg-black/50 border border-[#D4AF37]/30 shadow-sm">
                <span className="text-[#D4AF37] text-xl font-black leading-none mt-0.5">•</span>
                <span><strong className="text-[#F5D77F] text-base sm:text-lg tracking-wide">FL:</strong> License #: LO113558 | FL License #: LO114744</span>
              </div>
              <div className="text-white font-bold text-sm sm:text-base md:text-[17px] flex items-start gap-2 p-2.5 rounded bg-black/50 border border-[#D4AF37]/30 shadow-sm">
                <span className="text-[#D4AF37] text-xl font-black leading-none mt-0.5">•</span>
                <span><strong className="text-[#F5D77F] text-base sm:text-lg tracking-wide">IL:</strong> License #: EEP.0000049</span>
              </div>
              <div className="text-white font-bold text-sm sm:text-base md:text-[17px] flex items-start gap-2 p-2.5 rounded bg-black/50 border border-[#D4AF37]/30 shadow-sm">
                <span className="text-[#D4AF37] text-xl font-black leading-none mt-0.5">•</span>
                <span><strong className="text-[#F5D77F] text-base sm:text-lg tracking-wide">MI:</strong> License # 2337071</span>
              </div>
              <div className="text-white font-bold text-sm sm:text-base md:text-[17px] flex items-start gap-2 p-2.5 rounded bg-black/50 border border-[#D4AF37]/30 shadow-sm">
                <span className="text-[#D4AF37] text-xl font-black leading-none mt-0.5">•</span>
                <span><strong className="text-[#F5D77F] text-base sm:text-lg tracking-wide">OK:</strong> License #: MB016515</span>
              </div>
              <div className="text-white font-bold text-sm sm:text-base md:text-[17px] flex items-start gap-2 p-2.5 rounded bg-black/50 border border-[#D4AF37]/30 shadow-sm">
                <span className="text-[#D4AF37] text-xl font-black leading-none mt-0.5">•</span>
                <span><strong className="text-[#F5D77F] text-base sm:text-lg tracking-wide">PA:</strong> PA License #: 112928</span>
              </div>
              <div className="text-white font-bold text-sm sm:text-base md:text-[17px] flex items-start gap-2 p-2.5 rounded bg-black/50 border border-[#D4AF37]/30 shadow-sm">
                <span className="text-[#D4AF37] text-xl font-black leading-none mt-0.5">•</span>
                <span><strong className="text-[#F5D77F] text-base sm:text-lg tracking-wide">TX:</strong> TX SML Licensed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Art Deco Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#0A0D14] border border-[#D4AF37]/50 text-xs uppercase tracking-[0.2em] text-[#F5D77F] font-bold shadow-md">
              <span className="text-[#D4AF37]">◈</span>
              <span>Wholesale &amp; Broker Contract Processing Solutions</span>
              <span className="text-[#D4AF37]">◈</span>
            </div>

            {/* Stately Art Deco Headline */}
            <div className="space-y-2">
              <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0D14] leading-[1.15]">
                CLOSE MORE LOANS. <br />
                <span className="gold-gradient-text">ZERO OVERHEAD.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-800 font-normal max-w-2xl leading-relaxed">
                The premier third-party contract processing engine for mortgage brokers, loan officers, and wholesale lenders. Golden State 3rd Party Loan Processing integrates directly into your LOS—<strong className="text-[#8C650A] font-semibold">Arive, LendingPad, Encompass</strong>—delivering faster condition clearing, zero fixed payroll, and flawless closings.
              </p>
            </div>

            {/* Why going with a smaller boutique 3rd party processor versus a gargantuan processing firm */}
            <div className="relative p-5 sm:p-6 rounded-sm bg-gradient-to-br from-[#121622]/95 via-[#0D1017]/95 to-[#161C2A]/95 border-2 border-[#D4AF37]/60 shadow-2xl my-3 max-w-2xl text-left">
              {/* Stepped Art Deco Corners */}
              <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

              <div className="border-b border-[#D4AF37]/30 pb-2.5 mb-3.5">
                <h3 className="font-cinzel text-sm sm:text-base font-bold tracking-wide text-[#F5D77F] leading-snug">
                  Why going with a smaller boutique 3rd party processor versus a gargantuan processing firm is better for you as a loan officer/broker:
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                <p className="text-amber-200 font-semibold leading-relaxed">
                  Based out of Monterey, California, I work through a smaller elite processing company called 1 Touch Processing out of Arizona:
                </p>

                <p className="text-slate-300 font-semibold leading-relaxed">
                  The benefits to you of working with a smaller elite processing company versus working with a large gargantuan processing company:
                </p>

                <div className="space-y-2.5 pt-1">
                  <div className="p-3 rounded-sm bg-[#0E121A] border border-slate-700/60 leading-relaxed text-slate-300">
                    <span className="text-white font-semibold">Processors make only about 45% of the commission with large processing companies.</span> This means they have to carry a monster pipeline of 15-20 files to make a decent living. That means it can be tough for the processor to pick up the phone and keep up. Work life balance is non-existent.
                  </div>

                  <div className="p-3 rounded-sm bg-[#091510] border border-emerald-500/50 leading-relaxed text-slate-100">
                    <strong className="text-[#F5D77F] font-bold text-sm block mb-1">
                      I cap my pipeline to 7-8 loans a month for a far better work life balance!
                    </strong>
                    <span className="text-emerald-200 font-medium">
                      (Making the majority of the commission makes a huge difference with availability for the LO, Borrowers, and Lenders!)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onOpenPreQual}
                className="px-6 py-3.5 rounded-sm font-cinzel font-bold text-xs uppercase tracking-[0.16em] text-[#0A0D14] gold-gradient-bg hover:brightness-110 shadow-xl transition-all flex items-center gap-2 border border-[#F5D77F]/60"
              >
                <span>Submit Loan File for Processing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateCalculator}
                className="px-5 py-3.5 rounded-sm font-semibold text-xs tracking-wider text-slate-200 bg-[#121622] hover:bg-[#1A2030] border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-all flex items-center gap-2"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#D4AF37]" />
                <span>Calculate Broker Savings</span>
              </button>
            </div>

            {/* Key Value Metadata Strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-800 font-medium pt-3 border-t border-[#D4AF37]/30">
              <div className="flex items-center gap-1.5 text-[#8C650A]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-semibold">$0 Upfront Cost (Paid at Closing)</span>
              </div>
              <span className="text-slate-400 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% US-Based Processors</span>
              </div>
              <span className="text-slate-400 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Licensed in AZ, CA, CO, FL, IL, MI, OK, PA &amp; TX</span>
              </div>
            </div>

          </div>

          {/* Right Column: Art Deco Executive Card for Marc Williamson */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md art-deco-card p-6 sm:p-7 rounded-sm shadow-2xl">
              
              {/* Stepped Art Deco Corners */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]/70" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]/70" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]/70" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]/70" />

              {/* Photo Lockup */}
              <div className="relative mx-auto w-44 h-44 sm:w-48 sm:h-48 mb-5">
                {/* Metallic Gold Ring */}
                <div className="absolute inset-0 rounded-full p-1.5 gold-gradient-bg shadow-xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0D14] border-2 border-[#0A0D14]">
                    <img
                      src={MARC_PHOTO_DATA_URI}
                      alt="Marc Williamson - Senior Loan Processor & Main Contact"
                      className="w-full h-full object-cover object-top filter contrast-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Status Dot */}
                <div className="absolute bottom-1 right-2 bg-[#090C10] border border-[#D4AF37]/60 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-[#F5D77F] shadow flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available Now</span>
                </div>
              </div>

              {/* Executive Metadata */}
              <div className="text-center space-y-1.5">
                <div className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#D4AF37]">
                  Senior Loan Processor & Main Contact
                </div>
                <h2 className="font-cinzel text-2xl font-bold tracking-tight text-white">
                  MARC WILLIAMSON
                </h2>
                <div className="text-xs text-slate-300 font-medium flex items-center justify-center gap-2">
                  <span>NMLS #1387796</span>
                  <span className="text-[#D4AF37]">·</span>
                  <span>20+ Yrs Lending & Processing</span>
                </div>
                <div className="text-[11px] text-amber-200/90 font-medium">
                  Golden State 3rd Party Loan Processing
                </div>
                <div className="text-[9px] text-slate-400">
                  Powered by 1 Touch Processing Arizona NMLS # 2337071
                </div>
                <p className="text-xs text-slate-400 italic pt-1 max-w-xs mx-auto">
                  &ldquo;I personally ensure your loan files are scrubbed, submitted, and cleared to close with unprecedented speed.&rdquo;
                </p>
              </div>

              {/* Direct Communication Channels */}
              <div className="mt-5 space-y-2.5 pt-4 border-t border-[#D4AF37]/25 text-xs">
                <a
                  href="tel:2132943747"
                  className="flex items-center justify-between p-2.5 rounded-sm bg-[#121622] hover:bg-[#1A2030] border border-slate-800 hover:border-[#D4AF37]/50 text-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Direct Cell / Call & Text</span>
                      <span className="font-semibold text-white group-hover:text-[#F5D77F] transition-colors">(213) 294-3747</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">Dial ➔</span>
                </a>

                <a
                  href="mailto:marc@goldenstatehomeloan.com"
                  className="flex items-center justify-between p-2.5 rounded-sm bg-[#121622] hover:bg-[#1A2030] border border-slate-800 hover:border-[#D4AF37]/50 text-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Direct Email Address</span>
                      <span className="font-semibold text-white group-hover:text-[#F5D77F] transition-colors">marc@goldenstatehomeloan.com</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">Send ➔</span>
                </a>
              </div>

              {/* ◈ The Processor Commitment · Direct From Marc Williamson ◈ */}
              <div className="mt-4 p-4 rounded-sm bg-[#0A0D15] border border-[#D4AF37]/50 text-left relative shadow-lg">
                <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#F5D77F] border-b border-[#D4AF37]/30 pb-2 mb-3 text-center">
                  <span className="text-[#D4AF37]">◈</span>
                  <span>The Processor Commitment · Direct From Marc Williamson</span>
                  <span className="text-[#D4AF37]">◈</span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] shrink-0 mt-0.5">
                      <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </div>
                    <span className="leading-snug">
                      <strong className="text-white">I provide &ldquo;Johnny on the Spot Responses&rdquo;</strong> to your calls, texts, and emails as your Processor.
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] shrink-0 mt-0.5">
                      <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </div>
                    <span className="leading-snug">
                      <strong className="text-white">I am paid out of Section B</strong> on your closing disclosures. <span className="text-amber-200 font-medium">(Not out of your commission unless you choose to)</span>
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </div>
                    <span className="leading-snug">
                      <strong className="text-white">All work is here in the USA.</strong> <span className="text-slate-300">(I don&apos;t farm any of it out overseas in any way as some large processing firms have.)</span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Consultation Trigger */}
              <button
                onClick={onOpenPreQual}
                className="mt-4 w-full py-2.5 rounded-sm bg-gradient-to-r from-[#202738] to-[#141824] hover:from-[#283248] hover:to-[#1C2232] border border-[#D4AF37]/40 text-amber-200 font-cinzel font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Book Pipeline Review With Marc</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
