import { Card } from '@/components/ui/card';
import { PlusIcon } from '@/components/ui/IconComponents';
import { AddNewEvent } from '@/components/dashboard/AddNewEvent';
import { FilterBarDashboard } from '@/components/dashboard/FilterBarDashboard';
import { HeaderCardInfo } from '@/components/dashboard/HeaderCardInfo';
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { TableGenericData } from '@/components/tables/TableGenericData';
import { useEventStore } from '@/stores/useEventStore';
import { useEffect, useState } from 'react';
import { DashboardHeader } from '@/components/navigation/DashboardHeader';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { eventColumns } from './eventColumns';
import { generateCardDataEvent } from './generateCardDataEvent';
import { GenericAlertDialog } from '@/components/common/AlertDialogGeneric';

export const EventsDashboard = () => {
  const { deleteEvent, fetchEvents, events } = useEventStore();
  const eventColumn = eventColumns();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const totalQuantity = events.reduce((acc, event) => acc + event.quantityAvailable, 0);
  const totalSold = events.reduce((acc, event) => acc + event.quantitySold, 0);
  const totalRevenue = events.reduce((acc, event) => acc + event.revenueGenerated, 0);
  const cardDataEvent = generateCardDataEvent(totalQuantity, totalSold, totalRevenue);

  const handleDelete = item => {
    setSelectedEvent(item);
    setShowDialog(true);
  };

  const confirmDelete = async () => {
    if (selectedEvent) {
      await deleteEvent(selectedEvent.eventId);
      setShowDialog(false);
    }
  };

  return (
    <>
      <DashboardHeader />
      <FilterBarDashboard title="Events" />
      <HeaderCardInfo cardData={cardDataEvent} />
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
      <div className="border shadow-sm rounded-lg">
        <TableGenericData data={events} columns={eventColumn} onDelete={handleDelete} />
        {showDialog && (
          <GenericAlertDialog
            isOpen={showDialog}
            onClose={() => setShowDialog(false)}
            onConfirm={confirmDelete}
            title="Are you sure?"
            description="This action cannot be undone. This will permanently delete the event."
          />
        )}
      </div>
    </>
  );
};
