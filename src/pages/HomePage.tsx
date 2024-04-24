import { Footer } from "@/features/Footer"
import { Header } from "@/features/Header"
import { ExploreVenue } from "@/features/home/ExploreVenue"
import Hero from "@/features/home/Hero"
import { Highlights } from "@/features/home/Highlights"
import { NewsPresents } from "@/features/home/PresentSports"
import SectionTickets from "@/features/home/SectionTickets"

export const HomePage = () => {

  return (
    <>
      <Header />
      <Hero />
      <Highlights />
      <ExploreVenue />
      <NewsPresents />
      <SectionTickets />
      <Footer />
    </>
  )
}

