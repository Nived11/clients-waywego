"use client";

import { Ship } from "lucide-react";
import HouseboatStats from "./components/HouseboatStats";
import HouseboatFilters from "./components/HouseboatFilters";
import HouseboatTable from "./components/HouseboatTable";
import HouseboatSidebar from "./components/HouseboatSidebar";
import HouseboatActivity from "./components/HouseboatActivity";

export const HouseboatMain = ({ tenantName }: { tenantName: string }) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] flex items-center gap-2">
            <Ship size={22} strokeWidth={2.5} /> Houseboats 
          </h1>
          <p className="text-gray-500 text-sm mt-1">Manage all houseboats, categories, amenities and pricing.</p>
        </div>
      </div>

      {/* 2. Stats Row */}
      <div className="w-full">
        <HouseboatStats />
      </div>

      {/* 3. Main Content Layout (2 Columns) */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Left Column: Table & Activity */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <HouseboatFilters />
            <HouseboatTable />
          </div>
          <HouseboatActivity />
        </div>

        {/* Right Column: Sidebar */}
        <div className="w-full xl:w-[320px] 2xl:w-[300px] shrink-0 flex flex-col gap-6">
          <HouseboatSidebar />
        </div>

      </div>

      {/* 4. Footer */}
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