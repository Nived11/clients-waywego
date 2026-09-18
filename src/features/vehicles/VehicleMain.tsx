"use client";

import { Car, RotateCw, AlertCircle } from "lucide-react"; 
import VehicleStats from "./components/VehicleStats";
import VehicleFilters from "./components/VehicleFilters";
import VehicleTable from "./components/VehicleTable";
import VehicleSidebar from "./components/VehicleSidebar";
import VehicleActivity from "./components/VehicleActivity";

import { useVehicles } from "./hooks/useVehicles";
import { useVehicleStats } from "./hooks/useVehicleStats"; 
import { useVehicleFilterOptions } from "./hooks/useVehicleFilterOptions"; 

export const VehicleMain = ({ tenantName }: { tenantName: string }) => {
  
  const { 
    vehicles, loading: tableLoading, error: tableError,
    page, limit, totalCount, search, filters,
    handlePageChange, handleSearch, handleFilter, resetFilters,
    handleDeleteVehicle,
    refetch: refetchVehicles 
  } = useVehicles();

  const { statsData, loading: statsLoading, error: statsError, refetchStats } = useVehicleStats(); 
  const { filterOptions, refetchOptions } = useVehicleFilterOptions(); 

  const handleTypeAdded = () => {
    refetchStats();
    refetchOptions();
    refetchVehicles();
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] flex items-center gap-2">
            <Car size={22} strokeWidth={2.5} /> Vehicles 
          </h1>
          <p className="text-gray-500 text-sm mt-1">Manage all vehicles, types, availability and documents.</p>
        </div>
      </div>

      {tableError ? (
        // 🔥 മനോഹരമായ ടേബിൾ എറർ ബോക്സ് & റീട്രൈ ബട്ടൺ
        <div className="flex flex-col items-center justify-center min-h-[400px] w-full bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex flex-col items-center gap-3 text-rose-600 max-w-md text-center px-4">
            <AlertCircle size={36} strokeWidth={1.5} className="text-rose-400 mb-1" />
            <p className="text-[13px] font-bold">Failed to load vehicles data.</p>
            <p className="text-[11px] font-medium text-rose-500 mb-2">({tableError})</p>
            <button
              onClick={() => refetchVehicles()}
              className="flex items-center justify-center gap-1.5 px-5 py-2 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-sm"
            >
              <RotateCw size={14} strokeWidth={2.5} />
              <span>Try Again</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* 2. Stats Row (Full Width) */}
          <div className="w-full">
            <VehicleStats 
              cards={statsData?.cards} 
              loading={statsLoading} 
              error={statsError} 
              onRetry={refetchStats} 
            />
          </div>

          {/* 3. Main Content Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-6">
            
            {/* 🟢 Left Top: Table & Filters */}
            <div className="order-1 xl:col-start-1 xl:row-start-1 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
              <VehicleFilters 
                filterOptions={filterOptions} 
                onSearch={handleSearch}
                onFilterChange={handleFilter}
                currentSearch={search}
                currentFilters={filters}
                onReset={resetFilters}
              />
              <VehicleTable 
                vehicles={vehicles}
                loading={tableLoading}
                page={page}
                limit={limit}
                totalCount={totalCount}
                onPageChange={handlePageChange}
                onDelete={handleDeleteVehicle}
              />
            </div>

            {/* 🟢 Right Top: Sidebar */}
            <div className="order-3 xl:col-start-2 xl:row-start-1 flex flex-col gap-6 h-full">
              <VehicleSidebar 
                statusBreakdown={statsData?.status_breakdown}
                topTypes={statsData?.top_vehicle_types}
                totalVehicles={statsData?.total_vehicles}
                onTypeAdded={handleTypeAdded} 
                error={statsError} 
              />
            </div>

            {/* 🟢 Bottom Full Width: Activity */}
            <div className="order-2 xl:col-span-2 xl:row-start-2 w-full">
              <VehicleActivity 
                activities={statsData?.recent_activities} 
                error={statsError} 
              />
            </div>

          </div>
        </>
      )}

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