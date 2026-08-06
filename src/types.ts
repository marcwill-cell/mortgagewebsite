export type LoanPurpose = 'purchase' | 'refinance' | 'cashout';

export type PropertyType = 'single_family' | 'condo' | 'multi_family' | 'townhouse' | 'investment';

export type CreditScoreTier = 'excellent' | 'good' | 'fair' | 'rebuilding';

export interface CalculatorState {
  homePrice: number;
  downPayment: number;
  downPaymentPercent: number;
  loanTermYears: number;
  interestRate: number;
  propertyTaxRate: number; // annual percentage e.g. 1.25%
  homeInsuranceAnnual: number; // annual $
  hoaMonthly: number;
  pmiRate: number; // annual percentage e.g. 0.5% if downpayment < 20%
}

export interface PaymentBreakdown {
  principalAndInterest: number;
  propertyTax: number;
  homeInsurance: number;
  hoa: number;
  pmi: number;
  totalMonthly: number;
  loanAmount: number;
}

export interface AmortizationRow {
  year: number;
  balance: number;
  principalPaid: number;
  interestPaid: number;
  totalPaid: number;
}

export interface PreQualLeadForm {
  loanPurpose: LoanPurpose;
  propertyType: PropertyType;
  propertyUse: 'primary' | 'secondary' | 'investment';
  estimatedPrice: number;
  downPaymentAmount: number;
  creditScore: CreditScoreTier;
  county: string;
  zipCode: string;
  firstTimeHomeBuyer: boolean;
  militaryStatus: 'none' | 'active' | 'veteran';
  fullName: string;
  email: string;
  phone: string;
  bestTimeToCall: 'morning' | 'afternoon' | 'evening';
  notes?: string;
}

export interface RateItem {
  programName: string;
  rate: number;
  apr: number;
  change: number; // +0.02, -0.05
  term: string;
  points: number;
}

export interface CountyLimit {
  county: string;
  oneUnitLimit: number;
  twoUnitLimit: number;
  threeUnitLimit: number;
  fourUnitLimit: number;
  tier: 'High-Cost' | 'Standard Conforming';
}

export interface LoanProgram {
  id: string;
  name: string;
  tagline: string;
  minDownPercent: number;
  minCreditScore: number;
  maxLoanAmount: string;
  keyBenefits: string[];
  description: string;
  idealFor: string;
  category: 'Popular' | 'Government' | 'High Value' | 'Alternative';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string; // e.g. "Los Angeles, CA"
  type: string; // e.g. "Jumbo Purchase ($1.2M)"
  rating: number;
  date: string;
  quote: string;
  savingsOrDetail: string;
  avatarUrl?: string;
}

export interface AiChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedAction?: {
    label: string;
    actionType: 'fill_calc' | 'open_form' | 'view_program';
    payload?: any;
  };
}
