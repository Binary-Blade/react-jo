import { EventSelectTypes, TicketType } from "./EventSelectTypes";
import { BuyTicketButton } from "../cart/BuyTicketButton";
import { FC } from "react";
import useCartStore from "@/stores/useCartStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { useTicketManager } from "@/hooks/useTicketManage";
import { EventPropsType } from "@/types/EventTypes";

export const EventDrawerContent: FC<EventPropsType> = ({
    title,
    description,
    imageSrc,
    quantityAvailable,
    basePrice,
    eventId
}) => {
    const addItemToCart = useCartStore((state) => state.addItemToCart);
    const userId = useAuthStore((state) => state.userId);
    const {
        selectedTicketType,
        quantity,
        currentPrice,
        handleTicketTypeChange
    } = useTicketManager(basePrice, eventId, TicketType.SOLO);

    const handleBuyTicket = async () => {
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
            await addItemToCart(userId, cartItem);
            alert('Ticket added to cart successfully!');
        } catch (error) {
            console.error('Error adding ticket to cart:', error);
            alert('Failed to add ticket to cart.');
        }
    };

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
                    <BuyTicketButton onClick={handleBuyTicket} isLoading={false} />
                </div>
            </div>
        </div>
    );
};
