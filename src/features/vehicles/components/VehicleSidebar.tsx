"use client";

import { useState } from "react";
import { ChevronRight, PlusCircle, CarFront, FileText, Download, Bus, Car, AlertCircle } from "lucide-react";
import Link from "next/link";
import VehicleTypeModal from "./VehicleTypeModal";

interface VehicleSidebarProps {
  statusBreakdown?: any[];
  topTypes?: any[];
  totalVehicles?: number;
  onTypeAdded?: () => void;
  error?: string | null; // 🔥 എറർ ഹാൻഡ്ലിങ്ങിനായി ചേർത്തു
}

export default function VehicleSidebar({ 
  statusBreakdown = [], 
  topTypes = [], 
  totalVehicles = 0,
  onTypeAdded,
  error 
}: VehicleSidebarProps) {

  const [isTypeModalOpen, setIsTypeModalOpen] = useState(false);

  const getTypeIcon = (name: string) => {
    const n = name?.toLowerCase() || '';
    if (n.includes('bus')) return Bus;
    return Car;
  };

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
      {/* 1. Chart Section */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-4">Vehicles by Status</h3>
        
        {/* 🔥 Error Handling for Chart */}
        {error ? (
          <div className="bg-rose-50 border border-rose-100 p-3 rounded-lg flex items-start gap-2.5 text-rose-600 w-full">
            <AlertCircle size={14} className="shrink-0 mt-0.5" />
            <span className="text-[11px] font-bold leading-relaxed">Failed to load status breakdown.</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-between w-full">
              <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full" style={conicStyle}></div>
                <div className="absolute inset-2.5 bg-white rounded-full flex flex-col items-center justify-center">
                  <span className="text-xs font-black text-gray-800 leading-none">{totalVehicles}</span>
                  <span className="text-[7px] text-gray-500 font-bold mt-0.5">Total</span>
                </div>
              </div>
              
              <div className="flex-1 pl-2 space-y-2">
                {statusBreakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }}></div>
                      <span className="text-[10px] font-bold text-gray-700 truncate">{item.status}</span>
                    </div>
                    <span className="text-[9px] font-bold text-gray-500 whitespace-nowrap">{item.count} ({item.percentage}%)</span>
                  </div>
                ))}
                {statusBreakdown.length === 0 && (
                   <p className="text-[10px] text-gray-400 italic">No data available</p>
                )}
              </div>
            </div>
            <button className="text-[10px] font-bold text-blue-600 hover:text-blue-800 transition-colors w-full text-left mt-1 cursor-pointer">
              View full report →
            </button>
          </div>
        )}
      </div>

      {/* 2. Quick Actions (എറർ വന്നാലും ഇത് വർക്ക് ചെയ്യണം, കാരണം ഇത് API-യെ ഡിപെൻഡ് ചെയ്യുന്നില്ല) */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-3">Quick Actions</h3>
        <div className="space-y-1">
          <Link href="/vehicles/add" className="w-full flex items-center justify-between p-1.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
            <div className="flex items-center gap-2 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <PlusCircle size={13} className="text-emerald-500" /> Add New Vehicle
            </div>
            <ChevronRight size={13} className="text-gray-400 group-hover:text-blue-600" />
          </Link>
          
          <button 
            onClick={() => setIsTypeModalOpen(true)}
            className="w-full flex items-center justify-between p-1.5 hover:bg-gray-50 rounded-lg transition-colors group text-left cursor-pointer"
          >
            <div className="flex items-center gap-2 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <CarFront size={13} className="text-purple-500" /> Add Vehicle Type
            </div>
            <ChevronRight size={13} className="text-gray-400 group-hover:text-blue-600" />
          </button>

          <button className="w-full flex items-center justify-between p-1.5 hover:bg-gray-50 rounded-lg transition-colors group text-left cursor-pointer">
            <div className="flex items-center gap-2 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <FileText size={13} className="text-amber-500" /> Manage Documents
            </div>
            <ChevronRight size={13} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-1.5 hover:bg-gray-50 rounded-lg transition-colors group text-left cursor-pointer">
            <div className="flex items-center gap-2 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Download size={13} className="text-blue-500" /> Bulk Update Vehicles
            </div>
            <ChevronRight size={13} className="text-gray-400 group-hover:text-blue-600" />
          </button>
        </div>
      </div>

      {/* 3. Top Vehicle Types */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[13px] font-bold text-gray-800">Top Vehicle Types</h3>
          {!error && <button className="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer">View all</button>}
        </div>

        {/* 🔥 Error Handling for Top Types */}
        {error ? (
          <div className="bg-rose-50 border border-rose-100 p-3 rounded-lg flex items-start gap-2.5 text-rose-600 w-full">
            <AlertCircle size={14} className="shrink-0 mt-0.5" />
            <span className="text-[11px] font-bold leading-relaxed">Failed to load vehicle types.</span>
          </div>
        ) : (
          <div className="space-y-3">
            {topTypes.length > 0 ? topTypes.map((type, idx) => {
              const IconComponent = getTypeIcon(type.name);
              return (
                <div key={type.id || idx} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-2 min-w-0">
                    <IconComponent size={13} className="text-indigo-600 shrink-0" />
                    <span className="text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors truncate">{type.name}</span>
                  </div>
                  <span className="text-[10px] font-medium text-gray-500 shrink-0">{type.count}</span>
                </div>
              );
            }) : (
              <p className="text-[11px] text-gray-400 text-center py-3 italic">No vehicle types available.</p>
            )}
          </div>
        )}
      </div>

      <VehicleTypeModal 
        isOpen={isTypeModalOpen}
        onClose={() => setIsTypeModalOpen(false)}
        onSuccess={() => {
          if (onTypeAdded) onTypeAdded();
        }}
      />
    </>
  );
}