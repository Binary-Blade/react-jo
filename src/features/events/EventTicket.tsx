import { Button } from "@/components/ui/button"
import { EventPropsType } from "@/types/EventTypes"
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { useState } from "react";
import { EventDrawerContent } from "./EventDrawerContent";

export const EventDrawer: React.FC<EventPropsType> = ({
  eventId,
  title,
  description,
  imageSrc,
  quantityAvailable,
  basePrice
}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
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
    </>
  )
}
