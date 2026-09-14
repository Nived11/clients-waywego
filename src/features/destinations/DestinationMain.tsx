"use client";

import { MapPin } from "lucide-react";
import DestinationStats from "./components/DestinationStats";
import DestinationFilters from "./components/DestinationFilters";
import DestinationTable from "./components/DestinationTable";
import DestinationSidebar from "./components/DestinationSidebar";
import DestinationActivity from "./components/DestinationActivity";
import DestinationSkeletonLoading from "./components/DestinationSkeletonLoading"; 

import { useDestinations } from "./hooks/useDestinations";
import { useDestinationStats } from "./hooks/useDestinationStats"; 

export const DestinationMain = ({ tenantName }: { tenantName: string }) => {
  
  const { 
    destinations, loading: tableLoading, error: tableError,
    page, limit, totalCount, search, filters,
    handlePageChange, handleSearch, handleFilter, resetFilters,
    handleDeleteDestination 
  } = useDestinations();

  const { statsData, loading: statsLoading, error: statsError } = useDestinationStats();

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

      {(statsError || tableError) ? (
        <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-rose-500 font-medium">
          <p>Error: {statsError || tableError}</p>
        </div>
      ) : statsLoading ? (
        <DestinationSkeletonLoading />
      ) : (
        <>
          {/* 2. Stats Row */}
          <div className="w-full">
            <DestinationStats cards={statsData?.cards} loading={statsLoading} />
          </div>

          {/* 3. Main Content Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] 2xl:grid-cols-[1fr_260px] gap-6">
            
            {/* 🟢 Left Top: Table & Filters (Row 1, Col 1) */}
            <div className="order-1 xl:col-start-1 xl:row-start-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
              <DestinationFilters 
                filterOptions={statsData?.filter_options}
                onSearch={handleSearch}
                onFilterChange={handleFilter}
                currentSearch={search}
                currentFilters={filters}
                onReset={resetFilters}
              />
              <DestinationTable 
                destinations={destinations}
                loading={tableLoading}
                page={page}
                limit={limit}
                totalCount={totalCount}
                onPageChange={handlePageChange}
                onDelete={handleDeleteDestination} 
              />
            </div>

            {/* 🟢 Right Top: Sidebar (Row 1, Col 2) */}
            <div className="order-3 xl:col-start-2 xl:row-start-1 flex flex-col gap-6 h-full">
              <DestinationSidebar 
                breakdown={statsData?.regions_breakdown} 
                total={statsData?.total_destinations}
                popular={statsData?.popular_destinations}
              />
            </div>

            {/* 🟢 Bottom Full Width: Activity (Row 2) */}
            <div className="order-2 xl:col-span-2 xl:row-start-2 w-full">
              <DestinationActivity activities={statsData?.recent_activities} />
            </div>

          </div>

          {/* 4. Footer */}
          <div className="pt-6 mt-4 border-t border-gray-200">
            <div className="hidden sm:flex justify-between items-center text-xs text-gray-500 font-medium">
              <p>Way We Go CRM <span className="mx-2">•</span> Powered by <span className="text-blue-600 font-bold tracking-wider">KAELIXO</span></p>
              <p className="flex items-center gap-1 cursor-pointer hover:text-gray-700 transition">Last updated: Just now <span className="text-base leading-none">⟳</span></p>
            </div>
          </div>
        </>
      )}
      
    </div>
  );
};