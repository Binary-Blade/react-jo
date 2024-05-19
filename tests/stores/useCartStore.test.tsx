import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { useCartStore } from '@/stores/useCartStore';
import { CartService } from '@/services/CartService';
import { LocalCartService } from '@/services/LocalCartService';
import { CreateCartItemDto } from '@/config/dtos/CartItem.dto';

// Mock necessary modules
vi.mock('@/services/CartService');
vi.mock('@/services/LocalCartService');

// Mock data
const mockCartItems = [
  { cartItemId: 1, eventId: 1, priceFormula: 'SOLO', quantity: 1, price: 100 },
  { cartItemId: 2, eventId: 2, priceFormula: 'DUO', quantity: 2, price: 200 }
];

const mockCartItem: CreateCartItemDto = {
  eventId: 3,
  quantity: 1,
  price: 300,
  priceFormula: 'FAMILY'
};

CartService.addItemToCart.mockResolvedValue({
  ...mockCartItem,
  cartItemId: 3,
  cart: { cartId: 1 }
});
CartService.findAllItemsInCart.mockResolvedValue(mockCartItems);
CartService.updateCartItem.mockResolvedValue({ ...mockCartItems[0], quantity: 5 });
CartService.removeItemFromCart.mockResolvedValue();

LocalCartService.getStoredCartItems.mockReturnValue([]);
LocalCartService.setStoredCartItems.mockImplementation(() => {});
LocalCartService.clearStoredCartItems.mockImplementation(() => {});
LocalCartService.clearStoredCartAll.mockImplementation(() => {});
LocalCartService.getStoredCartId.mockReturnValue(1);

// Reset the store before each test
const useCartStoreImpl = useCartStore;
beforeEach(() => {
  act(() => {
    useCartStoreImpl.setState({
      cartItems: [],
      cartId: LocalCartService.getStoredCartId(),
      loading: false,
      error: null
    });
  });
});

// Test component to use the store
const TestComponent = () => {
  const {
    cartItems,
    addItemToCart,
    updateCartItem,
    removeCartItem,
    clearCart,
    fetchCartItems,
    syncCartItems
  } = useCartStore();

  return (
    <div>
      <button onClick={() => addItemToCart(1, mockCartItem)}>Add Item</button>
      <button onClick={() => updateCartItem(1, 1, 1, 5)}>Update Item</button>
      <button onClick={() => removeCartItem(1, 1, 2)}>Remove Item</button>
      <button onClick={() => clearCart()}>Clear Cart</button>
      <button onClick={() => fetchCartItems(1, 1)}>Fetch Cart Items</button>
      <button onClick={() => syncCartItems(1)}>Sync Cart Items</button>
      <div data-testid="cartItems">{JSON.stringify(cartItems)}</div>
    </div>
  );
};

describe('useCartStore', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should add item to cart successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Add Item'));

    await waitFor(() => {
      expect(CartService.addItemToCart).toHaveBeenCalledWith(1, {
        eventId: 3,
        quantity: 1,
        price: 300,
        priceFormula: 'FAMILY'
      });
      expect(screen.getByTestId('cartItems').textContent).toContain('FAMILY');
    });
  });

  it('should sync cart items successfully', async () => {
    LocalCartService.getStoredCartItems.mockReturnValue(mockCartItems);

    render(<TestComponent />);

    fireEvent.click(screen.getByText('Sync Cart Items'));

    await waitFor(() => {
      expect(CartService.addItemToCart).toHaveBeenCalledTimes(mockCartItems.length);
      expect(LocalCartService.clearStoredCartItems).toHaveBeenCalled();
      expect(screen.getByTestId('cartItems').textContent).toContain('SOLO');
    });
  });

  it('should update item in cart successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Update Item'));

    await waitFor(() => {
      expect(CartService.updateCartItem).toHaveBeenCalledWith(1, 1, 1, 5);
      expect(screen.getByTestId('cartItems').textContent).toContain('quantity":5');
    });
  });

  it('should remove item from cart successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Remove Item'));

    await waitFor(() => {
      expect(CartService.removeItemFromCart).toHaveBeenCalledWith(1, 1, 2);
      expect(screen.getByTestId('cartItems').textContent).not.toContain('DUO');
    });
  });

  it('should clear the cart successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Clear Cart'));

    await waitFor(() => {
      expect(LocalCartService.clearStoredCartAll).toHaveBeenCalled();
      expect(screen.getByTestId('cartItems').textContent).toBe('[]');
    });
  });

  it('should fetch cart items successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Fetch Cart Items'));

    await waitFor(() => {
      expect(CartService.findAllItemsInCart).toHaveBeenCalledWith(1, 1);
      expect(screen.getByTestId('cartItems').textContent).toContain('SOLO');
    });
  });
});
