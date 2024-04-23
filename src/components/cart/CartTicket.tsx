import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TicketsItems } from "./TicketsItems";
import { CartTicketProps } from "@/types/CartTypes";
import useGroupByTicketType from "@/hooks/useGroupByTicketType";


export const CartTicket: FC<CartTicketProps> = ({ cartItems }) => {
    const groupedItems = useGroupByTicketType(cartItems);

    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    const taxes = total * 0.1;
    const totalTaxes = total + taxes;


    return (
        <>
            <div className="container mx-auto py-12 px-4 md:px-6">
                <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(groupedItems).map(([type, items]) => (
                        <TicketsItems
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
                        <Button className="w-full" size="lg">
                            Proceed to Payment
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
