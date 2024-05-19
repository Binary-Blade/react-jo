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
      <Card>
        <CardContent className="p-4 sm:p-6 flex items-center gap-6 relative">
          <AwardIcon className="w-10 h-10" />
          <div className="flex-1 font-semibold max-w-[16rem] hidden sm:flex md:hidden lg:flex">
            Vivez l'excitation des Jeux Olympiques dans la Ville Lumière !
          </div>
          <div className="flex items-center gap-6 ml-auto">
            <div className="flex flex-col gap-1 text-center">
              <div className="text-2xl font-semibold tracking-tighter">4.8</div>
              <div className="flex items-center gap-1">
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5" />
              </div>
            </div>
            <Separator className="h-9" orientation="vertical" />
            <div className="flex flex-col gap-0.5 text-center">
              <div className="text-2xl font-semibold tracking-tighter">{quantitySold}</div>
              <div className="text-xs font-semibold">Tickets Sold</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 flex items-center justify-center">
          <CalendarCheckIcon className="w-7 h-7" />
        </div>
        <div className="grid gap-0.5">
          <div className="font-semibold">Places disponibles : {quantityAvailable}</div>
          <div className="text-gray-500 text-sm dark:text-gray-400">
            Dépêchez-vous, places limitées disponibles !
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 flex items-center justify-center">
          <TicketIcon className="w-7 h-7" />
        </div>
        <div className="grid gap-0.5">
          <div className="font-semibold">Réservez vos places maintenant !</div>
          <div className="text-gray-500 text-sm dark:text-gray-400">
            Billet pour une personne à partir de seulement {basePrice}.
          </div>
        </div>
      </div>
    </>
  );
};
