import { CreateCartItemLocalDto } from '../../dtos/LocalCartItem.dto';

/**
 * `LocalCartStoreType` defines the structure of the local cart store.
 * It includes properties for local cart state and methods for handling local cart actions.
 *
 * @interface LocalCartStoreType
 * @property {CreateCartItemLocalDto[]} cartItemsLocal - An array of items currently in the local cart.
 * @property {function} addItemToCartLocal - Method to add an item to the local cart.
 * @property {function} updateCartItemLocal - Method to update the quantity of a local cart item.
 * @property {function} removeCartItemLocal - Method to remove an item from the local cart.
 * @property {function} clearCartItemsLocal - Method to clear all items in the local cart.
 * @property {function} clearCartLocal - Method to clear the local cart.
 *
 * @example
 * const localCartStore: LocalCartStoreType = {
 *   cartItemsLocal: [],
 *   addItemToCartLocal: (cartItem) => { / implementation / },
 *   updateCartItemLocal: (cartItemId, updateData) => { / implementation / },
 *   removeCartItemLocal: (eventId, priceFormula) => { / implementation / },
 *   clearCartItemsLocal: () => { / implementation / },
 *   clearCartLocal: () => { / implementation / }
 * };
 *
 * @remarks
 * This interface is used to type the local cart store, ensuring it contains the necessary properties
 * and methods for managing local cart state and actions within the application.
 */
export interface LocalCartStoreType {
  cartItemsLocal: CreateCartItemLocalDto[];

  /**
   * Method to add an item to the local cart.
   *
   * @param {any} cartItem - The item to be added to the local cart.
   */
  addItemToCartLocal: (cartItem: any) => void;

  /**
   * Method to update the quantity of a local cart item.
   *
   * @param {number} cartItemId - The ID of the cart item to be updated.
   * @param {Partial<CreateCartItemLocalDto>} updateData - The new data for the cart item.
   */
  updateCartItemLocal: (cartItemId: number, updateData: Partial<CreateCartItemLocalDto>) => void;

  updateCartItemQuantity: (eventId: number, priceFormula: string, quantity: number) => void;

  /**
   * Method to remove an item from the local cart.
   *
   * @param {number} eventId - The ID of the event associated with the cart item to be removed.
   * @param {string} priceFormula - The price formula associated with the cart item to be removed.
   */
  removeCartItemLocal: (eventId: number, priceFormula: string) => void;

  /**
   * Method to clear all items in the local cart.
   */
  clearCartItemsLocal: () => void;

  /**
   * Method to clear the local cart.
   */
  clearCartLocal: () => void;
}
