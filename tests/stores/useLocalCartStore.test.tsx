import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { useLocalCartStore } from '@/stores/useLocalCartStore';
import { LocalCartService } from '@/services/LocalCartService';

// Mock necessary modules
vi.mock('@/services/LocalCartService');

const mockCartItems = [
  { eventId: 1, priceFormula: 'SOLO', quantity: 1, price: 100 },
  { eventId: 2, priceFormula: 'DUO', quantity: 2, price: 200 }
];

LocalCartService.getStoredCartItems.mockReturnValue(mockCartItems);
LocalCartService.setStoredCartItems.mockImplementation(() => {});
LocalCartService.clearStoredCartItems.mockImplementation(() => {});
LocalCartService.clearStoredCartAll.mockImplementation(() => {});

// Reset the store before each test
const useLocalCartStoreImpl = useLocalCartStore;
beforeEach(() => {
  act(() => {
    useLocalCartStoreImpl.setState({
      cartItemsLocal: LocalCartService.getStoredCartItems()
    });
  });
});

// Test component to use the store
const TestComponent = () => {
  const {
    cartItemsLocal,
    addItemToCartLocal,
    updateCartItemLocal,
    removeCartItemLocal,
    clearCartItemsLocal,
    clearCartLocal
  } = useLocalCartStore();

  return (
    <div>
      <button
        onClick={() =>
          addItemToCartLocal({ eventId: 3, priceFormula: 'FAMILY', quantity: 1, price: 300 })
        }
      >
        Add Item
      </button>
      <button onClick={() => updateCartItemLocal(1, { quantity: 5 })}>Update Item</button>
      <button onClick={() => removeCartItemLocal(2, 'DUO')}>Remove Item</button>
      <button onClick={() => clearCartItemsLocal()}>Clear Cart Items</button>
      <button onClick={() => clearCartLocal()}>Clear Cart</button>
      <div data-testid="cartItems">{JSON.stringify(cartItemsLocal)}</div>
    </div>
  );
};

describe('useLocalCartStore', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should add item to cart successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Add Item'));

    await waitFor(() => {
      expect(LocalCartService.setStoredCartItems).toHaveBeenCalledWith([
        ...mockCartItems,
        { eventId: 3, priceFormula: 'FAMILY', quantity: 1, price: 300 }
      ]);
      expect(screen.getByTestId('cartItems').textContent).toContain('FAMILY');
    });
  });

  it('should update item in cart successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Update Item'));

    await waitFor(() => {
      expect(LocalCartService.setStoredCartItems).toHaveBeenCalledWith([
        { eventId: 1, priceFormula: 'SOLO', quantity: 5, price: 100 },
        { eventId: 2, priceFormula: 'DUO', quantity: 2, price: 200 }
      ]);
      expect(screen.getByTestId('cartItems').textContent).toContain('quantity":5');
    });
  });

  it('should remove item from cart successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Remove Item'));

    await waitFor(() => {
      expect(LocalCartService.setStoredCartItems).toHaveBeenCalledWith([
        { eventId: 1, priceFormula: 'SOLO', quantity: 1, price: 100 }
      ]);
      expect(screen.getByTestId('cartItems').textContent).not.toContain('DUO');
    });
  });

  it('should clear cart items successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Clear Cart Items'));

    await waitFor(() => {
      expect(LocalCartService.clearStoredCartItems).toHaveBeenCalled();
      expect(screen.getByTestId('cartItems').textContent).toBe('[]');
    });
  });

  it('should clear entire cart successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Clear Cart'));

    await waitFor(() => {
      expect(LocalCartService.clearStoredCartAll).toHaveBeenCalled();
      expect(screen.getByTestId('cartItems').textContent).toBe('[]');
    });
  });
});
