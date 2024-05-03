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

export interface AuthStoreTypes {
    accessToken: string | null;
    isAuthenticated: boolean;
    userId: number | null;
    expireIn: number | null;
    signup: (userData: UserSignupData) => Promise<{ success: boolean; message?: string }>;
    login: (userData: UserLoginData) => Promise<{ success: boolean; message?: string }>;
    logout: () => Promise<void>;
    refreshToken: () => Promise<void>;
    accessProtectedRoute: () => Promise<void>;
}

export type SetAuthStateFunction = (newState: AuthStoreTypes | ((prevState: AuthStoreTypes) => AuthStoreTypes)) => void;
