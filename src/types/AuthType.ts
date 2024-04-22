import { ReactNode } from "react";
import { UserLoginData, UserSignupData } from "./FormType";

export type AuthProviderProps = {
    children: ReactNode;
};

export interface AuthContextType {
    initialized: boolean;
    isAuthenticated: boolean;
    userId: number | null;
}

export interface AuthState {
    accessToken: string | null;
    expiresAt: Date | null;
    isAuthenticated: boolean;
    userId: string | null;
    signup: (userData: UserSignupData) => Promise<{ success: boolean; message?: string }>;
    login: (userData: UserLoginData) => Promise<{ success: boolean; message?: string }>;
    logout: () => Promise<void>;
    refreshToken: () => Promise<void>;
    initializeSession: () => Promise<void>;
}

export type SetAuthStateFunction = (newState: AuthState | ((prevState: AuthState) => AuthState)) => void;
