import { useState, useEffect, useCallback } from 'react';
import { getVehicleFilterOptions } from '../services/vehicleServices';

export const useVehicleFilterOptions = () => {
  const [filterOptions, setFilterOptions] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchOptions = useCallback(async () => {
    try {
      const data = await getVehicleFilterOptions();
      setFilterOptions(data);
    } catch (err) {
      console.error("Failed to fetch filter options", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOptions();
  }, [fetchOptions]);

  return { filterOptions, loading };
};