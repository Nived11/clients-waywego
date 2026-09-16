import { useState, useEffect, useCallback } from 'react';
import { getVehicles, deleteVehicle } from '../services/vehicleServices';
import { extractErrorMessages } from '@/utils/extractError'; 
import { toast } from 'sonner';

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8); // API 8 per page ആവശ്യപ്പെട്ടതുകൊണ്ട് 8 വെച്ചു
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState(''); 
  const [filters, setFilters] = useState<any>({});

  const fetchVehicles = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const activeFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, v]) => v !== '')
      );

      const params = {
        page,
        page_size: limit,
        search: search || undefined,
        ...activeFilters
      };

      const responseData = await getVehicles(params);
      
      setVehicles(responseData.results || []);
      setTotalCount(responseData.count || 0);
    } catch (err: any) {
      setError(extractErrorMessages(err));
    } finally {
      setLoading(false);
    }
  }, [page, limit, search, filters]);

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  const handleDeleteVehicle = async (id: string | number) => {
    try {
      await deleteVehicle(id);
      toast.success("Vehicle deleted successfully!");
      fetchVehicles(); 
    } catch (err: any) {
      toast.error(extractErrorMessages(err) || "Failed to delete vehicle.");
      throw err;
    }
  };

  const handlePageChange = useCallback((newPage: number) => setPage(newPage), []);
  const handleSearch = useCallback((term: string) => { setSearch(term); setPage(1); }, []);
  const handleFilter = useCallback((key: string, value: string) => { setFilters((prev: any) => ({ ...prev, [key]: value })); setPage(1); }, []);
  const resetFilters = useCallback(() => { setSearch(''); setFilters({}); setPage(1); }, []);

  return { 
    vehicles, loading, error, 
    page, limit, totalCount, search, filters,
    handlePageChange, handleSearch, handleFilter, resetFilters, 
    handleDeleteVehicle, 
    refetch: fetchVehicles 
  };
};