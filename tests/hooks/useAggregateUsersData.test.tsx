import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useAggregateUsersData } from '@/hooks/useAggregateUsersData';
import { useUserStore } from '@/stores/useUserStore';

// Mock useUserStore
vi.mock('@/stores/useUserStore');

describe('useAggregateUsersData', () => {
  const mockFetchAllUsersValues = vi.fn();
  const mockUsersValues = [
    { totalSpent: 100, createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString() },
    { totalSpent: 200, createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString() },
    { totalSpent: 300, createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    // Ensure mock is properly typed
    const mockedUseUserStore = vi.mocked(useUserStore);
    mockedUseUserStore.mockReturnValue({
      usersValues: mockUsersValues,
      fetchAllUsersValues: mockFetchAllUsersValues
    });
  });

  // Test component to use the hook
  const TestComponent = () => {
    const data = useAggregateUsersData();
    return (
      <div>
        <div data-testid="totalClients">{data.totalClients}</div>
        <div data-testid="totalRevenue">{data.totalRevenue}</div>
        <div data-testid="newSignUps">{data.newSignUps}</div>
      </div>
    );
  };

  it('should fetch values on mount', () => {
    render(<TestComponent />);

    expect(mockFetchAllUsersValues).toHaveBeenCalled();
  });

  it('should aggregate user data correctly', () => {
    render(<TestComponent />);

    expect(screen.getByTestId('totalClients').textContent).toBe('3');
    expect(screen.getByTestId('totalRevenue').textContent).toBe('600');
    expect(screen.getByTestId('newSignUps').textContent).toBe('2');
  });

  it('should update aggregated data when usersValues change', () => {
    const newMockUsersValues = [
      { totalSpent: 400, createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() },
      { totalSpent: 500, createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString() },
      { totalSpent: 600, createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() }
    ];

    const mockedUseUserStore = vi.mocked(useUserStore);
    mockedUseUserStore.mockReturnValue({
      usersValues: newMockUsersValues,
      fetchAllUsersValues: mockFetchAllUsersValues
    });

    render(<TestComponent />);

    expect(screen.getByTestId('totalClients').textContent).toBe('3');
    expect(screen.getByTestId('totalRevenue').textContent).toBe('1500');
    expect(screen.getByTestId('newSignUps').textContent).toBe('2');
  });
});
