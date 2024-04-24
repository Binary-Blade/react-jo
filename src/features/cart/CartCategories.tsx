import { FC } from "react";
import { Toaster } from "@/components/ui/toaster"
import { XIcon } from "@/assets/icons/IconComponents";
import { CartItems } from "./CartItems";
import { CartCategoriesProps } from "@/types/CartTypes";

export const CartCategories: FC<CartCategoriesProps> = ({ items, ticketType }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <XIcon className="h-5 w-5" />
                <span className="sr-only">Remove</span>
            </button>
            <h2 className="text-2xl font-bold mb-4 border-b pb-4">{ticketType} Tickets</h2>
            <div className="grid gap-4">
                {items.map((item) => (
                    <CartItems
                        key={item.cartItemId}
                        cartId={item.cart.cartId}
                        cartItemId={item.cartItemId}
                        eventName={item.event.title}
                        ticketPrice={item.price}
                        quantity={item.quantity}
                    />
                ))}
            </div>
            <Toaster />
        </div>
    );
};

