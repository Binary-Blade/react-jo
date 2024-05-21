import { EventHero } from '@/components/hero/EventHero';
import { Footer } from '@/features/Footer';
import { EventsMainContent } from '@/features/events/all-events/EventsMainContent';
import { Header } from '@/features/header/Header';

export default function EventsPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <EventHero />
        <EventsMainContent />
      </div>
      <Footer />
    </>
  );
}
