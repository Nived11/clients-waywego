"use client";

import { Download } from "lucide-react";
import TeamStats from "./components/TeamStats";
import TeamFilters from "./components/TeamFilters";
import TeamTable from "./components/TeamTable";
import TeamSidebar from "./components/TeamSidebar";
import RoleManagement from "./components/RoleManagement";
import PermissionOverview from "./components/PermissionOverview";

export const TeamPermissionsMain = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">Teams & Permissions</h1>
          <p className="text-gray-500 text-[13px] font-medium mt-1">Manage system users, roles and permissions for your team.</p>
        </div>
        
        {/* 🔥 Add New User Button Removed as requested */}
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs font-bold hover:bg-gray-50 shadow-sm transition-colors cursor-pointer">
            <Download size={14} className="text-gray-500" /> Import Users
          </button>
        </div>
      </div>

      {/* 2. Stats Row */}
      <div className="w-full">
        <TeamStats />
      </div>

      {/* 3. Main Content Layout (2 Columns) */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          
          {/* Filters & Main Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <TeamFilters />
            <TeamTable />
          </div>

          {/* Bottom Grid: Role Management & Permission Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <RoleManagement />
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <PermissionOverview />
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN (Sidebar) ================= */}
        <div className="w-full xl:w-[320px] 2xl:w-[300px] shrink-0 flex flex-col gap-6">
          <TeamSidebar />
        </div>

      </div>
      
    </div>
  );
};