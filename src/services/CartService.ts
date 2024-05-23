import axiosClient from '@/config/axiosConfig';
import { CreateCartItemDto } from '@/config/dtos/CartItem.dto';
import { CartItem } from '@/config/interfaces/cart/cart-item.interface';

/**
 * `CartService` provides methods for managing cart-related operations.
 * It includes methods for adding items to the cart, finding all items in a cart, updating cart items, and removing items from the cart.
 *
 * @class CartService
 */
export class CartService {
  /**
   * Add an item to the cart.
   *
   * @param {number} userId - The ID of the user adding the item.
   * @param {Partial<CreateCartItemDto>} cartItem - The data for the cart item to add.
   * @returns {Promise<CartItem>} The response from the server.
   *
   * @example
   * const cartItem: Partial<CreateCartItemDto> = {
   *   eventId: 1,
   *   priceFormula: 'standard',
   *   quantity: 2,
   *   price: 50
   * };
   * const response = await CartService.addItemToCart(1, cartItem);
   * console.log(response);
   */
  static async addItemToCart(
    userId: number,
    cartItem: Partial<CreateCartItemDto>
  ): Promise<CartItem> {
    try {
      const response = await axiosClient.post(`/carts/items`, { userId, ...cartItem });
      return response.data;
    } catch (error) {
      throw new Error('Failed to add item to cart');
    }
  }

  /**
   * Find all items in the cart.
   *
   * @param {number} userId - The ID of the user.
   * @param {number} cartId - The ID of the cart.
   * @returns {Promise<CartItem[]>} The response from the server.
   *
   * @example
   * const response = await CartService.findAllItemsInCart(1, 10);
   * console.log(response);
   */
  static async findAllItemsInCart(userId: number, cartId: number): Promise<CartItem[]> {
    try {
      const response = await axiosClient.get(`/carts/${cartId}/items`, { params: { userId } });
      return response.data;
    } catch (error) {
      throw new Error('Failed to find items in cart');
    }
  }

  /**
   * Update an item in the cart.
   *
   * @param {number} userId - The ID of the user.
   * @param {number} cartId - The ID of the cart.
   * @param {number} cartItemId - The ID of the cart item.
   * @param {number} quantity - The new quantity of the cart item.
   * @returns {Promise<CartItem>} The response from the server.
   *
   * @example
   * const response = await CartService.updateCartItem(1, 10, 5, 3);
   * console.log(response);
   */
  static async updateCartItem(
    userId: number,
    cartId: number,
    cartItemId: number,
    quantity: number
  ): Promise<CartItem> {
    try {
      const response = await axiosClient.patch(`/carts/${cartId}/items/${cartItemId}`, {
        userId,
        quantity
      });
      return response.data;
    } catch (error) {
      console.error('Failed to update cart item', error);
      throw new Error('Failed to update cart item');
    }
  }

  /**
   * Remove an item from the cart.
   *
   * @param {number} userId - The ID of the user.
   * @param {number} cartId - The ID of the cart.
   * @param {number} cartItemId - The ID of the cart item.
   * @returns {Promise<void>} The response from the server.
   *
   * @example
   * await CartService.removeItemFromCart(1, 10, 5);
   * console.log('Item removed from cart');
   */
  static async removeItemFromCart(
    userId: number,
    cartId: number,
    cartItemId: number
  ): Promise<void> {
    try {
      const response = await axiosClient.delete(`/carts/${cartId}/items/${cartItemId}`, {
        params: { userId }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to remove item from cart');
    }
  }
}
