import { create } from 'zustand';
import { jwtDecode } from 'jwt-decode';
import { LoginFormData } from '@/config/zod-schemas/loginSchema';
import { SignupFormData } from '@/config/zod-schemas/signupSchema';
import { AuthenticationService } from '@/services/AuthenticationService';
import useCartStore from './useCartStore';
import { AuthStoreTypes } from '@/config/types/Auth/AuthStoreType';
import useLocalCartStore from './useLocalCartStore';
import { handleAsyncError } from '@/config/errors/handleErrorResponse';

interface DecodedToken {
  role: string;
}
export const useAuthStore = create<AuthStoreTypes>(set => ({
  accessToken: null,
  isAuthenticated: false,
  userId: null,
  role: null,
  loading: false,
  error: null,

  signup: async (userData: SignupFormData) => {
    set({ loading: true, error: null });
    try {
      await AuthenticationService.signup(userData);
      set({ loading: false });
      return { success: true, message: 'Signup successful' };
    } catch (error: any) {
      return handleAsyncError(error, set);
    }
  },

  login: async (userData: LoginFormData) => {
    set({ loading: true, error: null });
    try {
      const { data } = await AuthenticationService.login(userData);
      const decodedToken = jwtDecode<DecodedToken>(data.accessToken);
      set({
        accessToken: data.accessToken,
        userId: data.userId,
        isAuthenticated: true,
        role: decodedToken.role,
        loading: false
      });
      await useCartStore.getState().syncCartItems(data.userId);
      return { success: true };
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  logout: async () => {
    set({ loading: true, error: null });
    try {
      await AuthenticationService.logout();
      set({
        accessToken: null,
        isAuthenticated: false,
        userId: null,
        loading: false
      });
      useLocalCartStore.getState().clearCartLocal();
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Logout failed: Server error' });
    }
  },

  changePassword: async userData => {
    set({ loading: true, error: null });
    try {
      await AuthenticationService.changePassword(userData);
      set({ loading: false });
      return { success: true, message: 'Password changed successfully' };
    } catch (error: any) {
      const errorMessage = error.response?.data.message || 'An error occurred';
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  refreshToken: async () => {
    set({ loading: true, error: null });
    try {
      const data = await AuthenticationService.refreshToken();
      if (data.accessToken) {
        set({
          accessToken: data.accessToken,
          userId: data.userId,
          isAuthenticated: true,
          loading: false
        });
      }
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to refresh token' });
    }
  },

  accessProtectedRoute: async () => {
    set({ loading: true, error: null });
    try {
      const { accessToken, userId } = await AuthenticationService.accessProtectedRoute();
      if (accessToken || userId) {
        set({
          isAuthenticated: true,
          accessToken: accessToken,
          userId: userId,
          role: jwtDecode<DecodedToken>(accessToken).role,
          loading: false
        });
      }
    } catch (error: any) {
      set({
        isAuthenticated: false,
        accessToken: null,
        userId: null,
        loading: false,
        error: error.message || 'Failed to verify session'
      });
    }
  }
}));
