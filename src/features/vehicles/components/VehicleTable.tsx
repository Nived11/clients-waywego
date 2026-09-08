"use client";

import { useState, useRef, useEffect } from "react";
import { Edit2, MoreVertical, Eye, FileText, Trash2, ChevronDown,DollarSign } from "lucide-react";
import Link from "next/link";

export default function VehicleTable() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tableRef.current && !tableRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔥 ഡാറ്റയിൽ id കൂടി ആഡ് ചെയ്തു (URL ൽ കാണിക്കാൻ)
  const vehicles = [
    { id: "v1", name: "Toyota Innova Crysta", color: "White", reg: "KL 07 CP 1234", type: "SUV", capacity: "7 + 1", fuel: "Diesel", status: "Active", loc: "Kochi", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=100&h=100&fit=crop" },
    { id: "v2", name: "Tempo Traveller 12 Seater", color: "White", reg: "KL 07 BX 5678", type: "Tempo Traveller", capacity: "12 + 1", fuel: "Diesel", status: "Active", loc: "Kochi", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=100&h=100&fit=crop" },
    { id: "v3", name: "Mini Bus 20 Seater", color: "White", reg: "KL 07 BY 9012", type: "Mini Bus", capacity: "20 + 1", fuel: "Diesel", status: "Active", loc: "Alleppey", img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=100&h=100&fit=crop" },
    { id: "v4", name: "Maruti Dzire", color: "White", reg: "KL 07 CF 3456", type: "Sedan", capacity: "4 + 1", fuel: "Petrol", status: "Maintenance", loc: "Munnar", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=100&h=100&fit=crop" },
    { id: "v5", name: "Force Traveller 17 Seater", color: "White", reg: "KL 07 CG 7890", type: "Tempo Traveller", capacity: "17 + 1", fuel: "Diesel", status: "Active", loc: "Thekkady", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=100&h=100&fit=crop" },
    { id: "v6", name: "Mahindra XUV700", color: "White", reg: "KL 07 CH 2468", type: "SUV", capacity: "7 + 1", fuel: "Diesel", status: "Inactive", loc: "Kochi", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=100&h=100&fit=crop" },
    { id: "v7", name: "Toyota Etios", color: "White", reg: "KL 07 CJ 1357", type: "Sedan", capacity: "4 + 1", fuel: "Petrol", status: "Active", loc: "Kovalam", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=100&h=100&fit=crop" },
    { id: "v8", name: "Luxury Bus 35 Seater", color: "White", reg: "KL 07 CK 9753", type: "Luxury Bus", capacity: "35 + 1", fuel: "Diesel", status: "Active", loc: "Kochi", img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=100&h=100&fit=crop" },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-emerald-50 text-emerald-600';
      case 'Maintenance': return 'bg-amber-50 text-amber-600';
      case 'Inactive': return 'bg-rose-50 text-rose-500';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden" ref={tableRef}>
      <div className="overflow-x-auto w-full flex-1 pb-8">
        <table className="w-full text-left text-[11px] min-w-[1050px]">
          <thead className="bg-white text-gray-500 font-bold border-b border-gray-100">
            <tr>
              <th className="py-4 px-5">Vehicle</th>
              <th className="py-4 px-4">Registration No.</th>
              <th className="py-4 px-4">Type</th>
              <th className="py-4 px-4 text-center">Seating Capacity</th>
              <th className="py-4 px-4">Fuel Type</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-4">Location</th>
              <th className="py-4 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {vehicles.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                
                <td className="py-3 px-5">
                  <div className="flex items-center gap-3">
                    <img src={row.img} alt={row.name} className="w-10 h-8 rounded border border-gray-200 object-cover" />
                    <div>
                      <p className="font-bold text-gray-800 text-xs">{row.name}</p>
                      <p className="text-[10px] text-gray-500 font-medium">{row.color}</p>
                    </div>
                  </div>
                </td>
                
                <td className="py-3 px-4 font-bold text-gray-800">{row.reg}</td>
                <td className="py-3 px-4 font-semibold text-gray-700">{row.type}</td>
                <td className="py-3 px-4 text-center font-bold text-gray-700">{row.capacity}</td>
                <td className="py-3 px-4 font-semibold text-gray-600">{row.fuel}</td>
                
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 rounded text-[9px] font-bold ${getStatusStyle(row.status)}`}>
                    {row.status}
                  </span>
                </td>
                
                <td className="py-3 px-4 font-semibold text-gray-700">{row.loc}</td>
                
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-1.5">
                    
                    <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-100 text-blue-600 transition-colors cursor-pointer">
                      <Eye size={12} strokeWidth={2.5} />
                    </button>
                    
                    {/* 🔥 LINK UPDATED HERE */}
                    <Link href={`/vehicles/${row.id}/edit`} className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-100 text-blue-600 transition-colors cursor-pointer">
                      <Edit2 size={12} strokeWidth={2.5} />
                    </Link>
                    
                    <div className="relative">
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                        className={`w-6 h-6 flex items-center justify-center border border-gray-200 rounded transition-colors cursor-pointer ${
                          openDropdown === idx ? 'bg-gray-100 text-gray-800' : 'hover:bg-gray-100 text-gray-500'
                        }`}
                      >
                        <MoreVertical size={13} strokeWidth={2.5} />
                      </button>

                      {openDropdown === idx && (
                        <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-gray-100 shadow-lg rounded-xl z-50 py-1.5 animate-in fade-in zoom-in-95 duration-100">
                          
                          {/* 🔥 NEW PRICING LINK ADDED */}
                          <Link href={`/vehicles/${row.id}/pricing`} className="w-full text-left px-3.5 py-2 text-[11px] font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer">
                            <DollarSign size={13} className="text-blue-500" strokeWidth={2.5} /> Prices
                          </Link>

                          <button className="w-full text-left px-3.5 py-2 text-[11px] font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors">
                            <FileText size={13} className="text-purple-500" /> Documents
                          </button>
                          <div className="h-px bg-gray-100 my-1"></div>
                          <button className="w-full text-left px-3.5 py-2 text-[11px] font-bold text-rose-500 hover:bg-rose-50 flex items-center gap-2 transition-colors">
                            <Trash2 size={13} strokeWidth={2.5} /> Delete
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="border-t border-gray-100 p-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-gray-500 bg-white">
        <div className="w-full sm:w-1/3 text-left">
          <p>Showing 1 to 8 of 58 vehicles</p>
        </div>
        <div className="w-full sm:w-1/3 flex items-center justify-center gap-1.5">
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&lt;</button>
          <button className="w-6 h-6 rounded bg-blue-600 text-white font-bold flex items-center justify-center shadow-sm">1</button>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">2</button>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">3</button>
          <span className="px-0.5 md:px-1">...</span>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">8</button>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&gt;</button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-end">
          <div className="flex items-center gap-1.5 border border-gray-200 rounded px-2.5 py-1.5 hover:bg-gray-50 cursor-pointer">
            <span className="text-gray-700 font-bold">10 / page</span>
            <ChevronDown size={12} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}