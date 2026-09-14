"use client";

// 🔥 ImageIcon ഇമ്പോർട്ട് ചെയ്തു
import { ChevronRight, PlusCircle, Flag, Import, Map, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface SidebarProps {
  breakdown?: any[];
  total?: number;
  popular?: any[];
}

export default function DestinationSidebar({ breakdown = [], total = 0, popular = [] }: SidebarProps) {
  const params = useParams();

  // Dynamic Donut Chart Logic
  let currentPercent = 0;
  const gradientStops = breakdown.map(item => {
    const start = currentPercent;
    currentPercent += item.percentage;
    return `${item.color} ${start}% ${currentPercent}%`;
  }).join(', ');
  const donutBackground = gradientStops ? `conic-gradient(${gradientStops})` : 'conic-gradient(#e5e7eb 0% 100%)';

  return (
    <>
      {/* 1. Chart Section */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm shrink-0">
        <h3 className="text-xs font-bold text-gray-800 mb-4">Destinations by Region</h3>
        <div className="flex items-center gap-5">
          <div className="relative w-[110px] h-[110px] shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full transition-all duration-500" style={{ background: donutBackground }}></div>
            <div className="absolute inset-3 bg-white rounded-full flex flex-col items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
              <span className="text-xl font-black text-gray-800 leading-none tracking-tight">{total}</span>
              <span className="text-[10px] text-gray-500 font-bold mt-0.5">Total</span>
            </div>
          </div>
          
          <div className="flex-1 space-y-3">
            {breakdown.length > 0 ? breakdown.map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full mt-0.5 shrink-0" style={{ backgroundColor: item.color }}></div>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-bold text-gray-500 mb-1">{item.region}</span>
                  <span className="text-[11px] font-bold text-gray-800">{item.count} <span className="text-gray-600 font-medium">({item.percentage}%)</span></span>
                </div>
              </div>
            )) : (
              <p className="text-[10px] text-gray-400">No data available</p>
            )}
          </div>
        </div>
        
        <button className="text-[11px] font-bold text-blue-600 mt-5 hover:underline flex items-center gap-1 cursor-pointer">
          View full report →
        </button>
      </div>

      {/* 2. Quick Actions */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm shrink-0">
        <h3 className="text-xs font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="space-y-1">
          <Link href={`/destinations/add`} className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer">
            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <PlusCircle size={14} /> Add New Destination
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </Link>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Flag size={14} /> Add New Country
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Import size={14} /> Import Destinations
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
        </div>
      </div>

      {/* 3. Popular Destinations */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex-1 flex flex-col min-h-[250px]">
        
        {/* Header & View All Button */}
        <div className="flex items-center justify-between mb-5 shrink-0">
          <h3 className="text-[13px] font-bold text-[#1e3a5f]">Popular Destinations</h3>
          <Link href="#" className="text-[11px] font-bold text-blue-600 hover:underline">
            View All
          </Link>
        </div>

        {/* Scrollable List */}
        <div className="space-y-4 flex-1 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 transition-colors">
          {popular.length > 0 ? popular.map((dest, idx) => (
            <div key={idx} className="flex items-center gap-3">
              
              {/* 🔥 Image Fallback Logic Added Here */}
              {dest.image_url ? (
                <img 
                  src={dest.image_url} 
                  alt={dest.name} 
                  className="w-10 h-10 rounded-lg object-cover bg-gray-100 shrink-0 border border-gray-100" 
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                  <ImageIcon size={16} className="text-gray-400" />
                </div>
              )}
              
              <div className="flex flex-col justify-center">
                <p className="text-[12px] font-bold text-[#1e3a5f] line-clamp-1 leading-tight">{dest.name}</p>
                <p className="text-[10px] font-medium text-gray-500 mt-1">{dest.packages_label}</p>
              </div>
            </div>
          )) : (
            <p className="text-[10px] text-gray-400 text-center py-4">No popular destinations found.</p>
          )}
        </div>

      </div>

    </>
  );
}