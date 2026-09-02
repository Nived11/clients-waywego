import { Search, Filter, RotateCcw, ChevronDown } from "lucide-react";

export default function DestinationFilters() {
  return (
    <div className="p-4 xl:p-5 border-b border-gray-50 flex flex-wrap items-end justify-between gap-y-4 gap-x-4">
      
      {/* Search */}
      <div className="relative flex-1 min-w-[220px] max-w-[400px]">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search destinations..." 
          className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Dropdowns */}
      <div className="flex flex-wrap items-center gap-2 xl:gap-3 flex-[1_1_auto]">
        {['All Countries', 'All Status', 'All Regions'].map((label, idx) => (
          <div key={idx} className="relative flex-1 min-w-[120px]">
            <select className="w-full appearance-none text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg pl-3 pr-7 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>{label}</option>
            </select>
            <ChevronDown size={14} className="text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-gray-200 text-gray-800 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
          <Filter size={14} className="text-blue-600" /> Filters
        </button>
        <button className="flex items-center justify-center gap-1.5 px-3 py-2 text-gray-500 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors cursor-pointer">
          <RotateCcw size={14} /> Reset
        </button>
      </div>
      
    </div>
  );
}