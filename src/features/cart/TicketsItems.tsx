import { CartItem } from "@/types/CartTypes";
import { FC, useState, } from "react";
import useCartStore from "@/stores/useCartStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { Toaster } from "@/components/ui/toaster"
import { XIcon } from "@/assets/icons/IconComponents";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

interface TicketItemProps {
    cartId: number;
    cartItemId: number;
    eventName: string;
    ticketPrice: number;
    quantity: number;
}

interface TicketsItemsProps {
    items: CartItem[];
    ticketType: string;
}

export const TicketsItems: FC<TicketsItemsProps> = ({ items, ticketType }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <XIcon className="h-5 w-5" />
                <span className="sr-only">Remove</span>
            </button>
            <h2 className="text-2xl font-bold mb-4 border-b pb-4">{ticketType} Tickets</h2>
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
            <Toaster />
        </div>
    );
};

const TicketItem: FC<TicketItemProps> = ({ cartId, cartItemId, eventName, ticketPrice, quantity: initialQuantity }) => {
    const { toast } = useToast();
    const updateCartItem = useCartStore((state) => state.updateCartItem);
    const removeCartItem = useCartStore((state) => state.removeCartItem);
    const [quantity, setQuantity] = useState<number>(initialQuantity);
    const userId = useAuthStore((state) => state.userId);

    const handleQuantityChange = (newQuantity: number) => {
        if (cartId === null || userId === null) {
            console.error('Invalid operation without cartId or cartItemId');
            return; // Stop further execution
        }
        if (newQuantity < 1) {
            handleRemoveItem();
        } else {
            setQuantity(newQuantity);
            updateCartItem(userId, cartId, cartItemId, newQuantity);
        }
    };

    const handleRemoveItem = () => {
        if (cartId === null || userId === null) {
            console.error('Invalid operation without cartId or cartItemId');
            return;
        }
        removeCartItem(userId, cartId, cartItemId).catch(console.error);
        toast({
            title: "Ticket removed from cart",
            description: `You have removed ${quantity} ${eventName} ticket(s) from your cart.`,
        });
    };

    return (
        <div>
            <h3 className="font-medium">{eventName}</h3>
            <div className="flex justify-between items-center">
                <p className="text-gray-500 dark:text-gray-400"> Date </p>
                <div className="flex items-center gap-2">
                    <Input
                        className="form-input w-14 text-center border-gray-300 rounded-md"
                        type="number" value={quantity.toString()}
                        onChange={e => handleQuantityChange(Number(e.target.value))}
                    />
                    <span className="font-medium">${ticketPrice}</span>
                </div>
            </div>
        </div>
    );
};

