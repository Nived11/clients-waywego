export default function PaymentsOverview() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">Payments Overview</h3>
        <button className="text-xs border border-gray-200 px-2 py-1 rounded hover:bg-gray-50">View All</button>
      </div>
      
      <div className="grid grid-cols-4 gap-3 mb-6">
        <div className="border border-gray-100 rounded-xl p-3">
          <p className="text-[10px] text-emerald-500 font-medium mb-1">Collected</p>
          <p className="text-lg font-bold text-gray-800">₹8.40L</p>
        </div>
        <div className="border border-gray-100 rounded-xl p-3">
          <p className="text-[10px] text-blue-500 font-medium mb-1">Pending</p>
          <p className="text-lg font-bold text-gray-800">₹3.10L</p>
        </div>
        <div className="border border-gray-100 rounded-xl p-3">
          <p className="text-[10px] text-orange-500 font-medium mb-1">Due Today</p>
          <p className="text-lg font-bold text-gray-800">₹82K</p>
        </div>
        <div className="border border-gray-100 rounded-xl p-3">
          <p className="text-[10px] text-rose-500 font-medium mb-1">Overdue</p>
          <p className="text-lg font-bold text-gray-800">₹46K</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="text-[10px] text-gray-400">Total Invoice Value</p>
          <p className="text-lg font-bold text-gray-800">₹11.96L</p>
        </div>
        <div className="w-1/2">
          <div className="flex justify-between mb-1">
            <span className="text-[10px] text-gray-400">Collection Rate</span>
            <span className="text-[10px] font-bold text-gray-800">70.2%</span>
          </div>
          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[70.2%] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}