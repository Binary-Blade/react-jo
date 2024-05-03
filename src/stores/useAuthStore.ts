import { AuthStoreTypes } from '@/config/types/AuthType';
import { LoginFormData } from '@/config/zod-schemas/loginSchema';
import { SignupFormData } from '@/config/zod-schemas/signupSchema';
import { AuthenticationService } from '@/services/AuthenticationService';
import { SessionService } from '@/services/SessionService';
import { create } from 'zustand';

export const useAuthStore = create<AuthStoreTypes>((set) => ({
    accessToken: null,
    expiresAt: null,
    isAuthenticated: false,
    userId: null,

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
                expiresAt: new Date(new Date().getTime() + (data.expiresIn || 3600) * 1000),
                isAuthenticated: true,
            });
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
                expiresAt: null,
                isAuthenticated: false,
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
            if (data.accessToken && data.expiresIn) {

                set({
                    accessToken: data.accessToken,
                    expiresAt: new Date(new Date().getTime() + data.expiresIn * 1000)
                });
            }
        } catch (error: any) {
            console.error('Error refreshing token:', error);
            throw new Error(error.message || "Failed to refresh token");
        }
    },

    initializeSession: async () => {
        try {
            const { accessToken, expiresIn, userId } = await SessionService.initializeSession();
            if (accessToken || expiresIn || userId) {
                set({
                    isAuthenticated: true,
                    accessToken: accessToken,
                    expiresAt: new Date(new Date().getTime() + expiresIn * 1000),
                    userId: userId,
                });
            }
        } catch (error) {
            console.error('Error verifying user session:', error);
            set({
                isAuthenticated: false,
                accessToken: null,
                expiresAt: null,
                userId: null,
            });
        }
    },
}));
