import { AuthenticationService } from '@/services/AuthenticationService';
import { SessionService } from '@/services/SessionService';
import { AuthState } from '@/types/AuthType';
import { LoginFormData } from '@/validation/schemas/loginSchema';
import { SignupFormData } from '@/validation/schemas/signupSchema';
import { create } from 'zustand';

export const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,
    expiresAt: null,
    isAuthenticated: false,

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
                isAuthenticated: false
            });
        } catch (error: any) {
            console.error('Logout error:', error);
            throw new Error(error.message || "Logout failed: Server error");
        }
    },

    refreshToken: async () => {
        try {
            const data = await AuthenticationService.refreshToken();
            set({
                accessToken: data.accessToken,
                expiresAt: new Date(new Date().getTime() + data.expiresIn * 1000)
            });
        } catch (error: any) {
            console.error('Error refreshing token:', error);
            throw new Error(error.message || "Failed to refresh token");
        }
    },

    initializeSession: async () => {
        try {
            const { accessToken, expiresIn } = await SessionService.initializeSession();
            set({
                isAuthenticated: true,
                accessToken: accessToken,
                expiresAt: new Date(new Date().getTime() + expiresIn * 1000)
            });
        } catch (error) {
            console.error('Error verifying user session:', error);
            set({
                isAuthenticated: false,
                accessToken: null,
                expiresAt: null
            });
        }
    },
}));
