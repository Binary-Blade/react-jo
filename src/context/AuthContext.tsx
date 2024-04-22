import React, { createContext, useEffect, useState, } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { AuthContextType, AuthProviderProps } from '@/types/AuthType';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const initializeSession = useAuthStore((state) => state.initializeSession);
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const [initialized, setInitialized] = useState(false);
    const userId = useAuthStore(state => state.userId);

    useEffect(() => {
        initializeSession().then(() => {
            setInitialized(true);
        });
    }, [initializeSession]);

    return (
        <AuthContext.Provider value={{ initialized, isAuthenticated, userId }}>
            {initialized ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
};

