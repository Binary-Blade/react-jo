import { EventHero } from '@/components/events/EventHero';
import { Footer } from '@/features/Footer';
import { Header } from '@/features/Header';
import { EventContent } from '@/features/events/EventContent';

export default function EventsPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <EventHero />
        <EventContent />
      </div>
      <Footer />
    </>
  )
}
