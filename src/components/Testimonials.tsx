import React from 'react';
import { Star, Quote, CheckCircle2, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const REVIEWS = [
    {
      id: 'r1',
      name: 'Suzanne Downer',
      role: 'Refinance & Rate Reduction Client',
      location: 'California',
      quote: 'My experience was easy and convenient. Everything was done online and Marc Williamson was the loan officer I dealt with. He was quick to respond to any questions I had and I had many many questions. He made the process go smoothly. I was able to refinance, shave six years off my loan, and bring my rate down almost 3 points. Truly pleased I went with Marc Williamson!',
      outcome: 'Reduced Rate by ~3 Points · Shaved 6 Years Off Debt'
    },
    {
      id: 'r2',
      name: 'Loyd Schonmaker',
      role: 'Homeowner Refinance Client',
      location: 'California',
      quote: 'Marc Williamson handled our complex home refinancing and equity extraction seamlessly! He did an outstanding job working to get the best terms possible. If you are looking for someone knowledgeable, patient, and completely on the ball, definitely go with Marc!',
      outcome: 'Maximized Equity Access · Seamless Closing'
    },
    {
      id: 'r3',
      name: 'Gregory Bennett',
      role: 'Managing Broker, Apex Capital',
      location: 'Irvine, CA',
      quote: 'Outsourcing our pipeline to Golden State 3rd Party Loan Processing and Marc Williamson cut our average closing turnaround from 32 days down to 16 days. His team cleared conditions directly with Arive before underwriters even asked. It saved us an entire salary and eliminated closing stress.',
      outcome: '50% Faster Turnaround · $85K Fixed Payroll Saved'
    },
    {
      id: 'r4',
      name: 'Elena Rostova',
      role: 'Senior Originator, Sunbelt Funding',
      location: 'Tampa, FL',
      quote: 'Marc and the Golden State processing team processed our Non-QM bank statement files and DSCR investor loans when our prior processing staff threw up their hands. The files were pristine, borrowers were thrilled, and we closed 7 additional loans this quarter alone.',
      outcome: '7 Extra Closed Loans · Zero Out-of-Pocket Cost'
    }
  ];

  return (
    <section id="reviews" className="py-20 border-b border-[#D4AF37]/35 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#0A0D14] border border-[#D4AF37]/50 text-xs uppercase tracking-[0.25em] text-[#F5D77F] font-semibold shadow-md">
            <span>◈</span>
            <span>Proven Track Record · Real Results</span>
            <span>◈</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0D14]">
            WHAT PARTNERS & CLIENTS <span className="gold-gradient-text">SAY ABOUT MARC</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-normal">
            Verified endorsements from retail borrowers, mortgage brokers, and top originators working directly with Marc Williamson and Golden State 3rd Party Loan Processing.
          </p>
          <p className="text-[11px] text-slate-600 font-medium">
            Powered by 1 Touch Processing Arizona NMLS # 2337071
          </p>
        </div>

        {/* 2x2 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="art-deco-card rounded-sm p-6 sm:p-8 flex flex-col justify-between border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#D4AF37]/15 pointer-events-none" />

              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between gap-3 border-b border-[#D4AF37]/15 pb-4 mb-4">
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-white">
                      {rev.name}
                    </h3>
                    <div className="text-xs text-slate-400">
                      {rev.role} · <span className="text-[#D4AF37]">{rev.location}</span>
                    </div>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex text-[#F5D77F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Outcome Strip (Unboxed Clean Metadata) */}
              <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] text-amber-200/90 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{rev.outcome}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
