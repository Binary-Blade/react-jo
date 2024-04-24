import { FC, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { CartContentProps } from "@/types/CartTypes";
import useGroupByTicketType from "@/hooks/useGroupByTicketType";
import { useAuthStore } from "@/stores/useAuthStore";
import useCartStore from "@/stores/useCartStore";
import { CheckOutPayment } from "../payment/CheckOutPayment";
import { CartCategories } from "./CartCategories";


export const CartContent: FC<CartContentProps> = ({ cartItems }) => {
    const groupedItems = useGroupByTicketType(cartItems);
    const { fetchCartItems, cartId } = useCartStore(state => ({
        fetchCartItems: state.fetchCartItems,
        cartId: state.cartId,
    }));

    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    const taxes = total * 0.1;
    const totalTaxes = total + taxes;


    const userId = useAuthStore(state => state.userId);

    useEffect(() => {
        if (userId && cartId) {
            fetchCartItems(userId, cartId);
        }
    }, [userId, fetchCartItems]);
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
                    <h2 className="text-xl font-bold mb-4">Checkout</h2>
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <span>Subtotal</span>
                            <span className="font-medium">${total}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>Taxes</span>
                            <span className="font-medium">${taxes}</span>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <span className="font-bold">Total</span>
                            <span className="font-bold">${totalTaxes}</span>
                        </div>
                        <CheckOutPayment cartId={cartId} />
                    </div>
                </div>
            </div>
        </>
    )
}
