import { Search, Filter, RotateCcw, ChevronDown, Plus } from "lucide-react";

export default function QueryFilters() {
  const filters = [
    { label: "Date Range", options: ["14 May - 20 May", "Last 7 Days", "This Month"] },
    { label: "Source", options: ["All Sources", "Website", "WhatsApp", "Google Ads"] },
    { label: "Destination", options: ["All Destinations", "Kerala", "Dubai", "Kashmir"] },
    { label: "Assigned To", options: ["All Executives", "Akhil K", "Nisha R"] },
    { label: "Priority", options: ["All Priorities", "High", "Medium", "Low"] },
    { label: "Status", options: ["All Statuses", "New", "Contacted", "Quotation Sent"] },
  ];

  return (
    // Removed background, border, and shadow as the parent in QueryMain now handles it
    <div className="p-4 xl:p-5 border-b border-gray-50">
      
      <div className="flex flex-wrap items-end justify-between gap-y-4 gap-x-4">
        
        {/* 1. Search Bar */}
        <div className="relative flex-1 min-w-[220px] max-w-[650px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search queries..." 
            className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-shadow"
          />
        </div>

        {/* 2. Action Buttons */}
        <div className="flex items-center gap-2 shrink-0 sm:ml-auto">
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 text-gray-800 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors shadow-sm">
            <Filter size={14} className="text-blue-600" /> Filters
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 text-gray-500 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors">
            <RotateCcw size={14} /> Reset
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm ml-1">
            <Plus size={16} /> Add Query
          </button>
        </div>
        
        {/* 3. Dropdowns Group */}
        <div className="flex flex-wrap items-center gap-2 xl:gap-3 flex-[1_1_auto]">
          {filters.map((filter, idx) => (
            <div key={idx} className="flex flex-col gap-1 min-w-[120px] flex-1">
              <span className="text-[10px] text-gray-500 font-medium px-1">{filter.label}</span>
              <div className="relative">
                <select className="w-full appearance-none text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg pl-3 pr-7 py-2 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
                  {filter.options.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}