import { useEffect, } from "react";
import { DialogTitle, DialogDescription, DialogHeader } from "@/components/ui/dialog"
import useReservationStore from "@/stores/useReservationStore";

interface TicketPageProps {
  reservationId: number;
}

export const TicketModal = ({ reservationId }: TicketPageProps) => {
  const { fetchOneReservation, reservation } = useReservationStore(state => ({
    reservation: state.reservation,
    fetchOneReservation: state.fetchOneReservation,
  }));

  useEffect(() => {
    fetchOneReservation(reservationId);
  }, [fetchOneReservation, reservationId]);

  const QRCODEURL = reservation?.ticket?.qrCode;

  return (
    <div>
      <DialogHeader>
        <DialogTitle>Your Ticket: {reservation?.reservationId}</DialogTitle>
        <DialogDescription>Scan the QR code at the venue to access your ticket.</DialogDescription>
      </DialogHeader>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex items-center justify-center mb-6">
          <img
            src={QRCODEURL}
            alt="Ticket QR Code"
            className="object-contain"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
            height="200"
          />
        </div>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Paris 2024</h1>
          <p className="text-gray-600 dark:text-gray-400">Scan the QR code to access your digital ticket</p>
        </div>
        <div className="flex flex-col items-center">
        </div>
      </div>
    </div>
  );
}
