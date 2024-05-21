import { Separator } from '@/components/ui/separator';
import { CardContent, Card } from '@/components/ui/card';
import { AwardIcon, CalendarCheckIcon, StarIcon, TicketIcon } from '@/components/ui/IconComponents';
import { FC } from 'react';

type OlympicsOverviewEventSelectedProps = {
  quantitySold: number | undefined;
  quantityAvailable: number | undefined;
  basePrice: number | undefined;
};

export const OverviewOneEvent: FC<OlympicsOverviewEventSelectedProps> = ({
  quantitySold,
  quantityAvailable,
  basePrice
}) => {
  return (
    <>
      <Card className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <CardContent className="p-6 flex items-center gap-6">
          <AwardIcon className="w-10 h-10 text-rose-500" />
          <div className="flex-1 font-semibold text-gray-900 dark:text-gray-100 hidden sm:flex md:hidden lg:flex">
            Vivez l'excitation des Jeux Olympiques dans la Ville Lumière !
          </div>
          <div className="flex items-center gap-6 ml-auto">
            <div className="flex flex-col items-center text-center">
              <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tighter">
                4.8
              </div>
              <div className="flex items-center gap-1">
                <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                <StarIcon className="w-4 h-4 fill-current text-gray-300" />
              </div>
            </div>
            <Separator className="h-9" orientation="vertical" />
            <div className="flex flex-col items-center text-center">
              <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tighter">
                {quantitySold}
              </div>
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                Tickets Sold
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      <div className="flex items-center gap-6 mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full">
          <CalendarCheckIcon className="w-7 h-7 text-rose-500" />
        </div>
        <div className="grid gap-0.5">
          <div className="font-semibold text-gray-900 dark:text-gray-100">
            Places disponibles : {quantityAvailable}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Dépêchez-vous, places limitées disponibles !
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
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
