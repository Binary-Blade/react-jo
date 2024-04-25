import { FC, useEffect, useState, } from "react";
import useCartStore from "@/stores/useCartStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { CartItemsProps } from "@/types/CartTypes";

export const CartItems: FC<CartItemsProps> = ({ cartId, cartItemId, eventName, ticketPrice, quantity: initialQuantity }) => {
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

    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

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

