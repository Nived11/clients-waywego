import { Edit2, MoreVertical, Image as ImageIcon, Trash2, FileText, DollarSign } from "lucide-react";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination"; 
import { ConfirmModal } from "@/components/ui/ConfirmModal"; 
import { useState, useRef, useEffect } from "react";

interface VehicleTableProps {
  vehicles: any[];
  loading: boolean;
  page: number;
  limit: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  onDelete: (id: string | number) => Promise<void>;
}

// 🔥 പ്രീമിയം ഷിമ്മർ എഫക്റ്റിനുള്ള കോമ്പോണന്റ് (Destinations-ലേത് പോലെ തന്നെ)
const ShimmerBox = ({ className = "" }: { className?: string }) => (
  <div className={`relative overflow-hidden bg-gray-200/80 rounded-lg ${className}`}>
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
  </div>
);

export default function VehicleTable({ vehicles, loading, page, limit, totalCount, onPageChange, onDelete }: VehicleTableProps) {

  const [activeDropdown, setActiveDropdown] = useState<string | number | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [deleting, setDeleting] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // പുറത്ത് ക്ലിക്ക് ചെയ്താൽ ഡ്രോപ്പ്ഡൗൺ ക്ലോസ് ആകാൻ
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getStatusStyle = (status: string) => {
    const s = status?.toLowerCase() || '';
    if (s === 'active') return 'bg-emerald-50 text-emerald-600';
    if (s === 'maintenance') return 'bg-amber-50 text-amber-600';
    return 'bg-rose-50 text-rose-500';
  };

  const handleConfirmDelete = async () => {
    if (!selectedVehicle) return;
    setDeleting(true);
    try {
      await onDelete(selectedVehicle.id);
      setDeleteModalOpen(false);
      setSelectedVehicle(null);
    } catch (err) {
      // Error handled by toast in hook
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden relative">
      
      {/* 🔥 Smooth Shimmer Keyframe Animation */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      <div className="overflow-x-auto w-full flex-1 min-h-[300px]">
        <table className="w-full text-left text-xs min-w-[1100px]">
          <thead className="bg-gray-50/80 text-gray-500 border-b border-gray-100 font-bold">
            <tr>
              <th className="py-4 px-5">Vehicle</th>
              <th className="py-4 px-4">Registration No.</th>
              <th className="py-4 px-4">Type</th>
              <th className="py-4 px-4 text-center">Seating Capacity</th>
              <th className="py-4 px-4">Fuel Type</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-4">Location</th>
              <th className="py-4 px-4 text-center">Actions</th>
            </tr>
          </thead>
          
          {loading ? (
            <tbody className="divide-y divide-gray-50">
              {[...Array(6)].map((_, i) => (
                <tr key={i} className="bg-white">
                  {/* Vehicle Name & Image Skeleton */}
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-3">
                      <ShimmerBox className="w-10 h-10 !rounded-lg shrink-0" />
                      <div className="flex flex-col gap-1.5 w-full">
                        <ShimmerBox className="w-28 h-3 !rounded-full" />
                        <ShimmerBox className="w-16 h-2 !rounded-full" />
                      </div>
                    </div>
                  </td>
                  {/* Registration No Skeleton */}
                  <td className="py-3 px-4"><ShimmerBox className="w-24 h-3 !rounded-full" /></td>
                  {/* Type Skeleton */}
                  <td className="py-3 px-4"><ShimmerBox className="w-16 h-3 !rounded-full" /></td>
                  {/* Seating Capacity Skeleton */}
                  <td className="py-3 px-4"><ShimmerBox className="w-14 h-4 !rounded-md mx-auto" /></td>
                  {/* Fuel Type Skeleton */}
                  <td className="py-3 px-4"><ShimmerBox className="w-16 h-3 !rounded-full" /></td>
                  {/* Status Skeleton */}
                  <td className="py-3 px-4"><ShimmerBox className="w-16 h-5 !rounded-md" /></td>
                  {/* Location Skeleton */}
                  <td className="py-3 px-4"><ShimmerBox className="w-20 h-3 !rounded-full" /></td>
                  {/* Actions Skeleton */}
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <ShimmerBox className="w-7 h-7 !rounded-md" />
                      <ShimmerBox className="w-7 h-7 !rounded-md" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : vehicles.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={8} className="py-20 text-center text-gray-500 font-medium text-sm">
                  No vehicles found for your search/filters.
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="divide-y divide-gray-50">
              {vehicles.map((row) => {
                const imageUrl = row.primary_image_url || row.primary_image;
                const statusText = row.status_display || row.status || 'Active';
                const regNo = row.registration_number || row.code || "-";

                return (
                  <tr key={row.id} className="hover:bg-gray-50/80 transition-colors">

                    {/* Vehicle Name & Image */}
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-3">
                        {imageUrl ? (
                          <img src={imageUrl} alt={row.name} className="w-10 h-10 rounded-lg object-cover border border-gray-100 shrink-0" />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                            <ImageIcon size={16} className="text-gray-400" />
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-gray-800">{row.name}</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">{row.code}</p>
                        </div>
                      </div>
                    </td>

                    {/* Registration No */}
                    <td className="py-3 px-4 font-bold text-gray-800 whitespace-nowrap">
                      {regNo}
                    </td>

                    {/* Type / Category */}
                    <td className="py-3 px-4 font-semibold text-gray-700 whitespace-nowrap">
                      {row.category_name || "-"}
                    </td>

                    {/* Seating Capacity */}
                    <td className="py-3 px-4 text-center font-bold text-gray-700 whitespace-nowrap">
                      {row.seats_display || `${row.seats || 0} Seats`}
                    </td>

                    {/* Fuel Type */}
                    <td className="py-3 px-4 font-semibold text-gray-600 whitespace-nowrap">
                      {row.fuel_type_display || "-"}
                    </td>

                    {/* Status */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${getStatusStyle(row.status)}`}>
                        {statusText}
                      </span>
                    </td>

                    {/* Location / Destination */}
                    <td className="py-3 px-4 font-semibold text-gray-700 whitespace-nowrap">
                      {row.destination_name || "-"}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 relative">
                      <div className="flex items-center justify-center gap-2">
                        <Link 
                          href={`/vehicles/${row.id}/edit`}
                          className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 text-blue-600 transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Edit2 size={13} strokeWidth={2.5} />
                        </Link>

                        {/* 3 Dot Button & Dropdown */}
                        <div className="relative" ref={activeDropdown === row.id ? dropdownRef : null}>
                          <button 
                            onClick={() => setActiveDropdown(activeDropdown === row.id ? null : row.id)}
                            className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
                          >
                            <MoreVertical size={14} strokeWidth={2.5} />
                          </button>

                          {activeDropdown === row.id && (
                            <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-gray-100 rounded-xl shadow-lg z-30 py-1">
                              <Link 
                                href={`/vehicles/${row.id}/pricing`} 
                                className="w-full text-left px-3.5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer"
                              >
                                <DollarSign size={13} className="text-blue-500" strokeWidth={2.5} /> Prices
                              </Link>

                              <button 
                                onClick={() => setActiveDropdown(null)}
                                className="w-full text-left px-3.5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer"
                              >
                                <FileText size={13} className="text-purple-500" /> Documents
                              </button>

                              <div className="h-px bg-gray-100 my-1"></div>

                              <button 
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setSelectedVehicle(row);
                                  setDeleteModalOpen(true);
                                }}
                                className="w-full flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                              >
                                <Trash2 size={13} /> Delete
                              </button>
                            </div>
                          )}
                        </div>

                      </div>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>

      {/* Backend Pagination */}
      <Pagination 
        page={page} 
        limit={limit} 
        totalCount={totalCount} 
        onPageChange={onPageChange} 
      />

      {/* Confirm Modal */}
      <ConfirmModal 
        isOpen={deleteModalOpen}
        onClose={() => {
          if (!deleting) {
            setDeleteModalOpen(false);
            setSelectedVehicle(null);
          }
        }}
        onConfirm={handleConfirmDelete}
        title="Delete Vehicle"
        message={`Are you sure you want to delete "${selectedVehicle?.name}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        isDanger={true}
        isLoading={deleting}
      />

    </div>
  );
}