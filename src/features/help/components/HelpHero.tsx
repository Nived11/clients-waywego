import { Search, Monitor, Headphones, MessageCircleQuestion, HelpCircle } from "lucide-react";

export default function HelpHero() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
      
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] pointer-events-none hidden md:block"></div>

      {/* Left: Content & Search */}
      <div className="flex-1 w-full relative z-10">
        <h2 className="text-xl font-black text-gray-800 mb-2">How can we help you today?</h2>
        <p className="text-xs text-gray-500 font-medium mb-6">Search our help center for guides, FAQs and troubleshooting.</p>
        
        <div className="flex items-center gap-2 max-w-xl">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search help articles..." 
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors whitespace-nowrap">
            Search
          </button>
        </div>
      </div>

      {/* Right: Abstract Illustration using Lucide Icons */}
      <div className="hidden md:flex relative z-10 w-48 h-32 items-center justify-center shrink-0">
        <Monitor size={80} className="text-slate-700 absolute bottom-0" strokeWidth={1} />
        <div className="absolute bottom-6 w-14 h-10 bg-blue-100 flex items-center justify-center rounded">
           <HelpCircle size={20} className="text-blue-500" />
        </div>
        <Headphones size={40} className="text-slate-600 absolute top-0 left-0 -rotate-12" strokeWidth={1.5} />
        <MessageCircleQuestion size={32} className="text-emerald-400 absolute top-4 right-0 rotate-12" strokeWidth={1.5} />
      </div>

    </div>
  );
}