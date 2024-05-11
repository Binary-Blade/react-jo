import { PlusIcon } from '@/components/ui/IconComponents';
import { Button } from '../ui/button';

export const ButtonAddEvent = () => {
  return (
    <>
      <h1 className="font-semibold text-lg">Events</h1>
      <div className="ml-auto flex gap-4">
        <Button variant="outline">
          <PlusIcon className="w-4 h-4 mr-2" />
          New Event
        </Button>
      </div>
    </>
  );
};
