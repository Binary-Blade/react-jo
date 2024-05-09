
export interface CartStoreType {
    cartItems: CartItem[];
    cartId?: number | null;
    fetchCartItems: (userId: number, cartId: number) => Promise<void>;
    addItemToCart: (userId: number, cartItem: CreateCartItemDto) => Promise<void>;
    syncCartItems: (userId: number) => Promise<void>;
    updateCartItem: (userId: number, cartId: number, cartItemId: number, updateData: number) => Promise<void>;
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
    createdAt: string;
    updatedAt: string;
    eventId: number;
    event: {
        title: string;
    };
    cart: {
        cartId: number;
    };
}
export interface CartItemLocal {
    quantity: number;
    price: number;
    priceFormula: string;
    eventId: number;
}

export interface CartItemsProps {
    cartId: number;
    cartItemId: number;
    eventName: string;
    ticketPrice: number;
    quantity: number;
}

export interface CartCategoriesProps {
    items: CartItem[];
    formuleType: string;
}

export interface CartContentProps {
    cartItems: CartItem[];
}

export interface GroupedItems {
    [key: string]: CartItem[];
}
