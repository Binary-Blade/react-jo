import { createContext } from 'react';
import { AuthContextType } from '@/types/AuthType';

export const AuthContext = createContext<AuthContextType>(null!);

