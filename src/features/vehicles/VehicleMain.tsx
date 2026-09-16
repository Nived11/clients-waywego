"use client";

import { Car } from "lucide-react";
import VehicleStats from "./components/VehicleStats";
import VehicleFilters from "./components/VehicleFilters";
import VehicleTable from "./components/VehicleTable";
import VehicleSidebar from "./components/VehicleSidebar";
import VehicleActivity from "./components/VehicleActivity"; // 🔥 പുതിയ ആക്റ്റിവിറ്റി കമ്പോണന്റ് ഇമ്പോർട്ട് ചെയ്തു

import { useVehicles } from "./hooks/useVehicles";
import { useVehicleStats } from "./hooks/useVehicleStats"; 
import { useVehicleFilterOptions } from "./hooks/useVehicleFilterOptions"; 

export const VehicleMain = ({ tenantName }: { tenantName: string }) => {
  
  const { 
    vehicles, loading: tableLoading, error: tableError,
    page, limit, totalCount, search, filters,
    handlePageChange, handleSearch, handleFilter, resetFilters,
    handleDeleteVehicle 
  } = useVehicles();

  const { statsData, loading: statsLoading } = useVehicleStats();
  const { filterOptions } = useVehicleFilterOptions(); 

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
        <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-rose-500 font-medium">
          <p>Error: {tableError}</p>
        </div>
      ) : (
        <>
          {/* 2. Stats Row (Full Width) */}
          <div className="w-full">
            <VehicleStats cards={statsData?.cards} loading={statsLoading} />
          </div>

          {/* 3. Main Content Layout (Table & Sidebar on Top, Activity at Bottom Full Width) */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] 2xl:grid-cols-[1fr_260px] gap-6">
            
            {/* 🟢 Left Top: Table & Filters */}
            <div className="order-1 xl:col-start-1 xl:row-start-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
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

            {/* 🟢 Right Top: Sidebar (Status & Quick Actions) */}
            <div className="order-3 xl:col-start-2 xl:row-start-1 flex flex-col gap-6 h-full">
              <VehicleSidebar 
                statusBreakdown={statsData?.status_breakdown}
                topTypes={statsData?.top_vehicle_types}
                totalVehicles={statsData?.total_vehicles}
              />
            </div>

            {/* 🟢 Bottom Full Width: Activity (Row 2) */}
            <div className="order-2 xl:col-span-2 xl:row-start-2 w-full">
              <VehicleActivity activities={statsData?.recent_activities} />
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