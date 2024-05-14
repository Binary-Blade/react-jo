import { Card } from '@/components/ui/card';
import { PlusIcon } from '@/components/ui/IconComponents';
import { AddNewEvent } from '@/components/dashboard/AddNewEvent';
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

export const CardAddEvent = () => {
  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger asChild>
        <Button className="w-44">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Card className="mt-4">
          <AddNewEvent />
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
};
