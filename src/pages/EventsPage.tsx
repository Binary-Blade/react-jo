import { EventHero } from '@/components/hero/EventHero';
import { Footer } from '@/features/Footer';
import { EventsMainContent } from '@/features/events/all-events/EventsMainContent';
import { Header } from '@/features/header/Header';

/**
 * `EventsPage` component is responsible for displaying the main events page.
 * It includes a header, a hero section for event-related highlights, the main content
 * area that lists all events, and a footer.
 *
 * @component
 * @returns {JSX.Element} The rendered events page component.
 *
 * @example
 * return (
 *   <EventsPage />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Header` for displaying the page header.
 * - `EventHero` for displaying event-related hero section.
 * - `EventsMainContent` for displaying the main content listing all events.
 * - `Footer` for displaying the page footer.
 */
export default function EventsPage(): JSX.Element {
  return (
    <>
      {/* Header: Displays the page header */}
      <Header />

      <div className="flex flex-col min-h-screen">
        {/* EventHero: Displays the hero section of the event */}
        <EventHero />

        {/* EventsMainContent: Displays the main content listing all events */}
        <EventsMainContent />
      </div>

      {/* Footer: Displays the page footer */}
      <Footer />
    </>
  );
}
