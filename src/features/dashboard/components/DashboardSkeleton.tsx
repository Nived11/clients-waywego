// dashboard/components/DashboardSkeleton.tsx
export default function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
          <div className="h-8 bg-gray-200 rounded w-48"></div>
        </div>
        <div className="flex gap-3">
          <div className="h-10 bg-gray-200 rounded w-40"></div>
          <div className="h-10 bg-gray-200 rounded w-32"></div>
        </div>
      </div>

      {/* Top Stat Cards Skeleton (5 items) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm h-32">
            <div className="flex justify-between items-start mb-4">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="h-8 bg-gray-200 rounded w-16 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-24"></div>
          </div>
        ))}
      </div>

      {/* Middle Analytics Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3 h-80 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
          <div className="space-y-4">{[...Array(4)].map((_, i) => <div key={i} className="h-12 bg-gray-100 rounded"></div>)}</div>
        </div>
        <div className="lg:col-span-6 h-80 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
           <div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>
           <div className="h-full w-full bg-gray-50 rounded"></div>
        </div>
        <div className="lg:col-span-3 h-80 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
           <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
           <div className="h-40 w-40 bg-gray-100 rounded-full mx-auto mt-8"></div>
        </div>
      </div>
    </div>
  );
}