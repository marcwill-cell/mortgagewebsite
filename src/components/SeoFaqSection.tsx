import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileCheck, Shield, Zap } from 'lucide-react';

export const SeoFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS = [
    {
      q: 'How does Golden State 3rd Party Loan Processing charge, and do I have any upfront costs?',
      a: 'There are $0 upfront costs or monthly retainer subscriptions for brokers or originators. Our processing fee (Streamline $695, Standard $995, Preferred $1,195, or Elite $1,495) is disclosed on the Loan Estimate and Closing Disclosure, and is paid directly by the borrower through Title/Escrow at closing. If a loan file fails to close, you owe nothing.'
    },
    {
      q: 'Do I need to learn new software or invite borrowers into a separate portal?',
      a: 'No. Golden State 3rd Party Loan Processing integrates directly into your existing Loan Origination System (Arive, LendingPad, Encompass, Calyx Point, or Byte). We work within your existing workflows, avoiding duplicate data entry or confusing new portals for your team and clients.'
    },
    {
      q: 'Who is Marc Williamson, and what is his role in my pipeline?',
      a: 'Marc Williamson (NMLS #1387796) is our Senior Director of Lending & Mortgage Processing with over 20 years of mortgage experience. Marc oversees file pipeline velocity, provides underwriting escalation assistance, and is reachable directly via call or text at (213) 294-3747.'
    },
    {
      q: 'What types of specialized loan programs do you process besides Conventional?',
      a: 'In addition to Conventional conforming and High-Balance, we specialize in complex Non-QM (12 & 24-month bank statements, P&L, 1099, asset depletion), DSCR investor rental portfolios, FHA/VA government files, Commercial bridge, and Jumbo financing up to $4M+.'
    },
    {
      q: 'How does your team communicate with our borrowers and Realtors?',
      a: 'We act as a seamless extension of your brokerage. All emails and phone calls are conducted under your brand name or designated processing department. We provide milestone updates so you, your borrowers, and your real estate agents are never left in the dark.'
    },
    {
      q: 'Are your contract processors US-based?',
      a: 'Yes. 100% of our contract processors are based in the United States, possessing extensive experience with wholesale lender portals, automated underwriting systems (DU & LPA), and state regulatory requirements across 28+ licensed states.'
    },
    {
      q: 'Is third-party contract processing RESPA Section 8 compliant?',
      a: 'Yes, fully compliant. The Consumer Financial Protection Bureau (CFPB) and RESPA guidelines permit third-party processing fees when actual, necessary processing services are performed by an independent processing entity and disclosed on the CD.'
    }
  ];

  return (
    <section id="faq" className="py-20 border-b border-[#D4AF37]/35 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#0A0D14] border border-[#D4AF37]/50 text-xs uppercase tracking-[0.25em] text-[#F5D77F] font-semibold shadow-md">
            <span>◈</span>
            <span>Frequently Asked Questions</span>
            <span>◈</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0D14]">
            OPERATIONAL & COMPLIANCE <span className="gold-gradient-text">FAQS</span>
          </h2>
          <p className="text-sm text-slate-800 font-normal">
            Everything you need to know about partnering with Golden State 3rd Party Loan Processing and Marc Williamson.
          </p>
          <p className="text-[11px] text-slate-600 font-medium">
            Powered by 1 Touch Processing Arizona NMLS # 2337071
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="art-deco-card rounded-sm border border-[#D4AF37]/25 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#131724] transition-colors"
                >
                  <span className="font-cinzel text-sm sm:text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-slate-800/80">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
