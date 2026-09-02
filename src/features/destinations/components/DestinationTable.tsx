import { Edit2, MoreVertical, ChevronDown } from "lucide-react";
import Link from "next/link"; // Link ഇംപോർട്ട് ചെയ്തു

export default function DestinationTable() {
  const destinations = [
    { name: "Kerala", slug: "kerala", country: "India", iso: "in", type: "State", region: "South India", popular: "Backwaters, Beaches, Hill Stations", status: "Active", date: "15 Jan 2025", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=100&h=100&fit=crop" },
    { name: "Himachal Pradesh", slug: "himachal-pradesh", country: "India", iso: "in", type: "State", region: "North India", popular: "Mountains, Adventure, Hill Stations", status: "Active", date: "10 Jan 2025", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=100&h=100&fit=crop" },
    { name: "Rajasthan", slug: "rajasthan", country: "India", iso: "in", type: "State", region: "North West India", popular: "Heritage, Deserts, Forts", status: "Active", date: "05 Jan 2025", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=100&h=100&fit=crop" },
    { name: "Goa", slug: "goa", country: "India", iso: "in", type: "State", region: "West India", popular: "Beaches, Nightlife, Water Sports", status: "Active", date: "02 Jan 2025", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=100&h=100&fit=crop" },
    { name: "Dubai", slug: "dubai", country: "UAE", iso: "ae", type: "City", region: "Middle East", popular: "Shopping, Luxury, Architecture", status: "Active", date: "20 Dec 2024", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=100&h=100&fit=crop" },
    { name: "Bangkok", slug: "bangkok", country: "Thailand", iso: "th", type: "City", region: "Asia", popular: "Temples, Shopping, Nightlife", status: "Active", date: "18 Dec 2024", img: "https://images.unsplash.com/photo-1508009603885-247a5d3f25c7?w=100&h=100&fit=crop" },
    { name: "Switzerland", slug: "switzerland", country: "Switzerland", iso: "ch", type: "Country", region: "Europe", popular: "Mountains, Skiing, Scenery", status: "Active", date: "12 Dec 2024", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=100&h=100&fit=crop" },
    { name: "Singapore", slug: "singapore", country: "Singapore", iso: "sg", type: "City", region: "Asia", popular: "Shopping, Attractions, Family", status: "Active", date: "10 Dec 2024", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=100&h=100&fit=crop" },
  ];

  const getTypeColor = (type: string) => {
    if (type === 'State') return 'text-blue-600 bg-blue-50';
    if (type === 'City') return 'text-emerald-600 bg-emerald-50';
    return 'text-purple-600 bg-purple-50';
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left text-xs min-w-[1050px]">
          <thead className="bg-white text-gray-500 border-b border-gray-100 font-bold">
            <tr>
              <th className="py-4 px-5">Destination</th>
              <th className="py-4 px-4">Country</th>
              <th className="py-4 px-4">Type</th>
              <th className="py-4 px-4">Region</th>
              <th className="py-4 px-4">Popular For</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-4">Created On</th>
              <th className="py-4 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {destinations.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                
                {/* 1. Destination Name & Image */}
                <td className="py-3 px-5">
                  <div className="flex items-center gap-3">
                    <img src={row.img} alt={row.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <p className="font-bold text-gray-800">{row.name}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{row.slug}</p>
                    </div>
                  </div>
                </td>
                
                {/* 2. Country with Real Image Flag */}
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2 font-bold text-gray-700">
                    <img 
                      src={`https://flagcdn.com/w20/${row.iso}.png`} 
                      srcSet={`https://flagcdn.com/w40/${row.iso}.png 2x`}
                      alt={row.country} 
                      className="w-5 shadow-[0_0_2px_rgba(0,0,0,0.2)]"
                    />
                    <span>{row.country}</span>
                  </div>
                </td>
                
                {/* 3. Type */}
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${getTypeColor(row.type)}`}>
                    {row.type}
                  </span>
                </td>
                
                {/* 4. Region */}
                <td className="py-3 px-4 font-semibold text-gray-700">
                  {row.region}
                </td>
                
                {/* 5. Popular For */}
                <td className="py-3 px-4">
                  <div className="text-gray-500 font-medium text-[11px] leading-relaxed max-w-[160px] whitespace-normal">
                    {row.popular}
                  </div>
                </td>
                
                {/* 6. Status Badge */}
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${row.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                    {row.status}
                  </span>
                </td>
                
                {/* 7. Created On */}
                <td className="py-3 px-4 text-gray-600 font-medium">
                  {row.date}
                </td>
                
                {/* 8. Actions */}
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-2">
                    
                    {/* ഇവിടെ ബട്ടണിന് പകരം Link ആക്കി മാറ്റി, ഡൈനാമിക് URL കൊടുത്തു */}
                    <Link 
                      href={`/destinations/${row.slug}/edit`}
                      className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 text-blue-600 transition-colors cursor-pointer"
                    >
                      <Edit2 size={13} strokeWidth={2.5} />
                    </Link>
                    
                    <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer">
                      <MoreVertical size={14} strokeWidth={2.5} />
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="border-t border-gray-100 p-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500 bg-white">
        <div className="w-full sm:w-1/3 text-left">
          <p>Showing 1 to 8 of 48 destinations</p>
        </div>
        <div className="w-full sm:w-1/3 flex items-center justify-center gap-1.5">
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&lt;</button>
          <button className="w-7 h-7 rounded-md bg-blue-600 text-white font-bold flex items-center justify-center shadow-sm">1</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">2</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">3</button>
          <span className="px-1 text-gray-400">...</span>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">6</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&gt;</button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-end">
          <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 cursor-pointer">
            <span className="text-gray-700 font-semibold">10 / page</span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}