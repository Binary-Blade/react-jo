export interface CartStoreType {
    cartItems: CartItem[];
    cartId?: number | null;
    fetchCartItems: (userId: number, cartId: number) => Promise<void>;
    addItemToCart: (userId: number, cartItem: CreateCartItemDto) => Promise<void>;
    updateCartItem: (userId: number, cartId: number, cartItemId: number, updateData: number) => Promise<void>;
    removeCartItem: (userId: number, cartId: number, cartItemId: number) => Promise<void>;
    clearCart: () => void;
}

export interface CartItem {
    cartItemId: number;
    quantity: number;
    price: number;
    ticketType: string;
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


export interface CartItemsProps {
    cartId: number;
    cartItemId: number;
    eventName: string;
    ticketPrice: number;
    quantity: number;
}

export interface CartCategoriesProps {
    items: CartItem[];
    ticketType: string;
}

export interface CreateCartItemDto {
    eventId: number;
    quantity: number;
}

export interface CartContentProps {
    cartItems: CartItem[];
}

export interface GroupedItems {
    [key: string]: CartItem[];
}
