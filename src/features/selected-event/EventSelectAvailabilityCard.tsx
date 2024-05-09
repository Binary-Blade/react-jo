import { CalendarCheckIcon, TicketIcon } from "@/assets/icons/IconComponents"

export const EventSelectAvailabilityCard = ({ quantityAvailable, basePrice }) => {
  return (
    <>
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 flex items-center justify-center">
          <CalendarCheckIcon className="w-7 h-7" />
        </div>
        <div className="grid gap-0.5">
          <div className="font-semibold">Available Spots : {quantityAvailable}</div>
          <div className="text-gray-500 text-sm dark:text-gray-400">Hurry, limited spots available!</div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 flex items-center justify-center">
          <TicketIcon className="w-7 h-7" />
        </div>
        <div className="grid gap-0.5">
          <div className="font-semibold">Reserve Your Seats Now!</div>
          <div className="text-gray-500 text-sm dark:text-gray-400">
            Ticket for just one person starting at just {basePrice}.
          </div>
        </div>
      </div>
    </>
  )
};
