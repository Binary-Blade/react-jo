import { FC, useCallback } from "react";
import useCartStore from "@/stores/useCartStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { useTicketManager } from "@/hooks/useTicketManage";
import { EventPropsType } from "@/types/EventTypes";
import { navigate } from "wouter/use-browser-location";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { TicketButton } from "@/components/common/buttons/TicketButton";
import { TicketType } from "@/enums/TicketType.enum";
import { EventSelectTypes } from "@/components/events/EventSelectTypes";

export const EventDrawerContent: FC<EventPropsType> = ({
    title,
    description,
    imageSrc,
    quantityAvailable,
    basePrice,
    eventId
}) => {
    const { toast } = useToast()
    const addItemToCart = useCartStore((state) => state.addItemToCart);
    const userId = useAuthStore((state) => state.userId);
    const {
        selectedTicketType,
        quantity,
        currentPrice,
        handleTicketTypeChange
    } = useTicketManager(basePrice, eventId, TicketType.SOLO);

    const handleBuyTicket = useCallback(async () => {
        if (!eventId || !selectedTicketType) {
            alert('Please select a valid event and ticket type.');
            return;
        }
        const cartItem = {
            eventId,
            ticketType: selectedTicketType,
            quantity,
            price: currentPrice
        };
        try {
            if (!userId) {
                alert('Please login to add tickets to your cart.');
                return;
            }
            await addItemToCart(userId, cartItem);
            toast({
                title: "Ticket added to cart",
                description: `You have added ${quantity} ${selectedTicketType} ticket(s) to your cart.`,
            });
        } catch (error) {
            console.error('Error adding ticket to cart:', error);
            alert('Failed to add ticket to cart.');
        }
    }, [userId, eventId, selectedTicketType, quantity, currentPrice, addItemToCart, toast]);

    return (
        <div className="m-10 grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
            <img
                alt="Olympic Event"
                className="rounded-xl w-full aspect-video object-cover"
                height={600}
                src={imageSrc}
                width={800}
            />
            <div className="space-y-4">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        {description}
                    </p>
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                        <span className="text-base font-medium">Available Places</span>
                        <span className="text-base font-medium">{quantityAvailable}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-base font-medium">Price</span>
                        <span className="text-2xl font-bold">${currentPrice}</span>
                    </div>
                </div>
                <div className="grid gap-4">
                    <EventSelectTypes
                        selectedType={selectedTicketType}
                        onChange={handleTicketTypeChange}
                    />
                    <div className="flex gap-2">
                        <TicketButton
                            onClick={handleBuyTicket}
                            isLoading={false}
                            variant="default"
                            text="Add to cart"
                        />
                        <TicketButton
                            onClick={() => navigate('/cart')}
                            isLoading={false}
                            variant="outline"
                            text="Buy now"
                        />
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};
