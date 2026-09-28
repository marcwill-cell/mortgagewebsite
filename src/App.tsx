import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProcessingPackages } from './components/ProcessingPackages';
import { HowItWorks } from './components/HowItWorks';
import { LoanTypesProcessed } from './components/LoanTypesProcessed';
import { StateIntel } from './components/StateIntel';
import { AboutMarc } from './components/AboutMarc';
import { LoanCalculator } from './components/LoanCalculator';
import { ContactForm } from './components/ContactForm';
import { Testimonials } from './components/Testimonials';
import { SeoFaqSection } from './components/SeoFaqSection';
import { Footer } from './components/Footer';
import { PreQualModal } from './components/PreQualModal';
import { ProcessingPackage } from './data/processingData';

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

  const handleSelectPackage = (pkg: ProcessingPackage) => {
    setPrefilledScenario({
      price: 850000,
      down: 170000,
      rate: 6.375,
      term: 30,
    });
    handleNavigateSection('contact');
  };

  const handleSelectProgram = (programId: string) => {
    setPrefilledScenario({
      price: 850000,
      down: 170000,
      rate: 6.375,
      term: 30,
    });
    handleNavigateSection('contact');
  };

  return (
    <div className="min-h-screen art-deco-wallpaper text-slate-900 font-sans selection:bg-[#D4AF37] selection:text-slate-950">
      {/* Art Deco Header & Top Bar Contract */}
      <Header
        onOpenPreQual={() => setModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Hero Section with Marc Williamson Card & Art Deco Backdrop */}
      <div id="hero">
        <Hero
          onOpenPreQual={() => setModalOpen(true)}
          onNavigateCalculator={() => handleNavigateSection('calculator')}
          onNavigatePackages={() => handleNavigateSection('packages')}
        />
      </div>

      {/* Main Content Sections */}
      <main>
        {/* Core Golden State 3rd Party Loan Processing Packages ($0 Upfront, Paid at Closing) */}
        <ProcessingPackages
          onSelectPackage={handleSelectPackage}
          onOpenConsultation={() => setModalOpen(true)}
        />

        {/* Seamless LOS Workflow: Arive, LendingPad, Encompass & 5-Stage Lifecycle */}
        <HowItWorks
          onOpenConsultation={() => setModalOpen(true)}
        />

        {/* Loan Programs Processed: Conventional, Non-QM, DSCR, Commercial, Jumbo */}
        <LoanTypesProcessed
          onSelectProgram={handleSelectProgram}
          onOpenConsultation={() => setModalOpen(true)}
        />

        {/* State-by-State Regulatory & Licensing Directory (1 Touch Processing LLC) */}
        <StateIntel
          onOpenConsultation={() => setModalOpen(true)}
        />

        {/* Dedicated About Marc Williamson Section (Photo, Bio, NMLS #1387796) */}
        <AboutMarc
          onOpenPreQual={() => setModalOpen(true)}
        />

        {/* Interactive Broker Overhead ROI & Loan Calculator */}
        <LoanCalculator
          onTransferToForm={handleTransferToForm}
        />

        {/* Client & Broker Reviews / Testimonials for Marc Williamson */}
        <Testimonials />

        {/* File Intake & Broker Partner Onboarding Desk */}
        <ContactForm
          prefilledScenario={prefilledScenario}
        />

        {/* SEO & Compliance FAQs */}
        <SeoFaqSection />
      </main>

      {/* Gilded Art Deco Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenPreQual={() => setModalOpen(true)}
      />

      {/* File Intake / Consultation Modal */}
      <PreQualModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefilledScenario={prefilledScenario}
      />
    </div>
  );
}
