import { CartItem } from "@/types/CartTypes";
import { FC, useState, } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import useCartStore from "@/stores/useCartStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { Label } from "../ui/label";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "../ui/use-toast";
import { TrashIcon } from "lucide-react";

interface TicketItemProps {
    cartId: number;
    cartItemId: number;
    eventName: string;
    ticketPrice: number;
    quantity: number;
}

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
            setQuantity(1);
        } else {
            setQuantity(newQuantity);
            updateCartItem(userId, cartId, cartItemId, newQuantity);
        }
    };

    const handleRemoveItem = () => {
        if (cartId === null || userId === null) {
            console.error('Invalid operation without cartId or cartItemId');
            return; // Stop further execution
        }
        removeCartItem(userId, cartId, cartItemId).catch(console.error);
        toast({
            title: "Ticket removed from cart",
            description: `You have removed ${quantity} ${eventName} ticket(s) from your cart.`,
        });
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
            <Toaster />
        </div>
    );
};

