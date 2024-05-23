import { CreateCartItemLocalDto } from '@/config/dtos/LocalCartItem.dto';

/**
 * `LocalCartService` provides methods for managing cart-related operations using the browser's localStorage.
 * It includes methods for getting and setting the cart ID and items, and clearing stored cart data.
 *
 * @class LocalCartService
 */
export class LocalCartService {
  /**
   * Get the stored cart ID from localStorage.
   *
   * @returns {number | null} The stored cart ID, or null if not found or expired.
   *
   * @example
   * const cartId = LocalCartService.getStoredCartId();
   * console.log(cartId);
   */
  static getStoredCartId(): number | null {
    try {
      const item = localStorage.getItem('cartId');
      const expiry = localStorage.getItem('cartIdExpiry');
      const now = new Date();

      if (!item || !expiry) {
        return null;
      }
      if (now.getTime() > parseInt(expiry)) {
        localStorage.removeItem('cartId');
        localStorage.removeItem('cartIdExpiry');
        return null;
      }
      return parseInt(item);
    } catch (error) {
      console.error("Failed to retrieve 'cartId' from localStorage:", error);
      return null;
    }
  }

  /**
   * Set the cart ID in localStorage with an expiry time.
   *
   * @param {number} cartId - The cart ID to store.
   *
   * @example
   * LocalCartService.setStoredCartId(123);
   */
  static setStoredCartId(cartId: number): void {
    try {
      const now = new Date();
      const expiry = now.getTime() + 6 * 60 * 60 * 1000; // 6 hours
      localStorage.setItem('cartId', String(cartId));
      localStorage.setItem('cartIdExpiry', String(expiry));
    } catch (error) {
      console.error("Failed to set 'cartId' in localStorage:", error);
    }
  }

  /**
   * Get the stored cart items from localStorage.
   *
   * @returns {any[]} An array of stored cart items.
   *
   * @example
   * const cartItems = LocalCartService.getStoredCartItems();
   * console.log(cartItems);
   */
  static getStoredCartItems(): any[] {
    try {
      const items = localStorage.getItem('cartItems');
      return items ? JSON.parse(items) : [];
    } catch (error) {
      console.error("Failed to retrieve 'cartItems' from localStorage:", error);
      return [];
    }
  }

  /**
   * Set the cart items in localStorage.
   *
   * @param {CreateCartItemLocalDto[]} cartItems - The cart items to store.
   *
   * @example
   * const cartItems: CreateCartItemLocalDto[] = [
   *   { eventId: 1, priceFormula: 'standard', quantity: 2, price: 50 }
   * ];
   * LocalCartService.setStoredCartItems(cartItems);
   */
  static setStoredCartItems(cartItems: CreateCartItemLocalDto[]): void {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to set 'cartItems' in localStorage:", error);
    }
  }

  /**
   * Clear the stored cart items from localStorage.
   *
   * @example
   * LocalCartService.clearStoredCartItems();
   */
  static clearStoredCartItems(): void {
    try {
      localStorage.removeItem('cartItems');
    } catch (error) {
      console.error('Failed to clear cart data from localStorage:', error);
    }
  }

  /**
   * Clear all stored cart data from localStorage.
   *
   * @example
   * LocalCartService.clearStoredCartAll();
   */
  static clearStoredCartAll(): void {
    try {
      localStorage.removeItem('cartItems');
      localStorage.removeItem('cartId');
      localStorage.removeItem('cartIdExpiry');
    } catch (error) {
      console.error('Failed to clear cart data from localStorage:', error);
    }
  }
}
