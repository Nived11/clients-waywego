import { ChevronRight, PlusCircle, LayoutGrid, SlidersHorizontal, Download, MapPin } from "lucide-react";
import Link from "next/link";

export default function HotelSidebar() {
  const topDestinations = [
    { name: "Munnar", count: "18 Hotels" },
    { name: "Kumarakom", count: "14 Hotels" },
    { name: "Kochi", count: "12 Hotels" },
    { name: "Goa", count: "10 Hotels" },
    { name: "Ooty", count: "9 Hotels" },
  ];

  return (
    <>
      {/* 1. Chart Section */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xs font-bold text-gray-800 mb-4">Hotels by Status</h3>
        <div className="flex items-center gap-5">
          {/* Donut Chart */}
          <div className="relative w-[100px] h-[100px] shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(#10b981 0% 88.9%, #ef4444 88.9% 96.8%, #f59e0b 96.8% 100%)' }}></div>
            <div className="absolute inset-3 bg-white rounded-full flex flex-col items-center justify-center">
              <span className="text-lg font-black text-gray-800 leading-none">126</span>
              <span className="text-[9px] text-gray-500 font-bold mt-0.5">Total</span>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex-1 space-y-3">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
              <div className="flex justify-between w-full text-[11px] font-bold">
                <span className="text-gray-700">Active</span>
                <span className="text-gray-500">112 (88.9%)</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></div>
              <div className="flex justify-between w-full text-[11px] font-bold">
                <span className="text-gray-700">Inactive</span>
                <span className="text-gray-500">10 (7.9%)</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></div>
              <div className="flex justify-between w-full text-[11px] font-bold">
                <span className="text-gray-700">Pending</span>
                <span className="text-gray-500">4 (3.2%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Quick Actions - Removed flex-1 to prevent stretching */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xs font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="space-y-1">
          <Link href="/hotels/add" className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer">
            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <PlusCircle size={14} /> Add New Hotel
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </Link>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <LayoutGrid size={14} /> Add Room Type
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <SlidersHorizontal size={14} /> Manage Amenities
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Download size={14} /> Import Hotels
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
        </div>
      </div>

      {/* 2. Top Destinations */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-bold text-gray-800">Top Destinations</h3>
          <button className="text-[10px] font-bold text-blue-600 hover:underline">View all</button>
        </div>
        <div className="space-y-3">
          {topDestinations.map((dest, idx) => (
            <div key={idx} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                <span className="text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{dest.name}</span>
              </div>
              <span className="text-[10px] font-medium text-gray-500">{dest.count}</span>
            </div>
          ))}
        </div>
      </div>

      
    </>
  );
}