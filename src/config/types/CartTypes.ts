import { EventType } from "./EventTypes";

export interface CartStoreType {
    cartItems: CartItem[];
    cartId?: number | null;
    fetchCartItems: (userId: number, cartId: number) => Promise<void>;
    addItemToCart: (userId: number, cartItem: CreateCartItemDto) => Promise<void>;
    aggregateCartData: () => { total: number; taxes: number; totalTaxes: number };
    updateCartItem: (userId: number, cartId: number, cartItemId: number, newQuantity: number) => Promise<void>;
    syncCartItems: (userId: number) => Promise<void>;
    removeCartItem: (userId: number, cartId: number, cartItemId: number) => Promise<void>;
    clearCart: () => void;
}

export interface CreateCartItemDto {
    eventId: number;
    quantity: number;
    price: number;
    priceFormula: string;
}

export interface CartItem {
    cartItemId: number;
    quantity: number;
    price: number;
    priceFormula: string;
    eventId: number;
    event: EventType;
    cart: {
        cartId: number;
    };
    createdAt: string;
    updatedAt: string;
}

export interface CartItemsProps {
    cartId: number;
    cartItemId: number;
    eventName: string;
    quantity: number;
    startDate: string;
    endDate: string;
}

export interface CartFormuleProps {
    priceFormula: string;
    items: CartItem[];
}
