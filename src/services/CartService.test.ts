import axiosClient from '@/config/axiosConfig';
import { CartService } from './CartService';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the axiosClient imports
vi.mock('@/config/axiosConfig', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn()
  }
}));

describe('CartService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  // Test for addItemToCart
  it('addItemToCart should resolve with CartItem on successful request', async () => {
    const userId = 1;
    const cartItemData = { productId: 2, quantity: 3 };
    const mockResponse = { data: { id: 1, ...cartItemData } };
    vi.mocked(axiosClient.post).mockResolvedValue(mockResponse);

    const response = await CartService.addItemToCart(userId, cartItemData);
    expect(response).toEqual(mockResponse.data);
    expect(axiosClient.post).toHaveBeenCalledWith(`/carts/items`, { userId, ...cartItemData });
  });

  it('addItemToCart should throw an error on failure', async () => {
    const userId = 1;
    const cartItemData = { productId: 2, quantity: 3 };
    vi.mocked(axiosClient.post).mockRejectedValue(new Error('Network error'));

    await expect(CartService.addItemToCart(userId, cartItemData)).rejects.toThrow(
      'Failed to add item to cart'
    );
  });

  // Test for findAllItemsInCart
  it('findAllItemsInCart should resolve with an array of CartItems on successful request', async () => {
    const userId = 1;
    const cartId = 2;
    const mockResponse = { data: [{ id: 3, userId, productId: 4, quantity: 5 }] };
    vi.mocked(axiosClient.get).mockResolvedValue(mockResponse);

    const response = await CartService.findAllItemsInCart(userId, cartId);
    expect(response).toEqual(mockResponse.data);
    expect(axiosClient.get).toHaveBeenCalledWith(`/carts/${cartId}/items`, { params: { userId } });
  });

  it('findAllItemsInCart should throw an error on failure', async () => {
    const userId = 1;
    const cartId = 2;
    vi.mocked(axiosClient.get).mockRejectedValue(new Error('Network error'));

    await expect(CartService.findAllItemsInCart(userId, cartId)).rejects.toThrow(
      'Failed to find items in cart'
    );
  });

  // Test for updateCartItem
  it('updateCartItem should resolve with CartItem on successful request', async () => {
    const userId = 1;
    const cartId = 2;
    const cartItemId = 3;
    const quantity = 4;
    const mockResponse = { data: { id: cartItemId, userId, quantity } };
    vi.mocked(axiosClient.patch).mockResolvedValue(mockResponse);

    const response = await CartService.updateCartItem(userId, cartId, cartItemId, quantity);
    expect(response).toEqual(mockResponse.data);
    expect(axiosClient.patch).toHaveBeenCalledWith(`/carts/${cartId}/items/${cartItemId}`, {
      userId,
      quantity
    });
  });

  it('updateCartItem should throw an error on failure', async () => {
    const userId = 1;
    const cartId = 2;
    const cartItemId = 3;
    const quantity = 4;
    vi.mocked(axiosClient.patch).mockRejectedValue(new Error('Network error'));

    await expect(CartService.updateCartItem(userId, cartId, cartItemId, quantity)).rejects.toThrow(
      'Failed to update cart item'
    );
  });

  // Test for removeItemFromCart
  it('removeItemFromCart should resolve with void on successful request', async () => {
    const userId = 1;
    const cartId = 2;
    const cartItemId = 3;
    const mockResponse = { data: {} }; // Assuming the delete returns empty object on success
    vi.mocked(axiosClient.delete).mockResolvedValue(mockResponse);

    const response = await CartService.removeItemFromCart(userId, cartId, cartItemId);
    expect(response).toEqual(mockResponse.data);
    expect(axiosClient.delete).toHaveBeenCalledWith(`/carts/${cartId}/items/${cartItemId}`, {
      params: { userId }
    });
  });

  it('removeItemFromCart should throw an error on failure', async () => {
    const userId = 1;
    const cartId = 2;
    const cartItemId = 3;
    vi.mocked(axiosClient.delete).mockRejectedValue(new Error('Network error'));

    await expect(CartService.removeItemFromCart(userId, cartId, cartItemId)).rejects.toThrow(
      'Failed to remove item from cart'
    );
  });
});
