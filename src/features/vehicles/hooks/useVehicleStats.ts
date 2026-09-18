import { useState, useEffect, useCallback } from 'react';
import { getVehicleStats } from '../services/vehicleServices';
import { extractErrorMessages } from '@/utils/extractError'; 

export const useVehicleStats = () => {
  const [statsData, setStatsData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await getVehicleStats();
      setStatsData(responseData);
    } catch (err: any) {
      const errMsg = extractErrorMessages(err);
      setError(errMsg); // 🔥 എറർ മെസ്സേജ് ക്യാപ്ചർ ചെയ്തു
      setStatsData(null); // ഡാറ്റ null ആയി ഇടുന്നു
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return { statsData, loading, error, refetchStats: fetchStats };
};