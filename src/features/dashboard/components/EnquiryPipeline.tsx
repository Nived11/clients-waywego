import { ChevronDown } from "lucide-react";

export default function EnquiryPipeline() {
  const stages = [
    { name: "New", count: 36, color: "bg-blue-600" },
    { name: "Contacted", count: 27, color: "bg-sky-500" },
    { name: "Requirement", count: 19, color: "bg-indigo-500" },
    { name: "Quotation Sent", count: 21, color: "bg-purple-500" },
    { name: "Follow-up", count: 14, color: "bg-yellow-500" },
    { name: "Confirmed", count: 8, color: "bg-emerald-500" },
    { name: "Lost", count: 5, color: "bg-rose-400" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-gray-800">Enquiry Pipeline</h3>
          <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Count of Leads
          </span>
        </div>
        <button className="flex items-center gap-1 text-xs text-gray-500 hover:bg-gray-50 px-2 py-1 rounded">
          This Month <ChevronDown size={14} />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        {/* Pipeline Bar */}
        <div className="flex w-full h-3 rounded-full overflow-hidden mb-6">
          {stages.map((stage, idx) => (
            <div key={idx} className={`h-full ${stage.color}`} style={{ width: `${(stage.count / 130) * 100}%` }}></div>
          ))}
        </div>
        
        {/* Pipeline Labels */}
        <div className="flex justify-between text-center px-1 mb-6">
          {stages.map((stage, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-sm font-bold text-gray-700">{stage.count}</span>
              <span className="text-[10px] text-gray-400 mt-1">{stage.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-400">Total Leads</p>
          <p className="text-xl font-bold text-gray-800">130</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Conversion Rate</p>
          <p className="text-xl font-bold text-gray-800">19.51%</p>
        </div>
      </div>
    </div>
  );
}