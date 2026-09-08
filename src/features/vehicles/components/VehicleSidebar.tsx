import { ChevronRight, PlusCircle, CarFront, FileText, Download, Bus, Car, Eye, Edit2 } from "lucide-react";
import Link from "next/link";

export default function VehicleSidebar() {
  const topTypes = [
    { name: "SUV", count: "18", icon: CarFront },
    { name: "Tempo Traveller", count: "16", icon: Bus },
    { name: "Mini Bus", count: "10", icon: Bus },
    { name: "Sedan", count: "9", icon: Car },
    { name: "Luxury Bus", count: "5", icon: Bus },
  ];

  return (
    <>
      {/* 1. Chart Section */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-4">Vehicles by Status</h3>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-between w-full">
            {/* Donut Chart */}
            <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(#10b981 0% 79.3%, #f59e0b 79.3% 87.9%, #ef4444 87.9% 100%)' }}></div>
              <div className="absolute inset-3 bg-white rounded-full flex flex-col items-center justify-center">
                <span className="text-sm font-black text-gray-800 leading-none">58</span>
                <span className="text-[8px] text-gray-500 font-bold mt-0.5">Total</span>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex-1 pl-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] font-bold text-gray-700">Active</span>
                </div>
                <span className="text-[9px] font-bold text-gray-500">46 (79.3%)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span className="text-[10px] font-bold text-gray-700">Maintenance</span>
                </div>
                <span className="text-[9px] font-bold text-gray-500">5 (8.6%)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                  <span className="text-[10px] font-bold text-gray-700">Inactive</span>
                </div>
                <span className="text-[9px] font-bold text-gray-500">7 (12.1%)</span>
              </div>
            </div>
          </div>
          <button className="text-[10px] font-bold text-blue-600 hover:text-blue-800 transition-colors w-full text-left mt-1">
            View full report →
          </button>
        </div>
      </div>

      {/* 3. Quick Actions */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="space-y-1">
          <Link href="/vehicles/add" className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <PlusCircle size={14} className="text-emerald-500" /> Add New Vehicle
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </Link>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <CarFront size={14} className="text-purple-500" /> Add Vehicle Type
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <FileText size={14} className="text-amber-500" /> Manage Vehicle Documents
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Download size={14} className="text-blue-500" /> Bulk Update Vehicles
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
        </div>
      </div>

      {/* 2. Top Vehicle Types */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[13px] font-bold text-gray-800">Top Vehicle Types</h3>
          <button className="text-[10px] font-bold text-blue-600 hover:underline">View all</button>
        </div>
        <div className="space-y-3.5">
          {topTypes.map((type, idx) => (
            <div key={idx} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-2">
                <type.icon size={14} className="text-indigo-600" />
                <span className="text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{type.name}</span>
              </div>
              <span className="text-[10px] font-medium text-gray-500">{type.count}</span>
            </div>
          ))}
        </div>
      </div>

      

      {/* 4. Recent Activity (Moved into sidebar to match image) */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[13px] font-bold text-gray-800">Recent Activity</h3>
          <button className="text-[10px] font-bold text-blue-600 hover:underline">View all</button>
        </div>
        
        <div className="flex flex-col gap-5">
          {/* Activity 1 */}
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
              <CarFront size={10} className="text-emerald-500" strokeWidth={3} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-800 leading-tight">New vehicle added</p>
              <p className="text-[10px] text-gray-500 font-medium mt-0.5">Toyota Innova Crysta (KL 07 CP 4321)</p>
              <p className="text-[9px] text-gray-400 mt-1">2 hours ago</p>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
              <Edit2 size={10} className="text-blue-500" strokeWidth={3} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-800 leading-tight">Vehicle updated</p>
              <p className="text-[10px] text-gray-500 font-medium mt-0.5">Tempo Traveller 12 Seater (KL 07 BX 5678)</p>
              <p className="text-[9px] text-gray-400 mt-1">1 day ago</p>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}