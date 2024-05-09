import { CartItemLocal } from "@/config/types/CartTypes";

export class LocalCartService {

  /**
  * Fetches the cart ID stored in localStorage.
  *
  * @returns {number | null} The cart ID if found, otherwise null.
  * @static
  * @memberof LocalCartService
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

  static getStoredCartItems(): any[] {
    try {
      const items = localStorage.getItem('cartItems');
      return items ? JSON.parse(items) : [];
    } catch (error) {
      console.error("Failed to retrieve 'cartItems' from localStorage:", error);
      return [];
    }
  }

  static setStoredCartItems(cartItems: CartItemLocal[]): void {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to set 'cartItems' in localStorage:", error);
    }
  }

  static clearStoredCartItems(): void {
    try {
      localStorage.removeItem('cartItems');
      localStorage.removeItem('cartId');
      localStorage.removeItem('cartIdExpiry');
    } catch (error) {
      console.error("Failed to clear cart data from localStorage:", error);
    }
  }
}
