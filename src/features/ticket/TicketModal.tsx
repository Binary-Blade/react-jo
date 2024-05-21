import { useEffect } from 'react';
import { DialogTitle, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import useReservationStore from '@/stores/useReservationStore';

interface TicketPageProps {
  reservationId: number;
  title?: string;
}

export const TicketModal = ({ reservationId, title }: TicketPageProps) => {
  const { fetchOneReservation, reservation } = useReservationStore(state => ({
    reservation: state.reservation,
    fetchOneReservation: state.catchTicket
  }));

  useEffect(() => {
    fetchOneReservation(reservationId);
  }, [fetchOneReservation, reservationId]);

  const QRCODEURL = reservation?.ticket?.qrCode;
  return (
    <div>
      <DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <DialogTitle className="text-3xl"> Votre Ticket</DialogTitle>
          <DialogDescription>
            Faites scanner ce QR Code à l'entrée de l'événement.
          </DialogDescription>
        </div>
      </DialogHeader>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex items-center justify-center mb-6">
          <img
            src={QRCODEURL}
            alt="Ticket QR Code"
            className="object-contain"
            style={{
              aspectRatio: '200/200',
              objectFit: 'cover'
            }}
            width="200"
            height="200"
          />
        </div>
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold mb-2"> {title}</h1>
          <p className="text-gray-600 dark:text-gray-400">Numéro : {reservation?.reservationId}</p>
        </div>
        <div className="flex flex-col items-center"></div>
      </div>
    </div>
  );
};
