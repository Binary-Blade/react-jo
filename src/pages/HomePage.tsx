import { Footer } from "@/features/Footer"
import { Header } from "@/features/Header"
import Events from "@/features/home/Events"
import { ExploreVenue } from "@/features/home/ExploreVenue"
import Hero from "@/features/home/Hero"
import { NewsPresents } from "@/features/home/PresentSports"
import SectionTickets from "@/features/home/SectionTickets"

export const HomePage = () => {

  return (
    <>
      <Header />
      <Hero />
      <Events />
      <ExploreVenue />
      <NewsPresents />
      <SectionTickets />
      <Footer />
    </>
  )
}

