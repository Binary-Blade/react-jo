import { DialogTrigger, Dialog, DialogContent } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarIcon, MapIcon, TicketIcon } from '@/components/ui/IconComponents';
import { TicketModal } from '@/features/ticket/TicketModal';
import { Badge } from '@/components/ui/badge';
import { EuroIcon } from 'lucide-react';
import { TbCategoryMinus } from 'react-icons/tb';
import { StatusPaymentEnum } from '@/config/enums/StatusPayment.enum';
import { Reservation } from '@/config/interfaces/reservation/reservation-type.interface';

interface CardReservationsProps {
  reservation: Reservation;
  statusPayment: string;
}

/**
 * `CardReservations` component displays details of a reservation.
 * It includes information about the event, price, and options to view the ticket if the payment is approved.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Reservation} props.reservation - The reservation details.
 * @param {string} props.statusPayment - The payment status of the reservation.
 * @returns {JSX.Element} The rendered CardReservations component.
 *
 * @example
 * return (
 *   <CardReservations
 *     reservation={reservation}
 *     statusPayment="APPROVED"
 *   />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `Card`, `CardContent`, `Button`, `Badge`, `Dialog`, `DialogTrigger`, `DialogContent` for the UI layout.
 * - `CalendarIcon`, `MapIcon`, `TicketIcon`, `EuroIcon` for the icons.
 * - `TicketModal` for displaying the ticket details in a modal.
 */
export const CardReservations = ({
  reservation,
  statusPayment
}: CardReservationsProps): JSX.Element => {
  return (
    <>
      <Card
        id={String(reservation.reservationId)}
        className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all 
        duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-rose-500 "
      >
        {/* Header with ticket title and price formula */}
        <div className="flex flex-row justify-between p-2">
          <div className="flex flex-row">
            <div className="flex items-center gap-1 text-md font-semibold">
              <TicketIcon className="w-5 h-5 text-rose-500" />
              {reservation.reservationDetails?.title}
            </div>
          </div>
          <Badge className="text-xs">{reservation.reservationDetails?.priceFormula}</Badge>
        </div>
        <CardContent>
          {/* Event category */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <TbCategoryMinus className="h-4 w-4" />
            <p>{reservation.reservationDetails.event.categoryType}</p>
          </div>
          {/* Event start date */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon className="h-4 w-4" />
            <span>{reservation.reservationDetails.event.startDate}</span>
          </div>
          {/* Event location */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <MapIcon className="h-4 w-4" />
            <span>Paris</span>
          </div>
          {/* Reservation price */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <EuroIcon className="h-4 w-4" />
            <span>{reservation.reservationDetails.price.toFixed(2)}</span>
          </div>
          {/* View Ticket Button */}
          <div className="mt-4 flex items-center justify-center">
            <div className="flex items-center gap-2">
              {statusPayment === StatusPaymentEnum.APPROVED && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 hover:bg-rose-500 hover:text-white"
                    >
                      <TicketIcon className="w-4 h-4" />
                      View Ticket
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <TicketModal
                      reservationId={reservation.reservationId}
                      title={reservation.reservationDetails?.title}
                    />
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
