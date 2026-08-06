import { LoanProgram, RateItem, Testimonial } from '../types';

export const CURRENT_RATES: RateItem[] = [
  { programName: '30-Year Fixed Conforming', rate: 6.375, apr: 6.482, change: -0.05, term: '30 Yrs', points: 0 },
  { programName: '15-Year Fixed Conforming', rate: 5.625, apr: 5.741, change: -0.03, term: '15 Yrs', points: 0 },
  { programName: 'FHA 30-Year Fixed', rate: 5.875, apr: 6.690, change: -0.04, term: '30 Yrs', points: 0 },
  { programName: 'VA 30-Year Fixed', rate: 5.750, apr: 6.012, change: -0.02, term: '30 Yrs', points: 0 },
  { programName: 'Jumbo 30-Year Fixed ($1M+)', rate: 6.500, apr: 6.615, change: 0.00, term: '30 Yrs', points: 0.125 },
  { programName: 'DSCR Investor Loan', rate: 6.875, apr: 7.050, change: -0.02, term: '30 Yrs', points: 0 },
];

export const LOAN_PROGRAMS: LoanProgram[] = [
  {
    id: 'conventional',
    name: 'Conventional Loans',
    tagline: 'Standard low-rate mortgages for primary homes, 2nd homes & investments',
    minDownPercent: 3,
    minCreditScore: 620,
    maxLoanAmount: 'Up to $1,149,825 (CA High-Cost)',
    keyBenefits: [
      'Down payments as low as 3% for first-time buyers',
      'PMI drops automatically at 80% LTV',
      'Flexible 10, 15, 20, and 30-year fixed terms',
      'No upfront mortgage insurance fees'
    ],
    description: 'Conventional mortgages are backed by Fannie Mae and Freddie Mac. They offer the most competitive interest rates for borrowers with solid credit scores and verifiable income in California.',
    idealFor: 'Borrowers with good credit (680+) looking for standard financing and lower long-term borrowing costs.',
    category: 'Popular'
  },
  {
    id: 'fha',
    name: 'FHA Government Loans',
    tagline: 'Flexible qualification for buyers with lower down payments or credit builder needs',
    minDownPercent: 3.5,
    minCreditScore: 580,
    maxLoanAmount: 'Up to $1,149,825 depending on CA county',
    keyBenefits: [
      'Just 3.5% down payment required',
      'More lenient credit score requirements (580+)',
      'Allows 100% gift funds for down payment & closing costs',
      'Higher debt-to-income (DTI) allowance up to 50%+'
    ],
    description: 'Federal Housing Administration (FHA) loans offer lenient credit requirements and lower down payments, making homeownership accessible across California.',
    idealFor: 'First-time home buyers, buyers recovering credit history, or those with limited down payment funds.',
    category: 'Government'
  },
  {
    id: 'va',
    name: 'VA Military Loans',
    tagline: 'Exclusive $0 down home financing for Veterans, Active Duty, and Surviving Spouses',
    minDownPercent: 0,
    minCreditScore: 580,
    maxLoanAmount: 'No conforming limit for full entitlement',
    keyBenefits: [
      '0% Down Payment required',
      'NO monthly mortgage insurance (PMI)',
      'Below-market competitive interest rates',
      'Assumable loan capability for future buyers'
    ],
    description: 'Backed by the U.S. Department of Veterans Affairs, VA loans represent the single best mortgage product available in California for eligible military service members.',
    idealFor: 'California military veterans, active duty personnel, Reserves, National Guard, and eligible spouses.',
    category: 'Government'
  },
  {
    id: 'jumbo',
    name: 'Jumbo & Luxury Loans',
    tagline: 'High-balance financing engineered for California high-value real estate',
    minDownPercent: 10,
    minCreditScore: 680,
    maxLoanAmount: '$3,000,000+',
    keyBenefits: [
      'Competitive interest rates matching conforming tiers',
      'Financing up to $3M+ for luxury estates',
      'Flexible asset depletion and RSUs/stock income options',
      'Interest-only payment choices available'
    ],
    description: 'Because California home values often exceed standard loan limits, Jumbo loans provide the necessary capital for luxury homes in Los Angeles, Bay Area, Orange County, San Diego, and coastal retreats.',
    idealFor: 'High-earning individuals, executives, tech professionals with RSUs, and luxury homebuyers.',
    category: 'High Value'
  },
  {
    id: 'dscr',
    name: 'DSCR Real Estate Investor Loans',
    tagline: 'Qualify based on property cash flow — no personal tax returns required',
    minDownPercent: 15,
    minCreditScore: 660,
    maxLoanAmount: '$2,500,000',
    keyBenefits: [
      'No personal tax returns or W-2s required',
      'Qualified entirely on property rental income (DSCR >= 1.0)',
      'Unlimited property portfolio scalability',
      'Supports short-term rental / Airbnb income calculations'
    ],
    description: 'Debt Service Coverage Ratio (DSCR) loans evaluate the property’s rental income against its debt payment, enabling active real estate investors to expand portfolios quickly.',
    idealFor: 'Real estate investors, landlords, and short-term rental operators across California.',
    category: 'Alternative'
  },
  {
    id: 'non_qm',
    name: 'Bank Statement & Self-Employed Loans',
    tagline: 'Tailored mortgages for business owners, freelancers & 1099 contractors',
    minDownPercent: 10,
    minCreditScore: 640,
    maxLoanAmount: '$3,000,000',
    keyBenefits: [
      'Uses 12 or 24 months of personal or business bank statements',
      'No tax return requirement',
      'Fast underwriting tailored to business cash flow',
      'Primary residence, 2nd home & investment properties eligible'
    ],
    description: 'Self-employed California entrepreneurs often write off expenses that reduce taxable income on tax returns. Bank statement loans look at real cash deposits to verify true purchasing power.',
    idealFor: 'Business owners, self-employed professionals, Realtors, 1099 contractors, and tech founders.',
    category: 'Alternative'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus & Elena Vance',
    location: 'Irvine, CA (Orange County)',
    type: 'Jumbo Home Purchase ($1.35M)',
    rating: 5,
    date: '2 weeks ago',
    quote: 'Navigating the Orange County market was intense, but Golden State Lenders closed our Jumbo purchase in just 14 calendar days! Their rate was nearly 0.5% lower than our big bank quote with zero junk fees.',
    savingsOrDetail: 'Saved $410/mo vs local bank quote'
  },
  {
    id: 't2',
    name: 'David Chen',
    location: 'San Jose, CA (Santa Clara)',
    type: 'Refinance & Cash-Out ($890K)',
    rating: 5,
    date: '1 month ago',
    quote: 'As a self-employed software consultant, getting approved by traditional lenders was a nightmare. Their Bank Statement loan program made qualification effortless using my business deposits.',
    savingsOrDetail: 'Consolidated debt & saved $680/mo'
  },
  {
    id: 't3',
    name: 'Sgt. Robert Trujillo (Ret.)',
    location: 'San Diego, CA',
    type: 'VA 0% Down Purchase ($780K)',
    rating: 5,
    date: '3 weeks ago',
    quote: 'The team knows VA loans inside and out. Got us 0% down with zero hassle and locked a 5.75% rate before market spikes. Honest, straightforward, and incredibly responsive.',
    savingsOrDetail: '$0 down payment + zero PMI'
  },
  {
    id: 't4',
    name: 'Sarah & James Miller',
    location: 'Sacramento, CA',
    type: 'FHA First-Time Buyer ($520K)',
    rating: 5,
    date: '2 months ago',
    quote: 'We thought homeownership in California was out of reach. The interactive rate calculator on their site showed us exact numbers, and their loan officer guided us through every step of our 3.5% down FHA loan.',
    savingsOrDetail: 'Locked $3,140 total monthly payment'
  }
];
