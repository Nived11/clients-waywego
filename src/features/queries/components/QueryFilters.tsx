import { useState, useEffect } from "react";
import { Search, RotateCcw, ChevronDown, Plus, ArrowRight } from "lucide-react";

interface FilterOptions {
  sources?: { id: number; source_name: string }[];
  executives?: { id: number; name: string; role: string }[];
  destinations?: { id: number; name: string }[];
  priorities?: { value: string; label: string }[];
  statuses?: { value: string; label: string }[];
}

interface QueryFiltersProps {
  onOpenAddQuery: () => void;
  filterOptions?: FilterOptions;
  onSearch: (term: string) => void;
  onFilterChange: (key: string, value: string) => void;
  currentSearch: string;
  currentFilters: any;
  onReset: () => void;
}

export default function QueryFilters({ onOpenAddQuery, filterOptions, onSearch, onFilterChange, currentSearch, currentFilters, onReset }: QueryFiltersProps) {
  
  const [searchTerm, setSearchTerm] = useState(currentSearch);
  const [isResetting, setIsResetting] = useState(false);
  
  useEffect(() => {
    setSearchTerm(currentSearch);
  }, [currentSearch]);

  // SMART SEARCH LOGIC
  useEffect(() => {
    if (searchTerm === '' && currentSearch !== '') {
      const timer = setTimeout(() => {
        onSearch('');
      }, 400); 
      return () => clearTimeout(timer);
    }
  }, [searchTerm, currentSearch, onSearch]);

  const handleResetClick = () => {
    // ആനിമേഷൻ തീരുന്നതുവരെ വീണ്ടും റൺ ആവാതിരിക്കാൻ ഒരു ചെക്ക്
    if (isResetting) return; 

    setIsResetting(true);
    setSearchTerm('');
    onReset();
    
    setTimeout(() => {
      setIsResetting(false);
    }, 600);
  };

  const sourceOptions = filterOptions?.sources?.map(s => ({ label: s.source_name, value: s.id.toString() })) || [];
  const destinationOptions = filterOptions?.destinations?.map(d => ({ label: d.name, value: d.id.toString() })) || [];
  const executiveOptions = filterOptions?.executives?.map(e => ({ label: e.name, value: e.id.toString() })) || [];
  const priorityOptions = filterOptions?.priorities?.map(p => ({ label: p.label, value: p.value })) || [];
  const statusOptions = filterOptions?.statuses?.map(s => ({ label: s.label, value: s.value })) || [];

  const filters = [
    { key: "date", label: "Date Range", options: [{label: "All Dates", value: ""}, {label: "14 May - 20 May", value: "custom"}, {label: "Last 7 Days", value: "last_7"}, {label: "This Month", value: "this_month"}] },
    { key: "source", label: "Source", options: [{label: "All Sources", value: ""}, ...sourceOptions] },
    { key: "destination", label: "Destination", options: [{label: "All Destinations", value: ""}, ...destinationOptions] },
    { key: "assigned_to", label: "Assigned To", options: [{label: "All Executives", value: ""}, ...executiveOptions] },
    { key: "priority", label: "Priority", options: [{label: "All Priorities", value: ""}, ...priorityOptions] },
    { key: "status", label: "Status", options: [{label: "All Statuses", value: ""}, ...statusOptions] },
  ];

  return (
    <div className="p-4 xl:p-5 border-b border-gray-50 transition-all">
      
      {/* Top Row: Search & Reset (Left) --- Add Query (Right) */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        
        {/* LEFT SIDE: Search Bar + Reset Button */}
        <div className="flex items-center gap-3 flex-1 min-w-[300px]">
          
          {/* Search Bar */}
          <div className="relative flex-1 max-w-[650px]">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onSearch(searchTerm)} 
              placeholder="Search queries..." 
              className="w-full pl-9 pr-12 py-2 border border-gray-300 rounded-lg text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-shadow"
            />
            {/* Manual Search Button */}
            <button 
              onClick={() => onSearch(searchTerm)} 
              disabled={searchTerm === currentSearch} 
              className={`absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-md flex items-center justify-center transition-colors shadow-sm ${
                searchTerm === currentSearch ? 'bg-gray-200 text-gray-500 cursor-default' : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
              }`}
            >
              <ArrowRight size={14} strokeWidth={2.5} />
            </button>
          </div>

          {/* Reset Button (Disabled while resetting) */}
          <button 
            onClick={handleResetClick} 
            disabled={isResetting}
            className="flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 text-gray-600 border border-gray-200 rounded-lg text-xs font-bold hover:bg-gray-200 hover:text-gray-800 transition-colors shadow-sm cursor-pointer shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <RotateCcw 
              size={14} 
              className={isResetting ? "animate-spin [animation-direction:reverse] text-blue-600" : ""} 
            /> 
            <span>Reset</span>
          </button>
          
        </div>

        {/* RIGHT SIDE: Add Query Button */}
        <div className="flex shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
          <button 
            onClick={onOpenAddQuery}
            className="flex items-center justify-center gap-1.5 px-4 py-2 w-full sm:w-auto bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
          >
            <Plus size={16} /> Add Query
          </button>
        </div>

      </div>

      {/* Bottom Row: Dropdowns Group */}
      <div className="flex flex-wrap items-center gap-2 xl:gap-3 w-full mt-4">
        {filters.map((filter, idx) => (
          <div key={idx} className="flex flex-col gap-1 min-w-[120px] flex-1">
            <span className="text-[10px] text-gray-500 font-medium px-1 ">{filter.label}</span>
            <div className="relative">
              <select 
                value={currentFilters[filter.key] || ""} 
                onChange={(e) => onFilterChange(filter.key, e.target.value)}
                className="w-full appearance-none text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg pl-3 pr-7 py-2 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
              >
                {filter.options.map((opt, i) => (
                  <option key={i} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}