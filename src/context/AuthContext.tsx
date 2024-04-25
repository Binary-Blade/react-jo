import React, { createContext, useEffect, useMemo, useState, } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { AuthContextType, AuthProviderProps } from '@/types/AuthType';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const { initializeSession, isAuthenticated, userId } = useAuthStore(state => ({
        initializeSession: state.initializeSession,
        isAuthenticated: state.isAuthenticated,
        userId: state.userId,
    }));
    const [initialized, setInitialized] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        initializeSession()
            .then(() => setInitialized(true))
            .catch((err) => {
                console.error('Failed to initialize session:', err);
                setError('Failed to load user data.');
                setInitialized(true);  // Consider setting initialized to true even on error to render children with error message
            });
    }, [initializeSession]);

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
