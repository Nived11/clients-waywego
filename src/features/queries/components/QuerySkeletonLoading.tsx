import React from "react";

export default function QuerySkeletonLoading() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6 animate-pulse">
      
      {/* 1. Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="h-8 w-40 bg-gray-200 rounded-lg mb-2"></div>
          <div className="h-4 w-72 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-9 w-48 bg-gray-200 rounded-lg"></div>
          <div className="h-9 w-24 bg-gray-200 rounded-lg"></div>
        </div>
      </div>

      {/* 2. Stats Row Skeleton (4 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 flex items-center gap-3 xl:gap-4">
            <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-[12px] bg-gray-200 shrink-0"></div>
            <div className="flex flex-col gap-2 w-full">
              <div className="h-3 w-20 bg-gray-200 rounded-md"></div>
              <div className="h-6 w-16 bg-gray-200 rounded-md"></div>
              <div className="h-2 w-24 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Bottom Row: Filters, Table & Sidebar Skeleton */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Left Side: Table & Filters */}
        <div className="flex-1 flex flex-col min-w-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          
          {/* Filters Area */}
          <div className="p-4 xl:p-5 border-b border-gray-50">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-[300px]">
                <div className="h-9 w-full max-w-[650px] bg-gray-200 rounded-lg"></div>
                <div className="h-9 w-24 bg-gray-200 rounded-lg shrink-0"></div>
              </div>
              <div className="h-9 w-28 bg-gray-200 rounded-lg shrink-0"></div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full mt-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-col gap-1 flex-1 min-w-[120px]">
                  <div className="h-3 w-16 bg-gray-200 rounded-md"></div>
                  <div className="h-9 w-full bg-gray-200 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Table Tabs */}
          <div className="flex items-center gap-6 px-5 border-b border-gray-100 py-6">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-4 w-16 bg-gray-200 rounded-md shrink-0"></div>
            ))}
          </div>

          {/* Table Rows Skeleton */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-4 px-2">
               {[...Array(7)].map((_, i) => (
                 <div key={i} className="h-3 w-20 bg-gray-200 rounded-md"></div>
               ))}
            </div>
            <div className="space-y-4 mt-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center justify-between px-2 gap-4">
                  <div className="h-4 w-4 bg-gray-200 rounded-sm shrink-0"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
                  <div className="h-8 w-24 bg-gray-200 rounded-md"></div>
                  <div className="h-8 w-24 bg-gray-200 rounded-md"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded-md"></div>
                  <div className="h-6 w-20 bg-gray-200 rounded-md"></div>
                  <div className="h-8 w-32 bg-gray-200 rounded-md"></div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Sidebar Skeleton */}
        <div className="w-full xl:w-[320px] 2xl:w-[340px] shrink-0 flex flex-col gap-6">
          
          {/* Insights Box */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="h-4 w-24 bg-gray-200 rounded-md mb-6"></div>
            <div className="space-y-5">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-200 shrink-0"></div>
                    <div className="h-3 w-24 bg-gray-200 rounded-md"></div>
                  </div>
                  <div className="h-4 w-6 bg-gray-200 rounded-md"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Donut Chart Box */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
             <div className="h-4 w-32 bg-gray-200 rounded-md mb-6"></div>
             <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gray-200 shrink-0"></div>
                <div className="space-y-3 flex-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-3 w-full bg-gray-200 rounded-md"></div>
                  ))}
                </div>
             </div>
          </div>

          {/* Quick Actions Box */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
             <div className="h-4 w-28 bg-gray-200 rounded-md mb-6"></div>
             <div className="grid grid-cols-3 gap-3">
               {[...Array(6)].map((_, i) => (
                 <div key={i} className="h-[72px] bg-gray-200 rounded-xl"></div>
               ))}
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}