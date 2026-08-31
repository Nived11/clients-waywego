import { ChevronDown } from "lucide-react";

interface QuotationProps {
  data?: {
    quotations_created: number;
    total_quotation_value: string;
    accepted: number;
    pending: number;
    lost_rejected: number;
    conversion_rate: number;
    avg_quotation_value: string;
  };
}

export default function QuotationPerformance({ data }: QuotationProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 h-full flex flex-col">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 gap-2">
        <h3 className="font-bold text-gray-800 text-sm xl:text-sm whitespace-nowrap truncate">Quotation Performance</h3>
        <button className="flex items-center gap-1.5 text-[10px] xl:text-xs text-gray-600 font-medium bg-white hover:bg-gray-50 px-2.5 py-1.5 border border-gray-200 rounded-md shadow-sm shrink-0 transition-colors">
          This Month <ChevronDown size={14} className="text-gray-400" />
        </button>
      </div>

      {/* List Items */}
      <div className="flex-1 flex flex-col mt-2">
        <div className="flex justify-between items-center pb-3 mb-3 border-b border-gray-100 text-xs xl:text-sm">
          <span className="text-gray-500 font-medium">Quotations Created</span>
          <span className="font-bold text-gray-800">{data?.quotations_created || 0}</span>
        </div>
        
        <div className="flex justify-between items-center pb-3 mb-3 border-b border-gray-100 text-xs xl:text-sm">
          <span className="text-gray-500 font-medium">Total Quotation Value</span>
          <span className="font-bold text-gray-800">{data?.total_quotation_value || '₹0'}</span>
        </div>
        
        <div className="flex justify-between items-center pb-3 mb-3 border-b border-gray-100 text-xs xl:text-sm">
          <span className="text-gray-500 font-medium">Accepted</span>
          <span className="font-bold text-emerald-600">{data?.accepted || 0}</span>
        </div>
        
        <div className="flex justify-between items-center pb-3 mb-3 border-b border-gray-100 text-xs xl:text-sm">
          <span className="text-gray-500 font-medium">Pending</span>
          <span className="font-bold text-orange-500">{data?.pending || 0}</span>
        </div>
        
        <div className="flex justify-between items-center pb-3 text-xs xl:text-sm">
          <span className="text-gray-500 font-medium">Lost / Rejected</span>
          <span className="font-bold text-rose-500">{data?.lost_rejected || 0}</span>
        </div>
      </div>

      {/* Footer - Stacked layout to prevent overflow with large values */}
      <div className="flex justify-between pt-4 border-t border-gray-100 mt-1 gap-2">
        {/* Conversion Rate Group */}
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] xl:text-xs text-gray-500 font-medium">Conversion Rate</span>
          <span className="text-sm xl:text-base font-bold text-gray-800 mt-0.5 truncate">{data?.conversion_rate || 0}%</span>
        </div>
        
        {/* Avg. Quotation Value Group */}
        <div className="flex flex-col items-end min-w-0">
          <span className="text-[10px] xl:text-xs text-gray-500 font-medium">Avg. Quotation Value</span>
          <span className="text-sm xl:text-base font-bold text-gray-800 mt-0.5 truncate">{data?.avg_quotation_value || '₹0'}</span>
        </div>
      </div>
      
    </div>
  );
}