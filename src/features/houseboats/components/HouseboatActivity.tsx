import { Edit2, PlusCircle, XCircle, Tag } from "lucide-react";

export default function HouseboatActivity() {
  return (
    <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-gray-800 text-sm">Recent Activity</h3>
        <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">View all activity →</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Added */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
            <PlusCircle size={14} className="text-emerald-500" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">New houseboat added</p>
            <p className="text-[11px] text-gray-500 font-medium mt-1">Backwater Bliss added successfully.</p>
            <p className="text-[10px] text-gray-400 mt-1">2 hours ago by Akhil</p>
          </div>
        </div>

        {/* Updated */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Edit2 size={14} className="text-blue-500" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">Houseboat updated</p>
            <p className="text-[11px] text-gray-500 font-medium mt-1">Blue Wave Premium details updated.</p>
            <p className="text-[10px] text-gray-400 mt-1">Yesterday at 11:30 AM by Fathima</p>
          </div>
        </div>

        {/* Prices Updated */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
            <Tag size={14} className="text-amber-500" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">Prices updated</p>
            <p className="text-[11px] text-gray-500 font-medium mt-1">Prices updated for 3 houseboats.</p>
            <p className="text-[10px] text-gray-400 mt-1">20 May 2025 by Rakesh</p>
          </div>
        </div>

        {/* Deactivated */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
            <XCircle size={15} className="text-rose-500" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">Houseboat deactivated</p>
            <p className="text-[11px] text-gray-500 font-medium mt-1">Sunset Cruise has been deactivated.</p>
            <p className="text-[10px] text-gray-400 mt-1">18 May 2025 by Akhil</p>
          </div>
        </div>

      </div>
    </div>
  );
}