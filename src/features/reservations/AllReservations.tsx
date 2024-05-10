import { TabsTrigger, TabsList, TabsContent, Tabs } from '@/components/ui/tabs';
import useReservationStore from '@/stores/useReservationStore';
import { CardReservations } from './CardReservations';
import { PaginationComponent } from '@/components/common/PaginationComponent';

export const AllReservations = () => {
  const { reservations } = useReservationStore(state => ({
    reservations: state.reservations
  }));

  if (!reservations.length) {
    return <p>No reservation data available.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 lg:px-6 sm:py-8 md:py-10">
      <Tabs defaultValue="approved">
        <TabsList>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        <TabsContent value="approved">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {reservations.map((reservation, index) => (
              <CardReservations index={index} reservation={reservation} />
            ))}
          </div>
          <PaginationComponent />
        </TabsContent>
      </Tabs>
    </div>
  );
};
