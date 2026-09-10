import { Search, RotateCcw, ChevronDown } from "lucide-react";

export default function SupplierFilters() {
  return (
    <div className="p-4 xl:p-5 border-b border-gray-50 flex flex-wrap items-end justify-between gap-y-4 gap-x-4">
      
      {/* 1. Search Bar (Left First) */}
      <div className="relative w-full sm:w-[240px] shrink-0">
        <label className="block text-[9px] font-bold text-gray-400 mb-1 ml-1">Search</label>
        <Search size={14} className="absolute left-3 bottom-2.5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search suppliers..." 
          className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
        />
      </div>

      {/* 2. Dropdowns (Next to Search Bar) */}
      <div className="flex flex-wrap items-center gap-2 xl:gap-3 flex-[1_1_auto]">
        {[
          { label: "Supplier Type", value: "All Types" },
          { label: "Category", value: "All Categories" },
          { label: "Status", value: "All Status" },
          { label: "City", value: "All Cities" }
        ].map((item, idx) => (
          <div key={idx} className="relative flex-1 min-w-[130px]">
            <label className="block text-[9px] font-bold text-gray-400 mb-1 ml-1">{item.label}</label>
            <select className="w-full appearance-none text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-lg pl-3 pr-7 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>{item.value}</option>
            </select>
            <ChevronDown size={14} className="text-gray-400 absolute right-2.5 bottom-2.5 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* 3. Reset Button (Right Last) */}
      <div className="shrink-0">
        <label className="block text-[9px] font-bold text-transparent mb-1 select-none">Action</label>
        <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
          <RotateCcw size={13} strokeWidth={2.5} /> Reset
        </button>
      </div>
      
    </div>
  );
}