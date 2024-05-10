import { create } from 'zustand';
import { LocalCartService } from '@/services/LocalCartService';
import { CreateCartItemDto } from '@/config/types/CartTypes';
import { LocalCartStoreType } from '@/config/types/LocalStorageTypes';

export const useLocalCartStore = create<LocalCartStoreType>((set) => ({
    cartItemsLocal: LocalCartService.getStoredCartItems(),

    addItemToCartLocal: (cartItem: CreateCartItemDto) => {
        set((state) => {
            // Find if the item with the same eventId and priceFormula already exists
            const existingItemIndex = state.cartItemsLocal.findIndex(item =>
                item.eventId === cartItem.eventId && item.priceFormula === cartItem.priceFormula);

            let newCartItems = [];

            if (existingItemIndex !== -1) {
                // Item exists, update it completely
                newCartItems = state.cartItemsLocal.map((item, index) =>
                    index === existingItemIndex ? { ...item, ...cartItem, quantity: item.quantity + cartItem.quantity } : item
                );
            } else {
                // New item, add to cartItems
                newCartItems = [...state.cartItemsLocal, cartItem];
            }

            LocalCartService.setStoredCartItems(newCartItems);
            return { cartItemsLocal: newCartItems };
        });
    },

    updateCartItemLocal: (eventId, updateData) => {
        set((state) => {
            const newCartItems = state.cartItemsLocal.map(item =>
                item.eventId === eventId ? { ...item, ...updateData } : item
            );

            LocalCartService.setStoredCartItems(newCartItems);
            return { cartItemsLocal: newCartItems };
        });
    },

    removeCartItemLocal: (eventId, priceFormula) => {
        set((state) => {
            const newCartItems = state.cartItemsLocal.filter(item =>
                !(item.eventId === eventId && item.priceFormula === priceFormula));
            LocalCartService.setStoredCartItems(newCartItems);
            return { cartItemsLocal: newCartItems };
        });
    },

    clearCartLocal: () => {
        set(() => {
            LocalCartService.clearStoredCartItems();
            return { cartItemsLocal: [], cartId: null };
        });
    }
}));

export default useLocalCartStore;
