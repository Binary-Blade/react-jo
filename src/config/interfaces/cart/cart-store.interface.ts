import { CreateCartItemDto } from '@/config/dtos/CartItem.dto';
import { CartItem } from './cart-item.interface';

/**
 * `CartStoreType` defines the structure of the cart store.
 * It includes properties for cart state and methods for handling cart actions.
 *
 * @interface CartStoreType
 * @property {CartItem[]} cartItems - An array of items currently in the cart.
 * @property {number|null|undefined} cartId - The ID of the cart.
 * @property {boolean} loading - Indicates if a cart action is in progress.
 * @property {string|null} error - The error message if a cart action fails.
 * @property {function} fetchCartItems - Method to fetch cart items.
 * @property {function} addItemToCart - Method to add an item to the cart.
 * @property {function} updateCartItem - Method to update the quantity of a cart item.
 * @property {function} syncCartItems - Method to synchronize cart items.
 * @property {function} removeCartItem - Method to remove an item from the cart.
 * @property {function} clearCart - Method to clear the cart.
 *
 * @example
 * const cartStore: CartStoreType = {
 *   cartItems: [],
 *   cartId: null,
 *   loading: false,
 *   error: null,
 *   fetchCartItems: async (userId, cartId) => { / implementation / },
 *   addItemToCart: async (userId, cartItem) => { / implementation / },
 *   updateCartItem: async (userId, cartId, cartItemId, newQuantity) => { / implementation / },
 *   syncCartItems: async (userId) => { / implementation / },
 *   removeCartItem: async (userId, cartId, cartItemId) => { / implementation / },
 *   clearCart: () => { / implementation / }
 * };
 *
 * @remarks
 * This interface is used to type the cart store, ensuring it contains the necessary properties
 * and methods for managing cart state and actions within the application.
 */
export interface CartStoreType {
  cartItems: CartItem[];
  cartId?: number | null;
  loading: boolean;
  error: string | null;

  /**
   * Method to fetch cart items.
   *
   * @param {number} userId - The ID of the user.
   * @param {number} cartId - The ID of the cart.
   * @returns {Promise<void>} A promise that resolves when the cart items are fetched.
   */
  fetchCartItems: (userId: number, cartId: number) => Promise<void>;

  /**
   * Method to add an item to the cart.
   *
   * @param {number} userId - The ID of the user.
   * @param {CreateCartItemDto} cartItem - The item to be added to the cart.
   * @returns {Promise<void>} A promise that resolves when the item is added to the cart.
   */
  addItemToCart: (userId: number, cartItem: CreateCartItemDto) => Promise<void>;

  /**
   * Method to update the quantity of a cart item.
   *
   * @param {number} userId - The ID of the user.
   * @param {number} cartId - The ID of the cart.
   * @param {number} cartItemId - The ID of the cart item to be updated.
   * @param {number} newQuantity - The new quantity of the cart item.
   * @returns {Promise<void>} A promise that resolves when the cart item is updated.
   */
  updateCartItem: (
    userId: number,
    cartId: number,
    cartItemId: number,
    newQuantity: number
  ) => Promise<void>;

  /**
   * Method to synchronize cart items.
   *
   * @param {number} userId - The ID of the user.
   * @returns {Promise<void>} A promise that resolves when the cart items are synchronized.
   */
  syncCartItems: (userId: number) => Promise<void>;

  /**
   * Method to remove an item from the cart.
   *
   * @param {number} userId - The ID of the user.
   * @param {number} cartId - The ID of the cart.
   * @param {number} cartItemId - The ID of the cart item to be removed.
   * @returns {Promise<void>} A promise that resolves when the item is removed from the cart.
   */
  removeCartItem: (userId: number, cartId: number, cartItemId: number) => Promise<void>;

  /**
   * Method to clear the cart.
   */
  clearCart: () => void;
}
