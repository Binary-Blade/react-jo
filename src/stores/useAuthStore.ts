import { create } from 'zustand';
import { LoginFormData } from '@/config/zod-schemas/loginSchema';
import { SignupFormData } from '@/config/zod-schemas/signupSchema';
import { AuthenticationService } from '@/services/AuthenticationService';
import useCartStore from './useCartStore';
import { AuthStoreTypes } from '@/config/types/Auth/AuthStoreType';
import useLocalCartStore from './useLocalCartStore';

export const useAuthStore = create<AuthStoreTypes>(set => ({
  accessToken: null,
  isAuthenticated: false,
  userId: null,

  signup: async (userData: SignupFormData) => {
    try {
      await AuthenticationService.signup(userData);
      return { success: true, message: 'Signup successful' };
    } catch (error: any) {
      console.error('Signup error:', error);
      return { success: false, message: error.message || 'Signup failed' };
    }
  },

  login: async (userData: LoginFormData) => {
    try {
      const { data } = await AuthenticationService.login(userData);
      set({
        accessToken: data.accessToken,
        userId: data.userId,
        isAuthenticated: true
      });
      await useCartStore.getState().syncCartItems(data.userId);
      return { success: true };
    } catch (error: any) {
      console.error('Login error:', error);
      return { success: false, message: error.message || 'Login failed' };
    }
  },

  logout: async () => {
    try {
      await AuthenticationService.logout();
      set({
        accessToken: null,
        isAuthenticated: false,
        userId: null
      });
      useLocalCartStore.getState().clearCartLocal();
    } catch (error: any) {
      console.error('Logout error:', error);
      throw new Error(error.message || 'Logout failed: Server error');
    }
  },

  refreshToken: async () => {
    try {
      const data = await AuthenticationService.refreshToken();
      if (data.accessToken) {
        set({
          accessToken: data.accessToken,
          userId: data.userId,
          isAuthenticated: true
        });
      }
    } catch (error: any) {
      console.error('Error refreshing token:', error);
      throw new Error(error.message || 'Failed to refresh token');
    }
  },

  accessProtectedRoute: async () => {
    try {
      const { accessToken, userId } = await AuthenticationService.accessProtectedRoute();
      if (accessToken || userId) {
        set({
          isAuthenticated: true,
          accessToken: accessToken,
          userId: userId
        });
      }
    } catch (error) {
      console.error('Error verifying user session:', error);
      set({
        isAuthenticated: false,
        accessToken: null,
        userId: null
      });
    }
  }
}));
