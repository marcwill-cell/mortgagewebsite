import React, { useState } from 'react';
import { STATE_INTEL_RECORDS, StateIntelData } from '../data/processingData';
import { MapPin, Shield, Clock, FileCheck, CheckCircle2, ChevronRight, Phone } from 'lucide-react';

interface StateIntelProps {
  onOpenConsultation: () => void;
}

export const StateIntel: React.FC<StateIntelProps> = ({ onOpenConsultation }) => {
  const [selectedState, setSelectedState] = useState<StateIntelData>(STATE_INTEL_RECORDS[0]);

  return (
    <section id="state-intel" className="py-20 border-b border-[#D4AF37]/35 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#0A0D14] border border-[#D4AF37]/50 text-xs uppercase tracking-[0.25em] text-[#F5D77F] font-semibold shadow-md">
            <span>◈</span>
            <span>1 Touch Processing LLC · Official State Licensing Directory</span>
            <span>◈</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0D14]">
            LICENSED STATES & <span className="gold-gradient-text">REGULATORY INTEL</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-normal">
            Operational contract mortgage processing across our officially licensed states powered by 1 Touch Processing LLC (NMLS #2337071).
          </p>
        </div>

        {/* State Selection Bar & Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: State Selector Grid */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs uppercase tracking-wider text-slate-800 font-bold mb-3 flex items-center justify-between">
              <span>Licensed Operating States:</span>
              <span className="text-[11px] text-[#8C650A] font-mono font-semibold">NMLS #2337071</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {STATE_INTEL_RECORDS.map(st => {
                const isSelected = selectedState.code === st.code;
                return (
                  <button
                    key={st.code}
                    onClick={() => setSelectedState(st)}
                    className={`p-3 rounded-sm text-left border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#151B27] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
                        : 'bg-[#0D1017] border-slate-800 hover:border-[#D4AF37]/40'
                    }`}
                  >
                    <div className="min-w-0 pr-2">
                      <div className="flex items-center gap-1.5">
                        <span className={`font-cinzel text-sm font-bold ${isSelected ? 'text-[#F5D77F]' : 'text-white'}`}>
                          {st.state}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">({st.code})</span>
                      </div>
                      <span className="text-[9px] text-[#D4AF37] font-mono block truncate mt-0.5">
                        {st.licenseNumber}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#D4AF37]' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>

            {/* Official State Licensing Directory Box */}
            <div className="mt-4 p-4 rounded-sm bg-[#0E121B] border border-[#D4AF37]/40 text-xs space-y-2 shadow-xl">
              <div className="flex items-center gap-2 text-[#F5D77F] font-bold text-xs uppercase tracking-wider">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span>1 Touch Processing LLC · Licensing Directory</span>
              </div>
              <div className="text-[11px] text-white font-semibold font-mono border-b border-slate-800 pb-1.5">
                NMLS#: 2337071
              </div>
              <div className="text-[10px] text-slate-300 space-y-1 font-mono leading-relaxed pt-1">
                <div>• <strong className="text-white">AZ:</strong> AZ Mortgage Broker License #: MB-1037930</div>
                <div>• <strong className="text-white">CA:</strong> CA LICENSE #: CA-DBO1289441</div>
                <div>• <strong className="text-white">CO:</strong> CO LICENSE #: 100535928</div>
                <div>• <strong className="text-white">FL:</strong> FL License #: LO113558 | FL License #: LO114744</div>
                <div>• <strong className="text-white">IL:</strong> IL License #: EEP.0000049</div>
                <div>• <strong className="text-white">MI:</strong> MI License # 2337071</div>
                <div>• <strong className="text-white">OK:</strong> OK License #: MB016515</div>
                <div>• <strong className="text-white">PA:</strong> PA License #: 112928</div>
                <div>• <strong className="text-white">TX:</strong> TX SML Licensed</div>
              </div>
            </div>
          </div>

          {/* Right: Detailed State Dossier */}
          <div className="lg:col-span-7">
            <div className="art-deco-card rounded-sm p-6 sm:p-8 border border-[#D4AF37]/35 shadow-2xl relative">
              
              {/* Stepped Corners */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#D4AF37]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#D4AF37]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#D4AF37]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#D4AF37]" />

              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D4AF37]/25 pb-5 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                    Jurisdiction & Licensing Analysis
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                    <span>{selectedState.state}</span>
                    <span className="text-sm font-mono text-[#D4AF37] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                      {selectedState.code}
                    </span>
                  </h3>
                  <div className="mt-2 text-xs font-mono text-[#F5D77F] bg-[#121622] px-3 py-1 rounded-sm border border-[#D4AF37]/35 inline-flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{selectedState.licenseNumber}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-sm">
                    ● {selectedState.status}
                  </span>
                </div>
              </div>

              {/* Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="p-3 rounded-sm bg-[#121622] border border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Funding Type</span>
                  <strong className="text-xs font-bold text-white mt-1 block">
                    {selectedState.fundingType}
                  </strong>
                </div>
                <div className="p-3 rounded-sm bg-[#121622] border border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Closing Style</span>
                  <strong className="text-xs font-bold text-white mt-1 block">
                    {selectedState.closingStyle}
                  </strong>
                </div>
                <div className="p-3 rounded-sm bg-[#121622] border border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Avg Turnaround</span>
                  <strong className="text-xs font-bold text-[#F5D77F] mt-1 block tabular-nums">
                    {selectedState.avgTurnDays} Business Days
                  </strong>
                </div>
                <div className="p-3 rounded-sm bg-[#121622] border border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">High Balance Cap</span>
                  <strong className="text-xs font-bold text-white mt-1 block tabular-nums">
                    {selectedState.highBalanceLimit}
                  </strong>
                </div>
              </div>

              {/* State Specific Intelligence */}
              <div className="p-4 rounded-sm bg-[#121622] border border-[#D4AF37]/25 space-y-2 mb-6">
                <div className="text-xs font-bold text-amber-200 uppercase tracking-wider flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>State Operational Protocol & Insights:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  {selectedState.specialNotes}
                </p>
              </div>

              {/* Action row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#D4AF37]/20">
                <div className="text-xs text-slate-400">
                  Ready to assign files in <strong className="text-white">{selectedState.state}</strong>?
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-2.5 rounded-sm font-semibold text-xs uppercase tracking-wider text-[#0A0D14] gold-gradient-bg hover:brightness-110 shadow transition-all"
                >
                  Submit {selectedState.code} Loan File
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
