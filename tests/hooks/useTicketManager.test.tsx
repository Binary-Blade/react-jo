import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useTicketManager } from '@/hooks/useTicketManager';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';

// Mock useEventStore
const mockGetTicketPrice = vi.fn();

vi.mock('@/stores/useEventStore', () => ({
  useEventStore: {
    getState: () => ({
      getTicketPrice: mockGetTicketPrice
    })
  }
}));

// Test component to use the hook
const TestComponent = ({
  basePrice,
  eventId,
  initialTicketType
}: {
  basePrice?: number;
  eventId?: number;
  initialTicketType: PriceFormula;
}) => {
  const {
    selectedTicketType,
    setSelectedTicketType,
    quantity,
    setQuantity,
    unitPrice,
    totalPrice
  } = useTicketManager(basePrice, eventId, initialTicketType);

  return (
    <div>
      <div data-testid="selectedTicketType">{selectedTicketType}</div>
      <div data-testid="quantity">{quantity}</div>
      <div data-testid="unitPrice">{unitPrice}</div>
      <div data-testid="totalPrice">{totalPrice}</div>
      <button onClick={() => setSelectedTicketType(PriceFormula.FAMILY)}>Set Family Ticket</button>
      <button onClick={() => setQuantity(2)}>Set Quantity to 2</button>
    </div>
  );
};

describe('useTicketManager', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with correct values', () => {
    render(<TestComponent basePrice={100} eventId={1} initialTicketType={PriceFormula.SOLO} />);

    expect(screen.getByTestId('selectedTicketType').textContent).toBe(PriceFormula.SOLO);
    expect(screen.getByTestId('quantity').textContent).toBe('1');
    expect(screen.getByTestId('unitPrice').textContent).toBe('100');
    expect(screen.getByTestId('totalPrice').textContent).toBe('100');
  });

  it('should update ticket type correctly', async () => {
    render(<TestComponent basePrice={100} eventId={1} initialTicketType={PriceFormula.SOLO} />);

    fireEvent.click(screen.getByText('Set Family Ticket'));
    expect(screen.getByTestId('selectedTicketType').textContent).toBe(PriceFormula.FAMILY);
  });

  it('should update quantity correctly', async () => {
    render(<TestComponent basePrice={100} eventId={1} initialTicketType={PriceFormula.SOLO} />);

    fireEvent.click(screen.getByText('Set Quantity to 2'));
    expect(screen.getByTestId('quantity').textContent).toBe('2');
    expect(screen.getByTestId('totalPrice').textContent).toBe('200');
  });

  it('should fetch and update unit price when ticket type changes', async () => {
    mockGetTicketPrice.mockResolvedValue({ price: 150 });

    render(<TestComponent basePrice={100} eventId={1} initialTicketType={PriceFormula.SOLO} />);

    fireEvent.click(screen.getByText('Set Family Ticket'));

    await waitFor(() => {
      expect(mockGetTicketPrice).toHaveBeenCalledWith(1, PriceFormula.FAMILY);
      expect(screen.getByTestId('unitPrice').textContent).toBe('150');
      expect(screen.getByTestId('totalPrice').textContent).toBe('150');
    });
  });

  it('should handle fetch errors gracefully', async () => {
    mockGetTicketPrice.mockRejectedValue(new Error('Network error'));

    render(<TestComponent basePrice={100} eventId={1} initialTicketType={PriceFormula.SOLO} />);

    fireEvent.click(screen.getByText('Set Family Ticket'));

    await waitFor(() => {
      expect(mockGetTicketPrice).toHaveBeenCalledWith(1, PriceFormula.FAMILY);
      expect(screen.getByTestId('unitPrice').textContent).toBe('100'); // Should remain the same as initial base price
      expect(screen.getByTestId('totalPrice').textContent).toBe('100'); // Should remain the same as initial total price
    });
  });
});
