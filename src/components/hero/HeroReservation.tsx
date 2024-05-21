import { FC } from 'react';

interface HeroReservationProps {
  fullName: string;
  numberEvents: number;
  totalTickets: number;
}

export const HeroReservation: FC<HeroReservationProps> = ({
  fullName,
  numberEvents,
  totalTickets
}) => {
  return (
    <section className="w-full py-12 md:py-14 lg:py-16 bg-gray-950 text-gray-50 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl">
                {fullName}'s Reservations
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
                Attending the 2024 Olympic Games in Paris, France.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg mx-auto">
              <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold">{numberEvents}</h3>
                <p className="text-sm text-gray-400">Events</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold">{totalTickets}</h3>
                <p className="text-sm text-gray-400">Tickets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
