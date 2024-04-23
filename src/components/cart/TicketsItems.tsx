import { CartItem } from "@/types/CartTypes";
import { FC, useState, } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import useCartStore from "@/stores/useCartStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { Label } from "../ui/label";

interface TicketItemProps {
    cartId: number;
    cartItemId: number;
    eventName: string;
    ticketPrice: number;
    quantity: number;
}

const TicketItem: FC<TicketItemProps> = ({ cartId, cartItemId, eventName, ticketPrice, quantity: initialQuantity }) => {
    const updateCartItem = useCartStore((state) => state.updateCartItem);
    const removeCartItem = useCartStore((state) => state.removeCartItem);
    const [quantity, setQuantity] = useState<number>(initialQuantity);
    const userId = useAuthStore((state) => state.userId);

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
        updateCartItem(userId, cartId, cartItemId, newQuantity);
    };
    const handleRemoveItem = () => {
        removeCartItem(userId, cartId, cartItemId).catch(console.error);
    };

    return (
        <div className="flex items-center justify-between">
            <div>
                <h3 className="font-medium">{eventName} </h3>
                <div className="flex items-center gap-1">
                    <div className="flex items-center gap-2">
                        <Label>Quantity</Label>
                        <Input className="w-16 text-center" type="number" value={quantity.toString()} onChange={e => handleQuantityChange(Number(e.target.value))} />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-medium">${ticketPrice}</span>

                <Button size="icon" variant="outline" onClick={handleRemoveItem}>
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                </Button>
            </div>
        </div >
    );
};


interface TicketsItemsProps {
    items: CartItem[];
    ticketType: string;
}

export const TicketsItems: FC<TicketsItemsProps> = ({ items, ticketType }) => {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-7">
            <h2 className="text-xl font-bold mb-4">{ticketType} Tickets</h2>
            <div className="grid gap-4">
                {items.map((item) => (
                    <TicketItem
                        key={item.cartItemId}
                        cartId={item.cart.cartId} // Ensure this property is passed down correctly
                        cartItemId={item.cartItemId}
                        eventName={item.event.title}
                        ticketPrice={item.price}
                        quantity={item.quantity}
                    />
                ))}
            </div>
        </div>
    );
};

function TrashIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}
