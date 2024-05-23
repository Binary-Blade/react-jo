// CartPopoverPreview.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useAuthStore } from '@/stores/useAuthStore';
import useLocalCartStore from '@/stores/useLocalCartStore';
import useCartStore from '@/stores/useCartStore';
import { CartPopoverPreview } from '@/features/cart/CartPopoverPreview';
import { navigate } from 'wouter/use-browser-location';

// Mock stores
vi.mock('@/stores/useAuthStore');
vi.mock('@/stores/useLocalCartStore');
vi.mock('@/stores/useCartStore');
vi.mock('wouter/use-browser-location');

describe('CartPopoverPreview', () => {
  const mockUserId = 'test-user-id';
  const mockCartItemsLocal = [
    { eventId: '1', quantity: 2, price: 10, priceFormula: 'fixed' },
    { eventId: '2', quantity: 1, price: 20, priceFormula: 'fixed' }
  ];

  const mockRemoveCartItemLocal = vi.fn();
  const mockSyncCartItems = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    // Mock useAuthStore
    vi.mocked(useAuthStore).mockReturnValue({
      userId: mockUserId,
      isAuthenticated: true
    });

    // Mock useLocalCartStore
    vi.mocked(useLocalCartStore).mockReturnValue({
      cartItemsLocal: mockCartItemsLocal,
      removeCartItemLocal: mockRemoveCartItemLocal
    });

    // Mock useCartStore
    vi.mocked(useCartStore).mockReturnValue({
      syncCartItems: mockSyncCartItems
    });
  });

  it('should render the CartPopoverPreview with correct initial state', () => {
    render(<CartPopoverPreview />);

    fireEvent.click(screen.getByLabelText('Open Cart'));

    expect(screen.getByLabelText('Cart Title').textContent).toBe('Panier - 3 articles');
    expect(screen.getByLabelText('Total Price').textContent).toBe('€40');
    expect(screen.getByLabelText('Proceed to Checkout')).toBeInTheDocument();
  });

  it('should navigate to checkout when Passer la commande is clicked', async () => {
    render(<CartPopoverPreview />);

    fireEvent.click(screen.getByLabelText('Open Cart'));
    fireEvent.click(screen.getByLabelText('Proceed to Checkout'));

    await waitFor(() => {
      expect(mockSyncCartItems).toHaveBeenCalledWith(mockUserId);
      expect(navigate).toHaveBeenCalledWith('/checkout');
    });
  });

  it('should handle missing userId gracefully', async () => {
    vi.mocked(useAuthStore).mockReturnValue({
      userId: null,
      isAuthenticated: false
    });

    render(<CartPopoverPreview />);

    fireEvent.click(screen.getByLabelText('Open Cart'));
    fireEvent.click(screen.getByLabelText('Proceed to Checkout'));

    await waitFor(() => {
      expect(mockSyncCartItems).not.toHaveBeenCalled();
      expect(navigate).toHaveBeenCalledWith('/auth');
    });
  });
});
