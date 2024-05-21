import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { useAuthStore } from '@/stores/useAuthStore';
import { AuthContext, AuthProvider } from '@/context/AuthContext';

// Mock the useAuthStore hook
vi.mock('@/stores/useAuthStore', () => ({
  useAuthStore: vi.fn()
}));

const mockUseAuthStore = useAuthStore as jest.MockedFunction<typeof useAuthStore>;

describe('AuthProvider', () => {
  it('should render children after initialization', async () => {
    // Mock the useAuthStore to simulate authenticated state
    mockUseAuthStore.mockReturnValue({
      accessProtectedRoute: vi.fn().mockResolvedValueOnce(undefined),
      isAuthenticated: true,
      userId: '123',
      role: 'user'
    });

    render(
      <AuthProvider>
        <div>Protected Content</div>
      </AuthProvider>
    );

    // Wait for the LoadingPage to be removed
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    // Check if the children are rendered
    expect(screen.getByText(/protected content/i)).toBeInTheDocument();
  });

  it('should provide the correct context values', async () => {
    // Mock the useAuthStore to simulate authenticated state
    mockUseAuthStore.mockReturnValue({
      accessProtectedRoute: vi.fn().mockResolvedValueOnce(undefined),
      isAuthenticated: true,
      userId: '123',
      role: 'user'
    });

    let contextValue;

    const TestComponent = () => {
      contextValue = React.useContext(AuthContext);
      return <div>Protected Content</div>;
    };

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Wait for the context to be initialized
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    // Check if the context values are correct
    expect(contextValue).toEqual({
      initialized: true,
      isAuthenticated: true,
      userId: '123',
      role: 'user'
    });
  });
});
