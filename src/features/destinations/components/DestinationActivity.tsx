import { Plus, Edit2, Trash2 } from "lucide-react";

export default function DestinationActivity() {
  return (
    <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-gray-800 text-sm">Recent Activity</h3>
        <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">View All Activity →</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Added */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
            <Plus size={16} className="text-emerald-500" strokeWidth={3} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">New destination added</p>
            <p className="text-[11px] text-gray-500 font-medium mt-1">Singapore has been added successfully.</p>
            <p className="text-[10px] text-gray-400 mt-1">2 hours ago by travelhope admin</p>
          </div>
        </div>

        {/* Updated */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Edit2 size={14} className="text-blue-500" strokeWidth={3} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">Destination updated</p>
            <p className="text-[11px] text-gray-500 font-medium mt-1">Goa destination information updated.</p>
            <p className="text-[10px] text-gray-400 mt-1">Yesterday at 11:30 AM by Akhil</p>
          </div>
        </div>

        {/* Deactivated */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
            <Trash2 size={14} className="text-rose-500" strokeWidth={3} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">Destination deactivated</p>
            <p className="text-[11px] text-gray-500 font-medium mt-1">Andaman & Nicobar has been deactivated.</p>
            <p className="text-[10px] text-gray-400 mt-1">20 May 2025 by Akhil</p>
          </div>
        </div>
      </div>
    </div>
  );
}