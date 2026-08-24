import { ChevronDown } from "lucide-react";

export default function QuotationPerformance() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">Quotation Performance</h3>
        <button className="flex items-center gap-1 text-xs text-gray-500 hover:bg-gray-50 px-2 py-1 rounded">
          This Month <ChevronDown size={14} />
        </button>
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Quotations Created</span>
          <span className="font-semibold text-gray-800">146</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Total Quotation Value</span>
          <span className="font-semibold text-gray-800">₹42.80L</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Accepted</span>
          <span className="font-semibold text-emerald-500">28</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Pending</span>
          <span className="font-semibold text-orange-500">63</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Lost / Rejected</span>
          <span className="font-semibold text-rose-500">19</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-2">
        <div className="flex gap-4">
          <div>
            <p className="text-[10px] text-gray-400">Conversion Rate</p>
            <p className="text-sm font-bold text-gray-800">19.2%</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400">Avg. Quotation Value</p>
            <p className="text-sm font-bold text-gray-800">₹29,315</p>
          </div>
        </div>
      </div>
    </div>
  );
}