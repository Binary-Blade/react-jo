import { ReactNode } from "react";

export interface UserSignupData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export type AuthProviderProps = {
    children: ReactNode;
};

export interface AuthState {
    token: string | null;
    refreshToken: string | null;
    expiresAt: Date | null;
}

// Interface for your AuthContext's value
export interface AuthContextType {
    authState: AuthState;
    signup: (userData: UserSignupData) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    refreshToken: () => Promise<void>;
}
