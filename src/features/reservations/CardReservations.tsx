import { DialogTrigger, Dialog, DialogContent } from '@/components/ui/dialog';
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarIcon, TableIcon, TicketIcon } from '@/assets/icons/IconComponents';
import { STATUSCOLOR } from '@/config/constants';
import { TicketModal } from './TicketModal';
import { FC } from 'react';

type CardReservationsProps = {
  index: number;
  reservation: any;
};

export const CardReservations: FC<CardReservationsProps> = ({ index, reservation }) => {
  return (
    <>
      <Card key={index} id={reservation.reservationId}>
        <CardHeader>
          <div className="flex items-center gap-4">
            <CardTitle>{reservation.reservationDetails?.title}</CardTitle>
            <div
              className={`px-2 py-1 rounded-md text-xs font-medium ${STATUSCOLOR[reservation.transaction.statusPayment]}`}
            >
              {reservation.transaction.statusPayment}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Ref: {reservation.user?.userId}-{reservation.reservationId}-
              {reservation.transaction.paymentId}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon className="h-4 w-4" />
            <span>{reservation.reservationDetails.event.startDate}</span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <TableIcon className="w-4 h-4" />
            <span>{reservation.reservationDetails?.priceFormula} Formula</span>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-lg font-semibold">${reservation.reservationDetails.price}</div>
            <div className="flex items-center gap-2">
              {reservation.transaction.statusPayment === 'APPROVED' && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="gap-2">
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
