import React from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';
import marcPhoto from '../assets/images/marc_williamson_final_1786123870939.jpg';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-slate-50 border-t border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-sm">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Client Spotlight Reviews
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Review 1: Suzanne Downer */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl relative flex flex-col justify-between">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-teal-800 text-white font-extrabold text-lg flex items-center justify-center shrink-0 border-2 border-teal-500 shadow-sm">
                    SD
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">Suzanne Downer</h3>
                    <div className="text-xs text-slate-500 font-medium">Refinance Borrower</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-700 text-sm leading-relaxed italic font-medium">
                "My experience was easy and convenient. Everything was done online and Marc Williamson was the loan officer I dealt with. He was quick to respond to any questions I had and I had many many questions. He was kind and patient And made the process go very smoothly. I was able to refinance, take six years off my original loan, and bring my interest-rate down almost 3 points from what it was. I am pleased that I went with Marc Williamson!"
              </p>
            </div>

            {/* Highlights pills */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 text-[11px]">
              <span className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md">
                ⚡ Reduced Rate by ~3 Points
              </span>
              <span className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md">
                ⏱️ Shaved 6 Years Off Loan
              </span>
            </div>
          </div>

          {/* Review 2: Loyd Schonmaker */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl relative flex flex-col justify-between">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-800 text-white font-extrabold text-lg flex items-center justify-center shrink-0 border-2 border-emerald-500 shadow-sm">
                    LS
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">Loyd Schonmaker</h3>
                    <div className="text-xs text-slate-500 font-medium">2x Reverse Mortgage Client</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-700 text-sm leading-relaxed italic font-medium">
                "Marc Williamson refinanced our home into a Reverse Mortgage twice! He did an outstanding job working to get the most cash out possible. If you are looking for someone knowledgeable, and on the ball, definitely go with Marc!"
              </p>
            </div>

            {/* Highlights pills */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 text-[11px]">
              <span className="bg-emerald-50 text-emerald-800 font-semibold px-2.5 py-1 rounded-md border border-emerald-200">
                🏡 2x Reverse Mortgage Refinance
              </span>
              <span className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md">
                💰 Maximized Cash Out
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
