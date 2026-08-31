import { ChevronDown } from "lucide-react";

interface PipelineProps {
  data?: {
    stages: { new: number; contacted: number; requirement: number; quotation_sent: number; follow_up: number; confirmed: number; lost: number; };
    total_leads: number;
    conversion_rate: number;
  };
}

export default function EnquiryPipeline({ data }: PipelineProps) {
  const safeData = data?.stages || { new: 0, contacted: 0, requirement: 0, quotation_sent: 0, follow_up: 0, confirmed: 0, lost: 0 };
  const totalLeads = data?.total_leads || 0;

  // സ്ക്രീൻഷോട്ടിലേത് പോലെയുള്ള കറക്റ്റ് കളറുകൾ
  const stages = [
    { name: "New", count: safeData.new, color: "bg-blue-600" },
    { name: "Contacted", count: safeData.contacted, color: "bg-teal-400" },
    { name: "Requirement", count: safeData.requirement, color: "bg-purple-400" },
    { name: "Quotation Sent", count: safeData.quotation_sent, color: "bg-orange-400" },
    { name: "Follow-up", count: safeData.follow_up, color: "bg-amber-400" },
    { name: "Confirmed", count: safeData.confirmed, color: "bg-emerald-400" },
    { name: "Lost", count: safeData.lost, color: "bg-rose-400" },
  ];

  // Arrow Shape ഉണ്ടാക്കാനുള്ള CSS Polygon ലോജിക് (Updated)
  const getClipPath = (idx: number) => {
    // ആദ്യത്തെ ഐറ്റത്തിന് ഇടതുഭാഗം ഫ്ലാറ്റ് ആയിരിക്കും
    if (idx === 0) return 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)';
    
    // ബാക്കിയുള്ള എല്ലാ ഐറ്റങ്ങൾക്കും (അവസാനത്തേത് ഉൾപ്പെടെ) അമ്പ് പോലെയുള്ള ഷേപ്പ്
    return 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%, 10px 50%)';
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 h-full flex flex-col">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 xl:mb-6">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-gray-800 text-sm xl:text-base whitespace-nowrap">Enquiry Pipeline</h3>
          <span className="text-[9px] xl:text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Count of Leads
          </span>
        </div>
        
        {/* Updated Button Style */}
        <button className="flex items-center gap-1.5 text-[10px] xl:text-xs text-gray-600 font-medium bg-white hover:bg-gray-50 px-2.5 py-1.5 border border-gray-200 rounded-md shadow-sm shrink-0 transition-colors">
          This Month <ChevronDown size={14} className="text-gray-400" />
        </button>
      </div>

      {/* Main Pipeline Segment */}
      <div className="flex-1 flex flex-col justify-center px-1">
        <div className="flex justify-between gap-[2px] xl:gap-1 w-full">
          {stages.map((stage, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center group">
              {/* Count on top */}
              <span className="text-sm xl:text-base font-bold text-gray-800 mb-1 xl:mb-2">{stage.count}</span>
              
              {/* The Arrow Bar */}
              <div 
                className={`w-full h-2.5 xl:h-3 ${stage.color} opacity-90 group-hover:opacity-100 transition-opacity`} 
                style={{ clipPath: getClipPath(idx) }}
              ></div>
              
              {/* Label below */}
              <span className="text-[9px] xl:text-[10px] text-gray-600 font-semibold mt-1.5 xl:mt-2 text-center leading-tight tracking-tight px-1">
                {stage.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
        <div>
          <p className="text-[10px] xl:text-xs text-gray-600">Total Leads</p>
          <p className="text-lg xl:text-xl font-bold text-gray-800 leading-none mt-1">{totalLeads}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] xl:text-xs text-gray-600">Conversion Rate</p>
          <p className="text-lg xl:text-xl font-bold text-gray-800 leading-none mt-1">{data?.conversion_rate || 0}%</p>
        </div>
      </div>
    </div>
  );
}