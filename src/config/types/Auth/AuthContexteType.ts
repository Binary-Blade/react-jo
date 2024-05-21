import { ReactNode } from 'react';

export type AuthProviderProps = {
  children: ReactNode;
};

export interface AuthContextType {
  initialized: boolean;
  isAuthenticated: boolean;
  userId: number | null;
}
