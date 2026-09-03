"use client";

import { Building2 } from "lucide-react";
import HotelStats from "./components/HotelStats";
import HotelFilters from "./components/HotelFilters";
import HotelTable from "./components/HotelTable";
import HotelSidebar from "./components/HotelSidebar";
import HotelActivity from "./components/HotelActivity";

export const HotelMain = ({ tenantName }: { tenantName: string }) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] flex items-center gap-2">
            <Building2 size={22} className=" " strokeWidth={2.5} /> Hotels 
          </h1>
          <p className="text-gray-500 text-sm mt-1">Manage all hotels, room types, amenities and pricing for {tenantName}.</p>
        </div>
      </div>

      {/* 2. Stats Row - FULL WIDTH */}
      <div className="w-full">
        <HotelStats />
      </div>

      {/* 3. Main Content Layout (2 Columns starts from here) */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Left Column: Table & Filters */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <HotelFilters />
            <HotelTable />
          </div>
          <HotelActivity />
        </div>

        {/* Right Column: Sidebar */}
        <div className="w-full xl:w-[320px] 2xl:w-[300px] shrink-0 flex flex-col gap-6">
          <HotelSidebar />
        </div>

      </div>

      {/* 4. Recent Activity - Moved Outside for FULL WIDTH (Under Table & Sidebar) */}
      <div className=" Z">
        
      </div>

      {/* 5. Footer */}
      <div className="pt-6 mt-4 border-t border-gray-200">
        <div className="hidden sm:flex justify-between items-center text-xs text-gray-500 font-medium">
          <p>© 2026 Way We Go CRM. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
      
    </div>
  );
};