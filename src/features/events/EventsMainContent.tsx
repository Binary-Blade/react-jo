import { useEventStore } from '@/stores/useEventStore';
import { useEffect } from 'react';
import { EventCard } from './EventCard';
import { EventTitlePage } from '@/components/all-events/EventTitlePage';
import { FilterSelectEvent } from '@/components/all-events/FilterSelectEvent';

export const EventsMainContent: React.FC = () => {
  const { events, fetchEvents } = useEventStore(state => ({
    events: state.events,
    fetchEvents: state.fetchEvents
  }));

  useEffect(() => {
    if (events.length === 0) {
      fetchEvents();
    }
  }, [fetchEvents, events.length]);

  return (
    <section className="w-full py-12 md:py-14 lg:py-14 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <EventTitlePage />
          <FilterSelectEvent />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {events.map(event => (
            <EventCard
              eventId={event.eventId}
              key={event.eventId}
              title={event.title}
              categoryType={event.categoryType}
              description={event.description}
              quantityAvailable={event.quantityAvailable}
              startDate={event.startDate}
              endDate={event.endDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
