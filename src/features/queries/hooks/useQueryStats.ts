import { useState, useEffect } from 'react';
import { getQueryStats } from '../services/queryServices';

export const useQueryStats = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await getQueryStats();
      setData(responseData); 
    } catch (err: any) {
      setError(err.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return { data, loading, error, refetch: fetchStats };
};