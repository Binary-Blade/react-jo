import { AuthenticationService } from './AuthenticationService';
import axiosClient from '@/config/axiosConfig';
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@/config/axiosConfig', async () => {
  const actual = await vi.importActual('@/config/axiosConfig');
  return {
    ...actual,
    default: {
      post: vi.fn()
    }
  };
});

describe('AuthenticationService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    localStorage.clear();
  });

  it('signup should resolve with SuccessResponse on successful request', async () => {
    const mockUserData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'user@example.com',
      password: 'password123'
    };
    const mockResponse = { data: { success: true, message: 'User registered successfully' } };
    vi.mocked(axiosClient.post).mockResolvedValue(mockResponse);

    const response = await AuthenticationService.signup(mockUserData);
    expect(response).toEqual(mockResponse.data);
    expect(axiosClient.post).toHaveBeenCalledWith('/auth/signup', mockUserData);
  });

  it('login should resolve with LoginResponse on successful request', async () => {
    const mockUserData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'user@example.com',
      password: 'password123'
    };
    const mockResponse = { data: { success: true, data: { token: 'abc123' } } };
    vi.mocked(axiosClient.post).mockResolvedValue(mockResponse);

    const response = await AuthenticationService.login(mockUserData);
    expect(response).toEqual({ success: true, data: mockResponse.data });
    expect(axiosClient.post).toHaveBeenCalledWith('/auth/login', mockUserData);
  });

  it('login should throw an error if no access token is received', async () => {
    const mockUserData = { email: 'user@example.com', password: 'password123' };
    const mockResponse = { data: null };

    vi.mocked(axiosClient.post).mockResolvedValue(mockResponse);

    await expect(AuthenticationService.login(mockUserData)).rejects.toThrow(
      'Login failed: No access token received'
    );
  });

  it('logout should resolve with GenericResponse on successful request', async () => {
    const mockResponse = {
      data: { success: true, message: 'Successfully logged out' },
      status: 200
    };
    vi.mocked(axiosClient.post).mockResolvedValue(mockResponse);

    const response = await AuthenticationService.logout();
    expect(response).toEqual(mockResponse.data);
    expect(axiosClient.post).toHaveBeenCalledWith('/auth/logout');
  });

  it('logout should throw an error if the logout process fails', async () => {
    const mockResponse = { data: { success: false, message: 'Logout failed' }, status: 500 };
    vi.mocked(axiosClient.post).mockResolvedValue(mockResponse);

    await expect(AuthenticationService.logout()).rejects.toThrow('Logout failed');
  });

  it('refreshToken should resolve with TokenResponse on successful request', async () => {
    const mockResponse = { data: { token: 'newtoken123', userId: 'user123' } };
    vi.mocked(axiosClient.post).mockResolvedValue(mockResponse);

    const response = await AuthenticationService.refreshToken();
    expect(response).toEqual(mockResponse.data);
    expect(axiosClient.post).toHaveBeenCalledWith('/auth/refresh-token');
  });

  it('accessProtectedRoute should resolve with TokenResponse on successful request', async () => {
    const mockResponse = { data: { token: 'accesstoken123', userId: 'user123' } };
    vi.mocked(axiosClient.post).mockResolvedValue(mockResponse);

    const response = await AuthenticationService.accessProtectedRoute();
    expect(response).toEqual(mockResponse.data);
    expect(axiosClient.post).toHaveBeenCalledWith('/auth/access-token');
  });
});
