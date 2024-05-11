import { Separator } from '@/components/ui/separator';
import { CardContent, Card } from '@/components/ui/card';
import { AwardIcon, StarIcon } from '@/components/ui/IconComponents';
import { FC } from 'react';

type OlympicsOverviewEventSelectedProps = {
  quantitySold: number | undefined;
};

export const OlympicsOverviewEventSelected: FC<OlympicsOverviewEventSelectedProps> = ({
  quantitySold
}) => {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6 flex items-center gap-6 relative">
        <AwardIcon className="w-10 h-10" />
        <div className="flex-1 font-semibold max-w-[16rem] hidden sm:flex md:hidden lg:flex">
          Experience the thrill of the Olympic Games in the City of Lights!
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
  );
};
