import { ChevronDown } from "lucide-react";

// 1. TypeScript Interface ഫോർ Props
interface PipelineProps {
  data?: {
    active?: number;
    details_not_received?: number;
    new?: number;
    proposal_sent?: number;
  };
}

export default function EnquiryPipeline({ data }: PipelineProps) {
  const safeData = data || { new: 0, active: 0, details_not_received: 0, proposal_sent: 0 };

  // API ഡാറ്റ വെച്ച് സ്റ്റേജുകൾ ഡൈനാമിക് ആക്കുന്നു
  const stages = [
    { name: "New", count: safeData.new || 0, color: "bg-blue-600" },
    { name: "Details Pending", count: safeData.details_not_received || 0, color: "bg-sky-500" },
    { name: "Active", count: safeData.active || 0, color: "bg-indigo-500" },
    { name: "Proposal Sent", count: safeData.proposal_sent || 0, color: "bg-purple-500" },
  ];

  // Total ലീഡുകളുടെ എണ്ണം കണ്ടുപിടിക്കുന്നു
  const totalLeads = stages.reduce((acc, stage) => acc + stage.count, 0);

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
        {/* Pipeline Bar (Dynamic Width) */}
        <div className="flex w-full h-3 rounded-full overflow-hidden mb-6">
          {stages.map((stage, idx) => (
            <div 
              key={idx} 
              className={`h-full ${stage.color}`} 
              style={{ width: totalLeads > 0 ? `${(stage.count / totalLeads) * 100}%` : '0%' }}
            ></div>
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
          <p className="text-xs text-gray-400">Total Pipeline Leads</p>
          <p className="text-xl font-bold text-gray-800">{totalLeads}</p>
        </div>
      </div>
    </div>
  );
}