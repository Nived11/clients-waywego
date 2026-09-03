"use client";

import { 
  ArrowLeft, MapPin, Phone, Mail, ExternalLink, Calendar as CalendarIcon, 
  Search, Filter, Edit2, MoreVertical, Copy, Layers, ChevronDown, ChevronRight, BedDouble
} from "lucide-react";
import Link from "next/link";

export default function HotelPricing() {
  const existingPrices = [
    { type: "Deluxe Room", plan: "CP - Breakfast", date: "10 May 2025 - 15 May 2025", nights: "5 Nights", double: "₹ 12,000", extra: "₹ 2,000", childBed: "₹ 1,500", childNoBed: "₹ 1,000", inv: "10", status: "Published" },
    { type: "Deluxe Room", plan: "CP - Breakfast", date: "16 May 2025 - 31 May 2025", nights: "16 Nights", double: "₹ 13,000", extra: "₹ 2,200", childBed: "₹ 1,600", childNoBed: "₹ 1,000", inv: "10", status: "Published" },
    { type: "Deluxe Room", plan: "CP - Breakfast", date: "01 Jun 2025 - 15 Jun 2025", nights: "15 Nights", double: "₹ 14,000", extra: "₹ 2,500", childBed: "₹ 1,800", childNoBed: "₹ 1,200", inv: "10", status: "Pending" },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1600px] mx-auto pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs font-bold text-gray-500 mb-1.5">
            <Link href="/hotels" className="text-blue-600 hover:underline">Hotels</Link>
            <span>&gt;</span>
            <Link href="/hotels" className="text-blue-600 hover:underline">The Leela Palace, New Delhi</Link>
            <span>&gt;</span>
            <span className="text-gray-700">Room Type Pricing</span>
          </div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">Room Type Pricing</h1>
          <p className="text-gray-500 text-xs font-medium mt-1">Manage room type pricing and availability for different date ranges.</p>
        </div>
        
        <Link 
          href="/hotels" 
          className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-colors cursor-pointer w-fit"
        >
          <ArrowLeft size={14} strokeWidth={2.5} /> Back to Hotel
        </Link>
      </div>

      {/* TOP SECTION: Form (Left) & Sidebar (Right) */}
      <div className="flex flex-col xl:flex-row gap-6 items-start mb-6">
        
        {/* LEFT COLUMN: Hotel Info & Pricing Form */}
        <div className="flex-1 w-full flex flex-col gap-6 min-w-0">
          
          {/* Hotel Info Card - Responsive adjusted */}
          <div className="bg-white p-4 md:p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-start md:items-center gap-3 md:gap-4">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=100&fit=crop" alt="The Leela Palace" className="w-16 h-16 rounded-xl object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start md:items-center gap-2 mb-1.5">
                  <h2 className="text-sm md:text-base font-black text-gray-800 leading-tight">The Leela Palace,<br className="md:hidden" /> New Delhi</h2>
                  <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-bold rounded-md shrink-0 mt-0.5 md:mt-0">Active</span>
                </div>
                <div className="flex items-center flex-wrap gap-x-2 md:gap-x-4 gap-y-1.5 text-[10px] md:text-[11px] font-medium text-gray-500">
                  <span className="flex items-center gap-1"><MapPin size={12} /> Delhi, India</span>
                  <span className="text-gray-300">|</span>
                  <span className="flex items-center gap-1"><Phone size={12} /> +91 11 3933 1234</span>
                  <span className="hidden md:inline text-gray-300">|</span>
                  <span className="flex items-center gap-1 w-full md:w-auto mt-0.5 md:mt-0"><Mail size={12} /> reservations@theleela.com</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-auto pt-3 border-t border-gray-50 md:border-0 md:pt-0">
              <button className="w-full md:w-auto flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-[11px] md:text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                Hotel Details <ExternalLink size={12} />
              </button>
            </div>
          </div>

          {/* Pricing Form Section */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            
            {/* Tabs */}
            <div className="flex border-b border-gray-100 px-4 md:px-6">
              <button className="px-3 md:px-4 py-3 md:py-4 text-[11px] md:text-xs font-bold text-blue-600 border-b-2 border-blue-600">Price Manager</button>
              <button className="px-3 md:px-4 py-3 md:py-4 text-[11px] md:text-xs font-bold text-gray-500 hover:text-gray-700">Price Calendar</button>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="text-sm font-bold text-gray-800 mb-4 md:mb-5">Create / Update Price</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 mb-6">
                <div className="md:col-span-3">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Room Type <span className="text-red-500">*</span></label>
                  <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white">
                    <option>Deluxe Room</option>
                  </select>
                </div>
                <div className="md:col-span-3">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Meal Plan <span className="text-red-500">*</span></label>
                  <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white">
                    <option>CP - Breakfast</option>
                  </select>
                </div>
                <div className="md:col-span-4">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Date Range <span className="text-red-500">*</span></label>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1 min-w-0">
                      <input type="text" value="20 May 2025" readOnly className="w-full text-[11px] md:text-xs font-medium text-gray-800 border border-gray-200 rounded-lg pl-2 md:pl-3 pr-6 py-2.5 outline-none bg-white truncate" />
                      <CalendarIcon size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                    <span className="text-gray-400">-</span>
                    <div className="relative flex-1 min-w-0">
                      <input type="text" value="25 May 2025" readOnly className="w-full text-[11px] md:text-xs font-medium text-gray-800 border border-gray-200 rounded-lg pl-2 md:pl-3 pr-6 py-2.5 outline-none bg-white truncate" />
                      <CalendarIcon size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Night(s)</label>
                  <div className="w-full text-xs font-bold text-gray-800 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5">
                    5 Nights
                  </div>
                </div>
              </div>

              <h3 className="text-xs font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Base Price (per night)</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-5">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Double Occupancy (1-2 Pax) <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">₹</span>
                    <input type="text" defaultValue="12,000" className="w-full text-xs font-bold text-gray-800 border border-gray-200 rounded-lg pl-7 pr-3 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Extra Bed (per person)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">₹</span>
                    <input type="text" defaultValue="2,000" className="w-full text-xs font-bold text-gray-800 border border-gray-200 rounded-lg pl-7 pr-3 py-2.5 outline-none" />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5 leading-tight">Child With Bed <br className="md:hidden"/><span className="font-medium text-[9px]">(6-12 yrs)</span></label>
                  <div className="relative mt-0.5 md:mt-0">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">₹</span>
                    <input type="text" defaultValue="1,500" className="w-full text-xs font-bold text-gray-800 border border-gray-200 rounded-lg pl-7 pr-3 py-2.5 outline-none" />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5 leading-tight">Child Without Bed <br className="md:hidden"/><span className="font-medium text-[9px]">(0-12 yrs)</span></label>
                  <div className="relative mt-0.5 md:mt-0">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">₹</span>
                    <input type="text" defaultValue="1,000" className="w-full text-xs font-bold text-gray-800 border border-gray-200 rounded-lg pl-7 pr-3 py-2.5 outline-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-6 md:mb-8">
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Infant (0-5 yrs)</label>
                  <select className="w-full text-[11px] md:text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-2 md:px-3 py-2.5 outline-none bg-white">
                    <option>Complimentary</option>
                  </select>
                </div>
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Max Occupancy</label>
                  <select className="w-full text-[11px] md:text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-2 md:px-3 py-2.5 outline-none bg-white">
                    <option>3 Adults + 1 Child</option>
                  </select>
                </div>
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Room Inventory</label>
                  <input type="number" defaultValue="10" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none" />
                  <p className="text-[9px] text-gray-400 font-medium mt-1 md:hidden leading-tight">Rooms available</p>
                  <p className="text-[9px] text-gray-400 font-medium mt-1 hidden md:block leading-tight">Total rooms available for this rate</p>
                </div>
                <div className="col-span-1 md:col-span-1 flex flex-col justify-center">
                  <label className="flex items-center gap-2 cursor-pointer mt-1 md:mt-3">
                    <div className="relative">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all"></div>
                    </div>
                    <span className="text-[11px] font-bold text-gray-700">Day Use Rate</span>
                  </label>
                </div>
              </div>

              {/* Action Buttons Section - Fixed for perfect responsive wrap */}
              <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-5 gap-4">
                <button className="text-[11px] md:text-xs font-bold text-blue-600 hover:text-blue-800 text-left whitespace-nowrap">
                  + Add Pricing Note (Optional)
                </button>
                <div className="flex items-center gap-2 md:gap-3 ml-auto">
                  <button className="px-4 md:px-5 py-2 border border-gray-200 rounded-lg text-[11px] md:text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors">Reset</button>
                  <button className="px-4 md:px-5 py-2 bg-blue-600 rounded-lg text-[11px] md:text-xs font-bold text-white hover:bg-blue-700 shadow-sm transition-colors">Save Price</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar (Calendar & Quick Actions) */}
        <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-6">
          
          {/* Price Calendar Mockup */}
          <div className="bg-white p-4 md:p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xs font-bold text-gray-800 mb-4">Price Calendar</h3>
            <div className="flex items-center justify-between mb-4 px-2">
              <button className="text-gray-400 hover:text-gray-700">&lt;</button>
              <span className="text-[11px] font-bold text-gray-800">May 2025</span>
              <button className="text-gray-400 hover:text-gray-700">&gt;</button>
            </div>
            
            <div className="grid grid-cols-7 gap-y-3 text-center text-[10px] mb-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                <div key={d} className="font-bold text-gray-500">{d}</div>
              ))}
              
              {/* Mock Calendar Dates */}
              <div className="text-gray-300">28</div><div className="text-gray-300">29</div><div className="text-gray-300">30</div>
              {[...Array(31)].map((_, i) => {
                const date = i + 1;
                let dotClass = "bg-gray-200"; // No price
                if (date >= 10 && date <= 15) dotClass = "bg-emerald-500"; // Published
                if (date >= 16 && date <= 31) dotClass = "bg-emerald-500"; // Published
                if (date >= 1 && date <= 15 && date > 31) dotClass = "bg-amber-400"; // Pending (Mock logic)
                if (date === 20) return (
                  <div key={date} className="relative flex flex-col items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">{date}</div>
                    <div className={`w-1 h-1 rounded-full mt-1 ${dotClass}`}></div>
                  </div>
                );
                return (
                  <div key={date} className="flex flex-col items-center justify-center text-gray-700 font-semibold">
                    <span>{date}</span>
                    <div className={`w-1 h-1 rounded-full mt-1 ${dotClass}`}></div>
                  </div>
                );
              })}
              <div className="text-gray-300">1</div>
            </div>

            <div className="flex items-center justify-between text-[9px] font-bold text-gray-500 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Published</div>
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> Pending</div>
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div> No Price</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-4 md:p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xs font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 rounded-xl transition-colors group text-left">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                    <Layers size={14} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-800 group-hover:text-blue-700 transition-colors">Bulk Update Prices</p>
                    <p className="text-[9px] text-gray-500 font-medium mt-0.5">Update prices for multiple room types</p>
                  </div>
                </div>
                <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-500" />
              </button>
              
              <button className="w-full flex items-center justify-between p-3 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 rounded-xl transition-colors group text-left">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                    <Copy size={14} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-800 group-hover:text-blue-700 transition-colors">Copy Price</p>
                    <p className="text-[9px] text-gray-500 font-medium mt-0.5">Copy prices from another date range</p>
                  </div>
                </div>
                <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-500" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION: Existing Price List Table */}
      <div className="w-full">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          
          {/* Table Header (Title, Search, Filter) */}
          <div className="p-4 md:p-5 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-sm font-bold text-gray-800 text-center md:text-left">Existing Price List</h3>
            <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search by room type..." className="w-full pl-8 md:pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-[11px] md:text-xs font-medium outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              <button className="flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-[11px] md:text-xs font-bold text-gray-700 hover:bg-gray-50 shrink-0">
                <Filter size={14} /> Filters
              </button>
            </div>
          </div>

          {/* Table Area */}
          <div className="overflow-x-auto w-full pb-16 md:pb-0"> {/* Mobile dropdown fix margin */}
            <table className="w-full text-left text-[11px] min-w-[1000px]">
              <thead className="bg-gray-50/50 text-gray-500 font-bold border-b border-gray-100">
                <tr>
                  <th className="py-3 px-4">Room Type</th>
                  <th className="py-3 px-4">Meal Plan</th>
                  <th className="py-3 px-4">Date Range</th>
                  <th className="py-3 px-4 text-right">Double Occupancy</th>
                  <th className="py-3 px-4 text-right">Extra Bed</th>
                  <th className="py-3 px-4 text-right">Child With Bed</th>
                  <th className="py-3 px-4 text-right">Child Without Bed</th>
                  <th className="py-3 px-4 text-center">Inventory</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {existingPrices.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3 px-4 font-bold text-gray-800 flex items-center gap-2">
                      <BedDouble size={14} className="text-gray-400 shrink-0" /> <span className="whitespace-nowrap">{row.type}</span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-700 whitespace-nowrap">{row.plan}</td>
                    <td className="py-3 px-4">
                      <p className="font-semibold text-gray-700 whitespace-nowrap">{row.date}</p>
                      <p className="text-[9px] text-gray-500 mt-0.5">{row.nights}</p>
                    </td>
                    <td className="py-3 px-4 font-bold text-gray-800 text-right">{row.double}</td>
                    <td className="py-3 px-4 font-semibold text-gray-600 text-right">{row.extra}</td>
                    <td className="py-3 px-4 font-semibold text-gray-600 text-right">{row.childBed}</td>
                    <td className="py-3 px-4 font-semibold text-gray-600 text-right">{row.childNoBed}</td>
                    <td className="py-3 px-4 font-bold text-gray-700 text-center">{row.inv}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${row.status === 'Published' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-1.5">
                        <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-100 text-blue-600 transition-colors">
                          <Edit2 size={12} strokeWidth={2.5} />
                        </button>
                        <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-100 text-gray-500 transition-colors">
                          <MoreVertical size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Section - Responsive Layout */}
          <div className="p-4 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-medium text-gray-500">
            <p className="text-left w-full md:w-auto">Showing 1 to 3 of 24 entries</p>
            <div className="flex items-center justify-between md:justify-center w-full md:w-auto gap-2">
              <div className="flex items-center gap-1">
                <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&lt;</button>
                <button className="w-6 h-6 rounded bg-blue-600 text-white font-bold flex items-center justify-center">1</button>
                <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">2</button>
                <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">3</button>
                <span className="px-0.5 md:px-1">...</span>
                <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">8</button>
                <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&gt;</button>
              </div>
              <div className="flex items-center justify-end gap-1 border border-gray-200 rounded px-2 py-1 shrink-0">
                <span>10 / page</span> <ChevronDown size={12} />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}