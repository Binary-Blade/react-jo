import { UserLoginData, UserSignupData } from '../FormType';
import { SuccessResponse } from './AuthResponse';

export interface AuthStoreTypes {
  accessToken: string | null;
  isAuthenticated: boolean;
  userId: number | null;
  signup: (userData: UserSignupData) => Promise<SuccessResponse>;
  login: (userData: UserLoginData) => Promise<SuccessResponse>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
  accessProtectedRoute: () => Promise<void>;
}
