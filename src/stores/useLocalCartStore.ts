import { create } from 'zustand';
import { LocalCartService } from '@/services/LocalCartService';
import { LocalCartStoreType } from '@/config/types/Cart/LocalStorageTypes';

export const useLocalCartStore = create<LocalCartStoreType>(set => ({
  cartItemsLocal: LocalCartService.getStoredCartItems(),

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
  updateCartItemLocal: (eventId, updateData) => {
    set(state => {
      const newCartItems = state.cartItemsLocal.map(item =>
        item.eventId === eventId ? { ...item, ...updateData } : item
      );

      LocalCartService.setStoredCartItems(newCartItems);
      return { cartItemsLocal: newCartItems };
    });
  },

  removeCartItemLocal: (eventId, priceFormula) => {
    set(state => {
      const newCartItems = state.cartItemsLocal.filter(
        item => !(item.eventId === eventId && item.priceFormula === priceFormula)
      );
      LocalCartService.setStoredCartItems(newCartItems);
      return { cartItemsLocal: newCartItems };
    });
  },

  clearCartItemsLocal: () => {
    set(() => {
      LocalCartService.clearStoredCartItems();
      return { cartItemsLocal: [] };
    });
  },

  clearCartLocal: () => {
    set(() => {
      LocalCartService.clearStoredCartAll();
      return { cartItemsLocal: [], cartId: null };
    });
  }
}));

export default useLocalCartStore;
