"use client";

import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import FollowUpStats from "./components/FollowUpStats";
import FollowUpFilters from "./components/FollowUpFilters";
import FollowUpTable from "./components/FollowUpTable";
import RecentCompletedTable from "./components/RecentCompletedTable";
import FollowUpSidebar from "./components/FollowUpSidebar";

export const FollowUpsMain = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header & Date Selector */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">Today's Follow-ups</h1>
          <p className="text-gray-500 text-[13px] font-medium mt-1">Track pending callbacks, reminders, and customer follow-up tasks scheduled for today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-[11px] font-bold text-gray-800">20 May 2025, Tuesday</span>
            <CalendarIcon size={14} className="text-gray-500" />
          </div>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-[11px] font-bold text-gray-800">Today</span>
            <ChevronDown size={14} className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* 2. Stats Row */}
      <div className="w-full">
        <FollowUpStats />
      </div>

      {/* 3. Main Layout (2 Columns) */}
      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex-1 w-full min-w-0 flex flex-col gap-6">
          
          {/* Main Follow-ups Section */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <FollowUpFilters />
            <FollowUpTable />
          </div>

          {/* Recent Completed Follow-ups */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <RecentCompletedTable />
          </div>

        </div>

        {/* ================= RIGHT COLUMN (Sidebar) ================= */}
        <div className="w-full xl:w-[320px] 2xl:w-[340px] shrink-0 flex flex-col gap-6 sticky top-6">
          <FollowUpSidebar />
        </div>

      </div>
      
    </div>
  );
};