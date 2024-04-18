import { AuthProviderProps, AuthState, UserSignupData } from "@/types/AuthType";
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import axiosClient from '@/utils/axiosConfig';
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<AuthState>({
    token: null, // Access token
    refreshToken: null, // Refresh token
    expiresAt: null, // Expiration time of the access token
  });

  // Intercepteur pour injecter le token
  axios.interceptors.request.use(config => {
    // Make sure expiresAt is not null before comparing
    if (authState.token && authState.expiresAt && new Date() < new Date(authState.expiresAt)) {
      config.headers.Authorization = `Bearer ${authState.token}`;
    }
    return config;
  });

  const refreshToken = async () => {
    if (!authState.refreshToken) {
      console.error('No refresh token available.');
      return;
    }

    try {
      const response = await axiosClient.post('/auth/refresh', {
        refreshToken: authState.refreshToken,
      });

      // Update state with the new access token and refresh token (if provided)
      setAuthState({
        token: response.data.accessToken,
        expiresAt: new Date(new Date().getTime() + response.data.expiresIn * 1000),
        refreshToken: response.data.refreshToken || authState.refreshToken,
      });
    } catch (error) {
      console.error('Error refreshing token:', error);
      // Redirect user to login or handle accordingly
    }
  };

  // Rafraîchir le token automatiquement avant expiration
  useEffect(() => {
    // Explicitly type 'timeout' as NodeJS.Timeout
    let timeout: NodeJS.Timeout; // If you're in a browser context, use 'ReturnType<typeof setTimeout>' instead
    if (authState.expiresAt) {
      const expiresIn = authState.expiresAt.getTime() - new Date().getTime();
      // Set a timeout to refresh the token a bit before it expires
      timeout = setTimeout(() => {
        refreshToken();
      }, expiresIn - 5 * 60 * 1000); // Refresh 5 minutes before the token expires
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [authState.expiresAt, refreshToken]);

  const signup = async (userData: UserSignupData): Promise<void> => {
    try {
      await axiosClient.post('/auth/signup', userData);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const response = await axiosClient.post('/auth/login', { email, password });
      setAuthState(prevState => ({
        ...prevState,
        token: response.data.accessToken,
        expiresAt: new Date(new Date().getTime() + response.data.expiresIn * 1000),
        refreshToken: prevState.refreshToken, // Preserve the existing refreshToken
      }));
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    try {
      await axiosClient.post('/auth/logout');
      setAuthState({ token: null, expiresAt: null, refreshToken: null });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout, refreshToken, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
