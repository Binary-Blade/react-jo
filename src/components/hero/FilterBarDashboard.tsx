import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from '@/components/ui/IconComponents';

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
    </div>
  );
};
