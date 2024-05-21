import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useAggregateEventData } from '@/hooks/useAggregateEventData';
import { useEventStore } from '@/stores/useEventStore';

// Mock useEventStore
vi.mock('@/stores/useEventStore');

describe('useAggregateEventData', () => {
  const mockFetchValues = vi.fn();
  const mockAllEventsValues = [
    { quantityAvailable: 100, quantitySold: 50, revenueGenerated: 5000 },
    { quantityAvailable: 200, quantitySold: 150, revenueGenerated: 15000 }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    // Ensure mock is properly typed
    const mockedUseEventStore = vi.mocked(useEventStore);
    mockedUseEventStore.mockReturnValue({
      allEventsValues: mockAllEventsValues,
      fetchValues: mockFetchValues
    });
  });

  // Test component to use the hook
  const TestComponent = () => {
    const data = useAggregateEventData();
    return (
      <div>
        <div data-testid="totalQuantity">{data.totalQuantity}</div>
        <div data-testid="totalSold">{data.totalSold}</div>
        <div data-testid="totalRevenue">{data.totalRevenue}</div>
      </div>
    );
  };

  it('should fetch values on mount', () => {
    render(<TestComponent />);

    expect(mockFetchValues).toHaveBeenCalled();
  });

  it('should aggregate event data correctly', () => {
    render(<TestComponent />);

    expect(screen.getByTestId('totalQuantity').textContent).toBe('300');
    expect(screen.getByTestId('totalSold').textContent).toBe('200');
    expect(screen.getByTestId('totalRevenue').textContent).toBe('20000');
  });

  it('should update aggregated data when allEventsValues change', () => {
    const newMockAllEventsValues = [
      { quantityAvailable: 300, quantitySold: 100, revenueGenerated: 20000 },
      { quantityAvailable: 100, quantitySold: 50, revenueGenerated: 5000 }
    ];

    const mockedUseEventStore = vi.mocked(useEventStore);
    mockedUseEventStore.mockReturnValue({
      allEventsValues: newMockAllEventsValues,
      fetchValues: mockFetchValues
    });


    render(<TestComponent />);

    expect(screen.getByTestId('totalQuantity').textContent).toBe('400');
    expect(screen.getByTestId('totalSold').textContent).toBe('150');
    expect(screen.getByTestId('totalRevenue').textContent).toBe('25000');
  });
});
