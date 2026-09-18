import { useState, useEffect, useCallback } from 'react';
import { getVehicleFilterOptions } from '../services/vehicleServices';

export const useVehicleFilterOptions = () => {
  const [filterOptions, setFilterOptions] = useState<any>({ categories: [], statuses: [], fuel_types: [], locations: [] });
  const [loading, setLoading] = useState(true);

  const fetchOptions = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getVehicleFilterOptions();
      if (data) {
        setFilterOptions(data);
      }
    } catch (err: any) {
      console.error("Failed to fetch filter options safely caught:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOptions();
  }, [fetchOptions]);

  return { filterOptions, loading, refetchOptions: fetchOptions };
};