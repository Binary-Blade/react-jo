import { Footer } from '@/features/Footer';
import { Header } from '@/features/header/Header';
import { ExploreVenue } from '@/features/home/ExploreVenue';
import { Hero } from '@/features/home/Hero';
import { Highlights } from '@/features/home/Highlights';
import { SectionTickets } from '@/features/home/SectionTickets';

/**
 * `HomePage` component is the main landing page of the website.
 * It includes various sections such as the header, hero section, highlights,
 * venue exploration, ticket section, and footer.
 *
 * @component
 * @returns {JSX.Element} The rendered home page component.
 *
 * @example
 * return (
 *   <HomePage />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Header` for displaying the page header.
 * - `Hero` for displaying the main hero section with prominent information.
 * - `Highlights` for showcasing highlighted features or events.
 * - `ExploreVenue` for exploring different venues.
 * - `SectionTickets` for displaying information about ticket purchasing.
 * - `Footer` for displaying the page footer.
 */
export default function HomePage(): JSX.Element {
  return (
    <>
      {/* Header: Displays the page header */}
      <Header />

      {/* Hero: Displays the main hero section with prominent information */}
      <Hero />

      {/* Highlights: Showcases highlighted features or events */}
      <Highlights />

      {/* ExploreVenue: Section for exploring different venues */}
      <ExploreVenue />

      {/* SectionTickets: Displays information about ticket purchasing */}
      <SectionTickets />

      {/* Footer: Displays the page footer */}
      <Footer />
    </>
  );
}
