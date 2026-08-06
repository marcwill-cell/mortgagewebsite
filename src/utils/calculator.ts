import { AmortizationRow, CalculatorState, PaymentBreakdown } from '../types';

export function calculateMortgage(state: CalculatorState): PaymentBreakdown {
  const loanAmount = Math.max(0, state.homePrice - state.downPayment);
  const monthlyInterestRate = (state.interestRate / 100) / 12;
  const totalMonths = state.loanTermYears * 12;

  let principalAndInterest = 0;
  if (loanAmount > 0 && monthlyInterestRate > 0) {
    principalAndInterest =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
  } else if (loanAmount > 0) {
    principalAndInterest = loanAmount / totalMonths;
  }

  const propertyTax = (state.homePrice * (state.propertyTaxRate / 100)) / 12;
  const homeInsurance = state.homeInsuranceAnnual / 12;
  const hoa = state.hoaMonthly;

  // PMI applies if downpayment percentage < 20%
  const ltv = state.homePrice > 0 ? (loanAmount / state.homePrice) * 100 : 0;
  const pmi = ltv > 80 ? (loanAmount * (state.pmiRate / 100)) / 12 : 0;

  const totalMonthly = principalAndInterest + propertyTax + homeInsurance + hoa + pmi;

  return {
    principalAndInterest: Math.round(principalAndInterest),
    propertyTax: Math.round(propertyTax),
    homeInsurance: Math.round(homeInsurance),
    hoa: Math.round(hoa),
    pmi: Math.round(pmi),
    totalMonthly: Math.round(totalMonthly),
    loanAmount: Math.round(loanAmount),
  };
}

export function generateAmortizationSchedule(state: CalculatorState): AmortizationRow[] {
  const loanAmount = Math.max(0, state.homePrice - state.downPayment);
  const monthlyRate = (state.interestRate / 100) / 12;
  const totalMonths = state.loanTermYears * 12;
  
  if (loanAmount <= 0 || monthlyRate <= 0) return [];

  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  let currentBalance = loanAmount;
  const rows: AmortizationRow[] = [];

  let yearlyPrincipal = 0;
  let yearlyInterest = 0;

  for (let m = 1; m <= totalMonths; m++) {
    const interestForMonth = currentBalance * monthlyRate;
    const principalForMonth = monthlyPayment - interestForMonth;
    currentBalance = Math.max(0, currentBalance - principalForMonth);

    yearlyPrincipal += principalForMonth;
    yearlyInterest += interestForMonth;

    if (m % 12 === 0 || m === totalMonths) {
      const year = Math.ceil(m / 12);
      rows.push({
        year,
        balance: Math.round(currentBalance),
        principalPaid: Math.round(yearlyPrincipal),
        interestPaid: Math.round(yearlyInterest),
        totalPaid: Math.round(yearlyPrincipal + yearlyInterest),
      });
      yearlyPrincipal = 0;
      yearlyInterest = 0;
    }
  }

  return rows;
}

export function calculateAffordability(monthlyIncome: number, monthlyDebt: number, downPayment: number, interestRate: number) {
  // Max housing DTI 28% to 36%
  const maxHousingPayment = (monthlyIncome * 0.31) - monthlyDebt;
  const safePayment = Math.max(500, maxHousingPayment);
  
  // Assume ~25% of payment goes to tax + insurance
  const maxPI = safePayment * 0.75;
  const monthlyRate = (interestRate / 100) / 12;
  const months = 360;

  let maxLoan = 0;
  if (monthlyRate > 0) {
    maxLoan = (maxPI * (Math.pow(1 + monthlyRate, months) - 1)) / (monthlyRate * Math.pow(1 + monthlyRate, months));
  }

  const estimatedHomePrice = Math.round(maxLoan + downPayment);

  return {
    estimatedHomePrice,
    maxLoan: Math.round(maxLoan),
    maxMonthlyPayment: Math.round(safePayment),
  };
}

export function calculateRefiSavings(currentBalance: number, currentRate: number, currentTermYearsLeft: number, newRate: number, newTermYears: number) {
  const oldMonthlyRate = (currentRate / 100) / 12;
  const oldMonths = currentTermYearsLeft * 12;
  const oldPI = (currentBalance * oldMonthlyRate * Math.pow(1 + oldMonthlyRate, oldMonths)) / (Math.pow(1 + oldMonthlyRate, oldMonths) - 1);

  const newMonthlyRate = (newRate / 100) / 12;
  const newMonths = newTermYears * 12;
  const newPI = (currentBalance * newMonthlyRate * Math.pow(1 + newMonthlyRate, newMonths)) / (Math.pow(1 + newMonthlyRate, newMonths) - 1);

  const monthlySavings = Math.round(oldPI - newPI);
  const annualSavings = monthlySavings * 12;
  const totalSavingsOverLoan = Math.round((oldPI * oldMonths) - (newPI * newMonths));

  return {
    oldPayment: Math.round(oldPI),
    newPayment: Math.round(newPI),
    monthlySavings,
    annualSavings,
    totalSavingsOverLoan
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}
