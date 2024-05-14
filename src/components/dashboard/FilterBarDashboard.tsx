import { Button } from '@/components/ui/button';
import { PopoverTrigger, PopoverContent, Popover } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { ArrowLeftIcon, CalendarClockIcon } from '@/components/ui/IconComponents';

type FilterBarDashboardProps = {
  title: string;
};
export const FilterBarDashboard = ({ title }: FilterBarDashboardProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="block lg:hidden">
        <Button size="icon" variant="outline">
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
      </div>
      <h1 className="font-semibold text-lg md:text-xl">{title}</h1>
      <div className="ml-auto flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="w-[280px] justify-start text-left font-normal"
              id="date"
              variant="outline"
            >
              <CalendarClockIcon className="mr-2 h-4 w-4" />
              June 01, 2023 - June 30, 2023
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-auto p-0">
            <Calendar initialFocus mode="range" numberOfMonths={2} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
