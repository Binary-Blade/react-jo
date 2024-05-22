import { Footer } from '@/features/Footer';
import { Separator } from '@/components/ui/separator';
import { useParams } from 'wouter';
import { useEventStore } from '@/stores/useEventStore';
import { useEffect } from 'react';
import { useFormattedDates } from '@/hooks';
import useLocalCartStore from '@/stores/useLocalCartStore';
import { Header } from '@/features/header/Header';
import { OverviewOneEvent } from '@/features/events/selected-event/OverviewOneEvent';
import { ImagesCoverEvent } from '@/components/cards/ImagesCoverEvent';
import { GenericTitle } from '@/components/hero/GenericTitle';
import { DescriptionCollapsible } from '@/components/collapsible/DescriptionCollapsible';
import { AddItemEventToCart } from '@/features/events/selected-event/AddItemEventToCart';
import { EventHero } from '@/components/hero/EventHero';
import { ReturnButton } from '@/components/button/ReturnButton';

export default function EventSelectedPage() {
  const params = useParams();
  const eventId = Number(params.eventId);
  const { addItemToCartLocal } = useLocalCartStore();
  const { getEvent, event } = useEventStore();
  const basePrice = event?.basePrice;
  const eventDate = useFormattedDates(event?.startDate, event?.endDate);
  const title = event?.title;

  useEffect(() => {
    getEvent(eventId);
  }, [eventId, getEvent]);

  return (
    <>
      <Header />
      <EventHero />
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8">
          <section className="hidden sm:flex flex-col gap-4 sm:flex-row sm:items-center pb-4 sm:pb-8">
            <ReturnButton href="/events" />
            <h1 className="text-2xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Achetez des billets pour les Jeux Olympiques de Paris 2024
            </h1>
          </section>
          <ImagesCoverEvent />
          <section className="py-8 grid md:grid-cols-2 lg:grid-cols-[1fr_400px] gap-8 sm:gap-12 md:gap-16 items-start">
            <div className="grid gap-8 row-start-2 md:row-start-auto">
              <GenericTitle title={event?.title} subtitle={eventDate} isDesktop={true} />
              <OverviewOneEvent
                quantitySold={event?.quantitySold}
                quantityAvailable={event?.quantityAvailable}
                basePrice={event?.basePrice}
              />
              <Separator />
            </div>
            <div className="grid gap-8 row-start-1 md:row-start-auto">
              <GenericTitle title={event?.title} subtitle={eventDate} isMobile={true} />
              <AddItemEventToCart
                title={title}
                eventId={eventId}
                basePrice={basePrice}
                addItemToCartLocal={addItemToCartLocal}
              />
            </div>
          </section>
          <DescriptionCollapsible
            shortDescription={event?.shortDescription}
            longDescription={event?.longDescription}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
