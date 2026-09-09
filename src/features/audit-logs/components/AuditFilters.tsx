import { Calendar as CalendarIcon, Search } from "lucide-react";

export default function AuditFilters() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 items-end">
      
      <div className="lg:col-span-2">
        <label className="block text-[10px] font-bold text-gray-400 mb-1.5 uppercase">Date Range</label>
        <div className="relative">
          <input type="text" defaultValue="20 May 2025 - 26 May 2025" readOnly className="w-full text-[11px] font-bold text-gray-800 border border-gray-200 rounded-lg pl-3 pr-8 py-2 outline-none bg-white cursor-pointer" />
          <CalendarIcon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      <div>
        <label className="block text-[10px] font-bold text-gray-400 mb-1.5 uppercase">User</label>
        <select className="w-full text-[11px] font-bold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white cursor-pointer">
          <option>All Users</option>
        </select>
      </div>
      
      <div>
        <label className="block text-[10px] font-bold text-gray-400 mb-1.5 uppercase">Action</label>
        <select className="w-full text-[11px] font-bold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white cursor-pointer">
          <option>All Actions</option>
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-bold text-gray-400 mb-1.5 uppercase">Module</label>
        <select className="w-full text-[11px] font-bold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white cursor-pointer">
          <option>All Modules</option>
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-bold text-gray-400 mb-1.5 uppercase">Record Type</label>
        <select className="w-full text-[11px] font-bold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white cursor-pointer">
          <option>All Record Types</option>
        </select>
      </div>

      <div className="lg:col-span-1">
        <label className="block text-[10px] font-bold text-gray-400 mb-1.5 uppercase">IP Address</label>
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <input type="text" placeholder="Search IP address" className="w-full text-[11px] font-medium text-gray-800 border border-gray-200 rounded-lg pl-3 pr-8 py-2 outline-none focus:ring-1 focus:ring-blue-500" />
            <Search size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="col-span-1 sm:col-span-2 lg:col-span-7 flex justify-end items-center gap-4 mt-1">
        <button className="text-[11px] font-bold text-gray-600 hover:text-gray-800 transition-colors">Clear</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-[11px] font-bold hover:bg-blue-700 shadow-sm transition-colors">Apply Filters</button>
      </div>

    </div>
  );
}