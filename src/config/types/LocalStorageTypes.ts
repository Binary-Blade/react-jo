import { CreateCartItemDto } from "./CartTypes";

export interface CartItemLocal {
    quantity: number;
    price: number;
    priceFormula: string;
    eventId: number;
}

export interface LocalCartStoreType {
    cartItemsLocal: CartItemLocal[];
    addItemToCartLocal: (cartItem: CreateCartItemDto) => void;
    updateCartItemLocal: (cartItemId: number, updateData: Partial<CartItemLocal>) => void;
    removeCartItemLocal: (eventId: number, priceFormula: string) => void;
    clearCartLocal: () => void;
}
