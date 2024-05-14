import { Footer } from '@/features/Footer';
import { Header } from '@/features/Header';
import { Separator } from '@/components/ui/separator';
import { ImagesCoverEvent } from '@/components/one-event/ImagesCoverEvent';
import { DesktopTitleEvent } from '@/components/one-event/DesktopTitleEvent';
import { MobileTitleEvent } from '@/components/one-event/MobileTitleEvent';
import { DescriptionSelectedEvent } from '@/components/one-event/DescriptionSelectedEvent';
import { OlympicsOverviewEventSelected } from '@/features/selected-event/OlympicsOverviewEventSelected';
import { EventSelectAvailabilityCard } from '@/features/selected-event/EventSelectAvailabilityCard';
import { TicketPriceReserveCart } from '@/features/selected-event/TicketPriceReserveCart';
import { useParams } from 'wouter';
import { useEventStore } from '@/stores/useEventStore';
import { useEffect } from 'react';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';
import { useAuthStore } from '@/stores/useAuthStore';
import { ReportedIssueButtonEvent } from '@/components/one-event/ReportedIssueButtonEvent';
import { useFormattedDates, useTicketManager } from '@/hooks';

export default function EventSelected() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const params = useParams();
  const eventId = Number(params.eventId);
  const { getEvent, event } = useEventStore(state => ({
    getEvent: state.getEvent,
    event: state.event
  }));

  const basePrice = event?.basePrice;
  const eventDate = useFormattedDates(event?.startDate, event?.endDate);
  const initialTicketType = PriceFormula.SOLO;
  const { selectedTicketType, quantity, setQuantity, currentPrice, handleTicketTypeChange } =
    useTicketManager(basePrice, eventId, initialTicketType);

  useEffect(() => {
    getEvent(eventId);
  }, [eventId, getEvent]);

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="max-w-6xl mx-auto p-4 lg:px-6 sm:py-8 md:py-10">
          <section className="hidden sm:flex flex-col gap-4 sm:flex-row sm:items-center pb-4 sm:pb-8">
            <h1 className="text-xl lg:text-3xl font-semibold tracking-tight">
              Buy Tickets for the Olympic Games Paris 2024
            </h1>
          </section>

          <ImagesCoverEvent />

          <section className="py-8 grid md:grid-cols-2 lg:grid-cols-[1fr_400px] gap-8 sm:gap-12 md:gap-16 items-start">
            <div className="grid gap-8 row-start-2 md:row-start-auto">
              <DesktopTitleEvent title={event?.title} eventDate={eventDate} />
              <OlympicsOverviewEventSelected quantitySold={event?.quantitySold} />
              <Separator />
              <EventSelectAvailabilityCard
                quantityAvailable={event?.quantityAvailable}
                basePrice={event?.basePrice}
              />
              <Separator />
              <DescriptionSelectedEvent description={event?.description} />
            </div>
            <div className="grid gap-4 row-start-1 md:row-start-auto">
              <MobileTitleEvent title={event?.title} eventDate={eventDate} />
              <TicketPriceReserveCart
                eventId={eventId}
                currentPrice={currentPrice}
                selectedTicketType={selectedTicketType}
                quantity={quantity}
                setQuantity={setQuantity}
                handleTicketTypeChange={handleTicketTypeChange}
                isAuthenticated={isAuthenticated}
              />
              <ReportedIssueButtonEvent />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
