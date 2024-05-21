import { ChangePasswordSchema } from '@/config/zod-schemas/changePasswordSchema';
import { UserLoginData, UserSignupData } from '../FormType';
import { Response } from './AuthResponse';

export interface AuthStoreTypes {
  accessToken: string | null;
  isAuthenticated: boolean;
  userId: number | null;
  role: string | null;
  loading: boolean;
  error: string | null;
  signup: (userData: UserSignupData) => Promise<Response>;
  login: (userData: UserLoginData) => Promise<Response>;
  logout: () => Promise<void>;
  changePassword: (userData: ChangePasswordSchema) => Promise<Response>;
  refreshToken: () => Promise<void>;
  accessProtectedRoute: () => Promise<void>;
  deleteUser: (userId: number) => Promise<Response>;
}
