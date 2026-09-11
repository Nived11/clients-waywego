import { useState, useEffect } from "react";
import { Search, RotateCcw, ChevronDown, ArrowRight, Calendar as CalendarIcon } from "lucide-react";

interface AuditFiltersProps {
  filterOptions?: any; 
  onSearch: (term: string) => void;
  onFilterChange: (key: string, value: string) => void;
  currentSearch: string;
  currentFilters: any;
  onReset: () => void;
}

export default function AuditFilters({ filterOptions, onSearch, onFilterChange, currentSearch, currentFilters, onReset }: AuditFiltersProps) {
  
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
    if (isResetting) return; 

    setIsResetting(true);
    setSearchTerm('');
    onReset();
    
    setTimeout(() => {
      setIsResetting(false);
    }, 600);
  };

  // API Options Mapping
  const userOptions = filterOptions?.users?.map((u: any) => ({ label: u.name, value: u.id === 'all' ? '' : u.id.toString() })) || [{label: "All Users", value: ""}];
  const actionOptions = filterOptions?.actions?.map((a: any) => ({ label: a.label, value: a.value === 'all' ? '' : a.value })) || [{label: "All Actions", value: ""}];
  const moduleOptions = filterOptions?.modules?.map((m: any) => ({ label: m.label, value: m.value === 'all' ? '' : m.value })) || [{label: "All Modules", value: ""}];

  const filters = [
    { 
      key: "date_range", 
      label: "Date Range", 
      options: [
        {label: "All Dates", value: ""}, 
        {label: "Today", value: "today"}, 
        {label: "Yesterday", value: "yesterday"}, 
        {label: "Last 7 Days", value: "last_7_days"}, 
        {label: "This Month", value: "this_month"},
      ],
      icon: CalendarIcon
    },
    { key: "user_id", label: "User", options: userOptions },
    { key: "action", label: "Action", options: actionOptions },
    { key: "module", label: "Module", options: moduleOptions },
  ];

  return (
    <div className="p-4 xl:p-5 border-b border-gray-50 transition-all">
      
      {/* Single Line Flex Container for Search, Filters, and Reset */}
      <div className="flex flex-wrap items-end gap-3 w-full">
        
        {/* 1. Search Bar */}
        <div className="flex flex-col gap-1 w-full sm:w-[220px] shrink-0">
          <span className="text-[10px] text-gray-600 font-bold px-1 uppercase tracking-wider">Search Logs</span>
          <div className="relative w-full">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onSearch(searchTerm)} 
              placeholder="Search IP or details..." 
              className="w-full pl-8 pr-10 py-2 border border-gray-300 hover:border-gray-300 rounded-lg text-[11px] font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
            />
            {/* Manual Search Trigger */}
            <button 
              onClick={() => onSearch(searchTerm)} 
              disabled={searchTerm === currentSearch} 
              className={`absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded flex items-center justify-center transition-colors shadow-sm ${
                searchTerm === currentSearch ? 'bg-gray-200 text-gray-600 cursor-default' : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
              }`}
            >
              <ArrowRight size={12} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* 2. Dropdown Filters */}
        {filters.map((filter, idx) => {
          const Icon = filter.icon || ChevronDown;
          return (
            <div key={idx} className="flex flex-col gap-1 min-w-[120px] flex-1">
              <span className="text-[10px] text-gray-600 font-bold px-1 uppercase tracking-wider truncate">{filter.label}</span>
              <div className="relative">
                <select 
                  value={currentFilters[filter.key] || ""} 
                  onChange={(e) => onFilterChange(filter.key, e.target.value)}
                  className="w-full appearance-none text-[11px] font-bold text-gray-700 bg-white border border-gray-200 rounded-lg pl-3 pr-7 py-2 hover:border-gray-300 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                >
                  {/* 🔥 FIX: 'opt' ന് type കൊടുത്തു */}
                  {filter.options.map((opt: { label: string, value: string }, i: number) => (
                    <option key={i} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <Icon size={14} className="text-gray-600 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          );
        })}

        {/* 3. Reset Button */}
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