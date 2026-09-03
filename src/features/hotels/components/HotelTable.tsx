"use client";

import { useState, useRef, useEffect } from "react";
import { Edit2, MoreVertical, ChevronDown, Star, Eye, DollarSign, Trash2 } from "lucide-react";
import Link from "next/link";

export default function HotelTable() {
  // ഡ്രോപ്പ്ഡൗൺ ഓപ്പൺ ആക്കി വെക്കാൻ ഉള്ള സ്റ്റേറ്റ് (ഏത് വരിയിലാണ് ക്ലിക്ക് ചെയ്തതെന്ന് അറിയാൻ)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  // പുറത്ത് ക്ലിക്ക് ചെയ്യുമ്പോൾ ഡ്രോപ്പ്ഡൗൺ ക്ലോസ് ആവാൻ
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tableRef.current && !tableRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hotels = [
    { name: "The Leela Palace", slug: "the-leela-palace", stars: 5, city: "New Delhi", dest: "Delhi", rating: 5, rooms: 5, status: "Active", date: "15 May 2025", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=100&fit=crop" },
    { name: "Taj West End", slug: "taj-west-end", stars: 4, city: "Bengaluru", dest: "Karnataka", rating: 4, rooms: 4, status: "Active", date: "10 May 2025", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=100&h=100&fit=crop" },
    { name: "Parakkat Nature Resort", slug: "parakkat-nature-resort", stars: 3, city: "Munnar", dest: "Kerala", rating: 3, rooms: 3, status: "Active", date: "08 May 2025", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=100&h=100&fit=crop" },
    { name: "Hotel Marine Plaza", slug: "hotel-marine-plaza", stars: 5, city: "Mumbai", dest: "Maharashtra", rating: 5, rooms: 6, status: "Active", date: "02 May 2025", img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=100&h=100&fit=crop" },
    { name: "Abad Whispering Palms", slug: "abad-whispering-palms", stars: 4, city: "Kumarakom", dest: "Kerala", rating: 4, rooms: 4, status: "Inactive", date: "25 Apr 2025", img: "https://images.unsplash.com/photo-1542314831-c6a4d14d8373?w=100&h=100&fit=crop" },
    { name: "Fortune Select JP Cosmos", slug: "fortune-select-jp-cosmos", stars: 5, city: "Bengaluru", dest: "Karnataka", rating: 5, rooms: 3, status: "Active", date: "20 Apr 2025", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=100&h=100&fit=crop" },
    { name: "Hotel Silverline", slug: "hotel-silverline", stars: 3, city: "Kochi", dest: "Kerala", rating: 3, rooms: 4, status: "Active", date: "18 Apr 2025", img: "https://images.unsplash.com/photo-1551882547-ff40c0d5b5df?w=100&h=100&fit=crop" },
    { name: "Radisson Blu Plaza", slug: "radisson-blu-plaza", stars: 5, city: "Hyderabad", dest: "Telangana", rating: 5, rooms: 3, status: "Active", date: "15 Apr 2025", img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=100&h=100&fit=crop" },
  ];

  // Helper function to render stars
  const renderStars = (count: number) => {
    return (
      <div className="flex gap-0.5 mt-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={10} className={i < count ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden" ref={tableRef}>
      <div className="overflow-x-auto w-full flex-1 pb-8"> {/* ഡ്രോപ്പ്ഡൗൺ കട്ട് ആവാതിരിക്കാൻ ഒരു pb-16 നൽകി */}
        <table className="w-full text-left text-xs min-w-[1050px]">
          <thead className="bg-white text-gray-500 border-b border-gray-100 font-bold">
            <tr>
              <th className="py-4 px-5">Hotel</th>
              <th className="py-4 px-4">City</th>
              <th className="py-4 px-4">Destination</th>
              <th className="py-4 px-4 text-center">Rating</th>
              <th className="py-4 px-4 text-center">Room Types</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-4">Created On</th>
              <th className="py-4 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {hotels.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                
                {/* 1. Hotel Name, Stars & Image */}
                <td className="py-3 px-5">
                  <div className="flex items-center gap-3">
                    <img src={row.img} alt={row.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <p className="font-bold text-gray-800">{row.name}</p>
                      {renderStars(row.stars)}
                    </div>
                  </div>
                </td>
                
                {/* 2. City */}
                <td className="py-3 px-4 font-bold text-gray-700">
                  {row.city}
                </td>

                {/* 3. Destination */}
                <td className="py-3 px-4 font-semibold text-gray-600">
                  {row.dest}
                </td>
                
                {/* 4. Rating (Number) */}
                <td className="py-3 px-4 text-center font-bold text-gray-700">
                  {row.rating}
                </td>
                
                {/* 5. Room Types */}
                <td className="py-3 px-4 text-center font-bold text-gray-700">
                  {row.rooms}
                </td>
                
                {/* 6. Status Badge - Background color added */}
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${
                    row.status === 'Active' 
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-100/50' 
                      : 'bg-rose-50 text-rose-600 border border-rose-100/50'
                  }`}>
                    {row.status}
                  </span>
                </td>
                
                {/* 7. Created On */}
                <td className="py-3 px-4 text-gray-600 font-medium">
                  {row.date}
                </td>
                
                {/* 8. Actions with Dropdown */}
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-1.5">
                    
                    {/* Edit Button (Link to Edit page) */}
                    <Link 
                      href={`/hotels/${row.slug}/edit`}
                      className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 text-blue-600 transition-colors cursor-pointer"
                    >
                      <Edit2 size={13} strokeWidth={2.5} />
                    </Link>
                    
                    {/* View Button */}
                    <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer">
                      <Eye size={14} strokeWidth={2.5} />
                    </button>
                    
                    {/* More Vertical (3 Dot) with Dropdown */}
                    <div className="relative">
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                        className={`w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md transition-colors cursor-pointer ${
                          openDropdown === idx ? 'bg-gray-100 text-gray-800' : 'hover:bg-gray-100 text-gray-600'
                        }`}
                      >
                        <MoreVertical size={14} strokeWidth={2.5} />
                      </button>

                      {/* Dropdown Menu */}
                      {openDropdown === idx && (
                        <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-gray-100 shadow-lg rounded-xl z-50 py-1.5 animate-in fade-in zoom-in-95 duration-100">
                          
                          {/* Inclusions */}
                          <button className="w-full text-left px-3.5 py-2 text-[11px] font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors">
                            <Star size={14} className="text-emerald-500 fill-emerald-500" /> Inclusions
                          </button>
                          
                          {/* Prices */}
                          <Link 
  href={`/hotels/${row.slug}/pricing`}
  className="w-full text-left px-3.5 py-2 text-[11px] font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer"
>
  <DollarSign size={14} className="text-blue-500" strokeWidth={3} /> Prices
</Link>
                          
                          <div className="h-px bg-gray-100 my-1"></div>
                          
                          {/* Delete */}
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
          <p>Showing 1 to 8 of 126 hotels</p>
        </div>
        <div className="w-full sm:w-1/3 flex items-center justify-center gap-1.5">
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&lt;</button>
          <button className="w-7 h-7 rounded-md bg-blue-600 text-white font-bold flex items-center justify-center shadow-sm">1</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">2</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">3</button>
          <span className="px-1 text-gray-400">...</span>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">16</button>
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