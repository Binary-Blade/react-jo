import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import CheckoutPage from '@/pages/CheckoutPage';
import { useAuthStore } from '@/stores/useAuthStore';
import useCartStore from '@/stores/useCartStore';
import { useGroupByTicketType } from '@/hooks';

vi.mock('@/stores/useAuthStore');
vi.mock('@/stores/useCartStore');
vi.mock('@/hooks', () => ({
  useGroupByTicketType: vi.fn()
}));

vi.mock('@/components/ui/separator', () => ({
  Separator: () => <div>Separator Component</div>
}));

vi.mock('@/features/header/Header', () => ({
  Header: () => <div>Header Component</div>
}));

vi.mock('@/components/cards/CardPromoCode', () => ({
  CardPromoCode: () => <div>CardPromoCode Component</div>
}));

vi.mock('@/components/cards/CardPaymentCheckout', () => ({
  CardPaymentCheckout: () => <div>CardPaymentCheckout Component</div>
}));

vi.mock('@/components/notlogging/CartNotLogging', () => ({
  CartNotLogging: () => <div>CartNotLogging Component</div>
}));

vi.mock('@/components/empty/CartEmpty', () => ({
  CheckoutEmpty: () => <div>CheckoutEmpty Component</div>
}));

vi.mock('@/features/checkout/CheckoutSummary', () => ({
  CheckoutSummary: () => <div>CheckoutSummary Component</div>
}));

vi.mock('@/features/checkout/CardFormule', () => ({
  CardFormule: ({ priceFormula }: { priceFormula: string; items: any[] }) => (
    <div>{`CardFormule Component for ${priceFormula}`}</div>
  )
}));

vi.mock('@/pages/LoadingPage', () => ({
  default: () => <div>LoadingPage Component</div>
}));

describe('CheckoutPage', () => {
  const mockFetchCartItems = vi.fn();
  const mockUseCartStore = {
    fetchCartItems: mockFetchCartItems,
    cartId: '123',
    cartItems: [],
    loading: false
  };
  const mockUseAuthStore = {
    userId: 'user123',
    isAuthenticated: true
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useCartStore as unknown as jest.Mock).mockReturnValue(mockUseCartStore);
    (useAuthStore as unknown as jest.Mock).mockReturnValue(mockUseAuthStore);
  });

  it('renders loading state correctly', () => {
    (useCartStore as unknown as jest.Mock).mockReturnValue({ ...mockUseCartStore, loading: true });

    render(<CheckoutPage />);

    expect(screen.getByText('LoadingPage Component')).toBeInTheDocument();
  });

  it('renders empty cart state for authenticated user correctly', () => {
    (useCartStore as unknown as jest.Mock).mockReturnValue({ ...mockUseCartStore, cartItems: [] });
    (useAuthStore as unknown as jest.Mock).mockReturnValue({
      ...mockUseAuthStore,
      isAuthenticated: true
    });

    render(<CheckoutPage />);

    expect(screen.getByText('CheckoutEmpty Component')).toBeInTheDocument();
  });

  it('renders not logged in state correctly', () => {
    (useAuthStore as unknown as jest.Mock).mockReturnValue({
      ...mockUseAuthStore,
      isAuthenticated: false
    });

    render(<CheckoutPage />);

    expect(screen.getByText('CartNotLogging Component')).toBeInTheDocument();
  });

  it('renders cart items correctly', () => {
    const mockGroupedItems = {
      VIP: [{ id: 1, name: 'VIP Ticket' }],
      Regular: [{ id: 2, name: 'Regular Ticket' }]
    };

    (useCartStore as unknown as jest.Mock).mockReturnValue({
      ...mockUseCartStore,
      cartItems: [
        { id: 1, type: 'VIP' },
        { id: 2, type: 'Regular' }
      ]
    });
    (useGroupByTicketType as jest.Mock).mockReturnValue(mockGroupedItems);

    render(<CheckoutPage />);

    expect(screen.getByText('CardFormule Component for VIP')).toBeInTheDocument();
    expect(screen.getByText('CardFormule Component for Regular')).toBeInTheDocument();
  });

  it('calls fetchCartItems on mount', () => {
    render(<CheckoutPage />);

    expect(mockFetchCartItems).toHaveBeenCalledWith('user123', '123');
  });
});
