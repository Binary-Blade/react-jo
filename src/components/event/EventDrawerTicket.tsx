import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { EventPropsType } from "@/types/EventTypes"
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { useCallback, useEffect, useState } from "react";
import { useEventStore } from "@/stores/useEventStore";

enum TicketType {
  SOLO = 'Solo',
  DUO = 'Duo',
  FAMILY = 'Family'
}

export const EventDrawerTicket: React.FC<EventPropsType> = ({
  eventId,
  title,
  description,
  imageSrc,
  quantityAvailable,
  basePrice
}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState<TicketType>(TicketType.SOLO);
  const [currentPrice, setCurrentPrice] = useState(basePrice);

  const fetchPrice = useCallback(async () => {
    if (!eventId) {
      return console.error("Event ID is missing");
    }
    const priceResponse = await useEventStore.getState().getTicketPrice(eventId, selectedTicketType);
    if (!priceResponse) return console.error("Failed to fetch ticket price");
    setCurrentPrice(priceResponse.price);
  }, [eventId, selectedTicketType]);

  useEffect(() => {
    fetchPrice().catch(console.error);
  }, [fetchPrice]);

  const handleSelectChange = useCallback((newValue: string) => {
    setSelectedTicketType(newValue as TicketType);
  }, []);

  return (
    <>
      <h3 className="font-semibold text-lg group-hover:underline">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 line-clamp-2">{description}</p>
      <Drawer open={isDrawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerTrigger asChild>
          <Button className="w-full" variant="default">Select Tickets</Button>
        </DrawerTrigger>
        <DrawerContent>
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
                  <span className="text-2xl font-bold"> ${currentPrice}</span>
                </div>
              </div>
              <div className="grid gap-4">
                <Select value={selectedTicketType} onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(TicketType).map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="w-full">Buy Ticket</Button>
              </div>
            </div>
          </div>
        </DrawerContent>

      </Drawer>
    </>
  )
}



