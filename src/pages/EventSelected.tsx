import { Footer } from '@/features/Footer';
import { Header } from '@/features/Header';
import { Separator } from '@/components/ui/separator';
import { ImagesCoverEvent } from '@/components/one-event/ImagesCoverEvent';
import { DesktopTitleEvent } from '@/components/one-event/DesktopTitleEvent';
import { MobileTitleEvent } from '@/components/one-event/MobileTitleEvent';
import { DescriptionSelectedEvent } from '@/components/one-event/DescriptionSelectedEvent';
import { useParams } from 'wouter';
import { useEventStore } from '@/stores/useEventStore';
import { useEffect } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { ReportedIssueButtonEvent } from '@/components/one-event/ReportedIssueButtonEvent';
import { useFormattedDates } from '@/hooks';
import { OverviewOneEvent } from '@/features/selected-event/OverviewOneEvent';
import { CardEventPrices } from '@/features/selected-event/CardEventPrices';
import useCartStore from '@/stores/useCartStore';
import useLocalCartStore from '@/stores/useLocalCartStore';

export default function EventSelected() {
  const { userId, isAuthenticated } = useAuthStore();
  const params = useParams();
  const eventId = Number(params.eventId);
  const { syncCartItems } = useCartStore();
  const { cartItemsLocal, addItemToCartLocal, removeCartItemLocal } = useLocalCartStore();
  const { getEvent, event } = useEventStore();
  const basePrice = event?.basePrice;
  const eventDate = useFormattedDates(event?.startDate, event?.endDate);

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
              <OverviewOneEvent
                quantitySold={event?.quantitySold}
                quantityAvailable={event?.quantityAvailable}
                basePrice={event?.basePrice}
              />
              <Separator />
              <DescriptionSelectedEvent
                shortDescription={event?.shortDescription}
                longDescription={event?.longDescription}
              />
            </div>
            <div className="grid gap-4 row-start-1 md:row-start-auto">
              <MobileTitleEvent title={event?.title} eventDate={eventDate} />
              <CardEventPrices
                eventId={eventId}
                userId={userId}
                isAuthenticated={isAuthenticated}
                basePrice={basePrice}
                syncCartItems={syncCartItems}
                cartItemsLocal={cartItemsLocal}
                addItemToCartLocal={addItemToCartLocal}
                removeCartItemLocal={removeCartItemLocal}
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
