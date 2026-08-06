import React, { useState, useId } from 'react';
import { Calculator, DollarSign, Percent, Calendar, ShieldAlert, ArrowRight, Download, FileSpreadsheet, RefreshCw, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { CalculatorState, PaymentBreakdown } from '../types';
import { calculateAffordability, calculateMortgage, calculateRefiSavings, formatCurrency, generateAmortizationSchedule } from '../utils/calculator';

interface LoanCalculatorProps {
  onTransferToForm: (scenarioData: { price: number; down: number; rate: number; term: number }) => void;
}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({ onTransferToForm }) => {
  const [activeTab, setActiveTab] = useState<'mortgage' | 'affordability' | 'refinance'>('mortgage');

  // Input field IDs
  const homePriceInputId = useId();
  const downPaymentInputId = useId();
  const interestRateInputId = useId();
  const propertyTaxInputId = useId();
  const insuranceInputId = useId();
  const hoaInputId = useId();
  const incomeInputId = useId();
  const debtInputId = useId();
  const affDownInputId = useId();
  const refiBalanceInputId = useId();
  const refiCurrentRateInputId = useId();
  const refiNewRateInputId = useId();

  // Mortgage Calculator State (Default CA median home example ~$800,000)
  const [calcState, setCalcState] = useState<CalculatorState>({
    homePrice: 850000,
    downPayment: 170000,
    downPaymentPercent: 20,
    loanTermYears: 30,
    interestRate: 6.375,
    propertyTaxRate: 1.25,
    homeInsuranceAnnual: 1800,
    hoaMonthly: 150,
    pmiRate: 0.5,
  });

  // Affordability State
  const [affordabilityState, setAffordabilityState] = useState({
    monthlyIncome: 15000,
    monthlyDebt: 800,
    downPayment: 100000,
    interestRate: 6.375,
  });

  // Refinance State
  const [refiState, setRefiState] = useState({
    currentBalance: 650000,
    currentRate: 7.25,
    currentYearsLeft: 27,
    newRate: 6.25,
    newTermYears: 30,
  });

  const [showAmortizationModal, setShowAmortizationModal] = useState(false);

  // Handlers for Mortgage Calculator
  const handleHomePriceChange = (val: number) => {
    const price = Math.max(0, val);
    const newDown = Math.round(price * (calcState.downPaymentPercent / 100));
    setCalcState(prev => ({
      ...prev,
      homePrice: price,
      downPayment: newDown,
    }));
  };

  const handleDownPercentChange = (percent: number) => {
    const newPercent = Math.min(100, Math.max(0, percent));
    const newDown = Math.round(calcState.homePrice * (newPercent / 100));
    setCalcState(prev => ({
      ...prev,
      downPaymentPercent: newPercent,
      downPayment: newDown,
    }));
  };

  const handleDownAmountChange = (amount: number) => {
    const newAmount = Math.max(0, amount);
    const newPercent = calcState.homePrice > 0 ? Number(((newAmount / calcState.homePrice) * 100).toFixed(1)) : 0;
    setCalcState(prev => ({
      ...prev,
      downPayment: newAmount,
      downPaymentPercent: newPercent,
    }));
  };

  const breakdown: PaymentBreakdown = calculateMortgage(calcState);
  const amortizationSchedule = generateAmortizationSchedule(calcState);
  const affordabilityResult = calculateAffordability(
    affordabilityState.monthlyIncome,
    affordabilityState.monthlyDebt,
    affordabilityState.downPayment,
    affordabilityState.interestRate
  );
  const refiResult = calculateRefiSavings(
    refiState.currentBalance,
    refiState.currentRate,
    refiState.currentYearsLeft,
    refiState.newRate,
    refiState.newTermYears
  );

  // SVG Doughnut Chart Calculation
  const total = breakdown.totalMonthly || 1;
  const segments = [
    { name: 'Principal & Interest', value: breakdown.principalAndInterest, color: '#F59E0B' }, // Amber
    { name: 'Property Tax', value: breakdown.propertyTax, color: '#3B82F6' }, // Blue
    { name: 'Homeowners Ins.', value: breakdown.homeInsurance, color: '#10B981' }, // Emerald
    { name: 'HOA Fees', value: breakdown.hoa, color: '#8B5CF6' }, // Purple
    { name: 'PMI Insurance', value: breakdown.pmi, color: '#EF4444' }, // Red
  ].filter(s => s.value > 0);

  // Export Amortization Schedule to CSV
  const exportAmortizationCSV = () => {
    let csv = 'Year,Remaining Balance,Principal Paid,Interest Paid,Total Annual Paid\n';
    amortizationSchedule.forEach(row => {
      csv += `${row.year},$${row.balance},$${row.principalPaid},$${row.interestPaid},$${row.totalPaid}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Amortization_Schedule_${calcState.homePrice}.csv`;
    a.click();
  };

  return (
    <section id="calculator" className="py-16 bg-slate-50 text-slate-900 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-teal-700" /> Integrated California Loan Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Exact Monthly Payment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Accurate, real-time estimate including principal, interest, California property taxes (~1.25%), homeowners insurance, and HOA fees.
          </p>

          {/* Calculator Tabs */}
          <div className="flex justify-center mt-6">
            <div className="bg-slate-200/80 p-1.5 rounded-full border border-slate-300 flex gap-1 text-xs sm:text-sm font-bold">
              <button
                onClick={() => setActiveTab('mortgage')}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeTab === 'mortgage'
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Mortgage Payment
              </button>
              <button
                onClick={() => setActiveTab('affordability')}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeTab === 'affordability'
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                How Much Can I Borrow?
              </button>
              <button
                onClick={() => setActiveTab('refinance')}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeTab === 'refinance'
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Refinance Savings
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: MORTGAGE PAYMENT CALCULATOR */}
        {activeTab === 'mortgage' && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Controls / Inputs Column */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <span>Monthly Payment Estimator</span>
                  <span className="text-xs font-normal text-slate-500">(Adjust sliders or type directly)</span>
                </h3>
                <button
                  onClick={() => setCalcState({
                    homePrice: 850000,
                    downPayment: 170000,
                    downPaymentPercent: 20,
                    loanTermYears: 30,
                    interestRate: 6.375,
                    propertyTaxRate: 1.25,
                    homeInsuranceAnnual: 1800,
                    hoaMonthly: 150,
                    pmiRate: 0.5,
                  })}
                  className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* Home Price Input & Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor={homePriceInputId} className="font-bold text-slate-700 uppercase text-xs">Estimated Home Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
                    <input
                      id={homePriceInputId}
                      type="number"
                      value={calcState.homePrice}
                      onChange={(e) => handleHomePriceChange(Number(e.target.value))}
                      className="bg-slate-50 border border-slate-200 rounded-lg text-right pl-7 pr-3 py-1.5 text-sm font-bold text-slate-800 w-36 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 focus:outline-none"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min="200000"
                  max="3000000"
                  step="10000"
                  value={calcState.homePrice}
                  onChange={(e) => handleHomePriceChange(Number(e.target.value))}
                  className="w-full accent-teal-700 cursor-pointer h-2 bg-teal-100 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>$200k</span>
                  <span>$1.5M</span>
                  <span>$3.0M+ (Jumbo)</span>
                </div>
              </div>

              {/* Down Payment ($ and %) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor={downPaymentInputId} className="font-bold text-slate-700 uppercase text-xs">Down Payment ({calcState.downPaymentPercent}%)</label>
                  <div className="flex gap-2">
                    <div className="relative w-28">
                      <span className="absolute left-2.5 top-2.5 text-slate-400 text-xs">$</span>
                      <input
                        id={downPaymentInputId}
                        type="number"
                        value={calcState.downPayment}
                        onChange={(e) => handleDownAmountChange(Number(e.target.value))}
                        className="bg-slate-50 border border-slate-200 rounded-lg text-right pl-6 pr-2 py-1.5 text-xs font-bold text-slate-800 w-full focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 focus:outline-none"
                      />
                    </div>
                    <div className="relative w-20">
                      <input
                        type="number"
                        value={calcState.downPaymentPercent}
                        onChange={(e) => handleDownPercentChange(Number(e.target.value))}
                        className="bg-slate-50 border border-slate-200 rounded-lg text-right pr-6 pl-2 py-1.5 text-xs font-bold text-slate-800 w-full focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 focus:outline-none"
                        aria-label="Down payment percentage"
                      />
                      <span className="absolute right-2.5 top-2.5 text-slate-400 text-xs">%</span>
                    </div>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={calcState.downPaymentPercent}
                  onChange={(e) => handleDownPercentChange(Number(e.target.value))}
                  className="w-full accent-teal-700 cursor-pointer h-2 bg-teal-100 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-teal-700 font-bold">
                  <span>0% (VA)</span>
                  <span>3.5% (FHA)</span>
                  <span>20% (Standard No-PMI)</span>
                </div>
              </div>

              {/* Loan Term & Interest Rate Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Loan Term</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[15, 20, 30].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setCalcState(prev => ({ ...prev, loanTermYears: term }))}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                          calcState.loanTermYears === term
                            ? 'bg-teal-700 border-teal-700 text-white shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {term} Yrs
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor={interestRateInputId} className="block text-xs font-bold text-slate-700 uppercase mb-2">Interest Rate (%)</label>
                  <div className="relative">
                    <input
                      id={interestRateInputId}
                      type="number"
                      step="0.125"
                      value={calcState.interestRate}
                      onChange={(e) => setCalcState(prev => ({ ...prev, interestRate: Number(e.target.value) }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-800 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 focus:outline-none"
                    />
                    <span className="absolute right-3 top-2.5 text-slate-400 text-xs font-bold">%</span>
                  </div>
                </div>
              </div>

              {/* Property Taxes, Insurance & HOA Expandable Options */}
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">California Taxes & Escrow Estimates</div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor={propertyTaxInputId} className="block text-xs font-semibold text-slate-600 mb-1">CA Prop Tax Rate (%)</label>
                    <input
                      id={propertyTaxInputId}
                      type="number"
                      step="0.05"
                      value={calcState.propertyTaxRate}
                      onChange={(e) => setCalcState(prev => ({ ...prev, propertyTaxRate: Number(e.target.value) }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-800"
                    />
                    <span className="text-[10px] text-slate-400">Avg CA ~1.25%</span>
                  </div>

                  <div>
                    <label htmlFor={insuranceInputId} className="block text-xs font-semibold text-slate-600 mb-1">Insurance ($/Yr)</label>
                    <input
                      id={insuranceInputId}
                      type="number"
                      step="100"
                      value={calcState.homeInsuranceAnnual}
                      onChange={(e) => setCalcState(prev => ({ ...prev, homeInsuranceAnnual: Number(e.target.value) }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-800"
                    />
                  </div>

                  <div>
                    <label htmlFor={hoaInputId} className="block text-xs font-semibold text-slate-600 mb-1">HOA Fee ($/Mo)</label>
                    <input
                      id={hoaInputId}
                      type="number"
                      step="25"
                      value={calcState.hoaMonthly}
                      onChange={(e) => setCalcState(prev => ({ ...prev, hoaMonthly: Number(e.target.value) }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-800"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Summary Output Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-white relative">
                <div className="text-center pb-6 border-b border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-widest text-teal-300">Estimated Monthly Payment</div>
                  <div className="text-4xl sm:text-5xl font-black text-white font-mono mt-1">
                    {formatCurrency(breakdown.totalMonthly)}
                    <span className="text-xs font-sans text-slate-400 font-normal"> /mo</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    Total Loan Amount: <strong className="text-teal-300 font-mono">{formatCurrency(breakdown.loanAmount)}</strong>
                  </div>
                </div>

                {/* Donut Chart Visual */}
                <div className="py-6 flex flex-col items-center">
                  <div className="relative w-44 h-44">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      {(() => {
                        let cumulativePercent = 0;
                        return segments.map((seg, i) => {
                          const percent = (seg.value / total) * 100;
                          const strokeDasharray = `${percent} ${100 - percent}`;
                          const strokeDashoffset = -cumulativePercent;
                          cumulativePercent += percent;
                          return (
                            <circle
                              key={i}
                              cx="50"
                              cy="50"
                              r="15.91549430918954"
                              fill="transparent"
                              stroke={seg.color === '#F59E0B' ? '#0f766e' : seg.color}
                              strokeWidth="8"
                              strokeDasharray={strokeDasharray}
                              strokeDashoffset={strokeDashoffset}
                            />
                          );
                        });
                      })()}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-[10px] text-slate-400 uppercase font-bold">P & I Share</span>
                      <span className="text-sm font-extrabold text-white font-mono">
                        {Math.round((breakdown.principalAndInterest / total) * 100)}%
                      </span>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="w-full space-y-2 mt-4 text-xs">
                    {segments.map((seg, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: seg.color === '#F59E0B' ? '#0f766e' : seg.color }} />
                          <span className="text-slate-300 font-medium">{seg.name}</span>
                        </div>
                        <span className="font-mono font-bold text-white">{formatCurrency(seg.value)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => onTransferToForm({
                      price: calcState.homePrice,
                      down: calcState.downPayment,
                      rate: calcState.interestRate,
                      term: calcState.loanTermYears,
                    })}
                    className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <span>Apply With This Scenario</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <button
                    onClick={() => setShowAmortizationModal(true)}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold py-2.5 px-4 rounded-xl border border-slate-700 flex items-center justify-center gap-2"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-teal-400" />
                    <span>View Amortization Schedule</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AFFORDABILITY CALCULATOR */}
        {activeTab === 'affordability' && (
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-800">Your Income & Monthly Debt</h3>
                <div>
                  <label htmlFor={incomeInputId} className="block text-xs font-semibold text-slate-600 mb-1">Gross Monthly Income ($)</label>
                  <input
                    id={incomeInputId}
                    type="number"
                    step="500"
                    value={affordabilityState.monthlyIncome}
                    onChange={(e) => setAffordabilityState(prev => ({ ...prev, monthlyIncome: Number(e.target.value) }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm font-bold text-slate-800"
                  />
                </div>

                <div>
                  <label htmlFor={debtInputId} className="block text-xs font-semibold text-slate-600 mb-1">Monthly Auto/Student/Credit Debts ($)</label>
                  <input
                    id={debtInputId}
                    type="number"
                    step="100"
                    value={affordabilityState.monthlyDebt}
                    onChange={(e) => setAffordabilityState(prev => ({ ...prev, monthlyDebt: Number(e.target.value) }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm font-bold text-slate-800"
                  />
                </div>

                <div>
                  <label htmlFor={affDownInputId} className="block text-xs font-semibold text-slate-600 mb-1">Available Down Payment ($)</label>
                  <input
                    id={affDownInputId}
                    type="number"
                    step="5000"
                    value={affordabilityState.downPayment}
                    onChange={(e) => setAffordabilityState(prev => ({ ...prev, downPayment: Number(e.target.value) }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm font-bold text-slate-800"
                  />
                </div>
              </div>

              {/* Result Box */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between text-white">
                <div>
                  <div className="text-xs font-bold uppercase text-teal-400 tracking-wider">Estimated Home Buying Power</div>
                  <div className="text-4xl font-black text-white font-mono mt-2">
                    {formatCurrency(affordabilityResult.estimatedHomePrice)}
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Based on standard California conservative 31% housing DTI ratios.
                  </p>

                  <div className="mt-6 space-y-2 text-xs divide-y divide-slate-800">
                    <div className="flex justify-between pt-2">
                      <span className="text-slate-400">Max Loan Amount:</span>
                      <span className="font-bold text-white font-mono">{formatCurrency(affordabilityResult.maxLoan)}</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-slate-400">Max Monthly Housing Budget:</span>
                      <span className="font-bold text-teal-400 font-mono">{formatCurrency(affordabilityResult.maxMonthlyPayment)}/mo</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onTransferToForm({
                    price: affordabilityResult.estimatedHomePrice,
                    down: affordabilityState.downPayment,
                    rate: affordabilityState.interestRate,
                    term: 30
                  })}
                  className="mt-6 w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 rounded-xl text-sm shadow-md"
                >
                  Pre-Qualify for This Budget
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: REFINANCE SAVINGS CALCULATOR */}
        {activeTab === 'refinance' && (
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-800">Current vs New Refi Loan</h3>

                <div>
                  <label htmlFor={refiBalanceInputId} className="block text-xs font-semibold text-slate-600 mb-1">Current Loan Balance ($)</label>
                  <input
                    id={refiBalanceInputId}
                    type="number"
                    step="10000"
                    value={refiState.currentBalance}
                    onChange={(e) => setRefiState(prev => ({ ...prev, currentBalance: Number(e.target.value) }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm font-bold text-slate-800 font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor={refiCurrentRateInputId} className="block text-xs font-semibold text-slate-600 mb-1">Current Rate (%)</label>
                    <input
                      id={refiCurrentRateInputId}
                      type="number"
                      step="0.125"
                      value={refiState.currentRate}
                      onChange={(e) => setRefiState(prev => ({ ...prev, currentRate: Number(e.target.value) }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-red-600 font-bold"
                    />
                  </div>
                  <div>
                    <label htmlFor={refiNewRateInputId} className="block text-xs font-semibold text-slate-600 mb-1">New Refi Rate (%)</label>
                    <input
                      id={refiNewRateInputId}
                      type="number"
                      step="0.125"
                      value={refiState.newRate}
                      onChange={(e) => setRefiState(prev => ({ ...prev, newRate: Number(e.target.value) }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-teal-700 font-bold"
                    />
                  </div>
                </div>
              </div>

              {/* Refi Savings Result */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between text-white">
                <div>
                  <div className="text-xs font-bold uppercase text-teal-400 tracking-wider">Estimated Monthly Refi Savings</div>
                  <div className="text-4xl font-black text-teal-400 font-mono mt-2">
                    {formatCurrency(Math.max(0, refiResult.monthlySavings))}
                    <span className="text-xs font-sans text-slate-400"> /mo</span>
                  </div>

                  <div className="mt-6 space-y-2 text-xs divide-y divide-slate-800">
                    <div className="flex justify-between pt-2">
                      <span className="text-slate-400">Old Monthly P&I:</span>
                      <span className="font-mono text-slate-300">{formatCurrency(refiResult.oldPayment)}</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-slate-400">New Monthly P&I:</span>
                      <span className="font-mono text-teal-300 font-bold">{formatCurrency(refiResult.newPayment)}</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-slate-400">Estimated Annual Savings:</span>
                      <span className="font-mono text-teal-400 font-bold">{formatCurrency(Math.max(0, refiResult.annualSavings))}/yr</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onTransferToForm({
                    price: refiState.currentBalance,
                    down: 0,
                    rate: refiState.newRate,
                    term: refiState.newTermYears
                  })}
                  className="mt-6 w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 rounded-xl text-sm shadow-md"
                >
                  Start Refinance Pre-Approval
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AMORTIZATION SCHEDULE MODAL */}
      {showAmortizationModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Amortization Schedule</h3>
                <p className="text-xs text-slate-400">30-Year Loan Principal & Interest Breakdown</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={exportAmortizationCSV}
                  className="bg-slate-800 hover:bg-slate-700 text-teal-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Export CSV
                </button>
                <button
                  onClick={() => setShowAmortizationModal(false)}
                  className="text-slate-400 hover:text-white text-sm font-bold"
                >
                  Close ✕
                </button>
              </div>
            </div>

            <div className="overflow-y-auto p-6 space-y-2">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 uppercase">
                  <tr>
                    <th className="p-3">Year</th>
                    <th className="p-3">Principal Paid</th>
                    <th className="p-3">Interest Paid</th>
                    <th className="p-3">Remaining Loan Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {amortizationSchedule.map((row) => (
                    <tr key={row.year} className="hover:bg-slate-800/50">
                      <td className="p-3 font-bold text-teal-400">Year {row.year}</td>
                      <td className="p-3 text-teal-300">{formatCurrency(row.principalPaid)}</td>
                      <td className="p-3 text-slate-300">{formatCurrency(row.interestPaid)}</td>
                      <td className="p-3 text-white font-bold">{formatCurrency(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
