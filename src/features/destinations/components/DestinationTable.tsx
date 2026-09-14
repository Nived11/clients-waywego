import { Edit2, MoreVertical, Image as ImageIcon, Trash2 } from "lucide-react";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination"; 
import { ConfirmModal } from "@/components/ui/ConfirmModal"; // 🔥 നിലവിലുള്ള മോഡൽ ഇമ്പോർട്ട് ചെയ്തു
import { useState, useRef, useEffect } from "react";

interface DestinationTableProps {
  destinations: any[];
  loading: boolean;
  page: number;
  limit: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  onDelete: (id: string | number) => Promise<void>; // 🔥 ഡിലീറ്റ് പ്രോപ്പ് സ്വീകരിക്കുന്നു
}

export default function DestinationTable({ destinations, loading, page, limit, totalCount, onPageChange, onDelete }: DestinationTableProps) {

  const [activeDropdown, setActiveDropdown] = useState<string | number | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<any>(null);
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

  const getTypeColor = (type: string) => {
    const t = type?.toLowerCase() || '';
    if (t === 'state') return 'text-blue-600 bg-blue-50';
    if (t === 'city') return 'text-emerald-600 bg-emerald-50';
    return 'text-purple-600 bg-purple-50';
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const handleConfirmDelete = async () => {
    if (!selectedDestination) return;
    setDeleting(true);
    try {
      await onDelete(selectedDestination.id);
      setDeleteModalOpen(false);
      setSelectedDestination(null);
    } catch (err) {
      // Error handled by toast in hook
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden relative">
      <div className="overflow-x-auto w-full flex-1 min-h-[300px]">
        <table className="w-full text-left text-xs min-w-[1050px]">
          <thead className="bg-gray-50/80 text-gray-500 border-b border-gray-100 font-bold">
            <tr>
              <th className="py-4 px-5">Destination</th>
              <th className="py-4 px-4">Country</th>
              <th className="py-4 px-4">Type</th>
              <th className="py-4 px-4">Region</th>
              <th className="py-4 px-4">Popular For</th>
              <th className="py-4 px-4 text-center">Status</th>
              <th className="py-4 px-4">Created On</th>
              <th className="py-4 px-4 text-center">Actions</th>
            </tr>
          </thead>
          
          {loading ? (
            <tbody className="divide-y divide-gray-50">
              {[...Array(6)].map((_, i) => (
                <tr key={i} className="animate-pulse bg-white">
                  <td colSpan={8} className="py-4 px-5"><div className="w-full h-8 bg-gray-100 rounded"></div></td>
                </tr>
              ))}
            </tbody>
          ) : destinations.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={8} className="py-20 text-center text-gray-500 font-medium text-sm">
                  No destinations found for your search/filters.
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="divide-y divide-gray-50">
              {destinations.map((row, idx) => {
                const imageUrl = row.featured_image_url || row.featured_image;
                const popularFor = (row.tags_list && row.tags_list.length > 0) ? row.tags_list.join(", ") : (row.short_description || "-");
                const isActive = row.is_active;

                return (
                  <tr key={row.id || idx} className="hover:bg-gray-50/80 transition-colors">

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
                          <p className="text-[10px] text-gray-500 mt-0.5">{row.slug}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4 font-bold text-gray-700 whitespace-nowrap">{row.country || "-"}</td>

                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${getTypeColor(row.destination_type)}`}>
                        {row.type_display || row.destination_type || "Other"}
                      </span>
                    </td>

                    <td className="py-3 px-4 font-semibold text-gray-700 whitespace-nowrap">{row.region || "-"}</td>

                    <td className="py-3 px-4">
                      <div className="text-gray-500 font-medium text-[11px] leading-relaxed max-w-[200px] line-clamp-2" title={popularFor}>
                        {popularFor}
                      </div>
                    </td>

                    <td className="py-3 px-4 text-center whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${isActive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                        {isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-gray-600 font-medium whitespace-nowrap">{formatDate(row.created_at)}</td>

                    <td className="py-3 px-4 relative">
                      <div className="flex items-center justify-center gap-2">
                        <Link 
                          href={`/destinations/${row.slug}/edit`}
                          className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 text-blue-600 transition-colors cursor-pointer"
                        >
                          <Edit2 size={13} strokeWidth={2.5} />
                        </Link>

                        {/* 🔥 3 Dot Button & Dropdown */}
                        <div className="relative" ref={activeDropdown === row.id ? dropdownRef : null}>
                          <button 
                            onClick={() => setActiveDropdown(activeDropdown === row.id ? null : row.id)}
                            className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
                          >
                            <MoreVertical size={14} strokeWidth={2.5} />
                          </button>

                          {activeDropdown === row.id && (
                            <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-100 rounded-xl shadow-lg z-30 py-1">
                              <button 
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setSelectedDestination(row);
                                  setDeleteModalOpen(true);
                                }}
                                className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
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

      <Pagination 
        page={page} 
        limit={limit} 
        totalCount={totalCount} 
        onPageChange={onPageChange} 
      />

      {/* 🔥 Confirm Modal Integration */}
      <ConfirmModal 
        isOpen={deleteModalOpen}
        onClose={() => {
          if (!deleting) {
            setDeleteModalOpen(false);
            setSelectedDestination(null);
          }
        }}
        onConfirm={handleConfirmDelete}
        title="Delete Destination"
        message={`Are you sure you want to delete "${selectedDestination?.name}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        isDanger={true}
        isLoading={deleting}
      />

    </div>
  );
}