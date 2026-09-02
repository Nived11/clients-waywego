"use client";

import { MapPin } from "lucide-react";
import DestinationStats from "./components/DestinationStats";
import DestinationFilters from "./components/DestinationFilters";
import DestinationTable from "./components/DestinationTable";
import DestinationSidebar from "./components/DestinationSidebar";
import DestinationActivity from "./components/DestinationActivity";

export const DestinationMain = ({ tenantName }: { tenantName: string }) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] flex items-center gap-2">
            Destinations <MapPin size={22} className="text-blue-500" strokeWidth={2.5} />
          </h1>
          <p className="text-gray-500 text-sm mt-1">Manage all travel destinations, countries and cities.</p>
        </div>
      </div>

      {/* 2. Stats Row - Moved Outside for FULL WIDTH */}
      <div className="w-full">
        <DestinationStats />
      </div>

      {/* 3. Main Content Layout (2 Columns starts from here) */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Left Column: Table & Activity */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          
          {/* Table & Filters Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <DestinationFilters />
            <DestinationTable />
          </div>

          {/* Recent Activity */}
          <DestinationActivity />

        </div>

        {/* Right Column: Sidebar (Starts right next to the Table) */}
        <div className="w-full xl:w-[300px] 2xl:w-[250px] shrink-0 flex flex-col gap-6">
          <DestinationSidebar />
        </div>

      </div>

      {/* 4. Footer */}
      <div className="pt-6 mt-4 border-t border-gray-200">
        <div className="hidden sm:flex justify-between items-center text-xs text-gray-500 font-medium">
          <p>Way We Go CRM <span className="mx-2">•</span> Powered by <span className="text-blue-600 font-bold tracking-wider">KAELIXO</span></p>
          <p className="flex items-center gap-1 cursor-pointer hover:text-gray-700 transition">Last updated: 20 May 2025, 10:30 AM <span className="text-base leading-none">⟳</span></p>
        </div>
        <div className="flex flex-col sm:hidden text-[11px] text-gray-500 font-medium gap-3">
          <div className="flex justify-between items-center w-full">
            <p>Way We Go CRM</p>
            <p className="flex items-center gap-1 cursor-pointer hover:text-gray-700 transition">Last updated: 20 May <span className="text-base leading-none">⟳</span></p>
          </div>
          <div className="text-center w-full">
            <p>Powered by <span className="text-blue-600 font-bold tracking-wider">KAELIXO</span></p>
          </div>
        </div>
      </div>
      
    </div>
  );
};