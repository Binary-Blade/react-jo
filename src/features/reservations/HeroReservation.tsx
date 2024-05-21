import { StatusPaymentEnum } from '@/config/enums/StatusPayment.enum';
import { useAuthStore } from '@/stores/useAuthStore';
import useReservationStore from '@/stores/useReservationStore';
import { useUserStore } from '@/stores/useUserStore';
import { FC, useEffect } from 'react';

export const HeroReservation: FC = () => {
  const { reservations, fetchAllDataReservations } = useReservationStore();
  const { userId } = useAuthStore();
  const { selectedUser, fetchUserById } = useUserStore();
  // count number of event by reservation
  const uniqueEventCount = () => {
    const eventIds = new Set(); // Creation set to store unique eventIds
    reservations.forEach(reservation => {
      if (
        reservation.reservationDetails &&
        reservation.reservationDetails.event &&
        reservation.transaction &&
        reservation.transaction.statusPayment === StatusPaymentEnum.APPROVED
      ) {
        eventIds.add(reservation.reservationDetails.event.eventId);
      }
    });
    return eventIds.size; // Return the size of the set
  };

  useEffect(() => {
    if (userId) {
      fetchUserById(userId);
      fetchAllDataReservations(userId);
    }
  }, [userId, fetchUserById, fetchAllDataReservations]);

  const fullName = `${selectedUser?.firstName} ${selectedUser?.lastName}`;
  const numberEvents = uniqueEventCount();
  const reservationLength = reservations.length;

  return (
    <section className="w-full py-12 md:py-14 lg:py-16 bg-gray-950 text-gray-50 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl">
                Vos Transactions
              </h1>
              <p className="text-lg text-gray-400 md:text-xl">
                Bienvenue, {fullName}! Voici un récapitulatif de vos réservations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg mx-auto">
              <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold">{numberEvents}</h3>
                <p className="text-sm text-gray-400">Événements</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold">{reservationLength}</h3>
                <p className="text-sm text-gray-400">Billets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
