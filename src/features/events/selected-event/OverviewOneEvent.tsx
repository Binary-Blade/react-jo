import { Separator } from '@/components/ui/separator';
import { CardContent, Card } from '@/components/ui/card';
import { AwardIcon, TicketIcon } from '@/components/ui/IconComponents';

type OlympicsOverviewEventSelectedProps = {
  quantitySold: number | undefined;
  quantityAvailable: number | undefined;
  basePrice: number | undefined;
};

/**
 * `OverviewOneEvent` component provides an overview of a selected Olympic event.
 * It displays information about tickets sold, availability, and base price.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {number | undefined} props.quantitySold - The number of tickets sold.
 * @param {number | undefined} props.quantityAvailable - The number of tickets available.
 * @param {number | undefined} props.basePrice - The base price of the tickets.
 * @returns {JSX.Element} The rendered overview of the selected event.
 *
 * @example
 * return (
 *   <OverviewOneEvent
 *     quantitySold={150}
 *     quantityAvailable={50}
 *     basePrice={75}
 *   />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Card`, `CardContent` for card layout.
 * - `Separator` for separating content sections.
 * - `AwardIcon`, `CalendarCheckIcon`, `StarIcon`, `TicketIcon` for displaying icons.
 */
export const OverviewOneEvent = ({
  quantitySold,
  quantityAvailable,
  basePrice
}: OlympicsOverviewEventSelectedProps): JSX.Element => {
  return (
    <>
      <Card className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <CardContent className="p-6 flex items-center gap-6">
          {/* AwardIcon: Icon representing the event */}
          <AwardIcon className="w-10 h-10 text-rose-500" />
          <div className="flex-1 font-semibold text-gray-900 dark:text-gray-100 hidden sm:flex md:hidden lg:flex">
            Vivez l'excitation des Jeux Olympiques dans la Ville Lumière !
          </div>
          <div className="flex items-center gap-6 ml-auto">
            {/* Quantity available */}
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col items-center text-center">
                <div className="text-2xl font-semibold text-rose-500 dark:text-gray-100 tracking-tighter">
                  {quantityAvailable}
                </div>
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  Quantité disponible
                </div>
              </div>
            </div>
            <Separator className="h-9" orientation="vertical" />
            {/* Tickets sold section */}
            <div className="flex flex-col items-center text-center">
              <div className="text-2xl font-semibold text-rose-500 dark:text-gray-100 tracking-tighter">
                {quantitySold}
              </div>
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                Quantité vendue
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />
      <div className="flex items-center gap-6">
        {/* TicketIcon: Icon representing ticket price */}
        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full">
          <TicketIcon className="w-7 h-7 text-rose-500" />
        </div>
        <div className="grid gap-0.5">
          <div className="font-semibold text-gray-900 dark:text-gray-100">
            Réservez vos places maintenant !
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Billet pour une personne à partir de seulement {basePrice}.
          </div>
        </div>
      </div>
    </>
  );
};
