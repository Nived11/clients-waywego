import { ChevronRight, PlusCircle, CarFront, FileText, Download, Bus, Car } from "lucide-react";
import Link from "next/link";

interface VehicleSidebarProps {
  statusBreakdown?: any[];
  topTypes?: any[];
  totalVehicles?: number;
}

export default function VehicleSidebar({ 
  statusBreakdown = [], 
  topTypes = [], 
  totalVehicles = 0 
}: VehicleSidebarProps) {

  // 1. Icon mapper for Vehicle Types
  const getTypeIcon = (name: string) => {
    const n = name?.toLowerCase() || '';
    if (n.includes('bus')) return Bus;
    return Car;
  };

  // 2. Conic gradient calculate cheyyan ulla logic (Donut Chart)
  let currentPercentage = 0;
  const gradientStops = statusBreakdown.map((item) => {
    const start = currentPercentage;
    currentPercentage += item.percentage;
    return `${item.color} ${start}% ${currentPercentage}%`;
  }).join(', ');

  const conicStyle = statusBreakdown.length > 0 
    ? { background: `conic-gradient(${gradientStops})` } 
    : { background: '#e5e7eb' };

  return (
    <>
      {/* 1. Chart Section (Vehicles by Status) */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-4">Vehicles by Status</h3>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-between w-full">
            {/* Donut Chart */}
            <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full" style={conicStyle}></div>
              <div className="absolute inset-3 bg-white rounded-full flex flex-col items-center justify-center">
                <span className="text-sm font-black text-gray-800 leading-none">{totalVehicles}</span>
                <span className="text-[8px] text-gray-500 font-bold mt-0.5">Total</span>
              </div>
            </div>
            
            {/* Stats Breakdown */}
            <div className="flex-1 pl-4 space-y-2.5">
              {statusBreakdown.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[10px] font-bold text-gray-700">{item.status}</span>
                  </div>
                  <span className="text-[9px] font-bold text-gray-500">{item.count} ({item.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>
          <button className="text-[10px] font-bold text-blue-600 hover:text-blue-800 transition-colors w-full text-left mt-1 cursor-pointer">
            View full report →
          </button>
        </div>
      </div>

      {/* 2. Quick Actions */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="space-y-1">
          <Link href="/vehicles/add" className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <PlusCircle size={14} className="text-emerald-500" /> Add New Vehicle
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </Link>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left cursor-pointer">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <CarFront size={14} className="text-purple-500" /> Add Vehicle Type
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left cursor-pointer">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <FileText size={14} className="text-amber-500" /> Manage Vehicle Documents
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left cursor-pointer">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Download size={14} className="text-blue-500" /> Bulk Update Vehicles
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
        </div>
      </div>

      {/* 3. Top Vehicle Types */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[13px] font-bold text-gray-800">Top Vehicle Types</h3>
          <button className="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer">View all</button>
        </div>
        <div className="space-y-3.5">
          {topTypes.map((type, idx) => {
            const IconComponent = getTypeIcon(type.name);
            return (
              <div key={type.id || idx} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-2">
                  <IconComponent size={14} className="text-indigo-600" />
                  <span className="text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{type.name}</span>
                </div>
                <span className="text-[10px] font-medium text-gray-500">{type.count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}