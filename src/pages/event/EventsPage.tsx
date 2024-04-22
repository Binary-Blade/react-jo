import Footer from "@/components/common/footer/Footer";
import { Header } from "@/components/common/header/Header";
import imageTicket from '@/assets/images/GamesTicketOptions.svg'
import { EventCard } from "@/components/event/EventCard";
import { EventHero } from "@/components/event/EventHero";
import { EventTitle } from "@/components/event/EventTitle";
import { useEventStore } from "@/stores/useEventStore";
import { useEffect } from "react";

export default function EventsPage() {

  const { events, fetchEvents } = useEventStore(state => ({
    events: state.events,
    fetchEvents: state.fetchEvents,
  }));

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <>
      <Header />
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <EventHero />
      </div>
      <div className="container grid gap-8 md:py-4 px-4 md:px-6">
        <EventTitle />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map(event => (
            <EventCard
              key={event.eventId}
              eventId={event.eventId}
              title={event.title}
              description={event.description}
              imageSrc={imageTicket}
              basePrice={event.basePrice}
              quantityAvailable={event.quantityAvailable}
            />

          ))}
        </div >
      </div>
      <Footer />
    </>
  )
}
