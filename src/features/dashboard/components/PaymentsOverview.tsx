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
  // change texts format ചെയ്യാൻ
  const formatChange = (text: string, isPositive: boolean) => {
    if (!text || text === "No change") return <span className="text-gray-400 font-normal">— No change</span>;
    return (
      <span className="text-gray-400 font-normal">
        <span className={isPositive ? "text-emerald-500 font-medium" : "text-rose-500 font-medium"}>
          {text.split(' ')[0]}
        </span> {text.substring(text.indexOf(' ') + 1)}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">Payments Overview</h3>
        <button className="text-xs border border-gray-200 px-2 py-1 rounded hover:bg-gray-50">View All</button>
      </div>
      
      <div className="grid grid-cols-4 gap-3 mb-6">
        <div className="border border-gray-100 rounded-xl p-3 flex flex-col justify-between">
          <div>
            <p className="text-[10px] text-emerald-500 font-medium mb-1">Collected (This Month)</p>
            <p className="text-lg font-bold text-gray-800">{data?.collected_this_month || '₹0'}</p>
          </div>
          <p className="text-[9px] mt-2 leading-tight">{formatChange(data?.collected_change || '', true)}</p>
        </div>
        <div className="border border-gray-100 rounded-xl p-3 flex flex-col justify-between">
          <div>
            <p className="text-[10px] text-blue-500 font-medium mb-1">Pending Payments</p>
            <p className="text-lg font-bold text-gray-800">{data?.pending_payments || '₹0'}</p>
          </div>
          <p className="text-[9px] mt-2 leading-tight">{formatChange(data?.pending_change || '', true)}</p>
        </div>
        <div className="border border-gray-100 rounded-xl p-3 flex flex-col justify-between">
          <div>
            <p className="text-[10px] text-orange-500 font-medium mb-1">Due Today</p>
            <p className="text-lg font-bold text-gray-800">{data?.due_today || '₹0'}</p>
          </div>
          <p className="text-[9px] mt-2 leading-tight">{formatChange(data?.due_change || '', false)}</p>
        </div>
        <div className="border border-gray-100 rounded-xl p-3 flex flex-col justify-between">
          <div>
            <p className="text-[10px] text-rose-500 font-medium mb-1">Overdue</p>
            <p className="text-lg font-bold text-gray-800">{data?.overdue || '₹0'}</p>
          </div>
          <p className="text-[9px] mt-2 leading-tight">{formatChange(data?.overdue_change || '', false)}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="text-[10px] text-gray-400">Total Invoice Value</p>
          <p className="text-lg font-bold text-gray-800">{data?.total_invoice_value || '₹0'}</p>
        </div>
        <div className="w-1/2">
          <div className="flex justify-between mb-1">
            <span className="text-[10px] text-gray-400">Collection Rate</span>
            <span className="text-[10px] font-bold text-gray-800">{data?.collection_rate || 0}%</span>
          </div>
          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${data?.collection_rate || 0}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}