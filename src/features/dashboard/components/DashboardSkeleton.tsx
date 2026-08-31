// dashboard/components/DashboardSkeleton.tsx
export default function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6 animate-pulse">
      
      {/* 1. Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="h-3.5 bg-gray-200 rounded-md w-28 mb-2.5"></div>
          <div className="h-7 bg-gray-300 rounded-md w-56"></div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="h-10 bg-gray-200 rounded-lg w-36"></div>
          <div className="h-10 bg-gray-200 rounded-lg w-40"></div>
        </div>
      </div>

      {/* 2. Top Stat Cards Skeleton (5 items) */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white p-4 xl:p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-[14px] bg-gray-100 shrink-0"></div>
              <div className="flex-1 space-y-2.5">
                <div className="h-2.5 bg-gray-200 rounded w-2/3"></div>
                <div className="h-5 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
            <div className="h-2 bg-gray-100 rounded w-3/4"></div>
          </div>
        ))}
      </div>

      {/* 3. Middle Analytics Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Attention Required */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5">
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-6"></div>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-3 items-center border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                <div className="w-10 h-10 rounded-xl bg-gray-100 shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3.5 bg-gray-300 rounded w-1/3"></div>
                  <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enquiry Pipeline */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 flex flex-col">
          <div className="flex justify-between mb-8">
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            <div className="h-7 bg-gray-100 rounded-md w-24"></div>
          </div>
          <div className="flex justify-between gap-2 mb-10 w-full px-2">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="w-full h-3 bg-gray-200 rounded-full"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
          <div className="mt-auto flex justify-between border-t border-gray-50 pt-4">
            <div className="space-y-2"><div className="h-2.5 bg-gray-200 w-16 rounded"></div><div className="h-5 bg-gray-300 w-12 rounded"></div></div>
            <div className="space-y-2 flex flex-col items-end"><div className="h-2.5 bg-gray-200 w-24 rounded"></div><div className="h-5 bg-gray-300 w-16 rounded"></div></div>
          </div>
        </div>

        {/* Quotation Performance */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 flex flex-col">
          <div className="flex justify-between mb-6">
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-7 bg-gray-100 rounded-md w-20"></div>
          </div>
          <div className="flex-1 flex flex-col justify-between mt-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex justify-between border-b border-gray-50 pb-3 mb-2 last:border-0">
                <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                <div className="h-3 bg-gray-300 rounded w-1/6"></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between border-t border-gray-50 pt-4 mt-auto">
            <div className="space-y-2"><div className="h-2.5 bg-gray-200 w-20 rounded"></div><div className="h-4 bg-gray-300 w-12 rounded"></div></div>
            <div className="space-y-2 flex flex-col items-end"><div className="h-2.5 bg-gray-200 w-24 rounded"></div><div className="h-4 bg-gray-300 w-14 rounded"></div></div>
          </div>
        </div>
      </div>

      {/* 4. Tables Skeleton (Row 1) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {[...Array(3)].map((_, tableIdx) => (
          <div key={tableIdx} className="lg:col-span-4 bg-white rounded-2xl p-4 xl:p-5 border border-gray-100 shadow-sm">
            <div className="flex justify-between mb-6">
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-7 bg-gray-100 rounded-md w-16"></div>
            </div>
            <div className="h-3 bg-gray-100 rounded w-full mb-5"></div>
            <div className="space-y-5">
              {[...Array(5)].map((_, rowIdx) => (
                <div key={rowIdx} className="flex justify-between items-center border-b border-gray-50 pb-3 last:border-0">
                  <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                  <div className="h-2.5 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-100 rounded-full w-12"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 5. Bottom Actions & Payments Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 xl:p-5 border border-gray-100 shadow-sm">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-4 gap-y-6 gap-x-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 xl:w-12 xl:h-12 bg-gray-100 rounded-[12px] xl:rounded-[14px]"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4 mt-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Departures */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 xl:p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between mb-6">
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            <div className="h-7 bg-gray-100 rounded-md w-16"></div>
          </div>
          <div className="h-3 bg-gray-100 rounded w-full mb-5"></div>
          <div className="space-y-5">
            {[...Array(5)].map((_, rowIdx) => (
              <div key={rowIdx} className="flex justify-between items-center border-b border-gray-50 pb-3 last:border-0">
                <div className="h-3 bg-gray-300 rounded w-1/5"></div>
                <div className="h-2.5 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-100 rounded-md w-14"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Payments Overview */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 xl:p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between mb-6">
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            <div className="h-7 bg-gray-100 rounded-md w-16"></div>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-2.5 flex flex-col h-20 justify-between">
                <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                <div className="h-1.5 bg-gray-200 rounded w-1/2 mt-2"></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between border-t border-gray-50 pt-4">
            <div className="space-y-2"><div className="h-2.5 bg-gray-200 w-20 rounded"></div><div className="h-5 bg-gray-300 w-16 rounded"></div></div>
            <div className="w-1/2 flex flex-col justify-end space-y-2">
              <div className="flex justify-between"><div className="h-2 bg-gray-200 w-14 rounded"></div><div className="h-2 bg-gray-300 w-8 rounded"></div></div>
              <div className="h-2 bg-gray-100 w-full rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}