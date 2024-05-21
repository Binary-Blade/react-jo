import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useDisplayTotalItems } from '@/hooks/useDisplayTotalItems';
import useLocalCartStore from '@/stores/useLocalCartStore';

// Mock useLocalCartStore
vi.mock('@/stores/useLocalCartStore');

describe('useDisplayTotalItems', () => {
  const mockCartItemsLocal = [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 3 },
    { id: 3, quantity: 5 }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    // Ensure mock is properly typed
    const mockedUseLocalCartStore = vi.mocked(useLocalCartStore);
    mockedUseLocalCartStore.mockReturnValue({
      cartItemsLocal: mockCartItemsLocal
    });
  });

  // Test component to use the hook
  const TestComponent = () => {
    const totalItems = useDisplayTotalItems();
    return <div data-testid="totalItems">{totalItems}</div>;
  };

  it('should calculate total items in local cart correctly', () => {
    render(<TestComponent />);

    expect(screen.getByTestId('totalItems').textContent).toBe('10');
  });

  it('should update total items when cartItemsLocal change', () => {
    const newMockCartItemsLocal = [
      { id: 1, quantity: 1 },
      { id: 2, quantity: 2 },
      { id: 3, quantity: 3 }
    ];

    const mockedUseLocalCartStore = vi.mocked(useLocalCartStore);
    mockedUseLocalCartStore.mockReturnValue({
      cartItemsLocal: newMockCartItemsLocal
    });

    render(<TestComponent />);

    expect(screen.getByTestId('totalItems').textContent).toBe('6');
  });
});
