import { DialogTrigger, Dialog, DialogContent } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarIcon, MapIcon, TicketIcon } from '@/components/ui/IconComponents';
import { FC } from 'react';
import { TicketModal } from '@/features/ticket/TicketModal';
import { Badge } from '@/components/ui/badge';
import { EuroIcon } from 'lucide-react';
import { TbCategoryMinus } from 'react-icons/tb';
import { Reservation } from '@/config/types/Reservation/ReservationTypes';

type CardReservationsProps = {
  reservation: Reservation;
  statusPayment: string;
};

export const CardReservations: FC<CardReservationsProps> = ({ reservation, statusPayment }) => {
  console.log(typeof reservation.reservationId);
  return (
    <>
      <Card
        id={String(reservation.reservationId)}
        className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all 
        duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-rose-500 "
      >
        <div className="flex flex-row justify-between p-2">
          <div className="flex flex-row ">
            <div className="flex items-center gap-1 text-md font-semibold">
              <TicketIcon className="w-5 h-5 text-rose-500" />
              {reservation.reservationDetails?.title}
            </div>
          </div>
          <Badge className="text-xs">{reservation.reservationDetails?.priceFormula}</Badge>
        </div>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <TbCategoryMinus className="h-4 w-4" />
            <p>{reservation.reservationDetails.event.categoryType}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon className="h-4 w-4" />
            <span>{reservation.reservationDetails.event.startDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <MapIcon className="h-4 w-4" />
            <span>Paris</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <EuroIcon className="h-4 w-4" />
            <span>{reservation.reservationDetails.price.toFixed(2)}</span>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <div className="flex items-center gap-2">
              {statusPayment === 'APPROVED' && (
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
                    <TicketModal reservationId={reservation.reservationId} />
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
