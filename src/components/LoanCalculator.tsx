import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, FileSpreadsheet, Users } from 'lucide-react';
import { formatCurrency } from '../utils/calculator';

interface LoanCalculatorProps {
  onTransferToForm: (scenarioData: { price: number; down: number; rate: number; term: number }) => void;
}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({ onTransferToForm }) => {
  const [activeTab, setActiveTab] = useState<'overhead' | 'mortgage'>('overhead');

  // Broker Overhead Calculator State
  const [monthlyVolume, setMonthlyVolume] = useState<number>(6);
  const [selectedPackageFee, setSelectedPackageFee] = useState<number>(1195); // Preferred default
  const inHouseMonthlyCost = 7083; // $85,000/yr / 12 mo ($65k salary + $15k benefits/tax + $5k tech)

  const annualInHouseCost = inHouseMonthlyCost * 12;
  const annualBrokerOutPocketWithProcessing = 0; // $0 out of pocket, paid on CD by borrower
  const netAnnualSavings = annualInHouseCost;
  const totalHoursSavedMonth = monthlyVolume * 16; // avg 16 hrs per file

  // Standard Mortgage Calculator State
  const [homePrice, setHomePrice] = useState<number>(850000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.375);
  const [loanTermYears, setLoanTermYears] = useState<number>(30);

  const downPaymentAmount = Math.round(homePrice * (downPaymentPercent / 100));
  const loanAmount = homePrice - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanTermYears * 12;

  const monthlyPrincipalInterest = monthlyRate > 0
    ? Math.round((loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) / (Math.pow(1 + monthlyRate, totalMonths) - 1))
    : Math.round(loanAmount / totalMonths);

  const estPropertyTax = Math.round((homePrice * 0.0125) / 12);
  const estInsurance = 150;
  const totalMonthlyPayment = monthlyPrincipalInterest + estPropertyTax + estInsurance;

  return (
    <section id="calculator" className="py-20 border-b border-[#D4AF37]/35 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#0A0D14] border border-[#D4AF37]/50 text-xs uppercase tracking-[0.25em] text-[#F5D77F] font-semibold shadow-md">
            <span>◈</span>
            <span>Mathematical Precision · Transparent Numbers</span>
            <span>◈</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0D14]">
            OPERATIONAL SAVINGS & <span className="gold-gradient-text">LOAN CALCULATOR</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-normal">
            Model how much fixed overhead you save by partnering with Golden State 3rd Party Loan Processing, or calculate exact borrower mortgage scenarios.
          </p>
          <p className="text-[11px] text-slate-600 font-medium">
            Powered by 1 Touch Processing Arizona NMLS # 2337071
          </p>

          {/* Tab Switcher */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 bg-[#121622] rounded border border-[#D4AF37]/30">
              <button
                onClick={() => setActiveTab('overhead')}
                className={`px-5 py-2 text-xs font-semibold rounded-sm transition-all flex items-center gap-2 ${
                  activeTab === 'overhead'
                    ? 'gold-gradient-bg text-[#0A0D14] shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Broker Overhead Savings (Golden State ROI)</span>
              </button>
              <button
                onClick={() => setActiveTab('mortgage')}
                className={`px-5 py-2 text-xs font-semibold rounded-sm transition-all flex items-center gap-2 ${
                  activeTab === 'mortgage'
                    ? 'gold-gradient-bg text-[#0A0D14] shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Borrower Payment Calculator</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Broker Overhead & ROI Calculator */}
        {activeTab === 'overhead' ? (
          <div className="art-deco-card rounded-sm p-6 sm:p-10 max-w-5xl mx-auto border border-[#D4AF37]/35 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Controls */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-1">
                    Broker Overhead Simulator
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-white">
                    In-House Staff vs Golden State 3rd Party Loan Processing
                  </h3>
                  <div className="text-[10px] text-slate-400 font-normal mt-0.5">
                    Powered by 1 Touch Processing Arizona NMLS # 2337071
                  </div>
                  <p className="text-xs text-slate-300 font-light mt-1">
                    An in-house processor carries fixed base salary, FICA taxes, health benefits, LOS seat licenses, and downtime costs even when volume fluctuates.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-slate-300 font-medium">Your Monthly Loan Volume</span>
                      <strong className="text-white font-cinzel text-sm tabular-nums">{monthlyVolume} Loans / Month</strong>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="25"
                      value={monthlyVolume}
                      onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                      className="w-full accent-[#D4AF37] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-medium mb-1.5">
                      Target Processing Package
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { fee: 695, name: 'Streamline ($695)' },
                        { fee: 995, name: 'Standard ($995)' },
                        { fee: 1195, name: 'Preferred ($1,195)' }
                      ].map(item => (
                        <button
                          key={item.fee}
                          onClick={() => setSelectedPackageFee(item.fee)}
                          className={`p-2 rounded-sm text-left border text-xs transition-all ${
                            selectedPackageFee === item.fee
                              ? 'bg-[#182030] border-[#D4AF37] text-amber-200'
                              : 'bg-[#121622] border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          <span className="font-semibold block">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-sm bg-[#121622] border border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Average In-House Processor Base:</span>
                    <span className="text-slate-200 tabular-nums font-mono">$65,000 / yr</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Payroll Taxes, Healthcare & Insurance:</span>
                    <span className="text-slate-200 tabular-nums font-mono">~$15,000 / yr</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>LOS Seat Licenses & Hardware:</span>
                    <span className="text-slate-200 tabular-nums font-mono">~$5,000 / yr</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-800 font-semibold text-white">
                    <span>Total In-House Fixed Burden:</span>
                    <span className="text-[#F5D77F] tabular-nums font-mono font-bold">$85,000 / yr</span>
                  </div>
                </div>

              </div>

              {/* Right Output Dashboard */}
              <div className="lg:col-span-6">
                <div className="p-6 sm:p-8 rounded-sm bg-gradient-to-br from-[#131724] to-[#0A0D15] border border-[#D4AF37]/50 shadow-2xl space-y-6">
                  
                  <div className="border-b border-[#D4AF37]/25 pb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block">
                      Annual Net Financial Advantage
                    </span>
                    <div className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#F5D77F] mt-1 tabular-nums">
                      ${netAnnualSavings.toLocaleString()}
                    </div>
                    <span className="text-xs text-emerald-400 font-medium block mt-1">
                      100% Fixed Payroll Liability Removed
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="p-3 rounded-sm bg-[#0C1018] border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Broker Out-of-Pocket</span>
                      <strong className="font-cinzel text-xl text-emerald-400 mt-1 block">
                        $0.00
                      </strong>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">Billed on Closing CD</span>
                    </div>

                    <div className="p-3 rounded-sm bg-[#0C1018] border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Origination Time Saved</span>
                      <strong className="font-cinzel text-xl text-[#F5D77F] mt-1 block tabular-nums">
                        ~{totalHoursSavedMonth} hrs/mo
                      </strong>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">Focus on new deals</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      <span>Zero cost during slow pipeline months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      <span>Dedicated experienced processor scaling with your volume</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onTransferToForm({ price: 850000, down: 170000, rate: 6.375, term: 30 })}
                    className="w-full py-3 rounded-sm font-cinzel font-bold text-xs uppercase tracking-wider text-[#0A0D14] gold-gradient-bg hover:brightness-110 shadow transition-all flex items-center justify-center gap-2"
                  >
                    <span>Partner with Golden State Processing & Marc Williamson</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </div>
              </div>

            </div>
          </div>
        ) : (
          /* Tab 2: Standard Borrower Mortgage Payment Calculator */
          <div className="art-deco-card rounded-sm p-6 sm:p-10 max-w-5xl mx-auto border border-[#D4AF37]/35 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4 text-xs">
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-slate-300 font-medium">Home Purchase Price</span>
                    <strong className="text-white font-cinzel text-sm tabular-nums">${homePrice.toLocaleString()}</strong>
                  </div>
                  <input
                    type="range"
                    min="300000"
                    max="2500000"
                    step="25000"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 text-[11px] mb-1 font-medium">Down Payment ({downPaymentPercent}%)</label>
                    <select
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full bg-[#121622] border border-slate-800 rounded-sm p-2 text-slate-100 text-xs focus:border-[#D4AF37] outline-none"
                    >
                      <option value="3">3% (First-Time Buyer)</option>
                      <option value="3.5">3.5% (FHA)</option>
                      <option value="5">5% Conforming</option>
                      <option value="10">10% Conforming</option>
                      <option value="20">20% Standard</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-[11px] mb-1 font-medium">Loan Term</label>
                    <select
                      value={loanTermYears}
                      onChange={(e) => setLoanTermYears(Number(e.target.value))}
                      className="w-full bg-[#121622] border border-slate-800 rounded-sm p-2 text-slate-100 text-xs focus:border-[#D4AF37] outline-none"
                    >
                      <option value="30">30-Year Fixed</option>
                      <option value="20">20-Year Fixed</option>
                      <option value="15">15-Year Fixed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-slate-300 font-medium">Interest Rate</span>
                    <strong className="text-white font-cinzel text-sm tabular-nums">{interestRate}%</strong>
                  </div>
                  <input
                    type="range"
                    min="5.0"
                    max="9.0"
                    step="0.125"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-[#121622] border border-slate-800 rounded-sm text-slate-300 text-xs flex justify-between">
                  <span>Down Payment Amount:</span>
                  <strong className="text-white tabular-nums">${downPaymentAmount.toLocaleString()}</strong>
                </div>
                <div className="p-3 bg-[#121622] border border-slate-800 rounded-sm text-slate-300 text-xs flex justify-between">
                  <span>Financed Loan Amount:</span>
                  <strong className="text-white tabular-nums">${loanAmount.toLocaleString()}</strong>
                </div>
              </div>

              {/* Output */}
              <div className="lg:col-span-6">
                <div className="p-6 sm:p-8 rounded-sm bg-gradient-to-br from-[#131724] to-[#0A0D15] border border-[#D4AF37]/50 shadow-2xl space-y-5">
                  <div className="border-b border-[#D4AF37]/25 pb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block">
                      Estimated Monthly Payment (P&I + Taxes + Ins)
                    </span>
                    <div className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#F5D77F] mt-1 tabular-nums">
                      ${totalMonthlyPayment.toLocaleString()}/mo
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Principal & Interest:</span>
                      <strong className="text-white tabular-nums">${monthlyPrincipalInterest.toLocaleString()}</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Est. Property Taxes (1.25% CA):</span>
                      <strong className="text-white tabular-nums">${estPropertyTax.toLocaleString()}</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Est. Homeowners Insurance:</span>
                      <strong className="text-white tabular-nums">${estInsurance.toLocaleString()}</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => onTransferToForm({ price: homePrice, down: downPaymentAmount, rate: interestRate, term: loanTermYears })}
                    className="w-full py-3 rounded-sm font-cinzel font-bold text-xs uppercase tracking-wider text-[#0A0D14] gold-gradient-bg hover:brightness-110 shadow transition-all flex items-center justify-center gap-2"
                  >
                    <span>Transfer Scenario to Intake Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
