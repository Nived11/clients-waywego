export default function AuditSkeletonLoading() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6 animate-pulse">
      
      {/* 1. Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          {/* 🔥 ഡാർക്ക് ആയ നിറങ്ങൾ നൽകി (bg-gray-300, bg-gray-200) */}
          <div className="w-48 h-8 bg-gray-300 rounded-lg mb-2.5"></div>
          <div className="w-80 h-3.5 bg-gray-200 rounded-md"></div>
        </div>
      </div>

      {/* 2. Stats Row Skeleton (6 cards) */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 xl:gap-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3 xl:gap-4">
            {/* Icon Block */}
            <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-[12px] bg-gray-200 shrink-0"></div>
            {/* Text Blocks */}
            <div className="flex flex-col gap-2 w-full">
              <div className="w-16 h-2.5 bg-gray-300 rounded-full"></div>
              <div className="w-10 h-5 bg-gray-300 rounded-md"></div>
              <div className="w-24 h-2 bg-gray-200 rounded-full mt-0.5"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Main Layout (2 Columns) */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex-1 min-w-0 flex flex-col gap-5">
          
          {/* Filters Skeleton */}
          <div className="bg-white p-4 xl:p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-wrap items-end gap-3 w-full">
            <div className="flex flex-col gap-1.5 w-full sm:w-[220px]">
              <div className="w-16 h-2.5 bg-gray-300 rounded-full"></div>
              <div className="w-full h-9 bg-gray-100 border border-gray-200 rounded-lg"></div>
            </div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col gap-1.5 min-w-[120px] flex-1">
                <div className="w-12 h-2.5 bg-gray-300 rounded-full"></div>
                <div className="w-full h-9 bg-gray-100 border border-gray-200 rounded-lg"></div>
              </div>
            ))}
            <div className="w-full sm:w-20 h-9 bg-gray-200 rounded-lg shrink-0 mt-2 sm:mt-0"></div>
          </div>

          {/* Table Skeleton */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col min-h-[400px] overflow-hidden">
             {/* Table Header */}
             <div className="w-full h-14 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-4">
                <div className="w-4 h-4 bg-gray-300 rounded shrink-0"></div>
                <div className="w-24 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-32 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-16 h-3 bg-gray-300 rounded-full"></div>
             </div>
             
             {/* Table Rows */}
             {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-6 py-4 px-4 border-b border-gray-100">
                  <div className="w-24 h-3 bg-gray-200 rounded-full shrink-0"></div>
                  
                  <div className="flex items-center gap-2.5 shrink-0 w-[160px]">
                    <div className="w-7 h-7 rounded-full bg-gray-300 shrink-0"></div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <div className="w-20 h-3 bg-gray-300 rounded-full"></div>
                      <div className="w-12 h-2.5 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="w-16 h-5 bg-gray-200 rounded-md shrink-0"></div>
                  <div className="w-16 h-3 bg-gray-200 rounded-full shrink-0"></div>
                  <div className="w-24 h-3 bg-gray-200 rounded-full shrink-0"></div>
                  <div className="flex-1 max-w-[200px] h-3 bg-gray-200 rounded-full"></div>
                </div>
             ))}
          </div>

        </div>

        {/* ================= RIGHT COLUMN (Sidebar Skeleton) ================= */}
        <div className="w-full xl:w-[320px] 2xl:w-[300px] shrink-0 flex flex-col gap-6">
          
          {/* Overview Chart Skeleton */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="w-24 h-3.5 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full border-[12px] border-gray-100 bg-gray-50 shrink-0"></div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="w-full h-2.5 bg-gray-200 rounded-full"></div>
                <div className="w-4/5 h-2.5 bg-gray-200 rounded-full"></div>
                <div className="w-3/5 h-2.5 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Top Users Skeleton */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm min-h-[180px]">
            <div className="w-28 h-3.5 bg-gray-300 rounded-full mb-6"></div>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex justify-between items-center">
                   <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-gray-300 shrink-0"></div>
                      <div className="w-20 h-3 bg-gray-200 rounded-full"></div>
                   </div>
                   <div className="w-8 h-2.5 bg-gray-200 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Modules Skeleton */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm min-h-[160px]">
            <div className="w-24 h-3.5 bg-gray-300 rounded-full mb-6"></div>
            <div className="space-y-4.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                   <div className="w-12 h-2.5 bg-gray-200 rounded-full shrink-0"></div>
                   <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                     <div className="w-1/2 h-full bg-gray-300 rounded-full"></div>
                   </div>
                   <div className="w-8 h-2.5 bg-gray-200 rounded-full shrink-0"></div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}