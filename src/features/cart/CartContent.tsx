import { FC, useEffect } from "react";
import useGroupByTicketType from "@/hooks/useGroupByTicketType";
import { useAuthStore } from "@/stores/useAuthStore";
import useCartStore from "@/stores/useCartStore";
import { CartCategories } from "./CartCategories";
import { CartEmpty } from "./CartEmpty";
import { TAXES_10 } from "@/utils/constants";
import { useReducePrice } from "@/hooks/useReducePrice";
import { CartCheckoutTotalPrice } from "./CartCheckoutTotalPrice";

export const CartContent: FC = () => {
    const { fetchCartItems, cartId, cartItems } = useCartStore(state => ({
        fetchCartItems: state.fetchCartItems,
        cartItems: state.cartItems,
        cartId: state.cartId,
    }));
    const userId = useAuthStore(state => state.userId);

    useEffect(() => {
        if (userId && cartId) {
            fetchCartItems(userId, cartId);
        }
    }, [userId, cartId, fetchCartItems]);

    const groupedItems = useGroupByTicketType(cartItems);
    const { total, taxes, totalTaxes } = useReducePrice(cartItems, item => item.price, TAXES_10);

    if (cartItems.length === 0) {
        return (
            <CartEmpty />
        );
    }

    return (
        <>
            <div className="container mx-auto py-12 px-4 md:px-6">
                <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(groupedItems).map(([type, items]) => (
                        <CartCategories
                            key={type}
                            ticketType={type}
                            items={items}
                        />
                    ))}
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mt-8">
                    <CartCheckoutTotalPrice
                        total={total}
                        taxes={taxes}
                        totalTaxes={totalTaxes}
                        cartId={cartId}
                    />
                </div>
            </div>
        </>
    )
}
