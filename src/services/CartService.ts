import axiosClient from '@/config/axiosConfig';
import { CreateCartItemDto } from '@/config/dtos/CreateCartItem.dto';
import { CartItem } from '@/config/types/CartTypes';

/**
 * Service class for handling cart-related requests
 *
 * @class CartService
 */
export class CartService {
  /**
   * Sends a POST request to the server to add an item to the cart
   *
   * @static addItemToCart
   * @param {number} userId - The user's ID
   * @param {Partial<CreateCartItemDto>} cartItem - The cart item data
   * @return {Promise<CartItem>} The response data
   * @throws {Error} If the request fails
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
   * Sends a GET request to the server to find all items in the cart
   *
   * @static findAllItemsInCart
   * @param {number} userId - The user's ID
   * @param {number} cartId - The cart's ID
   * @return {Promise<CartItem[]>} The response data
   * @throws {Error} If the request fails
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
   * Sends a PATCH request to the server to update a cart item
   *
   * @static updateCartItem
   * @param {number} userId - The user's ID
   * @param {number} cartId - The cart's ID
   * @param {number} cartItemId - The cart item's ID
   * @param {number} quantity - The new quantity
   * @return {Promise<CartItem>} The response data
   * @throws {Error} If the request fails
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
   * Sends a DELETE request to the server to remove an item from the cart
   *
   * @static removeItemFromCart
   * @param {number} userId - The user's ID
   * @param {number} cartId - The cart's ID
   * @param {number} cartItemId - The cart item's ID
   * @return {Promise<void>} The response data
   * @throws {Error} If the request fails
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
