import { AuthStoreTypes } from '@/config/types/AuthType';
import { LoginFormData } from '@/config/zod-schemas/loginSchema';
import { SignupFormData } from '@/config/zod-schemas/signupSchema';
import { AuthenticationService } from '@/services/AuthenticationService';
import { create } from 'zustand';
import useCartStore from './useCartStore';

export const useAuthStore = create<AuthStoreTypes>((set) => ({
    accessToken: null,
    isAuthenticated: false,
    userId: null,
    expireIn: null,

    signup: async (userData: SignupFormData) => {
        try {
            await AuthenticationService.signup(userData);
            return { success: true, message: "Signup successful" };
        } catch (error: any) {
            console.error('Signup error:', error);
            return { success: false, message: error.message || "Signup failed" };
        }
    },

    login: async (userData: LoginFormData) => {
        try {
            const { data } = await AuthenticationService.login(userData);
            set({
                accessToken: data.accessToken,
                userId: data.userId,
                expireIn: data.expireIn,
                isAuthenticated: true,
            });
            await useCartStore.getState().syncCartItems(data.userId);
            return { success: true };
        } catch (error: any) {
            console.error('Login error:', error);
            return { success: false, message: error.message || "Login failed" };
        }
    },

    logout: async () => {
        try {
            await AuthenticationService.logout();
            set({
                accessToken: null,
                isAuthenticated: false,
                expireIn: null,
                userId: null,
            });
        } catch (error: any) {
            console.error('Logout error:', error);
            throw new Error(error.message || "Logout failed: Server error");
        }
    },

    refreshToken: async () => {
        try {
            const data = await AuthenticationService.refreshToken();
            if (data.accessToken) {

                set({
                    accessToken: data.accessToken,
                    userId: data.userId,
                    expireIn: data.expireIn,
                    isAuthenticated: true,
                });
            }
        } catch (error: any) {
            console.error('Error refreshing token:', error);
            throw new Error(error.message || "Failed to refresh token");
        }
    },

    accessProtectedRoute: async () => {
        try {
            const { accessToken, userId, expireIn } = await AuthenticationService.accessProtectedRoute();
            if (accessToken || userId || expireIn) {
                set({
                    isAuthenticated: true,
                    accessToken: accessToken,
                    expireIn: expireIn,
                    userId: userId,
                });
            }
        } catch (error) {
            console.error('Error verifying user session:', error);
            set({
                isAuthenticated: false,
                accessToken: null,
                userId: null,
            });
        }
    },
}));
