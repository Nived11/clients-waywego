import { Trash2, UploadCloud, Plus, Bold, Italic, Underline, Link2, List, GripVertical, Eye } from "lucide-react";

export const DayDetailEditor = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full relative">
      
      {/* Header */}
      <div className="p-4 md:p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between sm:items-center gap-4 shrink-0">
        <div>
          <h2 className="text-lg md:text-base font-semibold text-slate-800">Day Details</h2>
          <p className="text-xs text-slate-500 mt-1">Add title, description, activities, meals and stay details for this day.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none text-blue-600 border border-blue-200 bg-blue-50 px-3 py-2 md:py-1.5 rounded-lg text-xs font-medium flex justify-center items-center gap-1.5 hover:bg-blue-100"><Eye size={14} /> Preview Day</button>
          <button className="flex-1 sm:flex-none text-red-600 border border-red-200 bg-red-50 px-3 py-2 md:py-1.5 rounded-lg text-xs font-medium flex justify-center items-center gap-1.5 hover:bg-red-100"><Trash2 size={14} /> Delete Day</button>
        </div>
      </div>

      {/* Form Fields - Restored internal scrolling pb-32 for bottom bar clearance */}
      <div className="p-4 md:p-5 flex-1 overflow-y-auto space-y-5 md:space-y-6 custom-scrollbar pb-32 lg:pb-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-700 mb-1">Day Title <span className="text-red-500">*</span></label>
            <input type="text" defaultValue="Cochin - Munnar" className="w-full p-2.5 md:p-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-medium text-slate-700 mb-1">Travel / Distance</label>
            <input type="text" defaultValue="130 km" className="w-full p-2.5 md:p-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-medium text-slate-700 mb-1">Travel Time (Approx.)</label>
            <input type="text" defaultValue="4 hrs" className="w-full p-2.5 md:p-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
        </div>

        {/* Rich Text Area */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Description <span className="text-red-500">*</span></label>
          <div className="border border-slate-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <div className="bg-slate-50 border-b border-slate-200 p-2 flex flex-wrap gap-3 text-slate-600">
              <Bold size={16} className="cursor-pointer hover:text-slate-900" />
              <Italic size={16} className="cursor-pointer hover:text-slate-900" />
              <Underline size={16} className="cursor-pointer hover:text-slate-900" />
              <div className="w-px h-4 bg-slate-300 mx-1"></div>
              <List size={16} className="cursor-pointer hover:text-slate-900" />
              <Link2 size={16} className="cursor-pointer hover:text-slate-900" />
            </div>
            <textarea 
              className="w-full p-3 text-sm outline-none resize-none h-24 md:h-32" 
              defaultValue="Arrive at Cochin (Airport/Railway Station). Meet our representative and drive to Munnar.&#10;&#10;Enjoy the scenic drive through lush green tea plantations, waterfalls and misty mountains. Check-in at hotel and relax."
            ></textarea>
            <div className="text-right p-2 text-[10px] text-slate-400">172 / 1000</div>
          </div>
        </div>

        {/* 3 Column Grid for Activities, Meals, Stay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
          
          {/* Activities */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Activities / Sightseeing</h3>
            <div className="space-y-2 mb-3">
              {["Cheeyappara Waterfalls", "Valara Waterfalls", "Tea Gardens View Point"].map((act, i) => (
                <div key={i} className="flex justify-between items-center border border-slate-200 rounded-lg p-2.5 md:p-2 text-xs text-slate-700 bg-slate-50">
                  <span className="flex items-center gap-2"><GripVertical size={12} className="text-slate-400"/> {act}</span>
                  <Trash2 size={14} className="text-red-400 hover:text-red-600 cursor-pointer shrink-0" />
                </div>
              ))}
            </div>
            <button className="text-blue-600 text-xs font-medium flex items-center gap-1 hover:underline"><Plus size={14} /> Add Activity</button>
          </div>

          {/* Meals */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Meals Included</h3>
            <div className="flex md:flex-col gap-4 md:gap-3 text-sm text-slate-700 flex-wrap">
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4" /> Breakfast</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4" /> Lunch</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4" /> Dinner</label>
            </div>
            <p className="text-[10px] text-slate-500 mt-4 leading-relaxed hidden md:block">You can manage meal details in package inclusions.</p>
          </div>

          {/* Stay */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Stay Details</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-[10px] text-slate-500 mb-1">Stay Type</label>
                <select className="w-full p-2.5 md:p-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Hotel</option>
                  <option>Houseboat</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-slate-500 mb-1">Hotel / Property</label>
                <select className="w-full p-2.5 md:p-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Tea County Resort, Munnar</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-slate-500 mb-1">Room Type</label>
                <select className="w-full p-2.5 md:p-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Deluxe Room</option>
                </select>
              </div>
            </div>
          </div>
        </div>

       {/* Images */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex justify-between items-end mb-3">
            <h3 className="text-sm font-semibold text-slate-800">Images <span className="text-xs font-normal text-slate-500">(Optional)</span></h3>
            <span className="text-[10px] text-slate-500 hidden md:block">You can upload up to 6 images per day.</span>
          </div>
          
          {/* Added 'scrollbar-hide' class here and removed 'custom-scrollbar' */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {[
              "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=200",
              "https://images.unsplash.com/photo-1582510003544-4d00b7f7415e?auto=format&fit=crop&q=80&w=200",
              "https://images.unsplash.com/photo-1506461883276-594c8cb25638?auto=format&fit=crop&q=80&w=200"
            ].map((imgUrl, i) => (
              <div 
                key={i} 
                className="min-w-[100px] h-[80px] bg-slate-200 rounded-lg relative overflow-hidden bg-cover bg-center border border-slate-200 shrink-0" 
                style={{ backgroundImage: `url('${imgUrl}')` }}
              >
                 <button className="absolute top-1 right-1 bg-black/60 p-1 rounded-full text-white hover:bg-black/90 transition-colors">
                   <Trash2 size={10} />
                 </button>
              </div>
            ))}
            <div className="min-w-[100px] h-[80px] border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:border-blue-500 hover:text-blue-600 cursor-pointer transition-colors bg-slate-50 shrink-0">
              <UploadCloud size={18} className="mb-1" />
              <span className="text-[10px] font-medium">Upload Image</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};