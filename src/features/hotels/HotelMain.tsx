"use client";

import { Building2 } from "lucide-react";

export const HotelMain = ({ tenantName }: { tenantName: string }) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] flex items-center gap-2">
            Hotels <Building2 size={22} className="text-blue-500" strokeWidth={2.5} />
          </h1>
          <p className="text-gray-500 text-sm mt-1">Manage all hotels and accommodations for {tenantName}.</p>
        </div>
      </div>

      {/* Main Content Area Placeholder */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 min-h-[400px] flex items-center justify-center">
        <p className="text-gray-400 font-medium">Hotel components (Stats, Table, Sidebar) will go here...</p>
      </div>

    </div>
  );
};