import { useState, useEffect, useCallback } from 'react';
import { getDestinationStats } from '../services/destinationServices';
import { extractErrorMessages } from '@/utils/extractError'; 

export const useDestinationStats = () => {
  const [statsData, setStatsData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await getDestinationStats();
      setStatsData(responseData);
    } catch (err: any) {
      setError(extractErrorMessages(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return { statsData, loading, error, refetchStats: fetchStats };
};