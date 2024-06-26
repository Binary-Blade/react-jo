import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useAuthStore } from '@/stores/useAuthStore';
import { act } from 'react';
import { AuthenticationService } from '@/services/AuthenticationService';
import jwtDecode from 'jwt-decode';
import { LoginResponse, GenericResponse, TokenResponse } from '@/config/types/Auth/AuthResponse';

// Mock necessary modules
vi.mock('jwt-decode', () => ({
  default: vi.fn()
}));
vi.mock('@/services/AuthenticationService', () => ({
  AuthenticationService: {
    signup: vi.fn(),
    login: vi.fn(),
    logout: vi.fn(),
    changePassword: vi.fn(),
    refreshToken: vi.fn(),
    accessProtectedRoute: vi.fn()
  }
}));
vi.mock('@/stores/useCartStore', () => ({
  useCartStore: () => ({
    syncCartItems: vi.fn()
  })
}));
vi.mock('@/stores/useLocalCartStore', () => ({
  useLocalCartStore: () => ({
    clearCartLocal: vi.fn()
  })
}));

// Reset the store before each test
const useAuthStoreImpl = useAuthStore;
beforeEach(() => {
  act(() => {
    useAuthStoreImpl.setState({
      accessToken: null,
      isAuthenticated: false,
      userId: null,
      role: null,
      loading: false,
      error: null
    });
  });
});

// Test component to use the store
const TestComponent = () => {
  const {
    signup,
    login,
    logout,
    changePassword,
    refreshToken,
    accessProtectedRoute,
    error,
    loading,
    isAuthenticated,
    role
  } = useAuthStore();

  return (
    <div>
      <button
        onClick={() =>
          signup({
            email: 'test@example.com',
            password: 'password',
            firstName: 'Test',
            lastName: 'User'
          })
        }
      >
        Signup
      </button>
      <button onClick={() => login({ email: 'test@example.com', password: 'password' })}>
        Login
      </button>
      <button onClick={() => logout()}>Logout</button>
      <button onClick={() => changePassword({ oldPassword: 'old', newPassword: 'new' })}>
        Change Password
      </button>
      <button onClick={() => refreshToken()}>Refresh Token</button>
      <button onClick={() => accessProtectedRoute()}>Access Protected Route</button>
      <div data-testid="error">{error}</div>
      <div data-testid="loading">{loading ? 'Loading...' : 'Not Loading'}</div>
      <div data-testid="isAuthenticated">
        {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
      </div>
      <div data-testid="role">{role}</div>
    </div>
  );
};

describe('useAuthStore', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should signup successfully', async () => {
    vi.mocked(AuthenticationService.signup).mockResolvedValueOnce({
      success: true,
      message: 'Signup successful'
    } as GenericResponse);

    render(<TestComponent />);

    fireEvent.click(screen.getByText('Signup'));

    await waitFor(() => {
      expect(AuthenticationService.signup).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password',
        firstName: 'Test',
        lastName: 'User'
      });
    });
  });

  it('should logout successfully', async () => {
    vi.mocked(AuthenticationService.logout).mockResolvedValueOnce({} as GenericResponse);

    render(<TestComponent />);

    fireEvent.click(screen.getByText('Logout'));

    await waitFor(() => {
      expect(AuthenticationService.logout).toHaveBeenCalled();
    });

    expect(screen.getByTestId('isAuthenticated').textContent).toBe('Not Authenticated');
  });

  it('should change password successfully', async () => {
    vi.mocked(AuthenticationService.changePassword).mockResolvedValueOnce({
      success: true,
      message: 'Password changed successfully'
    } as GenericResponse);

    render(<TestComponent />);

    fireEvent.click(screen.getByText('Change Password'));

    await waitFor(() => {
      expect(AuthenticationService.changePassword).toHaveBeenCalledWith({
        oldPassword: 'old',
        newPassword: 'new'
      });
    });
  });

  it('should refresh token successfully', async () => {
    vi.mocked(AuthenticationService.refreshToken).mockResolvedValueOnce({
      accessToken: 'new-token',
      userId: 1
    } as TokenResponse);

    render(<TestComponent />);

    fireEvent.click(screen.getByText('Refresh Token'));

    await waitFor(() => {
      expect(AuthenticationService.refreshToken).toHaveBeenCalled();
    });

    expect(screen.getByTestId('isAuthenticated').textContent).toBe('Authenticated');
  });
});
