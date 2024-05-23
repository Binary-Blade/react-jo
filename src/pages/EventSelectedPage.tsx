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

/**
 * `EventSelectedPage` component is responsible for displaying detailed information about a selected event.
 * It includes event details, images, a description, and options to add the event to the cart.
 *
 * @component
 * @returns {JSX.Element} The rendered event selected page component.
 *
 * @example
 * return (
 *   <EventSelectedPage />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components, stores, and hooks:
 * - `Header` for displaying the page header.
 * - `EventHero` for displaying event-related hero section.
 * - `ReturnButton` for navigating back to the events list.
 * - `ImagesCoverEvent` for displaying event images.
 * - `GenericTitle` for displaying the main title and subtitle of the event.
 * - `OverviewOneEvent` for displaying event details such as quantity sold and base price.
 * - `DescriptionCollapsible` for displaying expandable event descriptions.
 * - `AddItemEventToCart` for adding the event to the cart.
 * - `Footer` for displaying the page footer.
 * - `useParams` for retrieving the event ID from the URL.
 * - `useEventStore` for managing event state.
 * - `useFormattedDates` hook for formatting event dates.
 * - `useLocalCartStore` for managing the local cart state.
 */
export default function EventSelectedPage(): JSX.Element {
  // Retrieve parameters from the URL
  const params = useParams();
  // Convert eventId to a number from the URL parameters
  const eventId = Number(params.eventId);

  // Extract necessary actions and state from the local cart store
  const { addItemToCartLocal } = useLocalCartStore();

  // Extract necessary actions and state from the event store
  const { getEvent, event } = useEventStore();

  // Format event dates using a custom hook
  const eventDate = useFormattedDates(event?.startDate, event?.endDate);

  // Destructure base price and title from the event object
  const basePrice = event?.basePrice;
  const title = event?.title;

  // Fetch event details whenever the eventId changes
  useEffect(() => {
    getEvent(eventId);
  }, [eventId, getEvent]);

  return (
    <>
      {/* Header: Displays the page header */}
      <Header />

      {/* EventHero: Displays the hero section of the event */}
      <EventHero />

      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8">
          {/* Section for return button and main title */}
          <section className="hidden sm:flex flex-col gap-4 sm:flex-row sm:items-center pb-4 sm:pb-8">
            {/* ReturnButton: Navigate back to the events list */}
            <ReturnButton href="/events" />
            <h1 className="text-2xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Achetez des billets pour les Jeux Olympiques de Paris 2024
            </h1>
          </section>

          {/* ImagesCoverEvent: Displays images related to the event */}
          <ImagesCoverEvent />

          {/* Section for event details and add to cart functionality */}
          <section className="py-8 grid md:grid-cols-2 lg:grid-cols-[1fr_400px] gap-8 sm:gap-12 md:gap-16 items-start">
            <div className="grid gap-8 row-start-2 md:row-start-auto">
              {/* GenericTitle: Displays the main title and formatted dates for desktop view */}
              <GenericTitle title={event?.title} subtitle={eventDate} isDesktop={true} />

              {/* OverviewOneEvent: Displays event details such as quantity sold and base price */}
              <OverviewOneEvent
                quantitySold={event?.quantitySold}
                quantityAvailable={event?.quantityAvailable}
                basePrice={event?.basePrice}
              />
              <Separator />
            </div>
            <div className="grid gap-8 row-start-1 md:row-start-auto">
              {/* GenericTitle: Displays the main title and formatted dates for mobile view */}
              <GenericTitle title={event?.title} subtitle={eventDate} isMobile={true} />

              {/* AddItemEventToCart: Component to add the event to the cart */}
              <AddItemEventToCart
                title={title}
                eventId={eventId}
                basePrice={basePrice}
                addItemToCartLocal={addItemToCartLocal}
              />
            </div>
          </section>

          {/* DescriptionCollapsible: Displays the event description in a collapsible format */}
          <DescriptionCollapsible
            shortDescription={event?.shortDescription}
            longDescription={event?.longDescription}
          />
        </div>
      </div>

      {/* Footer: Displays the page footer */}
      <Footer />
    </>
  );
}
