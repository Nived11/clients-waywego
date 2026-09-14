import { ArrowLeft, Lightbulb, Check } from "lucide-react";

// 🔥 പ്രീമിയം യൂട്യൂബ് സ്റ്റൈൽ ഷിമ്മർ കോമ്പോണന്റ്
const ShimmerBox = ({ className = "" }: { className?: string }) => (
  <div className={`relative overflow-hidden bg-gray-200/80 rounded-lg ${className}`}>
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
  </div>
);

export default function DestinationFormSkeleton() {
  return (
    <div className="flex flex-col w-full max-w-[1600px] mx-auto pb-20">
      
      {/* 🔥 Smooth Shimmer Keyframe Animation */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Header Section (Static) */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-1.5">
            <span className="text-blue-600">Destinations</span>
            <span>&gt;</span>
            <span className="text-gray-700">Edit Destination</span>
          </div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">Edit Destination</h1>
        </div>
        
        <div className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-400 bg-gray-50 border border-gray-200 rounded-lg cursor-not-allowed w-fit">
          <ArrowLeft size={14} strokeWidth={2.5} /> Back to Destinations
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex-1 w-full flex flex-col gap-6">
          
          {/* 1. Destination Information */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
              <h2 className="text-sm font-bold text-gray-800">Destination Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Destination Name <span className="text-red-500">*</span></label>
                <ShimmerBox className="w-full h-[42px]" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Slug / URL <span className="text-red-500">*</span></label>
                <ShimmerBox className="w-full h-[42px]" />
                <p className="text-[10px] text-gray-400 mt-1">This will be used in the website URL.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
              <div className="md:col-span-3">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Region <span className="text-red-500">*</span></label>
                <ShimmerBox className="w-full h-[42px]" />
              </div>
              <div className="md:col-span-4">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Country <span className="text-red-500">*</span></label>
                <ShimmerBox className="w-full h-[42px]" />
              </div>
              <div className="md:col-span-5">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Type <span className="text-red-500">*</span></label>
                <div className="flex items-center gap-4 h-[42px]">
                  {['state', 'city', 'country', 'other'].map(type => (
                    <div key={type} className="flex items-center gap-1.5">
                      <ShimmerBox className="w-3.5 h-3.5 !rounded-full" />
                      <span className="text-xs text-gray-400 capitalize font-medium">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Short Description <span className="text-red-500">*</span></label>
                <ShimmerBox className="w-full h-[116px]" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Detailed Description <span className="text-red-500">*</span></label>
                <div className="w-full h-[116px] rounded-lg border border-gray-200/60 flex flex-col overflow-hidden bg-white">
                  <div className="h-8 border-b border-gray-100 bg-gray-50 shrink-0"></div>
                  <ShimmerBox className="flex-1 !rounded-none" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Images & Media */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
              <h2 className="text-sm font-bold text-gray-800">Images & Media</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Featured Image <span className="text-red-500">*</span></label>
                <ShimmerBox className="w-full h-[140px] !rounded-xl" />
              </div>
              <div className="col-span-2">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Gallery Images (Max 10)</label>
                <div className="w-full h-[140px] bg-white border border-gray-200/60 rounded-xl p-4 flex gap-3 overflow-hidden">
                  {[...Array(3)].map((_, i) => (
                    <ShimmerBox key={i} className="w-24 h-24 shrink-0" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Additional Information */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm mb-10">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
              <h2 className="text-sm font-bold text-gray-800">Additional Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Popular For (Tags)</label>
                <ShimmerBox className="w-full h-[42px]" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Best Time to Visit</label>
                <div className="flex gap-2 items-center">
                  <ShimmerBox className="flex-1 h-[42px]" />
                  <span className="text-gray-300">-</span>
                  <ShimmerBox className="flex-1 h-[42px]" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Coordinates (Optional)</label>
                <div className="flex gap-2">
                  <ShimmerBox className="flex-1 h-[42px]" />
                  <ShimmerBox className="flex-1 h-[42px]" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Display Order</label>
                <ShimmerBox className="w-full h-[42px]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Meta Title (SEO)</label>
                <ShimmerBox className="w-full h-[42px]" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Meta Description (SEO)</label>
                <ShimmerBox className="w-full h-[42px]" />
              </div>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="w-full xl:w-[320px] 2xl:w-[340px] shrink-0 flex flex-col gap-6 sticky top-6">
          
          {/* Status */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-gray-800 mb-4">Destination Status</h3>
            <label className="block text-[11px] font-bold text-gray-700 mb-2">Status</label>
            <div className="flex gap-3 mb-3">
              <ShimmerBox className="flex-1 h-[42px]" />
              <ShimmerBox className="flex-1 h-[42px]" />
            </div>
            <p className="text-[10px] text-gray-400 font-medium leading-relaxed">Active destinations will be visible in website and packages.</p>
          </div>

          {/* Tips (Static) */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
              <Lightbulb size={16} className="text-blue-600" strokeWidth={2.5} /> Tips
            </h3>
            <ul className="space-y-3.5 opacity-70">
              <li className="flex items-start gap-2.5 text-[11px] text-gray-600 font-medium leading-relaxed">
                <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5"><Check size={10} className="text-blue-600" strokeWidth={3} /></div>
                Use a clear and attractive image that represents the destination.
              </li>
              <li className="flex items-start gap-2.5 text-[11px] text-gray-600 font-medium leading-relaxed">
                <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5"><Check size={10} className="text-blue-600" strokeWidth={3} /></div>
                Provide accurate information to help customers.
              </li>
              <li className="flex items-start gap-2.5 text-[11px] text-gray-600 font-medium leading-relaxed">
                <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5"><Check size={10} className="text-blue-600" strokeWidth={3} /></div>
                Add popular tags to improve search and visibility.
              </li>
            </ul>
          </div>

          {/* Preview */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
              <h3 className="text-sm font-bold text-gray-800">Preview</h3>
            </div>
            <p className="text-[10px] text-gray-500 font-medium mb-4">This is how your destination card will look.</p>
            <ShimmerBox className="w-full h-[180px] !rounded-xl" />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 mt-2">
            <ShimmerBox className="w-20 h-[38px]" />
            <ShimmerBox className="w-[140px] h-[38px] !bg-blue-200/80" />
          </div>

        </div>
      </div>
    </div>
  );
}