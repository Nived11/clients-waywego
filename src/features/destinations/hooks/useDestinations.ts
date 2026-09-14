import { useState, useEffect, useCallback } from 'react';
import { getDestinations, deleteDestination } from '../services/destinationServices';
import { extractErrorMessages } from '@/utils/extractError'; 
import { toast } from 'sonner';

export const useDestinations = () => {
  const [destinations, setDestinations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState(''); 
  const [filters, setFilters] = useState<any>({});

  const fetchDestinations = useCallback(async () => {
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

      const responseData = await getDestinations(params);
      
      setDestinations(responseData.results || []);
      setTotalCount(responseData.count || 0);
    } catch (err: any) {
      setError(extractErrorMessages(err));
    } finally {
      setLoading(false);
    }
  }, [page, limit, search, filters]);

  useEffect(() => {
    fetchDestinations();
  }, [fetchDestinations]);

  const handleDeleteDestination = async (id: string | number) => {
    try {
      await deleteDestination(id);
      toast.success("Destination deleted successfully!");
      fetchDestinations(); 
    } catch (err: any) {
      toast.error(extractErrorMessages(err) || "Failed to delete destination.");
      throw err;
    }
  };

  const handlePageChange = useCallback((newPage: number) => setPage(newPage), []);
  const handleSearch = useCallback((term: string) => { setSearch(term); setPage(1); }, []);
  const handleFilter = useCallback((key: string, value: string) => { setFilters((prev: any) => ({ ...prev, [key]: value })); setPage(1); }, []);
  const resetFilters = useCallback(() => { setSearch(''); setFilters({}); setPage(1); }, []);

  return { 
    destinations, loading, error, 
    page, limit, totalCount, search, filters,
    handlePageChange, handleSearch, handleFilter, resetFilters, 
    handleDeleteDestination, 
    refetch: fetchDestinations 
  };
};