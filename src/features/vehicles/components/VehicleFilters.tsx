"use client";

import { useState, useEffect } from "react";
import { Search, RotateCcw, ChevronDown, ArrowRight } from "lucide-react";

interface VehicleFiltersProps {
  filterOptions?: any;
  onSearch: (term: string) => void;
  onFilterChange: (key: string, value: string) => void;
  currentSearch: string;
  currentFilters: any;
  onReset: () => void;
}

export default function VehicleFilters({ filterOptions, onSearch, onFilterChange, currentSearch, currentFilters, onReset }: VehicleFiltersProps) {
  
  const [searchTerm, setSearchTerm] = useState(currentSearch);
  const [isResetting, setIsResetting] = useState(false);
  
  useEffect(() => {
    setSearchTerm(currentSearch);
  }, [currentSearch]);

  useEffect(() => {
    if (searchTerm === '' && currentSearch !== '') {
      const timer = setTimeout(() => {
        onSearch('');
      }, 400); 
      return () => clearTimeout(timer);
    }
  }, [searchTerm, currentSearch, onSearch]);

  const handleResetClick = () => {
    if (isResetting) return; 
    setIsResetting(true);
    setSearchTerm('');
    onReset();
    setTimeout(() => { setIsResetting(false); }, 600);
  };

  const categoryOptions = filterOptions?.categories?.map((c: any) => ({ label: c.name, value: c.id })) || [];
  const statusOptions = filterOptions?.statuses?.map((s: any) => ({ label: s.label, value: s.value })) || [];
  const fuelOptions = filterOptions?.fuel_types?.map((f: any) => ({ label: f.label, value: f.value })) || [];
  const locationOptions = filterOptions?.locations?.map((loc: string) => ({ label: loc, value: loc })) || [];

  const filters = [
    { key: "category", label: "Vehicle Type", options: [{ label: "All Types", value: "" }, ...categoryOptions] },
    { key: "status", label: "Status", options: [{ label: "All Status", value: "" }, ...statusOptions] },
    { key: "fuel_type", label: "Fuel Type", options: [{ label: "All Fuel Types", value: "" }, ...fuelOptions] },
    { key: "location", label: "Location", options: [{ label: "All Locations", value: "" }, ...locationOptions] }, // 🔥 ഇവിടെ 'destination' എന്നത് 'location' എന്ന് മാറ്റിയിട്ടുണ്ട്
  ];

  return (
    <div className="p-4 xl:p-5 border-b border-gray-50 transition-all">
      
      <div className="flex flex-wrap items-end gap-3 w-full">
        
        {/* Search Bar */}
        <div className="flex flex-col gap-1 w-full sm:w-[220px] shrink-0">
          <span className="text-[10px] text-gray-500 font-bold px-1 uppercase tracking-wider">Search Vehicles</span>
          <div className="relative w-full">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onSearch(searchTerm)} 
              placeholder="Search by name, code..." 
              className="w-full pl-8 pr-10 py-2 border border-gray-200 hover:border-gray-300 rounded-lg text-[11px] font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
            />
            <button 
              onClick={() => onSearch(searchTerm)} 
              disabled={searchTerm === currentSearch} 
              className={`absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded flex items-center justify-center transition-colors shadow-sm ${
                searchTerm === currentSearch ? 'bg-gray-100 text-gray-400 cursor-default' : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
              }`}
            >
              <ArrowRight size={12} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Dropdown Filters */}
        {filters.map((filter, idx) => (
          <div key={idx} className="flex flex-col gap-1 min-w-[110px] flex-1">
            <span className="text-[10px] text-gray-500 font-bold px-1 uppercase tracking-wider">{filter.label}</span>
            <div className="relative">
              <select 
                value={currentFilters[filter.key] || ""} 
                onChange={(e) => onFilterChange(filter.key, e.target.value)}
                className="w-full appearance-none text-[11px] font-bold text-gray-700 bg-white border border-gray-200 rounded-lg pl-3 pr-7 py-2 hover:border-gray-300 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
              >
                {filter.options.map((opt: any, i: number) => (
                  <option key={i} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        ))}

        {/* Reset Button */}
        <div className="shrink-0 mb-[1px] w-full sm:w-auto mt-2 sm:mt-0">
          <button 
            onClick={handleResetClick} 
            disabled={isResetting}
            className="flex w-full sm:w-auto items-center justify-center gap-1.5 px-4 py-2 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border border-red-100 hover:border-red-500 rounded-lg text-[11px] font-bold transition-all shadow-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group"
          >
            <RotateCcw 
              size={13} 
              strokeWidth={2.5}
              className={isResetting ? "animate-spin [animation-direction:reverse]" : "group-hover:text-white"} 
            /> 
            <span>Reset</span>
          </button>
        </div>

      </div>
    </div>
  );
}