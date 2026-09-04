import { useState, useEffect } from "react";
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";

interface PaginationProps {
  page: number;
  limit: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, limit, totalCount, onPageChange }: PaginationProps) {
  // Pagination Calculations
  const totalPages = Math.ceil(totalCount / limit) || 1;
  const startIndex = totalCount === 0 ? 0 : (page - 1) * limit + 1;
  const endIndex = Math.min(page * limit, totalCount);

  // Input Box State
  const [pageInput, setPageInput] = useState(page.toString());

  // Sync Input with Page Prop
  useEffect(() => {
    setPageInput(page.toString());
  }, [page]);

  const handlePageSubmit = () => {
    let newPage = parseInt(pageInput, 10);
    if (isNaN(newPage) || newPage < 1) newPage = 1;
    if (newPage > totalPages) newPage = totalPages;
    setPageInput(newPage.toString());
    
    if (newPage !== page) {
      onPageChange(newPage);
    }
  };

  // ബട്ടണുകൾക്ക് കൊടുക്കാനുള്ള കോമൺ സ്റ്റൈൽ
  const buttonBaseClass = "w-7 h-7 flex items-center justify-center rounded-md border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-all shadow-sm";

  return (
    <div className="border-t border-gray-100 p-4 py-6 sm:py-8 flex flex-row flex-wrap sm:flex-nowrap items-center justify-between gap-y-4 sm:gap-4 text-xs font-medium text-gray-500 mt-auto bg-white w-full">
      
      {/* Left: Info */}
      <div className="w-1/2 sm:w-1/3 order-1 text-left">
        <p className="whitespace-nowrap truncate sm:overflow-visible">
          Showing {startIndex} to {endIndex} of {totalCount}
        </p>
      </div>

      {/* Center: Controls (<<, <, [input], >, >>) */}
      <div className="w-full sm:w-1/3 order-3 sm:order-2 flex items-center justify-center gap-1.5 sm:gap-2 pt-1 sm:pt-0">
        
        {/* First Page Button */}
        <button 
          disabled={page <= 1}
          onClick={() => onPageChange(1)}
          className={buttonBaseClass}
          title="First Page"
        >
          <ChevronsLeft size={16} strokeWidth={2.5} />
        </button>
        
        {/* Previous Page Button */}
        <button 
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className={buttonBaseClass}
          title="Previous Page"
        >
          <ChevronLeft size={16} strokeWidth={2.5} />
        </button>
        
        {/* Input Field */}
        <div className="flex items-center gap-1.5 px-2">
          <input 
            type="text" 
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value.replace(/\D/g, ''))} 
            onBlur={handlePageSubmit}
            onKeyDown={(e) => e.key === 'Enter' && handlePageSubmit()}
            className="w-10 h-7 text-center font-bold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          />
          <span className="text-gray-400 font-medium">of {totalPages}</span>
        </div>
        
        {/* Next Page Button */}
        <button 
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className={buttonBaseClass}
          title="Next Page"
        >
          <ChevronRight size={16} strokeWidth={2.5} />
        </button>

        {/* Last Page Button */}
        <button 
          disabled={page >= totalPages}
          onClick={() => onPageChange(totalPages)}
          className={buttonBaseClass}
          title="Last Page"
        >
          <ChevronsRight size={16} strokeWidth={2.5} />
        </button>
      </div>

      {/* Right: Empty space to balance flex layout */}
      <div className="w-1/2 sm:w-1/3 order-2 sm:order-3"></div>

    </div>
  );
}