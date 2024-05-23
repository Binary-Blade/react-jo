import { create } from 'zustand';
import { jwtDecode } from 'jwt-decode';
import { LoginFormData } from '@/config/zod-schemas/loginSchema';
import { SignupFormData } from '@/config/zod-schemas/signupSchema';
import { AuthenticationService } from '@/services/AuthenticationService';
import useCartStore from './useCartStore';
import useLocalCartStore from './useLocalCartStore';
import { handleAsyncError } from '@/config/errors/handleErrorResponse';
import { AuthStoreTypes } from '@/config/interfaces/authentication/auth-store.interface';

interface DecodedToken {
  role: string;
}

/**
 * `useAuthStore` is a Zustand store for managing authentication state and actions.
 *
 * @constant
 *
 * @example
 * const { isAuthenticated, login, logout } = useAuthStore();
 *
 * @remarks
 * This store handles user authentication, including signup, login, logout, token refresh, and password change.
 */
export const useAuthStore = create<AuthStoreTypes>(set => ({
  accessToken: null,
  isAuthenticated: false,
  userId: null,
  role: null,
  loading: false,
  error: null,

  /**
   * Signup a new user.
   *
   * @param {SignupFormData} userData - The data for signing up a new user.
   *
   * @example
   * const signupData: SignupFormData = { firstName: 'John', lastName: 'Doe', email: 'john@example.com', password: 'password123' };
   * const response = await useAuthStore.getState().signup(signupData);
   * console.log(response);
   */
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

  /**
   * Login an existing user.
   *
   * @param {LoginFormData} userData - The data for logging in a user.
   *
   * @example
   * const loginData: LoginFormData = { email: 'john@example.com', password: 'password123' };
   * const response = await useAuthStore.getState().login(loginData);
   * console.log(response);
   */
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

  /**
   * Logout the current user.
   *
   *
   * @example
   * await useAuthStore.getState().logout();
   * console.log('Logged out successfully');
   */
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

  /**
   * Delete the current user by their ID.
   *
   * @param {number} userId - The ID of the user to delete.
   *
   * @example
   * const response = await useAuthStore.getState().deleteUser(1);
   * console.log(response);
   */
  deleteUser: async (userId: number) => {
    set({ loading: true, error: null });
    try {
      await AuthenticationService.deleteUser(userId);
      set({
        accessToken: null,
        isAuthenticated: false,
        userId: null,
        loading: false
      });
      return { success: true, message: 'User is now inactive' };
    } catch (error: any) {
      const errorMessage = error.response?.data.message || 'An error occurred';
      return { success: false, error: errorMessage };
    }
  },

  /**
   * Change the password of the current user.
   *
   * @param  userData - The data for changing the password.
   *
   * @example
   * const passwordData: ChangePasswordSchema = { oldPassword: 'oldPass123', newPassword: 'newPass123' };
   * const response = await useAuthStore.getState().changePassword(passwordData);
   * console.log(response);
   */
  changePassword: async userData => {
    set({ loading: true, error: null });
    try {
      await AuthenticationService.changePassword(userData);
      set({ loading: false });
      return { success: true, message: 'Password changed successfully' };
    } catch (error: any) {
      const errorMessage = error.response?.data.message || 'An error occurred';
      return { success: false, error: errorMessage };
    }
  },

  /**
   * Refresh the authentication token.
   *
   *
   * @example
   * await useAuthStore.getState().refreshToken();
   * console.log('Token refreshed successfully');
   */
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

  /**
   * Access a protected route using the authentication token.
   *
   *
   * @example
   * await useAuthStore.getState().accessProtectedRoute();
   * console.log('Accessed protected route successfully');
   */
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
