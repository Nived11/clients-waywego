"use client";

import { Info } from "lucide-react";
import AuditStats from "./components/AuditStats";
import AuditFilters from "./components/AuditFilters";
import AuditTable from "./components/AuditTable";
import AuditSidebar from "./components/AuditSidebar";
import AuditSkeletonLoading from "./components/AuditSkeletonLoading"; // 🔥 സ്കെലിറ്റൺ ഇമ്പോർട്ട് ചെയ്തു

import { useAuditStats } from "./hooks/useAuditStats";
import { useAuditLogs } from "./hooks/useAuditLogs";

export const AuditLogsMain = () => {
  // 🔥 error കൂടി ഹുക്കിൽ നിന്നും എടുക്കുന്നു
  const { data: statsData, loading: statsLoading, error: statsError } = useAuditStats();
  const { 
    logs, loading: logsLoading, 
    page, limit, totalCount, search, filters,
    handlePageChange, handleSearch, handleFilter, resetFilters 
  } = useAuditLogs();

  // 🔥 ഡാറ്റ ലോഡ് ആവുന്ന സമയത്ത് സ്കെലിറ്റൺ കാണിക്കുന്നു
  if (statsLoading) {
    return <AuditSkeletonLoading />;
  }

  // 🔥 API ഫെയിൽ ആയാൽ എറർ മെസ്സേജ് കാണിക്കുന്നു
  if (statsError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-rose-500 font-medium">
        <p>Error: {statsError}</p>
      </div>
    );
  }

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

      {/* 2. Stats Row */}
      <div className="w-full">
        <AuditStats stats={statsData?.kpis} loading={statsLoading} />
      </div>

      {/* 3. Main Layout (2 Columns) */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex-1 min-w-0 flex flex-col gap-5">
          
          <div className="bg-white p-4 md:p-5 rounded-2xl border border-gray-100 shadow-sm">
            <AuditFilters 
              filterOptions={statsData?.filter_options}
              onSearch={handleSearch}
              onFilterChange={handleFilter}
              currentSearch={search}
              currentFilters={filters}
              onReset={resetFilters}
            />
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <AuditTable 
              logs={logs} 
              loading={logsLoading} // 🔥 ടേബിളിനകത്തെ ലോഡിങ് ടേബിൾ തന്നെ മാനേജ് ചെയ്യും
              page={page}
              limit={limit}
              totalCount={totalCount}
              onPageChange={handlePageChange}
            />
          </div>

        </div>

        {/* ================= RIGHT COLUMN (Sidebar) ================= */}
        <div className="w-full xl:w-[320px] 2xl:w-[300px] shrink-0 flex flex-col gap-6">
          <AuditSidebar 
            overview={statsData?.activity_overview?.breakdown} 
            totalLogs={statsData?.activity_overview?.total}
            topUsers={statsData?.top_active_users} 
            topModules={statsData?.top_modules} 
          />
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