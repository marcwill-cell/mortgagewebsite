import React, { useState, useId } from 'react';
import { CA_COUNTY_LIMITS } from '../data/caCounties';
import { Search, MapPin, Building, ShieldCheck, ArrowRight, Info } from 'lucide-react';

interface CountyLimitsProps {
  onSelectCounty: (countyName: string) => void;
}

export const CountyLimits: React.FC<CountyLimitsProps> = ({ onSelectCounty }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState<'All' | 'High-Cost' | 'Standard Conforming'>('All');
  const searchInputId = useId();

  const filteredCounties = CA_COUNTY_LIMITS.filter((item) => {
    const matchesSearch = item.county.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = selectedTier === 'All' || item.tier === selectedTier;
    return matchesSearch && matchesTier;
  });

  return (
    <section id="county-limits" className="py-16 bg-slate-100 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-teal-700" /> 2026 California Conforming Limits
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Check Your California County Loan Limits
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Search all 58 California counties. Conforming loans offer lower interest rates and down payments compared to Jumbo financing.
          </p>

          {/* Search Bar & Filter Controls */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <label htmlFor={searchInputId} className="sr-only">Search California County</label>
              <input
                id={searchInputId}
                type="text"
                placeholder="Search County (e.g. Los Angeles, Orange, Bay Area, San Diego)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:border-teal-600 focus:outline-none shadow-sm"
              />
            </div>

            <div className="flex gap-1.5 bg-white p-1 rounded-xl border border-slate-200 text-xs font-bold shadow-sm">
              <button
                onClick={() => setSelectedTier('All')}
                className={`px-3 py-2 rounded-lg transition-all ${selectedTier === 'All' ? 'bg-teal-700 text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedTier('High-Cost')}
                className={`px-3 py-2 rounded-lg transition-all ${selectedTier === 'High-Cost' ? 'bg-teal-700 text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                High-Cost ($1.14M)
              </button>
              <button
                onClick={() => setSelectedTier('Standard Conforming')}
                className={`px-3 py-2 rounded-lg transition-all ${selectedTier === 'Standard Conforming' ? 'bg-teal-700 text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Standard ($766k)
              </button>
            </div>
          </div>
        </div>

        {/* Counties Grid / Table */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 uppercase tracking-wider font-bold">
                <tr>
                  <th className="p-4">County Name</th>
                  <th className="p-4">Conforming Tier</th>
                  <th className="p-4">1-Unit Limit</th>
                  <th className="p-4">2-Unit Limit</th>
                  <th className="p-4">4-Unit Limit</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCounties.slice(0, 15).map((c) => (
                  <tr key={c.county} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 text-sm flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-teal-600" />
                      <span>{c.county} County</span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                        c.tier === 'High-Cost' ? 'bg-teal-100 text-teal-800 border border-teal-200' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {c.tier}
                      </span>
                    </td>
                    <td className="p-4 font-mono font-bold text-teal-700 text-sm">
                      ${c.oneUnitLimit.toLocaleString()}
                    </td>
                    <td className="p-4 font-mono text-slate-600">
                      ${c.twoUnitLimit.toLocaleString()}
                    </td>
                    <td className="p-4 font-mono text-slate-600">
                      ${c.fourUnitLimit.toLocaleString()}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => onSelectCounty(c.county)}
                        className="bg-teal-50 hover:bg-teal-700 text-teal-800 hover:text-white text-xs font-bold px-3 py-1.5 rounded border border-teal-200 transition-all inline-flex items-center gap-1"
                      >
                        <span>Apply in {c.county}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCounties.length === 0 && (
            <div className="p-8 text-center text-slate-500 text-xs">
              No California counties found matching "{searchTerm}". Try searching for Los Angeles, Orange, Bay Area, or San Diego.
            </div>
          )}

          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
            <Info className="w-4 h-4 text-teal-600" />
            <span>Showing top California counties. Conforming limits are set by FHFA annually for 2026.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
