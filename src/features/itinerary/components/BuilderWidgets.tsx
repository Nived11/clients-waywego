import { MapPin, Clock, Home, Plus, Copy, Trash2, Eye, Download, Lightbulb, Check } from "lucide-react";

export const BuilderWidgets = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Preview Card */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-100">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-slate-800 text-sm">Itinerary Preview</h3>
            <span className="text-xs text-slate-500">Day 1 of 4</span>
          </div>
          <div 
            className="w-full h-32 bg-slate-200 rounded-lg mb-3 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600')" }}
          ></div>
          <h4 className="font-semibold text-slate-800">Cochin - Munnar</h4>
          <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
            <span className="flex items-center gap-1"><MapPin size={12} /> 130 km</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 4 hrs</span>
            <span className="flex items-center gap-1"><Home size={12} /> Munnar</span>
          </div>
          <p className="text-xs text-slate-600 mt-3 line-clamp-2">Arrive at Cochin. Drive to Munnar. Enjoy the beauty and check-in at hotel.</p>
          <a href="#" className="text-blue-600 text-xs font-medium mt-3 inline-flex items-center hover:underline">View full itinerary &rarr;</a>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <h3 className="font-semibold text-slate-800 text-sm mb-3">Quick Actions</h3>
        <ul className="flex flex-col gap-1 text-sm text-slate-600">
          <li className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><span className="flex items-center gap-2"><Plus size={16} className="text-blue-500"/> Add New Day</span> &rsaquo;</li>
          <li className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><span className="flex items-center gap-2"><Copy size={16} className="text-slate-400"/> Copy Day</span> &rsaquo;</li>
          <li className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer text-red-600"><span className="flex items-center gap-2"><Trash2 size={16} /> Delete Itinerary</span> &rsaquo;</li>
          <li className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><span className="flex items-center gap-2"><Eye size={16} className="text-blue-500"/> Preview Full Itinerary</span> &rsaquo;</li>
          <li className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><span className="flex items-center gap-2"><Download size={16} className="text-slate-400"/> Export Itinerary (PDF)</span> &rsaquo;</li>
        </ul>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 rounded-xl border border-blue-100 p-4">
        <h3 className="font-semibold text-blue-800 text-sm mb-3 flex items-center gap-2">
          <Lightbulb size={16} /> Tips
        </h3>
        <ul className="flex flex-col gap-2 text-xs text-blue-700">
          <li className="flex items-start gap-2">
            <Check size={14} className="mt-0.5 shrink-0" /> Keep descriptions short and informative.
          </li>
          <li className="flex items-start gap-2">
            <Check size={14} className="mt-0.5 shrink-0" /> Add popular sightseeing and activities.
          </li>
          <li className="flex items-start gap-2">
            <Check size={14} className="mt-0.5 shrink-0" /> Include travel time and distance for clarity.
          </li>
          <li className="flex items-start gap-2">
            <Check size={14} className="mt-0.5 shrink-0" /> High quality images improve customer trust.
          </li>
        </ul>
      </div>
    </div>
  );
};