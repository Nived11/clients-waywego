import { Plus, GripVertical, MoreVertical } from "lucide-react";

export const DayListSidebar = () => {
  const days = [
    { id: 1, title: "Cochin - Munnar", desc: "130 km / 4 hrs", active: true },
    { id: 2, title: "Munnar Sightseeing", desc: "", active: false },
    { id: 3, title: "Munnar - Alleppey (Houseboat)", desc: "", active: false },
    { id: 4, title: "Alleppey - Cochin Departure", desc: "", active: false },
  ];

  return (
    <div className="bg-transparent flex flex-col gap-3">
      <div className="mb-2">
        <h3 className="font-semibold text-slate-800">Itinerary Days</h3>
        <p className="text-xs text-slate-500">Drag & drop to reorder days</p>
      </div>

      {days.map((day) => (
        <div 
          key={day.id} 
          className={`flex items-start gap-2 p-3 rounded-xl border ${day.active ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 bg-white'} cursor-pointer hover:border-blue-300 transition-all`}
        >
          <GripVertical size={16} className="text-slate-400 mt-1 cursor-grab" />
          <div className="flex-1">
            <h4 className={`text-sm font-medium ${day.active ? 'text-blue-700' : 'text-slate-700'}`}>Day {day.id}</h4>
            <p className="text-xs text-slate-800 mt-0.5">{day.title}</p>
            {day.desc && <p className="text-xs text-slate-500 mt-0.5">{day.desc}</p>}
          </div>
          <MoreVertical size={16} className="text-slate-400 mt-1" />
        </div>
      ))}

      <button className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 border border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl text-sm font-medium transition-colors">
        <Plus size={16} /> Add New Day
      </button>
    </div>
  );
};