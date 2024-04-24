import React, { useState } from "react";
import { EventPropsType } from "@/types/EventTypes";
import { EventDrawerContent } from "./EventDrawerContent";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export const EventCard: React.FC<EventPropsType> = ({
    eventId,
    title,
    description,
    imageSrc,
    basePrice,
    quantityAvailable
}) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className="relative group grid gap-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 transition-all hover:scale-[1.02] hover:shadow-lg">
            <img
                alt={title}
                className="object-cover w-full aspect-[3/2] group-hover:opacity-90 transition-opacity"
                src={imageSrc}
            />
            <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg group-hover:underline">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">{description}</p>
                <Drawer open={isDrawerOpen} onOpenChange={setDrawerOpen}>
                    <DrawerTrigger asChild>
                        <Button className="w-full" variant="default">Buy Tickets</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <EventDrawerContent
                            eventId={eventId}
                            basePrice={basePrice}
                            title={title}
                            description={description}
                            imageSrc={imageSrc}
                            quantityAvailable={quantityAvailable}
                        />
                    </DrawerContent>
                </Drawer>
            </div>
        </div >
    );
};


