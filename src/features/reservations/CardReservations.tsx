import { DialogTrigger, Dialog, DialogContent } from '@/components/ui/dialog';
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarIcon, TableIcon, TicketIcon } from '@/components/ui/IconComponents';
import { STATUSCOLOR } from '@/config/constants';
import { FC } from 'react';
import { Badge } from '@/components/ui/badge';
import { TicketModal } from '@/features/ticket/TicketModal';

type CardReservationsProps = {
  reservation: any;
};

export const CardReservations: FC<CardReservationsProps> = ({ reservation }) => {
  return (
    <>
      <Card
        id={reservation.reservationId}
        className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
      >
        <CardHeader>
          <div className="flex items-center justify-between gap-10">
            <CardTitle className="text-xl">{reservation.reservationDetails?.title}</CardTitle>
            <Badge
              className={`px-2 py-1 rounded-md text-sm font-medium ${STATUSCOLOR[reservation.transaction.statusPayment]}`}
            >
              {reservation.transaction.statusPayment}
            </Badge>
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
            <div className="text-lg font-semibold">
              €{reservation.reservationDetails.price.toFixed(2)}
            </div>
            <div className="flex items-center gap-2">
              {reservation.transaction.statusPayment === 'APPROVED' && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline" className="gap-2">
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
