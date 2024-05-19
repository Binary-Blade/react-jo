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
      userId: mockUserId
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

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Panier')).toBeInTheDocument();
    expect(screen.getByText('Total : 3 articles')).toBeInTheDocument();
    expect(screen.getByText('€40')).toBeInTheDocument();
    expect(screen.getByText('Passer la commande')).toBeInTheDocument();
  });

  it('should call removeCartItemLocal when an item is deleted', () => {
    render(<CartPopoverPreview />);

    fireEvent.click(screen.getByRole('button'));

    // Targeting the delete button by its class name
    const deleteButtons = screen.getAllByRole('button', { name: /x/i });
    fireEvent.click(deleteButtons[0]);

    expect(mockRemoveCartItemLocal).toHaveBeenCalledWith(
      mockCartItemsLocal[0].eventId,
      mockCartItemsLocal[0].priceFormula
    );
  });

  it('should navigate to checkout when Passer la commande is clicked', async () => {
    render(<CartPopoverPreview />);

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Passer la commande'));

    await waitFor(() => {
      expect(mockSyncCartItems).toHaveBeenCalledWith(mockUserId);
      expect(navigate).toHaveBeenCalledWith('/checkout');
    });
  });

  it('should handle missing userId gracefully', async () => {
    vi.mocked(useAuthStore).mockReturnValue({
      userId: null
    });

    render(<CartPopoverPreview />);

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Passer la commande'));

    await waitFor(() => {
      expect(mockSyncCartItems).not.toHaveBeenCalled();
      expect(navigate).not.toHaveBeenCalled();
    });

    expect(screen.queryByText('User ID is missing.')).toBeInTheDocument();
  });
});
