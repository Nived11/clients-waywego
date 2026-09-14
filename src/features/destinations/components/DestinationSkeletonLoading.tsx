// 🔥 പ്രീമിയം ഷിമ്മർ എഫക്റ്റിനുള്ള കോമ്പോണന്റ്
const ShimmerBox = ({ className = "" }: { className?: string }) => (
  <div className={`relative overflow-hidden bg-gray-200/80 rounded-lg ${className}`}>
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
  </div>
);

export default function DestinationSkeletonLoading() {
  return (
    <>
      {/* 🔥 Smooth Shimmer Keyframe Animation */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Stats Row Skeleton */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 xl:gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 flex items-center gap-3">
            <ShimmerBox className="w-10 h-10 xl:w-12 xl:h-12 !rounded-xl shrink-0" />
            <div className="flex flex-col gap-2 w-full">
              <ShimmerBox className="w-20 h-2.5 !rounded-full" />
              <ShimmerBox className="w-10 h-5 !rounded-md" />
              <ShimmerBox className="w-16 h-2 !rounded-full mt-0.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Layout Skeleton (CSS Grid) */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] 2xl:grid-cols-[1fr_260px] gap-6">
        
        {/* ================= 1. TABLE SKELETON (Left Top) ================= */}
        <div className="order-1 xl:col-start-1 xl:row-start-1 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col min-h-[400px] overflow-hidden h-full">
          <div className="p-4 xl:p-5 border-b border-gray-50 flex flex-wrap items-end gap-3 w-full">
             <ShimmerBox className="w-full sm:w-[240px] h-9" />
             <ShimmerBox className="flex-1 min-w-[120px] h-9" />
             <ShimmerBox className="flex-1 min-w-[120px] h-9" />
             <ShimmerBox className="flex-1 min-w-[120px] h-9" />
             <ShimmerBox className="w-full sm:w-[80px] h-9" />
          </div>
          <div className="w-full h-14 bg-gray-50 border-b border-gray-100 flex items-center px-5 gap-4">
              <ShimmerBox className="w-32 h-3 !rounded-full" />
              <ShimmerBox className="w-20 h-3 !rounded-full" />
              <ShimmerBox className="w-16 h-3 !rounded-full" />
              <ShimmerBox className="w-24 h-3 !rounded-full" />
          </div>
          {[...Array(6)].map((_, i) => (
             <div key={i} className="flex items-center gap-6 py-4 px-5 border-b border-gray-100/60">
               <div className="flex items-center gap-3 w-[200px]">
                 <ShimmerBox className="w-10 h-10 !rounded-lg shrink-0" />
                 <div className="flex flex-col gap-1.5 w-full">
                   <ShimmerBox className="w-20 h-3 !rounded-full" />
                   <ShimmerBox className="w-12 h-2.5 !rounded-full" />
                 </div>
               </div>
               <ShimmerBox className="w-16 h-3 !rounded-full shrink-0" />
               <ShimmerBox className="w-12 h-5 !rounded-md shrink-0" />
               <ShimmerBox className="w-24 h-3 !rounded-full shrink-0" />
               <ShimmerBox className="w-16 h-3 !rounded-full shrink-0" />
               <ShimmerBox className="w-16 h-5 !rounded-md shrink-0" />
               <ShimmerBox className="w-16 h-6 !rounded-md shrink-0 mx-auto" />
             </div>
          ))}
        </div>

        {/* ================= 2. ACTIVITY SKELETON (Left Bottom) ================= */}
        <div className="order-2 xl:col-start-1 xl:row-start-2 bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
          <ShimmerBox className="w-32 h-3 !rounded-full mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-3">
                <ShimmerBox className="w-8 h-8 !rounded-full shrink-0" />
                <div className="flex flex-col gap-2 w-full mt-1">
                  <ShimmerBox className="w-28 h-2.5 !rounded-full" />
                  <ShimmerBox className="w-full h-2 !rounded-full" />
                  <ShimmerBox className="w-20 h-2 !rounded-full mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 3. SIDEBAR SKELETON (Right Top) ================= */}
        <div className="order-3 xl:col-start-2 xl:row-start-1 flex flex-col gap-6 h-full">
          
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4 shrink-0">
            <ShimmerBox className="w-32 h-3.5 !rounded-full mb-2" />
            <div className="flex items-center gap-5">
              <ShimmerBox className="w-[110px] h-[110px] !rounded-full shrink-0" />
              <div className="flex-1 flex flex-col gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex gap-2 items-center">
                     <ShimmerBox className="w-2.5 h-2.5 !rounded-full shrink-0" />
                     <div className="flex flex-col gap-1.5 w-full">
                       <ShimmerBox className="w-14 h-2 !rounded-full" />
                       <ShimmerBox className="w-10 h-2.5 !rounded-full" />
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm shrink-0">
            <ShimmerBox className="w-24 h-3.5 !rounded-full mb-6" />
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <ShimmerBox key={i} className="w-full h-8 !rounded-lg" />
              ))}
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex-1 flex flex-col min-h-[250px]">
            <ShimmerBox className="w-32 h-3.5 !rounded-full mb-6 shrink-0" />
            <div className="space-y-4 flex-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ShimmerBox className="w-10 h-10 !rounded-lg shrink-0" />
                  <div className="flex flex-col justify-center gap-1.5 w-full">
                    <ShimmerBox className="w-24 h-2.5 !rounded-full" />
                    <ShimmerBox className="w-16 h-2 !rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}