
import { PlayCircle } from "lucide-react";

export default function HelpVideos() {
  const videos = [
    { title: "System Overview", time: "5:32", img: "bg-slate-800" },
    { title: "Create a Booking", time: "7:18", img: "bg-slate-900" },
    { title: "Generate Reports", time: "4:45", img: "bg-slate-700" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-[14px] font-bold text-gray-800">Video Tutorials</h3>
          <p className="text-[10px] text-gray-500 font-medium mt-0.5">Learn visually with step-by-step video guides.</p>
        </div>
        <button className="text-[10px] font-bold text-blue-600 hover:underline shrink-0">View all videos</button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {videos.map((vid, idx) => (
          <div key={idx} className="flex flex-col gap-2 group cursor-pointer">
            <div className={`w-full aspect-[4/3] ${vid.img} rounded-lg relative overflow-hidden flex items-center justify-center group-hover:ring-2 ring-blue-500 ring-offset-1 transition-all`}>
              {/* Fake UI Background lines inside the video box */}
              <div className="absolute inset-x-2 top-2 h-2 bg-white/10 rounded-sm"></div>
              <div className="absolute inset-x-2 top-5 bottom-2 bg-white/5 rounded-sm flex items-center justify-center">
                <PlayCircle size={28} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" strokeWidth={1.5} />
              </div>
              <span className="absolute bottom-1.5 right-1.5 bg-black/70 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                {vid.time}
              </span>
            </div>
            <p className="text-[11px] font-bold text-gray-800 leading-tight group-hover:text-blue-600">{vid.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}