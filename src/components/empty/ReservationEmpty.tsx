import { Link } from 'wouter';
import { CalendarIcon } from '../ui/IconComponents';

export const ReservationEmpty = () => {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="flex flex-col items-center justify-center">
        <CalendarIcon className="w-16 h-16 text-gray-400" />
        <h2 className="text-xl font-semibold mt-4">No Reservations</h2>
        <p className="text-gray-500 mt-2">
          You currently have no reservations. Check back later or make a new reservation.
        </p>
        <Link className="mt-4" href="/events">
          Make a Reservation
        </Link>
      </section>
    </main>
  );
};
