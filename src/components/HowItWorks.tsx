import React, { useState } from 'react';
import { WORKFLOW_STEPS, LOS_INTEGRATIONS } from '../data/processingData';
import { Check, Laptop, Cloud, Database, Server, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import suiteImage from '../assets/images/art_deco_processing_suite_1790618652726.jpg';

interface HowItWorksProps {
  onOpenConsultation: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="workflow" className="py-20 border-b border-[#D4AF37]/35 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#0A0D14] border border-[#D4AF37]/50 text-xs uppercase tracking-[0.25em] text-[#F5D77F] font-semibold shadow-md">
            <span>◈</span>
            <span>Zero Learning Curve · Native Integrations</span>
            <span>◈</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0D14]">
            SEAMLESS WORKFLOW. <span className="gold-gradient-text">DIRECT LOS INTEGRATION.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-normal">
            You don't need another software login or clunky external portal. Golden State 3rd Party Loan Processing logs directly into your existing loan origination platform to handle files natively.
          </p>
          <p className="text-[11px] text-slate-600 font-medium">
            Powered by 1 Touch Processing Arizona NMLS # 2337071
          </p>
        </div>

        {/* Part 1: LOS Integration Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {LOS_INTEGRATIONS.map((los, i) => (
            <div
              key={los.name}
              className="art-deco-card rounded-sm p-6 relative group transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform">
                  {i === 0 && <Laptop className="w-5 h-5" />}
                  {i === 1 && <Cloud className="w-5 h-5" />}
                  {i === 2 && <Database className="w-5 h-5" />}
                  {i === 3 && <Server className="w-5 h-5" />}
                </div>
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {los.status}
                </span>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white mb-1">
                {los.name}
              </h3>
              <p className="text-[11px] text-[#D4AF37] uppercase tracking-wider mb-2 font-medium">
                {los.category}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {los.description}
              </p>
            </div>
          ))}
        </div>

        {/* Part 2: The 5-Step Flawless Lifecycle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Step Interactive Flow */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-2">
              The 5-Stage Closing Lifecycle:
            </div>
            
            {WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-sm cursor-pointer border transition-all ${
                    isSelected
                      ? 'bg-[#141824] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
                      : 'bg-[#0D1017]/80 border-slate-800 hover:border-[#D4AF37]/40'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`font-cinzel text-lg font-extrabold ${isSelected ? 'text-[#F5D77F]' : 'text-slate-500'}`}>
                      {step.step}
                    </span>
                    <div className="space-y-1">
                      <h4 className={`text-sm font-semibold tracking-wide ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Architectural Operations Room Visual */}
          <div className="lg:col-span-6">
            <div className="art-deco-card rounded-sm p-4 relative overflow-hidden">
              <div className="relative rounded overflow-hidden aspect-[4/3] border border-[#D4AF37]/30">
                <img
                  src={suiteImage}
                  alt="Art Deco Processing Operations Floor"
                  className="w-full h-full object-cover filter contrast-105 brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent" />
                
                {/* Floating Gilded Metric Box */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-[#090C10]/95 backdrop-blur-md border border-[#D4AF37]/40 shadow-2xl">
                  <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2 mb-2">
                    <span className="font-semibold text-white uppercase tracking-wider">Turnaround SLA Benchmark</span>
                    <span className="text-[#F5D77F] font-bold">24 - 48 Hour Conditions</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Initial Scrub</span>
                      <strong className="text-white font-cinzel">Same Day</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Orders Placed</span>
                      <strong className="text-[#D4AF37] font-cinzel">&lt; 4 Hours</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">CD Balancing</span>
                      <strong className="text-white font-cinzel">24 Hours</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs px-2 text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Encompass, Arive & LendingPad certified</span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="text-amber-200 hover:text-white font-semibold flex items-center gap-1 hover:underline"
                >
                  <span>Connect Your LOS ➔</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
