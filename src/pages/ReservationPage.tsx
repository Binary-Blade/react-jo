import { Footer } from '@/features/Footer';
import { Header } from '@/features/Header';
import { AllReservations } from '@/features/reservations/AllReservations';
import { HeroReservation } from '@/features/reservations/HeroReservation';
import { useAuthStore } from '@/stores/useAuthStore';
import useReservationStore from '@/stores/useReservationStore';
import { useEffect } from 'react';

// FIX: Fix to refresh the page when the user will navigate to that page
export default function ReservationPage() {
  const { reservations, fetchReservations } = useReservationStore(state => ({
    reservations: state.reservations,
    fetchReservations: state.fetchReservations
  }));

  const userId = useAuthStore(state => state.userId);

  useEffect(() => {
    if (userId) {
      fetchReservations(userId);
    }
  }, [fetchReservations, userId]);
  console.log(reservations);
  return (
    <>
      <Header />

      <HeroReservation />
      <div className="flex flex-col min-h-screen">
        <AllReservations />
      </div>
      <Footer />
    </>
  );
}
