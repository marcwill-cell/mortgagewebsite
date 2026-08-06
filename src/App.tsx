import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMarc } from './components/AboutMarc';
import { HelocSection } from './components/HelocSection';
import { ReverseMortgage } from './components/ReverseMortgage';
import { LoanCalculator } from './components/LoanCalculator';
import { ContactForm } from './components/ContactForm';
import { LoanPrograms } from './components/LoanPrograms';
import { CountyLimits } from './components/CountyLimits';
import { AiMortgageAdvisor } from './components/AiMortgageAdvisor';
import { Testimonials } from './components/Testimonials';
import { SeoFaqSection } from './components/SeoFaqSection';
import { Footer } from './components/Footer';
import { PreQualModal } from './components/PreQualModal';
import { LoanProgram } from './types';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefilledScenario, setPrefilledScenario] = useState<{ price: number; down: number; rate: number; term: number } | null>(null);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTransferToForm = (scenarioData: { price: number; down: number; rate: number; term: number }) => {
    setPrefilledScenario(scenarioData);
    handleNavigateSection('contact');
  };

  const handleSelectProgram = (program: LoanProgram) => {
    setPrefilledScenario({
      price: 850000,
      down: program.minDownPercent > 0 ? Math.round(850000 * (program.minDownPercent / 100)) : 0,
      rate: program.id === 'va' ? 5.75 : program.id === 'fha' ? 5.875 : 6.375,
      term: 30,
    });
    handleNavigateSection('contact');
  };

  const handleSelectCounty = (countyName: string) => {
    setPrefilledScenario({
      price: countyName === 'Los Angeles' || countyName === 'Orange' || countyName === 'San Francisco' ? 1100000 : 750000,
      down: 150000,
      rate: 6.375,
      term: 30,
    });
    handleNavigateSection('contact');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Header */}
      <Header
        onOpenPreQual={() => setModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Hero Section */}
      <div id="hero">
        <Hero
          onOpenPreQual={() => setModalOpen(true)}
          onNavigateCalculator={() => handleNavigateSection('calculator')}
        />
      </div>

      {/* Main Content Sections */}
      <main>
        {/* Dedicated About Marc Williamson Section & Tab */}
        <AboutMarc onOpenPreQual={() => setModalOpen(true)} />

        {/* Dedicated HELOC Section (Down to 600 FICO) */}
        <HelocSection onOpenPreQual={() => setModalOpen(true)} />

        {/* Dedicated Reverse Mortgages Section (Age 55+) */}
        <ReverseMortgage onOpenPreQual={() => setModalOpen(true)} />

        {/* Integrated Loan Calculator Section */}
        <LoanCalculator onTransferToForm={handleTransferToForm} />

        {/* Streamlined Pre-Qualification & Contact Form Section */}
        <ContactForm prefilledScenario={prefilledScenario} />

        {/* California Loan Programs */}
        <LoanPrograms onSelectProgram={handleSelectProgram} />

        {/* California County Conforming Limits Lookup */}
        <CountyLimits onSelectCounty={handleSelectCounty} />

        {/* AI Mortgage Advisor */}
        <AiMortgageAdvisor
          onOpenPreQual={() => setModalOpen(true)}
          onOpenCalculator={() => handleNavigateSection('calculator')}
        />

        {/* Client Spotlight Review */}
        <Testimonials />

        {/* SEO FAQs & Lending Guide */}
        <SeoFaqSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenPreQual={() => setModalOpen(true)}
      />

      {/* Rate Quote Modal */}
      <PreQualModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefilledScenario={prefilledScenario}
      />
    </div>
  );
}
