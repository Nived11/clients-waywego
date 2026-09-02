"use client";

import { ChevronRight, PlusCircle, Flag, Import, Map } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DestinationSidebar() {
  const params = useParams();
  const tenant = params.tenant;
  const popDestinations = [
    { name: "Kerala", count: "166 Packages", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=50&h=50&fit=crop" },
    { name: "Dubai", count: "98 Packages", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=50&h=50&fit=crop" },
    { name: "Goa", count: "87 Packages", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=50&h=50&fit=crop" },
    { name: "Goa", count: "87 Packages", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=50&h=50&fit=crop" },
    { name: "Switzerland", count: "85 Packages", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=50&h=50&fit=crop" },
    { name: "Bangkok", count: "54 Packages", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=50&h=50&fit=crop" },
  ];

  return (
    <>
      {/* 1. Chart Section */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xs font-bold text-gray-800 mb-4">Destinations by Region</h3>
        <div className="flex items-center gap-5">
          {/* Donut Chart Mockup */}
          <div className="relative w-[110px] h-[110px] shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(#3b82f6 0% 29.2%, #10b981 29.2% 48%, #f59e0b 48% 60.5%, #ef4444 60.5% 85.5%, #6b7280 85.5% 100%)' }}></div>
            <div className="absolute inset-3 bg-white rounded-full flex flex-col items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
              <span className="text-xl font-black text-gray-800 leading-none tracking-tight">48</span>
              <span className="text-[10px] text-gray-500 font-bold mt-0.5">Total</span>
            </div>
          </div>
          
          {/* Stats with Percentages */}
          <div className="flex-1 space-y-3">
            
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-0.5 shrink-0"></div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold text-gray-500 mb-1">South India</span>
                <span className="text-[11px] font-bold text-gray-800">14 <span className="text-gray-600">(29.2%)</span></span>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-0.5 shrink-0"></div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold text-gray-500 mb-1">North India</span>
                <span className="text-[11px] font-bold text-gray-800">9 <span className="text-gray-600">(18.8%)</span></span>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-0.5 shrink-0"></div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold text-gray-500 mb-1">West India</span>
                <span className="text-[11px] font-bold text-gray-800">6 <span className="text-gray-600">(12.5%)</span></span>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500 mt-0.5 shrink-0"></div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold text-gray-500 mb-1">International</span>
                <span className="text-[11px] font-bold text-gray-800">12 <span className="text-gray-600">(25.0%)</span></span>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-500 mt-0.5 shrink-0"></div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold text-gray-500 mb-1">Others</span>
                <span className="text-[11px] font-bold text-gray-800">7 <span className="text-gray-600">(14.6%)</span></span>
              </div>
            </div>

          </div>
        </div>
        <button className="text-[11px] font-bold text-blue-600 mt-5 hover:underline">View full report →</button>
      </div>

      {/* 2. Quick Actions */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xs font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="space-y-1">
          <Link 
            href={`/destinations/add`} 
            className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer"
          >
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
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Map size={14} /> Manage Regions
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
        </div>
      </div>

      {/* 3. Popular Destinations */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-bold text-gray-800">Popular Destinations</h3>
          <button className="text-[10px] font-bold text-blue-600 hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          {popDestinations.map((dest, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <img src={dest.img} alt={dest.name} className="w-10 h-8 rounded-md object-cover" />
              <div>
                <p className="text-xs font-bold text-gray-800">{dest.name}</p>
                <p className="text-[10px] font-medium text-gray-500">{dest.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}