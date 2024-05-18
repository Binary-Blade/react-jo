import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { AuthContextType, AuthProviderProps } from '@/config/types/Auth/AuthContexteType';
import LoadingPage from '@/pages/LoadingPage';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { accessProtectedRoute, isAuthenticated, userId, role } = useAuthStore();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    accessProtectedRoute()
      .then(() => setInitialized(true))
      .catch(err => {
        console.error('Failed to initialize session:', err);
        setInitialized(true); // Consider setting initialized to true even on error to render children with error message
      });
  }, [accessProtectedRoute]);

  const value = useMemo(
    () => ({
      initialized,
      isAuthenticated,
      userId,
      role
    }),
    [initialized, isAuthenticated, userId, role]
  );

  return (
    <AuthContext.Provider value={value}>
      {initialized ? children : <LoadingPage />}
    </AuthContext.Provider>
  );
};
