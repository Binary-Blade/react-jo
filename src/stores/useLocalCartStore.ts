import { create } from 'zustand';
import { LocalCartService } from '@/services/LocalCartService';
import { CartItemLocal, CreateCartItemDto } from '@/config/types/CartTypes';

interface LocalCartStoreType {
    cartItems: CartItemLocal[];
    addItemToCartLocal: (cartItem: CreateCartItemDto) => void;
    updateCartItemLocal: (cartItemId: number, updateData: Partial<CartItemLocal>) => void;
    removeCartItemLocal: (eventId: number, priceFormula: string) => void;
    clearCartLocal: () => void;
}


export const useLocalCartStore = create<LocalCartStoreType>((set) => ({
    cartItems: LocalCartService.getStoredCartItems(),

    addItemToCartLocal: (cartItem: CreateCartItemDto) => {
        set((state) => {
            // Find if the item with the same eventId and priceFormula already exists
            const existingItemIndex = state.cartItems.findIndex(item =>
                item.eventId === cartItem.eventId && item.priceFormula === cartItem.priceFormula);

            let newCartItems = [];

            if (existingItemIndex !== -1) {
                // Item exists, update it completely
                newCartItems = state.cartItems.map((item, index) =>
                    index === existingItemIndex ? { ...item, ...cartItem, quantity: item.quantity + cartItem.quantity } : item
                );
            } else {
                // New item, add to cartItems
                newCartItems = [...state.cartItems, cartItem];
            }

            LocalCartService.setStoredCartItems(newCartItems);
            return { cartItems: newCartItems };
        });
    },

    updateCartItemLocal: (eventId, updateData) => {
        set((state) => {
            const newCartItems = state.cartItems.map(item =>
                item.eventId === eventId ? { ...item, ...updateData } : item
            );

            LocalCartService.setStoredCartItems(newCartItems);
            return { cartItems: newCartItems };
        });
    },

    removeCartItemLocal: (eventId, priceFormula) => {
        set((state) => {
            const newCartItems = state.cartItems.filter(item =>
                !(item.eventId === eventId && item.priceFormula === priceFormula));
            LocalCartService.setStoredCartItems(newCartItems);
            return { cartItems: newCartItems };
        });
    },

    clearCartLocal: () => {
        set(() => {
            LocalCartService.clearStoredCartItems();
            return { cartItems: [], cartId: null };
        });
    }
}));

export default useLocalCartStore;
