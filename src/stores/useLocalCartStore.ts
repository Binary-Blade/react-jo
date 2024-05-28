import { create } from 'zustand';
import { LocalCartService } from '@/services/LocalCartService';
import { LocalCartStoreType } from '@/config/interfaces/cart/local-cart-items.interface';

/**
 * `useLocalCartStore` is a Zustand store for managing local cart state and actions.
 *
 * @constant
 *
 * @example
 * const { cartItemsLocal, addItemToCartLocal, removeCartItemLocal } = useLocalCartStore();
 *
 * @remarks
 * This store handles local cart operations such as adding, updating, removing, and clearing cart items.
 */
export const useLocalCartStore = create<LocalCartStoreType>(set => ({
  cartItemsLocal: LocalCartService.getStoredCartItems(),

  /**
   * Add an item to the local cart.
   *
   * @param  cartItem - The data for the cart item to add.
   *
   * @example
   * const cartItem: CreateCartItemLocalDto = { eventId: 1, priceFormula: 'standard', quantity: 2, price: 50, title: 'Event Title' };
   * useLocalCartStore.getState().addItemToCartLocal(cartItem);
   * console.log('Item added to local cart');
   */
  addItemToCartLocal: cartItem => {
    set(state => {
      // Find if the item already exists based on eventId and priceFormula
      const existingItemIndex = state.cartItemsLocal.findIndex(
        item => item.eventId === cartItem.eventId && item.priceFormula === cartItem.priceFormula
      );

      let newCartItems = [];

      // Prepare the object with only the necessary properties
      const newItem = {
        eventId: cartItem.eventId,
        priceFormula: cartItem.priceFormula,
        quantity: cartItem.quantity,
        price: cartItem.price,
        title: cartItem.title
      };

      if (existingItemIndex !== -1) {
        // Item exists, update it
        newCartItems = state.cartItemsLocal.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + cartItem.quantity } // Only update quantity
            : item
        );
      } else {
        // New item, add to cartItems
        newCartItems = [...state.cartItemsLocal, newItem];
      }

      // Store the new cart items array in local storage
      LocalCartService.setStoredCartItems(newCartItems);
      return { cartItemsLocal: newCartItems };
    });
  },

  /**
   * Update a local cart item.
   *
   * @param  eventId - The ID of the event.
   * @param updateData - The data to update the cart item with.
   *
   * @example
   * const updateData = { quantity: 3 };
   * useLocalCartStore.getState().updateCartItemLocal(1, updateData);
   * console.log('Local cart item updated');
   */
  updateCartItemLocal: (eventId, updateData) => {
    set(state => {
      const newCartItems = state.cartItemsLocal.map(item =>
        item.eventId === eventId ? { ...item, ...updateData } : item
      );

      LocalCartService.setStoredCartItems(newCartItems);
      return { cartItemsLocal: newCartItems };
    });
  },

  /**
   * Update the quantity of a local cart item.
   *
   * @param eventId - The ID of the event.
   * @param priceFormula - The price formula of the cart item.
   * @param newQuantity - The new quantity of the cart item.
   *
   * @example
   * useLocalCartStore.getState().updateCartItemQuantity(1, 'standard', 3);
   * console.log('Local cart item quantity updated');
   */
  updateCartItemQuantity: (eventId, priceFormula, newQuantity) => {
    set(state => {
      const newCartItems = state.cartItemsLocal.map(item =>
        item.eventId === eventId && item.priceFormula === priceFormula
          ? { ...item, quantity: newQuantity }
          : item
      );

      LocalCartService.setStoredCartItems(newCartItems);
      return { cartItemsLocal: newCartItems };
    });
  },
  /**
   * Remove a local cart item.
   *
   * @param eventId - The ID of the event.
   * @param priceFormula - The price formula of the cart item.
   *
   * @example
   * useLocalCartStore.getState().removeCartItemLocal(1, 'standard');
   * console.log('Local cart item removed');
   */
  removeCartItemLocal: (eventId, priceFormula) => {
    set(state => {
      const newCartItems = state.cartItemsLocal.filter(
        item => !(item.eventId === eventId && item.priceFormula === priceFormula)
      );
      LocalCartService.setStoredCartItems(newCartItems);
      return { cartItemsLocal: newCartItems };
    });
  },

  /**
   * Clear all local cart items.
   *
   *
   * @example
   * useLocalCartStore.getState().clearCartItemsLocal();
   * console.log('All local cart items cleared');
   */
  clearCartItemsLocal: () => {
    set(() => {
      LocalCartService.clearStoredCartItems();
      return { cartItemsLocal: [] };
    });
  },

  /**
   * Clear all local cart data.
   *
   *
   * @example
   * useLocalCartStore.getState().clearCartLocal();
   * console.log('Local cart cleared');
   */
  clearCartLocal: () => {
    set(() => {
      LocalCartService.clearStoredCartAll();
      return { cartItemsLocal: [], cartId: null };
    });
  }
}));

export default useLocalCartStore;
