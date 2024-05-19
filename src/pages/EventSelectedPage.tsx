import { Footer } from '@/features/Footer';
import { Separator } from '@/components/ui/separator';
import { useParams } from 'wouter';
import { useEventStore } from '@/stores/useEventStore';
import { useEffect } from 'react';
import { useFormattedDates } from '@/hooks';
import useLocalCartStore from '@/stores/useLocalCartStore';
import { Header } from '@/features/header/Header';
import { OverviewOneEvent } from '@/features/events/selected-event/OverviewOneEvent';
import { ButtonToEvent } from '@/components/button/ButtonToEvent';
import { ImagesCoverEvent } from '@/components/cards/ImagesCoverEvent';
import { GenericTitle } from '@/components/hero/GenericTitle';
import { DescriptionSelectedEvent } from '@/components/collapsible/DescriptionSelectedEvent';
import { ReportedIssueButtonEvent } from '@/components/dialog/ReportedIssueButtonEvent';
import { ChooseEventPrices } from '@/features/events/selected-event/ChooseEventPrices';

export default function EventSelectedPage() {
  const params = useParams();
  const eventId = Number(params.eventId);
  const { addItemToCartLocal } = useLocalCartStore();
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
            <ButtonToEvent />
            <h1 className="text-xl lg:text-3xl font-semibold tracking-tight">
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
              <DescriptionSelectedEvent
                shortDescription={event?.shortDescription}
                longDescription={event?.longDescription}
              />
            </div>
            <div className="grid gap-4 row-start-1 md:row-start-auto">
              <GenericTitle title={event?.title} subtitle={eventDate} isMobile={true} />
              <ChooseEventPrices
                eventId={eventId}
                basePrice={basePrice}
                addItemToCartLocal={addItemToCartLocal}
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
