// src/features/auth/hooks/useLogout.ts
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '../services/authService';
import { api } from '@/lib/api';

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const logout = async () => {
    setLoading(true);
    try {
      // 1. Call Backend API to clear sessionid cookie (CSRF is now handled inside service)
      await authService.logout();

      // 2. Remove the temporary frontend cookie
      document.cookie = "is_logged_in=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

      // 3. Clear Axios CSRF token header
      delete api.defaults.headers.common['X-CSRFToken'];

      // 4. Redirect to login page
      router.push('/');
      router.refresh(); 

    } catch (err: any) {
      console.error('Logout failed:', err);
      // Backend fail aayalum frontend forcefully logout aakkunnu
      document.cookie = "is_logged_in=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      router.push('/');
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};