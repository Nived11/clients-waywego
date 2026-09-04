import { useState, useEffect, useCallback } from 'react';
import { getQueriesList } from '../services/queryServices';

export const useQueries = () => {
  const [queries, setQueries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination & Filter States
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<any>({});

  const fetchQueries = useCallback(async () => {
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

      const responseData = await getQueriesList(params);
      
      setQueries(responseData.results || responseData.data || []);
      setTotalCount(responseData.count || responseData.total || 0);
    } catch (err: any) {
      setError(err.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  }, [page, limit, search, filters]);

  useEffect(() => {
    fetchQueries();
  }, [fetchQueries]);

  const handlePageChange = useCallback((newPage: number) => setPage(newPage), []);
  
  const handleSearch = useCallback((term: string) => { 
    setSearch(term); 
    setPage(1); 
  }, []);
  
  const handleFilter = useCallback((key: string, value: string) => { 
    setFilters((prev: any) => ({ ...prev, [key]: value })); 
    setPage(1); 
  }, []);

  // Reset Function
  const resetFilters = useCallback(() => {
    setSearch('');
    setFilters({});
    setPage(1);
  }, []);

  return { 
    queries, loading, error, 
    page, limit, totalCount, search, filters, // search, filters return ചെയ്യുന്നു
    handlePageChange, handleSearch, handleFilter, resetFilters, // resetFilters ചേർത്തു
    refetch: fetchQueries 
  };
};