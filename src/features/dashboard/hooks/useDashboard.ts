// dashboard/hooks/useDashboard.ts
import { useState, useEffect } from 'react';
import { getDashboardData } from '../services/dashboardServices';

export const useDashboard = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboard = async () => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await getDashboardData();
      if (responseData.success) {
        setData(responseData);
      } else {
        setError('Failed to load data');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return { data, loading, error, refetch: fetchDashboard };
};