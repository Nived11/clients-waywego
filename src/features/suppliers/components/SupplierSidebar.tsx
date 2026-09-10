import { ChevronRight, PlusCircle, Grid, FileCheck, BarChart2, Download, Star } from "lucide-react";
import Link from "next/link";

export default function SupplierSidebar() {
  const topRated = [
    { name: "Kerala Tourism Services", rating: 4.8, initial: "KT", bg: "bg-emerald-100", color: "text-emerald-600" },
    { name: "Backwater Houseboats", rating: 4.7, initial: "BH", bg: "bg-amber-100", color: "text-amber-600" },
    { name: "Wayanad Holidays", rating: 4.6, initial: "WH", bg: "bg-blue-100", color: "text-blue-600" },
    { name: "Fly Tech Aviation", rating: 4.5, initial: "FT", bg: "bg-rose-100", color: "text-rose-600" },
    { name: "Mountain Travels", rating: 4.4, initial: "MT", bg: "bg-purple-100", color: "text-purple-600" },
  ];

  return (
    <>
      {/* 1. Supplier Overview Chart */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xs font-bold text-gray-800 mb-4">Supplier Overview</h3>
        <div className="flex items-center gap-5">
          <div className="relative w-[100px] h-[100px] shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(#10b981 0% 84.6%, #ef4444 84.6% 91%, #f59e0b 91% 100%)' }}></div>
            <div className="absolute inset-3 bg-white rounded-full flex flex-col items-center justify-center">
              <span className="text-lg font-black text-gray-800 leading-none">156</span>
              <span className="text-[9px] text-gray-500 font-bold mt-0.5">Total</span>
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
              <div className="flex justify-between w-full text-[10px] font-bold">
                <span className="text-gray-700">Active</span>
                <span className="text-gray-500">132 (84.6%)</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></div>
              <div className="flex justify-between w-full text-[10px] font-bold">
                <span className="text-gray-700">Pending</span>
                <span className="text-gray-500">14 (9.0%)</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></div>
              <div className="flex justify-between w-full text-[10px] font-bold">
                <span className="text-gray-700">Inactive</span>
                <span className="text-gray-500">10 (6.4%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Top Categories */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xs font-bold text-gray-800 mb-4">Top Categories</h3>
        <div className="space-y-3.5">
          {[
            { label: "Accommodation", value: 48, percent: "30.8%", width: "100%" },
            { label: "Tour Operator", value: 36, percent: "23.1%", width: "75%" },
            { label: "Transport", value: 28, percent: "17.9%", width: "58%" },
            { label: "Houseboat", value: 18, percent: "11.5%", width: "37%" },
            { label: "Activity", value: 12, percent: "7.7%", width: "25%" },
          ].map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[10px] font-bold text-gray-700">
                <span>{cat.label}</span>
                <span>{cat.value} ({cat.percent})</span>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: cat.width }}></div>
              </div>
            </div>
          ))}
        </div>
        <button className="text-[10px] font-bold text-blue-600 hover:underline mt-4">View all categories</button>
      </div>

      {/* 3. Top Rated Suppliers */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xs font-bold text-gray-800 mb-4">Top Rated Suppliers</h3>
        <div className="space-y-3">
          {topRated.map((sup, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[8px] ${sup.bg} ${sup.color}`}>
                  {sup.initial}
                </div>
                <span className="text-[11px] font-bold text-gray-700">{sup.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={8} className={i < Math.floor(sup.rating) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"} />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-gray-800">{sup.rating}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="text-[10px] font-bold text-blue-600 hover:underline mt-4">View all</button>
      </div>

      {/* 4. Quick Actions */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xs font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="space-y-1">
          <Link href="/suppliers/add" className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-emerald-600 transition-colors">
              <PlusCircle size={14} /> Add New Supplier
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-emerald-600" />
          </Link>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-emerald-600 transition-colors">
              <Grid size={14} /> Supplier Category
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-emerald-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-emerald-600 transition-colors">
              <FileCheck size={14} /> Supplier Approval
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-emerald-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-emerald-600 transition-colors">
              <BarChart2 size={14} /> Supplier Performance Report
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-emerald-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-emerald-600 transition-colors">
              <Download size={14} /> Import Suppliers
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-emerald-600" />
          </button>
        </div>
      </div>

    </>
  );
}