import { ReactNode } from "react";
import { UserLoginData, UserSignupData } from "./FormType";

export type AuthProviderProps = {
    children: ReactNode;
};

export interface AuthState {
    accessToken: string | null;
    expiresAt: Date | null;
    isAuthenticated: boolean;
    signup: (userData: UserSignupData) => Promise<{ success: boolean; message?: string }>;
    login: (userData: UserLoginData) => Promise<{ success: boolean; message?: string }>;
    logout: () => Promise<void>;
    refreshToken: () => Promise<void>;
    initializeSession: () => Promise<void>;
}

export interface AuthContextType {
    authState: AuthState;
    signup: (userData: UserSignupData) => Promise<void>;
    login: (userData: UserLoginData) => Promise<{ success: boolean; message?: string }>;
    logout: () => Promise<void>;
    refreshToken: () => Promise<void>;
}

export type SetAuthStateFunction = (newState: AuthState | ((prevState: AuthState) => AuthState)) => void;
