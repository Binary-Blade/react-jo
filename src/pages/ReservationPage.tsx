import { HeroReservation } from '@/components/hero/HeroReservation';
import { Footer } from '@/features/Footer';
import { Header } from '@/features/header/Header';
import { AllReservations } from '@/features/reservations/AllReservations';
import { useAuthStore } from '@/stores/useAuthStore';
import useReservationStore from '@/stores/useReservationStore';
import { useUserStore } from '@/stores/useUserStore';
import { useEffect } from 'react';

export default function ReservationPage() {
  const { reservations, total } = useReservationStore();
  const { userId } = useAuthStore();
  const { selectedUser, fetchUserById } = useUserStore();

  // count number of event by reservation
  const uniqueEventCount = () => {
    const eventIds = new Set(); // Création d'un Set pour stocker les eventId uniques
    reservations.forEach(reservation => {
      if (
        reservation &&
        reservation.reservationDetails.event &&
        reservation.transaction.statusPayment === 'APPROVED'
      ) {
        eventIds.add(reservation.reservationDetails.event.eventId);
      }
    });
    return eventIds.size; // Retourne le nombre d'éléments uniques dans le Set
  };
  useEffect(() => {
    if (userId) {
      fetchUserById(userId);
    }
  }, [userId, fetchUserById]);

  const fullName = `${selectedUser?.firstName} ${selectedUser?.lastName}`;
  const numberEvents = uniqueEventCount();

  return (
    <>
      <Header />
      <HeroReservation fullName={fullName} numberEvents={numberEvents} totalTickets={total} />
      <div className="flex flex-col min-h-screen">
        <AllReservations />
      </div>
      <Footer />
    </>
  );
}
