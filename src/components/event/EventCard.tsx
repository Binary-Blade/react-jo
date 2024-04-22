import React from "react";
import { EventPropsType } from "@/types/EventTypes";
import { EventDrawerTicket } from "./EventDrawerTicket";

export const EventCard: React.FC<EventPropsType> = ({
    eventId,
    title,
    description,
    imageSrc,
    basePrice,
    quantityAvailable
}) => {
    return (
        <div className="relative group grid gap-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 transition-all hover:scale-[1.02] hover:shadow-lg">
            <img
                alt={title}
                className="object-cover w-full aspect-[3/2] group-hover:opacity-90 transition-opacity"
                src={imageSrc}
            />
            <div className="p-4 flex flex-col gap-2">
                <EventDrawerTicket
                    eventId={eventId}
                    title={title}
                    description={description}
                    imageSrc={imageSrc}
                    quantityAvailable={quantityAvailable}
                    basePrice={basePrice}
                />
            </div>
        </div >
    );
};
