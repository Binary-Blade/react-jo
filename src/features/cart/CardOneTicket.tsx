import { Button } from "@/components/ui/button"
import { MinusIcon, PlusIcon } from "@/assets/icons/IconComponents"
import { FC, useEffect, useState, } from "react";
import useCartStore from "@/stores/useCartStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { CartItemsProps } from "@/config/types/CartTypes";
import useFormattedDateRange from "@/hooks/useFormattedEventDates";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const CardOneTicket: FC<CartItemsProps> = ({
    cartId,
    cartItemId,
    eventName,
    quantity: initialQuantity,
    startDate,
    endDate,
}) => {
    const updateCartItem = useCartStore((state) => state.updateCartItem);
    const removeCartItem = useCartStore((state) => state.removeCartItem);
    const userId = useAuthStore((state) => state.userId);

    const dateText = useFormattedDateRange(startDate, endDate);
    const [quantity, setQuantity] = useState<number>(initialQuantity);
    const [showDialog, setShowDialog] = useState<boolean>(false);

    const handleIncrement = () => handleQuantityChange(quantity + 1);
    const handleDecrement = () => {
        if (quantity === 1) {
            setShowDialog(true);
        } else if (quantity > 1) {
            handleQuantityChange(quantity - 1);
        }
    };

    const handleQuantityChange = (newQuantity: number) => {
        if (cartId === null || userId === null) {
            console.error('Invalid operation without cartId or cartItemId');
            return; // Stop further execution
        }
        setQuantity(newQuantity);
        updateCartItem(userId, cartId, cartItemId, newQuantity);
    };

    const confirmRemoveItem = () => {
        handleRemoveItem();
        setShowDialog(false);
    };

    const cancelRemoveItem = () => {
        setShowDialog(false);
    }

    const handleRemoveItem = () => {
        if (cartId === null || userId === null) {
            console.error('Invalid operation without cartId or cartItemId');
            return;
        }
        removeCartItem(userId, cartId, cartItemId).catch(console.error);
    };

    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);


    return (
        <div className="flex items-center justify-between">
            <div>
                <h3 className="font-semibold">{eventName}</h3>
                <p className="text-gray-500 dark:text-gray-400">{dateText}</p>
            </div>
            <div className="flex items-center gap-2">
                <Button size="icon" variant="outline" onClick={handleDecrement}>
                    <MinusIcon className="h-4 w-4" />
                </Button>
                <span className="font-medium">{quantity}</span>
                <Button size="icon" variant="outline" onClick={handleIncrement}>
                    <PlusIcon className="h-4 w-4" />
                </Button>

            </div>
            <Separator />
            <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
                <AlertDialogContent>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently remove the item from your cart.
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={cancelRemoveItem}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmRemoveItem}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};
