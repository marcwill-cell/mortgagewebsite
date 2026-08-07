import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export const SeoFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the 2026 conforming loan limit in California?",
      a: "In 2026, the baseline conforming loan limit for 1-unit properties in standard California counties is $766,550. However, in designated high-cost counties (such as Los Angeles, Orange County, San Francisco, San Mateo, Santa Clara, Marin, and Alameda), the conforming limit extends up to $1,149,825. Loans exceeding these amounts qualify for Jumbo financing."
    },
    {
      q: "How much down payment do I need to buy a home in California?",
      a: "Down payment requirements vary by loan program: FHA loans require as little as 3.5% down, conventional loans start at 3% for first-time buyers, VA loans require 0% down for eligible military personnel, and Jumbo loans typically require 10% to 20% down. Down payment gift funds from family members are allowed across most programs."
    },
    {
      q: "What credit score is needed for a California mortgage?",
      a: "For conventional loans, standard qualification begins at a 620 credit score. For FHA loans, borrowers can qualify with credit scores as low as 580 (and 500-579 with 10% down). VA loans have flexible credit score requirements starting around 580. Higher credit scores (740+) unlock the lowest available interest rates."
    },
    {
      q: "Are there zero lender fee options available in California?",
      a: "Yes! Golden State Home Loan offers transparent zero-junk-fee financing. On qualifying purchase and refinance loans, we waive standard processing and underwriting lender fees, keeping your total out-of-pocket closing costs as low as possible."
    },
    {
      q: "How long does a California mortgage loan approval take?",
      a: "While traditional banks often take 30 to 45 days, our streamlined California digital platform closes standard loans in as few as 14 to 21 calendar days from contract acceptance to funding."
    },
    {
      q: "Can I qualify for a home loan in California if I am self-employed?",
      a: "Absolutely. We specialize in Bank Statement Non-QM loans designed for California entrepreneurs, business owners, 1099 contractors, and Realtors. We evaluate 12 to 24 months of bank deposits to verify income rather than relying strictly on tax returns."
    }
  ];

  return (
    <section className="py-16 bg-slate-100 text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-teal-700" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            California Mortgage Guide & FAQs
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Essential answers about home financing, loan limits, rates, and qualifications in California.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-bold text-sm sm:text-base text-slate-900 hover:text-teal-700 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-teal-700 font-extrabold">Q.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-teal-700' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SEO Article Summary */}
        <div className="mt-12 p-6 bg-white border border-slate-200 rounded-2xl space-y-3 text-xs text-slate-600 leading-relaxed shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-teal-700" />
            <span>Why Choose Golden State Home Loan as Your California Direct Mortgage Broker & Lender?</span>
          </h3>
          <p>
            California real estate demands speed, competitive pricing, and deep local market expertise. Whether you are buying a primary home in Los Angeles, a luxury condo in Orange County, a tech professional property in Silicon Valley or San Francisco, or an investment home in Sacramento or San Diego, our team provides direct wholesale rates, transparent loan calculations, and personalized guidance across every county.
          </p>
        </div>
      </div>
    </section>
  );
};
