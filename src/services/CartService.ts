import { CreateCartItemDto, UpdateCartItemDto } from '@/types/CartTypes';
import axiosClient from '@/utils/axiosConfig';

export class CartService {
  static async addItemToCart(userId: number, cartItem: CreateCartItemDto) {
    try {
      const response = await axiosClient.post(`/carts/items`, { userId, ...cartItem });
      return response.data;
    } catch (error) {
      throw new Error("Failed to add item to cart");
    }
  }

  static async findAllItemsInCart(userId: number, cartId: number) {
    try {
      const response = await axiosClient.get(`/carts/${cartId}/items`, { params: { userId } });
      return response.data;
    } catch (error) {
      throw new Error("Failed to find items in cart");
    }
  }

  static async updateCartItem(userId: number, cartId: number, cartItemId: number, updateData: UpdateCartItemDto) {
    try {
      const response = await axiosClient.patch(`/carts/${cartId}/items/${cartItemId}`, { ...updateData, userId });
      return response.data;
    } catch (error) {
      throw new Error("Failed to update cart item");
    }
  }

  static async removeItemFromCart(userId: number, cartId: number, cartItemId: number) {
    try {
      const response = await axiosClient.delete(`/carts/${cartId}/items/${cartItemId}`, { params: { userId } });
      return response.data;
    } catch (error) {
      throw new Error("Failed to remove item from cart");
    }
  }
}
