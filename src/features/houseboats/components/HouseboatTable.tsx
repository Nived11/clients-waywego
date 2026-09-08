"use client";

import { useState, useRef, useEffect } from "react";
import { Edit2, MoreVertical, Star, Eye, DollarSign, Trash2, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HouseboatTable() {
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

  const houseboats = [
    { name: "Blue Wave Premium", slug: "blue-wave-premium", sub: "Premium Luxury", reg: "KL-ALP-0012", dest: "Alleppey", category: "Premium", rooms: 6, maxGuests: 12, status: "Active", rating: 4.8, img: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=100&h=100&fit=crop" },
    { name: "Lake Paradise", slug: "lake-paradise", sub: "Luxury", reg: "KL-KUM-0007", dest: "Kumarakom", category: "Luxury", rooms: 5, maxGuests: 10, status: "Active", rating: 4.7, img: "https://images.unsplash.com/photo-1621886292650-5ae00f38fb9a?w=100&h=100&fit=crop" },
    { name: "Golden Retreat", slug: "golden-retreat", sub: "Premium", reg: "KL-ALP-0009", dest: "Alleppey", category: "Premium", rooms: 4, maxGuests: 8, status: "Active", rating: 4.5, img: "https://images.unsplash.com/photo-1590455581898-18eaf0c1eefb?w=100&h=100&fit=crop" },
    { name: "Dream Island", slug: "dream-island", sub: "Deluxe", reg: "KL-KUM-0011", dest: "Kumarakom", category: "Deluxe", rooms: 3, maxGuests: 6, status: "Active", rating: 4.4, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=100&h=100&fit=crop" },
    { name: "Backwater Bliss", slug: "backwater-bliss", sub: "Luxury", reg: "KL-ALP-0015", dest: "Alleppey", category: "Luxury", rooms: 6, maxGuests: 12, status: "Inactive", rating: 4.2, img: "https://images.unsplash.com/photo-1616484173745-07f25fd0547f?w=100&h=100&fit=crop" },
    { name: "Serenity", slug: "serenity", sub: "Deluxe", reg: "KL-KUM-0003", dest: "Kumarakom", category: "Deluxe", rooms: 2, maxGuests: 4, status: "Active", rating: 4.3, img: "https://images.unsplash.com/photo-1583507119106-9b5cc950c4bc?w=100&h=100&fit=crop" },
    { name: "Royal Palace", slug: "royal-palace", sub: "Premium", reg: "KL-ALP-0002", dest: "Alleppey", category: "Premium", rooms: 7, maxGuests: 14, status: "Active", rating: 4.9, img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=100&h=100&fit=crop" },
    { name: "Backwater Queen", slug: "backwater-queen", sub: "Luxury", reg: "KL-KUM-0010", dest: "Kumarakom", category: "Luxury", rooms: 5, maxGuests: 10, status: "Active", rating: 4.6, img: "https://images.unsplash.com/photo-1621886292650-5ae00f38fb9a?w=100&h=100&fit=crop" },
  ];

  const getCategoryStyle = (cat: string) => {
    switch (cat) {
      case 'Premium': return 'bg-amber-50 text-amber-600 border border-amber-100/50';
      case 'Luxury': return 'bg-purple-50 text-purple-600 border border-purple-100/50';
      case 'Deluxe': return 'bg-blue-50 text-blue-600 border border-blue-100/50';
      default: return 'bg-gray-50 text-gray-600 border border-gray-100/50';
    }
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden" ref={tableRef}>
      <div className="overflow-x-auto w-full flex-1 pb-8">
        <table className="w-full text-left text-xs min-w-[1050px]">
          <thead className="bg-white text-gray-500 border-b border-gray-100 font-bold">
            <tr>
              <th className="py-4 px-5">Houseboat Name</th>
              <th className="py-4 px-4">Registration No.</th>
              <th className="py-4 px-4">Destination</th>
              <th className="py-4 px-4 text-center">Category</th>
              <th className="py-4 px-4 text-center">Rooms</th>
              <th className="py-4 px-4 text-center">Max Guests</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-4 text-center">Rating</th>
              <th className="py-4 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {houseboats.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                
                <td className="py-3 px-5">
                  <div className="flex items-center gap-3">
                    <img src={row.img} alt={row.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <p className="font-bold text-gray-800">{row.name}</p>
                      <p className="text-[10px] text-gray-500 font-medium">{row.sub}</p>
                    </div>
                  </div>
                </td>
                
                <td className="py-3 px-4 font-bold text-gray-700">{row.reg}</td>
                <td className="py-3 px-4 font-semibold text-gray-600">{row.dest}</td>
                
                <td className="py-3 px-4 text-center">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${getCategoryStyle(row.category)}`}>
                    {row.category}
                  </span>
                </td>
                
                <td className="py-3 px-4 text-center font-bold text-gray-700">{row.rooms}</td>
                <td className="py-3 px-4 text-center font-bold text-gray-700">{row.maxGuests}</td>
                
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${
                    row.status === 'Active' 
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-100/50' 
                      : 'bg-rose-50 text-rose-600 border border-rose-100/50'
                  }`}>
                    {row.status}
                  </span>
                </td>
                
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-1 font-bold text-gray-700">
                    {row.rating} <Star size={12} className="text-amber-400 fill-amber-400" />
                  </div>
                </td>
                
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-1.5">
                    
                    {/* Edit Button */}
                    <Link href={`/houseboats/${row.slug}/edit`} className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 text-blue-600 transition-colors cursor-pointer">
                      <Edit2 size={13} strokeWidth={2.5} />
                    </Link>
                    
                    {/* View Button */}
                    <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer">
                      <Eye size={14} strokeWidth={2.5} />
                    </button>
                    
                    {/* 3-Dot Dropdown */}
                    <div className="relative">
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                        className={`w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md transition-colors cursor-pointer ${
                          openDropdown === idx ? 'bg-gray-100 text-gray-800' : 'hover:bg-gray-100 text-gray-600'
                        }`}
                      >
                        <MoreVertical size={14} strokeWidth={2.5} />
                      </button>

                      {openDropdown === idx && (
                        <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-gray-100 shadow-lg rounded-xl z-50 py-1.5 animate-in fade-in zoom-in-95 duration-100">
                          <button className="w-full text-left px-3.5 py-2 text-[11px] font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors">
                            <Star size={14} className="text-emerald-500 fill-emerald-500" /> Amenities
                          </button>
                          
                          {/* 🔥 CONNECTED PRICING LINK */}
                          <Link 
                            href={`/houseboats/${row.slug}/pricing`} 
                            className="w-full text-left px-3.5 py-2 text-[11px] font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <DollarSign size={14} className="text-blue-500" strokeWidth={3} /> Prices
                          </Link>
                          
                          <div className="h-px bg-gray-100 my-1"></div>
                          
                          <button className="w-full text-left px-3.5 py-2 text-[11px] font-bold text-rose-500 hover:bg-rose-50 flex items-center gap-2 transition-colors">
                            <Trash2 size={14} strokeWidth={2.5} /> Delete
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
      <div className="border-t border-gray-100 p-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500 bg-white">
        <div className="w-full sm:w-1/3 text-left">
          <p>Showing 1 to 8 of 64 houseboats</p>
        </div>
        <div className="w-full sm:w-1/3 flex items-center justify-center gap-1.5">
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&lt;</button>
          <button className="w-7 h-7 rounded-md bg-blue-600 text-white font-bold flex items-center justify-center shadow-sm">1</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">2</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">3</button>
          <span className="px-1 text-gray-400">...</span>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">8</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&gt;</button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-end">
          <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 cursor-pointer">
            <span className="text-gray-700 font-semibold">10 / page</span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}