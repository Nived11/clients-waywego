"use client";

import { Briefcase } from "lucide-react";
import SupplierStats from "./components/SupplierStats";
import SupplierFilters from "./components/SupplierFilters";
import SupplierTable from "./components/SupplierTable";
import SupplierSidebar from "./components/SupplierSidebar";

export const SupplierMain = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">Suppliers</h1>
          <p className="text-gray-500 text-sm mt-1 font-medium">Manage all travel suppliers and business partners.</p>
        </div>
      </div>

      {/* 2. Stats Row - FULL WIDTH */}
      <div className="w-full">
        <SupplierStats />
      </div>

      {/* 3. Main Content Layout (2 Columns) */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Left Column: Table & Filters */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <SupplierFilters />
            <SupplierTable />
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="w-full xl:w-[300px] 2xl:w-[300px] shrink-0 flex flex-col gap-6">
          <SupplierSidebar />
        </div>

      </div>

    </div>
  );
};