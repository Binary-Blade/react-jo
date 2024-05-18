import { ChangePasswordSchema } from '@/config/zod-schemas/changePasswordSchema';
import { UserLoginData, UserSignupData } from '../FormType';
import { SuccessResponse } from './AuthResponse';

export interface AuthStoreTypes {
  accessToken: string | null;
  isAuthenticated: boolean;
  userId: number | null;
  role: string | null;
  loading: boolean;
  error: string | null;
  signup: (userData: UserSignupData) => Promise<SuccessResponse>;
  login: (userData: UserLoginData) => Promise<SuccessResponse>;
  logout: () => Promise<void>;
  changePassword: (userData: ChangePasswordSchema) => Promise<SuccessResponse>;
  refreshToken: () => Promise<void>;
  accessProtectedRoute: () => Promise<void>;
}
