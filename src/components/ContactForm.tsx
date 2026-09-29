import React, { useState, useEffect } from 'react';
import { MARC_PHOTO_DATA_URI } from '../data/marcPhotoDataUri';
import { ShieldCheck, CheckCircle2, ArrowRight, Phone, Mail, Clock, Send, Award, Zap, Laptop, FileText, Check } from 'lucide-react';

interface ContactFormProps {
  prefilledScenario?: { price: number; down: number; rate: number; term: number } | null;
}

export const ContactForm: React.FC<ContactFormProps> = ({ prefilledScenario }) => {
  const [formType, setFormType] = useState<'broker' | 'borrower'>('broker');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [losUsed, setLosUsed] = useState('Arive');
  const [targetPackage, setTargetPackage] = useState('Preferred ($1,195)');
  const [loanProgram, setLoanProgram] = useState('Conventional Conforming');
  const [loanAmount, setLoanAmount] = useState('850000');
  const [propertyState, setPropertyState] = useState('CA');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (prefilledScenario) {
      setLoanAmount(String(prefilledScenario.price - prefilledScenario.down));
    }
  }, [prefilledScenario]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 border-b border-[#D4AF37]/35 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#0A0D14] border border-[#D4AF37]/50 text-xs uppercase tracking-[0.25em] text-[#F5D77F] font-semibold shadow-md">
            <span>◈</span>
            <span>Immediate Response · Priority Desk</span>
            <span>◈</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0D14]">
            SUBMIT A FILE OR <span className="gold-gradient-text">CONNECT WITH MARC</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-normal">
            Upload your loan scenario for immediate intake with Golden State 3rd Party Loan Processing, or schedule a 1-on-1 operational pipeline strategy review with Marc Williamson.
          </p>
          <p className="text-[11px] text-slate-600 font-medium">
            Powered by 1 Touch Processing Arizona NMLS # 2337071
          </p>

          {/* Form Switcher */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 bg-[#121622] rounded border border-[#D4AF37]/30">
              <button
                type="button"
                onClick={() => setFormType('broker')}
                className={`px-5 py-2 text-xs font-semibold rounded-sm transition-all flex items-center gap-1.5 ${
                  formType === 'broker'
                    ? 'gold-gradient-bg text-[#0A0D14] shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>Broker / LO Loan Intake ($0 Upfront)</span>
              </button>
              <button
                type="button"
                onClick={() => setFormType('borrower')}
                className={`px-5 py-2 text-xs font-semibold rounded-sm transition-all flex items-center gap-1.5 ${
                  formType === 'borrower'
                    ? 'gold-gradient-bg text-[#0A0D14] shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Direct Borrower Scenario</span>
              </button>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left: Marc Direct Priority Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="art-deco-card rounded-sm p-6 border border-[#D4AF37]/30 shadow-xl space-y-4">
              <div className="flex items-center gap-4 border-b border-[#D4AF37]/20 pb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] shrink-0 bg-[#0A0D14]">
                  <img
                    src={MARC_PHOTO_DATA_URI}
                    alt="Marc Williamson"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block">
                    Lead Advisor & Director
                  </span>
                  <h3 className="font-cinzel text-lg font-bold text-white">
                    Marc Williamson
                  </h3>
                  <span className="text-xs text-slate-300 font-mono block">
                    NMLS #1387796
                  </span>
                  <span className="text-[9px] text-amber-200/90 font-normal block mt-0.5">
                    Powered by 1 Touch Processing Arizona NMLS # 2337071
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Files scrubbed and acknowledged within 2 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Direct phone & text access at all times</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>$0 fee owed if file does not close</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#D4AF37]/20 space-y-2">
                <a
                  href="tel:2132943747"
                  className="w-full p-2.5 rounded-sm bg-[#121622] hover:bg-[#1A2030] border border-slate-800 text-slate-200 text-xs flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="font-semibold text-white group-hover:text-[#F5D77F]">(213) 294-3747</span>
                  </div>
                  <span className="text-[10px] text-[#D4AF37] uppercase font-bold">Call Marc</span>
                </a>

                <a
                  href="mailto:marc@goldenstatehomeloan.com"
                  className="w-full p-2.5 rounded-sm bg-[#121622] hover:bg-[#1A2030] border border-slate-800 text-slate-200 text-xs flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span className="font-semibold text-white group-hover:text-[#F5D77F] truncate text-[11px]">marc@goldenstatehomeloan.com</span>
                  </div>
                  <span className="text-[10px] text-[#D4AF37] uppercase font-bold shrink-0">Email</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-sm bg-[#10141D] border border-slate-800 text-xs text-slate-400 space-y-1">
              <span className="text-white font-semibold block">Office Hours & Weekend Rush:</span>
              <p>Mon - Fri: 8:00 AM - 6:00 PM PST</p>
              <p>Saturday: 9:00 AM - 2:00 PM (Urgent Disclosures & Locks)</p>
            </div>
          </div>

          {/* Right: Intake Form */}
          <div className="lg:col-span-7">
            <div className="art-deco-card rounded-sm p-6 sm:p-8 border border-[#D4AF37]/35 shadow-2xl relative">
              
              {/* Stepped Corners */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#D4AF37]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#D4AF37]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#D4AF37]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#D4AF37]" />

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold text-white">
                    Transmission Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto font-light">
                    Thank you, <strong>{fullName || 'Partner'}</strong>. Your scenario has been routed directly to <strong>Marc Williamson</strong>. We will review your pipeline and contact you within 2 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 text-xs font-semibold text-amber-200 border border-[#D4AF37]/40 rounded-sm hover:bg-[#121622]"
                    >
                      Submit Another Scenario
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="border-b border-[#D4AF37]/20 pb-3 mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block">
                      {formType === 'broker' ? 'Mortgage Broker & LO Intake Portal' : 'Direct Borrower Scenario Portal'}
                    </span>
                    <h3 className="font-cinzel text-lg font-bold text-white">
                      {formType === 'broker' ? 'Submit Loan File Details' : 'Request Rapid Scenario Analysis'}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 text-[11px] mb-1 font-medium">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. David Vance"
                        className="w-full bg-[#121622] border border-slate-800 rounded-sm p-2.5 text-slate-100 focus:border-[#D4AF37] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-[11px] mb-1 font-medium">
                        {formType === 'broker' ? 'Brokerage / Company Name *' : 'Property Address / City'}
                      </label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder={formType === 'broker' ? "e.g. Pacific Coast Lending" : "e.g. Newport Beach, CA"}
                        className="w-full bg-[#121622] border border-slate-800 rounded-sm p-2.5 text-slate-100 focus:border-[#D4AF37] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 text-[11px] mb-1 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full bg-[#121622] border border-slate-800 rounded-sm p-2.5 text-slate-100 focus:border-[#D4AF37] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-[11px] mb-1 font-medium">Direct Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(555) 000-0000"
                        className="w-full bg-[#121622] border border-slate-800 rounded-sm p-2.5 text-slate-100 focus:border-[#D4AF37] outline-none"
                      />
                    </div>
                  </div>

                  {formType === 'broker' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-300 text-[11px] mb-1 font-medium">LOS Platform Used</label>
                        <select
                          value={losUsed}
                          onChange={(e) => setLosUsed(e.target.value)}
                          className="w-full bg-[#121622] border border-slate-800 rounded-sm p-2.5 text-slate-100 focus:border-[#D4AF37] outline-none"
                        >
                          <option value="Arive">Arive (Native 1-Click)</option>
                          <option value="LendingPad">LendingPad</option>
                          <option value="Encompass">Encompass (ICE)</option>
                          <option value="Calyx">Calyx Point</option>
                          <option value="Byte">Byte Software</option>
                          <option value="Other">Other / Direct File Upload</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-300 text-[11px] mb-1 font-medium">Requested Package</label>
                        <select
                          value={targetPackage}
                          onChange={(e) => setTargetPackage(e.target.value)}
                          className="w-full bg-[#121622] border border-slate-800 rounded-sm p-2.5 text-slate-100 focus:border-[#D4AF37] outline-none"
                        >
                          <option value="Streamline ($695)">Streamline Refi ($695)</option>
                          <option value="Standard ($995)">Standard ($995)</option>
                          <option value="Preferred ($1,195)">Preferred - Most Popular ($1,195)</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-slate-300 text-[11px] mb-1 font-medium">Loan Program</label>
                      <select
                        value={loanProgram}
                        onChange={(e) => setLoanProgram(e.target.value)}
                        className="w-full bg-[#121622] border border-slate-800 rounded-sm p-2.5 text-slate-100 focus:border-[#D4AF37] outline-none"
                      >
                        <option value="Conventional Conforming">Conventional Conforming (DU/LPA)</option>
                        <option value="Jumbo & High-Balance">Jumbo & High-Balance ($1M+)</option>
                        <option value="Non-QM Bank Statements">Non-QM Bank Statement (12/24 Mo)</option>
                        <option value="DSCR Real Estate Investor">DSCR Investor Loan</option>
                        <option value="Government (FHA/VA/USDA)">Government (FHA, VA IRRRL, USDA)</option>
                        <option value="Foreign National / ITIN">Foreign National / ITIN Loans</option>
                        <option value="Commercial / Bridge">Commercial / Fix & Flip / Bridge</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-[11px] mb-1 font-medium">State</label>
                      <select
                        value={propertyState}
                        onChange={(e) => setPropertyState(e.target.value)}
                        className="w-full bg-[#121622] border border-slate-800 rounded-sm p-2.5 text-slate-100 focus:border-[#D4AF37] outline-none"
                      >
                        <option value="AZ">Arizona (AZ) · MB-1037930</option>
                        <option value="CA">California (CA) · CA-DBO1289441</option>
                        <option value="CO">Colorado (CO) · 100535928</option>
                        <option value="FL">Florida (FL) · LO113558 / LO114744</option>
                        <option value="IL">Illinois (IL) · EEP.0000049</option>
                        <option value="MI">Michigan (MI) · 2337071</option>
                        <option value="OK">Oklahoma (OK) · MB016515</option>
                        <option value="PA">Pennsylvania (PA) · 112928</option>
                        <option value="TX">Texas (TX) · TX SML Licensed</option>
                        <option value="Other">Other State</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-[11px] mb-1 font-medium">
                      Loan Amount / Target Closing Timeline / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Enter target closing date, estimated loan amount, or specific file conditions to review..."
                      className="w-full bg-[#121622] border border-slate-800 rounded-sm p-2.5 text-slate-100 focus:border-[#D4AF37] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-sm font-cinzel font-bold text-xs uppercase tracking-wider text-[#0A0D14] gold-gradient-bg hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    {loading ? (
                      <span>Transmitting File Details...</span>
                    ) : (
                      <>
                        <span>Submit to Marc Williamson</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-500">
                    🔒 SSL Encrypted & Confidential. NMLS #1387796 compliant. No upfront fees are collected.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
