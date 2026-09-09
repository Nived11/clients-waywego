import { Search, Download, Calendar, Plus, RotateCcw, ChevronDown } from "lucide-react";
import Link from "next/link"; // Link ഇമ്പോർട്ട് ചെയ്യാൻ മറക്കരുത്

export default function FollowUpFilters() {
  return (
    <div className="p-5 border-b border-gray-100 flex flex-col gap-4">
      {/* Top Header & Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-[14px] font-bold text-gray-800">All Follow-ups (25)</h2>
          <p className="text-[10px] text-gray-500 font-medium">Manage and track all follow-up tasks scheduled for today.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-[11px] font-bold hover:bg-gray-50 transition-colors">
            <Download size={13} /> Export
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-[11px] font-bold hover:bg-gray-50 transition-colors">
            <Calendar size={13} /> Calendar View
          </button>
          
          {/* 🔥 മാറ്റം വരുത്തിയ ഭാഗം: ബട്ടൺ മാറ്റി Link ആക്കി */}
          <Link 
            href="/follow-ups/add" 
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[11px] font-bold hover:bg-blue-700 shadow-sm transition-colors"
          >
            <Plus size={14} strokeWidth={2.5} /> Add Follow-up
          </Link>

        </div>
      </div>

      {/* Filter Rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-1">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search by name, phone, or reference..." className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-lg text-[11px] font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        
        <div className="relative">
          <select className="w-full appearance-none text-[11px] font-bold text-gray-700 bg-white border border-gray-200 rounded-lg pl-3 pr-7 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>All Status</option>
          </select>
          <ChevronDown size={12} className="text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        
        <div className="relative">
          <select className="w-full appearance-none text-[11px] font-bold text-gray-700 bg-white border border-gray-200 rounded-lg pl-3 pr-7 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>All Executives</option>
          </select>
          <ChevronDown size={12} className="text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        <div className="relative">
          <select className="w-full appearance-none text-[11px] font-bold text-gray-700 bg-white border border-gray-200 rounded-lg pl-3 pr-7 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>All Priorities</option>
          </select>
          <ChevronDown size={12} className="text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="relative">
          <select className="w-full appearance-none text-[11px] font-bold text-gray-700 bg-white border border-gray-200 rounded-lg pl-3 pr-7 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>All Sources</option>
          </select>
          <ChevronDown size={12} className="text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="relative">
          <select className="w-full appearance-none text-[11px] font-bold text-gray-700 bg-white border border-gray-200 rounded-lg pl-3 pr-7 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>All Destinations</option>
          </select>
          <ChevronDown size={12} className="text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="relative">
          <select className="w-full appearance-none text-[11px] font-bold text-gray-700 bg-white border border-gray-200 rounded-lg pl-3 pr-7 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>All Contact Methods</option>
          </select>
          <ChevronDown size={12} className="text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="flex justify-end">
          <button className="flex items-center justify-center gap-1.5 px-4 py-2 text-gray-600 rounded-lg text-[11px] font-bold hover:bg-gray-100 transition-colors w-full lg:w-auto">
            <RotateCcw size={12} /> Reset
          </button>
        </div>
      </div>
    </div>
  );
}