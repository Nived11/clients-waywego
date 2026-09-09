"use client";

import { Info } from "lucide-react";
import AuditStats from "./components/AuditStats";
import AuditFilters from "./components/AuditFilters";
import AuditTable from "./components/AuditTable";
import AuditSidebar from "./components/AuditSidebar";

export const AuditLogsMain = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#1e3a5f] flex items-center gap-2">
            Audit Logs <Info size={16} className="text-blue-500 cursor-pointer" />
          </h1>
          <p className="text-gray-500 text-[13px] font-medium mt-1">Track all system activities and changes for security and compliance.</p>
        </div>
      </div>

      {/* 2. Stats Row (Moved to top, full width like other pages) */}
      <div className="w-full">
        <AuditStats />
      </div>

      {/* 3. Main Layout (2 Columns) */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex-1 min-w-0 flex flex-col gap-5">
          
          {/* Filters (Above the table) */}
          <div className="bg-white p-4 md:p-5 rounded-2xl border border-gray-100 shadow-sm">
            <AuditFilters />
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <AuditTable />
          </div>

        </div>

        {/* ================= RIGHT COLUMN (Sidebar) ================= */}
        <div className="w-full xl:w-[320px] 2xl:w-[300px] shrink-0 flex flex-col gap-6">
          <AuditSidebar />
        </div>

      </div>

      {/* 4. Footer */}
      <div className="pt-6 mt-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-gray-500 font-medium">
          <p>© 2026 Travel Hope Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-800 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
    </div>
  );
};