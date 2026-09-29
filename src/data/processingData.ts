export interface ProcessingPackage {
  id: string;
  name: string;
  price: number;
  tagline: string;
  badge?: string;
  idealFor: string;
  turnaroundTime: string;
  features: string[];
  isPopular?: boolean;
}

export const GOLDEN_STATE_PACKAGES: ProcessingPackage[] = [
  {
    id: 'streamline',
    name: 'Streamline',
    price: 695,
    tagline: 'High-velocity processing for streamlined refinance transactions',
    badge: 'Fast Turnaround',
    idealFor: 'FHA Streamlines, VA IRRRLs, and standard rate-and-term refinances with simplified documentation.',
    turnaroundTime: '10 - 14 Business Days',
    features: [
      'Expedited loan file intake scrub',
      'Payoff statement & title/escrow coordination',
      'Basic credit & liability verification',
      'Initial underwriting package submission',
      'Rapid condition clearing with title and lender',
      'Closing disclosure (CD) balancing & scheduling',
      'Post-closing document audit & delivery',
      '$0 upfront cost — billed on Closing Disclosure'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 995,
    tagline: 'From submission to closing for originators who send their own disclosures',
    idealFor: 'Loan officers who prefer taking initial applications, structuring files, and issuing initial disclosures.',
    turnaroundTime: '14 - 21 Business Days',
    features: [
      'Comprehensive 1003 scrub & DU/LPA audit',
      'Ordering all 3rd-party items (Appraisal, Title, VOE/VOD, HOI)',
      'Direct coordination with escrow, title agents, and Realtors',
      'Complete submission to wholesale investor underwriting',
      'Condition tracking & rapid resubmission within 24 hours',
      'Balancing initial & final Closing Disclosures',
      'Closing doc coordination with notary and title',
      '$0 upfront cost — 100% borrower-paid at closing'
    ]
  },
  {
    id: 'preferred',
    name: 'Preferred',
    price: 1195,
    tagline: 'End-to-end processing with initial disclosures issued & managed for you',
    badge: 'Most Popular',
    isPopular: true,
    idealFor: 'Brokers and originators who want to hand off the file immediately after loan origination.',
    turnaroundTime: '12 - 18 Business Days',
    features: [
      'Full Initial Disclosure generation, delivery & e-sign tracking',
      'Proactive borrower document collection & follow-up',
      'All 3rd-party orders (Appraisals, Title/Escrow, VOE, HOA Certs)',
      'Pre-underwriting guideline scrub (DU/LPA/Investor overlays)',
      'Dedicated condition clearing with borrowers & underwriters',
      'Lock expiration tracking & extension management',
      'CD balancing, closing document ordering & funding sign-off',
      '$0 upfront broker cost — added directly to Title CD'
    ]
  }
];

export interface LosIntegration {
  name: string;
  category: string;
  description: string;
  status: string;
  iconName: string;
}

export const LOS_INTEGRATIONS: LosIntegration[] = [
  {
    name: 'Arive',
    category: 'Loan Origination System',
    description: 'Native processor assignment. We plug straight into your Arive brokerage account with zero friction or duplicate data entry.',
    status: 'Instant 1-Click Sync',
    iconName: 'Laptop'
  },
  {
    name: 'LendingPad',
    category: 'Cloud LOS Platform',
    description: 'Direct pipeline access. Assign files in real-time, monitor condition logs, and review automated milestone notices.',
    status: 'Certified Partner',
    iconName: 'Cloud'
  },
  {
    name: 'Encompass (ICE)',
    category: 'Enterprise LOS',
    description: 'Full compatibility with Encompass broker and banker configurations, milestone tracking, and e-folder management.',
    status: 'Fully Integrated',
    iconName: 'Database'
  },
  {
    name: 'Calyx Point & Byte',
    category: 'Mortgage Software',
    description: 'Seamless remote desktop or cloud-file sync for traditional brokerage environments with secure encrypted uploads.',
    status: 'Active Support',
    iconName: 'Server'
  }
];

export interface StateIntelData {
  state: string;
  code: string;
  licenseNumber: string;
  status: 'Active Processing' | 'Licensed' | 'High Volume';
  fundingType: 'Wet Funding' | 'Dry Funding' | 'Table Funding';
  closingStyle: 'Escrow State' | 'Attorney State';
  avgTurnDays: number;
  highBalanceLimit: string;
  specialNotes: string;
}

export const LICENSED_STATES_DIRECTORY = [
  { state: 'Arizona', code: 'AZ', license: 'AZ Mortgage Broker License #: MB-1037930' },
  { state: 'California', code: 'CA', license: 'CA LICENSE #: CA-DBO1289441' },
  { state: 'Colorado', code: 'CO', license: 'CO LICENSE #: 100535928' },
  { state: 'Florida', code: 'FL', license: 'FL License #: LO113558 | FL License #: LO114744' },
  { state: 'Illinois', code: 'IL', license: 'IL License #: EEP.0000049' },
  { state: 'Michigan', code: 'MI', license: 'MI License # 2337071' },
  { state: 'Oklahoma', code: 'OK', license: 'OK License #: MB016515' },
  { state: 'Pennsylvania', code: 'PA', license: 'PA License #: 112928' },
  { state: 'Texas', code: 'TX', license: 'TX SML Licensed' },
];

export const STATE_INTEL_RECORDS: StateIntelData[] = [
  {
    state: 'Arizona',
    code: 'AZ',
    licenseNumber: 'AZ Mortgage Broker License #: MB-1037930',
    status: 'High Volume',
    fundingType: 'Wet Funding',
    closingStyle: 'Escrow State',
    avgTurnDays: 14,
    highBalanceLimit: '$766,550',
    specialNotes: 'Full coverage of Maricopa, Pima, and statewide Arizona purchase and refinance files with rapid title and escrow balancing.'
  },
  {
    state: 'California',
    code: 'CA',
    licenseNumber: 'CA LICENSE #: CA-DBO1289441',
    status: 'High Volume',
    fundingType: 'Wet Funding',
    closingStyle: 'Escrow State',
    avgTurnDays: 14,
    highBalanceLimit: '$1,149,825',
    specialNotes: 'Full coverage of Orange, LA, San Diego, and Bay Area high-cost limits. High-velocity Non-QM bank statement and conforming processing.'
  },
  {
    state: 'Colorado',
    code: 'CO',
    licenseNumber: 'CO LICENSE #: 100535928',
    status: 'Active Processing',
    fundingType: 'Wet Funding',
    closingStyle: 'Escrow State',
    avgTurnDays: 15,
    highBalanceLimit: '$1,050,000',
    specialNotes: 'Denver metro, Boulder, El Paso, and resort mountain high-cost county guidelines expertise with seamless title coordination.'
  },
  {
    state: 'Florida',
    code: 'FL',
    licenseNumber: 'FL License #: LO113558 | FL License #: LO114744',
    status: 'High Volume',
    fundingType: 'Wet Funding',
    closingStyle: 'Escrow State',
    avgTurnDays: 15,
    highBalanceLimit: '$766,550',
    specialNotes: 'Condo questionnaire & milestone mastery for coastal properties. High-velocity DSCR investor portfolio closings across all 67 counties.'
  },
  {
    state: 'Illinois',
    code: 'IL',
    licenseNumber: 'IL License #: EEP.0000049',
    status: 'Active Processing',
    fundingType: 'Wet Funding',
    closingStyle: 'Attorney State',
    avgTurnDays: 16,
    highBalanceLimit: '$766,550',
    specialNotes: 'Cook County and statewide Chicago metro closing attorney coordination, title survey review, and municipal transfer tax balancing.'
  },
  {
    state: 'Michigan',
    code: 'MI',
    licenseNumber: 'MI License # 2337071',
    status: 'Active Processing',
    fundingType: 'Wet Funding',
    closingStyle: 'Escrow State',
    avgTurnDays: 14,
    highBalanceLimit: '$766,550',
    specialNotes: 'Wayne, Oakland, Macomb, and statewide Michigan purchase and refinance processing with fast title clearance.'
  },
  {
    state: 'Oklahoma',
    code: 'OK',
    licenseNumber: 'OK License #: MB016515',
    status: 'Active Processing',
    fundingType: 'Wet Funding',
    closingStyle: 'Escrow State',
    avgTurnDays: 14,
    highBalanceLimit: '$766,550',
    specialNotes: 'Oklahoma City, Tulsa, and statewide closing abstract review, survey inspection verification, and escrow settlement.'
  },
  {
    state: 'Pennsylvania',
    code: 'PA',
    licenseNumber: 'PA License #: 112928',
    status: 'Active Processing',
    fundingType: 'Wet Funding',
    closingStyle: 'Attorney State',
    avgTurnDays: 15,
    highBalanceLimit: '$766,550',
    specialNotes: 'Philadelphia, Allegheny, and statewide Pennsylvania closing title company balancing, transfer tax calculations, and municipal lien certifications.'
  },
  {
    state: 'Texas',
    code: 'TX',
    licenseNumber: 'TX SML Licensed',
    status: 'High Volume',
    fundingType: 'Dry Funding',
    closingStyle: 'Attorney State',
    avgTurnDays: 16,
    highBalanceLimit: '$766,550',
    specialNotes: 'Full compliance with Texas Section 50(a)(6) cash-out refinance rules, fee restrictions, and mandatory attorney closing doc review.'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Intake & File Scrub',
    desc: 'You send the 1003 via Arive, LendingPad, or secure link. We scrub the file, run DU/LPA, verify AUS findings, and establish clear condition checklists.'
  },
  {
    step: '02',
    title: 'Disclosures & 3rd-Party Orders',
    desc: 'We issue compliant initial disclosures, collect borrower signatures, and order Appraisal, Title, Escrow, VOEs, VODs, and Homeowner Insurance day one.'
  },
  {
    step: '03',
    title: 'Underwriting Submission',
    desc: 'The file is packaged to investor-grade standards and submitted directly to your wholesale lender. Pre-underwriting scrub minimizes initial conditions.'
  },
  {
    step: '04',
    title: 'Rapid Condition Clearing',
    desc: 'We chase all borrower documents, coordinate title updates, solve underwriting discrepancies, and clear conditions within 24 to 48 hours.'
  },
  {
    step: '05',
    title: 'Clear to Close & Funding',
    desc: 'We balance the Closing Disclosure with Title, coordinate signing appointments, ensure funding sign-off, and perform a post-close compliance audit.'
  }
];
