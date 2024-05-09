import { EventHero } from '@/components/all-events/EventHero';
import { Footer } from '@/features/Footer';
import { Header } from '@/features/Header';
import { EventsMainContent } from '@/features/events/EventsMainContent';

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
  )
}
