import React from 'react';
import { Phone, Mail, Award, ShieldCheck, CheckCircle2, ArrowRight, UserCheck, Sparkles, Building2 } from 'lucide-react';
import { MARC_PHOTO_DATA_URI as marcPhoto } from '../data/marcPhotoDataUri';

interface AboutMarcProps {
  onOpenPreQual: () => void;
}

export const AboutMarc: React.FC<AboutMarcProps> = ({ onOpenPreQual }) => {
  return (
    <section id="about-marc" className="py-16 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5 text-teal-700" /> Senior Loan Advisor
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Marc Williamson
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Dedicated California Mortgage Specialist providing personalized home financing solutions, transparent rate quotes, and fast approvals.
          </p>
        </div>

        {/* Profile Card Layout */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-slate-200">
                  <img
                    src={marcPhoto}
                    alt="Marc Williamson - California Senior Mortgage Advisor"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-xl border border-slate-700 text-center">
                    <div className="text-xs font-extrabold text-white">Marc Williamson</div>
                    <div className="text-[11px] text-teal-300 font-medium">California Senior Mortgage Advisor</div>
                    <div className="text-[10px] text-slate-300 font-mono mt-0.5">NMLS #1387796</div>
                  </div>
                </div>
              </div>

              {/* Company Licensing Badge */}
              <div className="mt-4 text-center px-3 py-2 bg-white border border-slate-200 rounded-xl shadow-2xl w-full max-w-sm">
                <div className="text-[11px] font-bold text-slate-700 flex items-center justify-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-teal-700" />
                  <span>Powered by Omni-Fund, Inc</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                  NMLS# 4869 | DRE License# 0143-0833
                </div>
              </div>
            </div>

            {/* Info & Bio Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200 mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Speak to a California Advisor
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Marc Williamson
                </h3>
                <p className="text-sm font-semibold text-slate-500 mt-0.5">
                  Senior Mortgage Loan Originator
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                With extensive experience navigating the California real estate market, Marc Williamson specializes in delivering tailored mortgage strategies for homebuyers, real estate investors, and homeowners looking to refinance. I specialize in 3-5 day HELOC Closings down to 600 FICOs! From conforming loans in LA, Bay Area, and Orange County to VA, FHA, Jumbo, and DSCR investor products, with no junk fees, total transparency, and swift loan turnarounds. I work with the top 10 lenders in the nation for Reverse Mortgages as well!
              </p>

              {/* Contact Callout Card */}
              <div className="p-4 sm:p-5 bg-teal-900 text-white rounded-xl shadow-md space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center justify-between">
                  <span>Direct Advisor Contact</span>
                  <span className="text-[10px] bg-teal-800 text-teal-100 px-2 py-0.5 rounded">Fast Response</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href="tel:2099146037"
                    className="flex items-center gap-3 p-3 bg-teal-950 hover:bg-teal-800 border border-teal-700/80 rounded-lg transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center text-teal-200 group-hover:bg-white group-hover:text-teal-900 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-teal-300 uppercase font-semibold">Direct Phone</div>
                      <div className="text-xs font-extrabold text-white">209-914-6037 Direct</div>
                    </div>
                  </a>

                  <a
                    href="mailto:marcwill@goldenstatehomeloan.com"
                    className="flex items-center gap-3 p-3 bg-teal-950 hover:bg-teal-800 border border-teal-700/80 rounded-lg transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center text-teal-200 group-hover:bg-white group-hover:text-teal-900 transition-colors shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-teal-300 uppercase font-semibold">Direct Email</div>
                      <div className="text-xs font-extrabold text-white truncate max-w-[230px]">marcwill@goldenstatehomeloan.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-1">
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Soft Credit Inquiry Only</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Zero Lender Junk Fees</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>14-Day Express Closings</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>All 58 CA Counties</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenPreQual}
                  className="bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <span>Request Direct Quote from Marc</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:2099146037"
                  className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>Call 209-914-6037</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
