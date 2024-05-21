import { Footer } from '@/features/Footer';
import { Header } from '@/features/header/Header';
import { ExploreVenue } from '@/features/home/ExploreVenue';
import { Hero } from '@/features/home/Hero';
import { Highlights } from '@/features/home/Highlights';
import { SectionTickets } from '@/features/home/SectionTickets';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Highlights />
      <ExploreVenue />
      <SectionTickets />
      <Footer />
    </>
  );
}
