import { ArrowUp, ArrowDown } from "lucide-react";

interface PaymentProps {
  data?: {
    collected_this_month: string;
    collected_change: string;
    pending_payments: string;
    pending_change: string;
    due_today: string;
    due_change: string;
    overdue: string;
    overdue_change: string;
    total_invoice_value: string;
    collection_rate: number;
  };
}

export default function PaymentsOverview({ data }: PaymentProps) {
  
  const formatChange = (text: string, colorClass: string) => {
    if (!text || text === "No change") {
      return (
        <div className="flex flex-col items-start min-w-0">
           <span className="text-[8px] xl:text-[9px] text-gray-600 font-medium truncate w-full">— No change</span>
        </div>
      );
    }
    
    const isPositive = text.includes('+');
    const isNegative = text.includes('-');
    const cleanText = text.replace('+', '').replace('-', '');
    const parts = cleanText.split(' ');
    const value = parts[0];
    const desc = parts.slice(1).join(' ');

    return (
      <div className="flex flex-col items-start min-w-0 gap-0.5">
        <span className={`text-[9px] xl:text-[10px] font-bold flex items-center shrink-0 ${colorClass}`}>
          {isPositive && <ArrowUp size={10} strokeWidth={3} className="mr-0.5" />}
          {isNegative && <ArrowDown size={10} strokeWidth={3} className="mr-0.5" />}
          {value}
        </span>
        <span className="text-[8px] xl:text-[9px] text-gray-600 font-medium truncate w-full">{desc}</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">Payments Overview</h3>
        <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">View All</button>
      </div>
      
      <div className="grid grid-cols-4 gap-1.5 xl:gap-2 mb-4 xl:mb-6 flex-1">
        
        {/* Collected */}
        <div className="border border-gray-100 rounded-lg p-2 xl:p-2.5 flex flex-col justify-between hover:border-emerald-100 transition-colors min-w-0">
          <div>
            {/* Fixed height container and line break for perfect alignment */}
            <div className="h-7 xl:h-8 mb-1.5">
              <p className="text-[9px] xl:text-[10px] text-emerald-500 font-medium leading-tight">Collected <br />(This Month)</p>
            </div>
            <p className="text-sm xl:text-lg font-bold text-emerald-600 truncate">{data?.collected_this_month || '₹0'}</p>
          </div>
          <div className="mt-2 min-w-0">
            {formatChange(data?.collected_change || '', 'text-emerald-500')}
          </div>
        </div>
        
        {/* Pending */}
        <div className="border border-gray-100 rounded-lg p-2 xl:p-2.5 flex flex-col justify-between hover:border-blue-100 transition-colors min-w-0">
          <div>
            <div className="h-7 xl:h-8 mb-1.5">
              <p className="text-[9px] xl:text-[10px] text-blue-500 font-medium leading-tight">Pending <br />Payments</p>
            </div>
            <p className="text-sm xl:text-lg font-bold text-blue-600 truncate">{data?.pending_payments || '₹0'}</p>
          </div>
          <div className="mt-2 min-w-0">
            {formatChange(data?.pending_change || '', 'text-blue-500')}
          </div>
        </div>
        
        {/* Due Today */}
        <div className="border border-gray-100 rounded-lg p-2 xl:p-2.5 flex flex-col justify-between hover:border-orange-100 transition-colors min-w-0">
          <div>
            <div className="h-7 xl:h-8 mb-1.5">
              <p className="text-[9px] xl:text-[10px] text-orange-500 font-medium leading-tight">Due <br />Today</p>
            </div>
            <p className="text-sm xl:text-lg font-bold text-orange-500 truncate">{data?.due_today || '₹0'}</p>
          </div>
          <div className="mt-2 min-w-0">
            {formatChange(data?.due_change || '', 'text-rose-500')}
          </div>
        </div>
        
        {/* Overdue */}
        <div className="border border-gray-100 rounded-lg p-2 xl:p-2.5 flex flex-col justify-between hover:border-rose-100 transition-colors min-w-0">
          <div>
            <div className="h-7 xl:h-8 mb-1.5">
              <p className="text-[9px] xl:text-[10px] text-rose-500 font-medium leading-tight">Overdue</p>
            </div>
            <p className="text-sm xl:text-lg font-bold text-rose-600 truncate">{data?.overdue || '₹0'}</p>
          </div>
          <div className="mt-2 min-w-0">
            {formatChange(data?.overdue_change || '', 'text-rose-500')}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="text-[10px] xl:text-xs text-gray-600 font-medium">Total Invoice Value</p>
          <p className="text-base xl:text-lg font-bold text-gray-800 mt-0.5">{data?.total_invoice_value || '₹0'}</p>
        </div>
        <div className="w-1/2 max-w-[200px]">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[9px] xl:text-[10px] text-gray-600 font-medium">Collection Rate</span>
            <span className="text-[9px] xl:text-[10px] font-bold text-gray-800">{data?.collection_rate || 0}%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${data?.collection_rate || 0}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}