import { ExternalLink, UserSquare2, Binoculars } from "lucide-react";

export const BuilderStats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 w-full bg-white rounded-xl shadow-sm border border-slate-200 p-2 lg:p-0 mt-4 overflow-hidden">
      
      {/* Template Name Section */}
      <div className="col-span-2 lg:col-span-1 flex items-center gap-3 px-3 py-2 lg:px-5 lg:py-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-3 lg:pb-4">
        <div className="w-10 h-10 bg-slate-50 text-slate-700 rounded-lg flex flex-col items-center justify-center border border-slate-100 relative shrink-0">
          <Binoculars size={12} className="absolute top-1.5 opacity-50" />
          <UserSquare2 size={16} className="mt-2" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-medium text-slate-500 mb-0.5">Template</p>
          <h3 className="text-sm font-bold text-slate-800 truncate">Kerala Backwater Escape</h3>
          <a href="#" className="flex items-center gap-1 text-[11px] font-medium text-blue-600 hover:text-blue-700 hover:underline mt-0.5">
            View Template <ExternalLink size={10} />
          </a>
        </div>
      </div>

      {/* Destination Section */}
      <div className="px-3 py-2 lg:px-5 lg:py-4 border-r lg:border-b-0 border-slate-100 flex flex-col justify-center">
        <p className="text-[11px] font-medium text-slate-500 mb-0.5">Destination</p>
        <p className="text-sm font-bold text-slate-800 truncate">Kerala</p>
      </div>

      {/* Duration Section */}
      <div className="px-3 py-2 lg:px-5 lg:py-4 lg:border-r lg:border-b-0 border-slate-100 flex flex-col justify-center">
        <p className="text-[11px] font-medium text-slate-500 mb-0.5">Duration</p>
        <p className="text-sm font-bold text-slate-800 truncate">4 Days / 3 Nights</p>
      </div>

      {/* Days Section */}
      <div className="px-3 py-2 lg:px-5 lg:py-4 border-r lg:border-b-0 border-slate-100 flex flex-col justify-center">
        <p className="text-[11px] font-medium text-slate-500 mb-0.5">Days</p>
        <p className="text-sm font-bold text-slate-800">4</p>
        <p className="text-[10px] text-slate-500 mt-0.5 whitespace-nowrap">Drag to reorder</p>
      </div>

      {/* Last Updated Section */}
      <div className="px-3 py-2 lg:px-5 lg:py-4 flex flex-col justify-center">
        <p className="text-[11px] font-medium text-slate-500 mb-0.5 whitespace-nowrap">Last Updated</p>
        <p className="text-sm font-bold text-slate-800">20 May 2026</p>
        <p className="text-[10px] text-slate-500 mt-0.5">10:30 AM</p>
      </div>
    </div>
  );
};