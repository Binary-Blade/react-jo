import React, { createContext, useEffect, useMemo, useState, } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { AuthContextType, AuthProviderProps } from '@/config/types/AuthType';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const { accessProtectedRoute, isAuthenticated, userId } = useAuthStore(state => ({
        accessProtectedRoute: state.accessProtectedRoute,
        isAuthenticated: state.isAuthenticated,
        userId: state.userId,
    }));
    const [initialized, setInitialized] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        accessProtectedRoute()
            .then(() => setInitialized(true))
            .catch((err) => {
                console.error('Failed to initialize session:', err);
                setError('Failed to load user data.');
                setInitialized(true);  // Consider setting initialized to true even on error to render children with error message
            });
    }, [accessProtectedRoute]);

    const value = useMemo(() => ({
        initialized,
        isAuthenticated,
        userId,
        error,  // Optionally expose error in context if needed elsewhere
    }), [initialized, isAuthenticated, userId, error]);

    return (
        <AuthContext.Provider value={value}>
            {initialized ? children : error ? <p>Error: {error}</p> : <p>Loading...</p>}
        </AuthContext.Provider>
    );
};
