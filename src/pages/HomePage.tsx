import Events from "@/components/home/Events"
import Footer from "@/components/ui/Footer"
import { Header } from "@/components/ui/Header"
import Hero from "@/components/home/Hero"
import SectionTickets from "@/components/home/SectionTickets"
import { CounterDate } from "@/components/home/CounterDate"
import { PresentSports } from "@/components/home/PresentSports"

export const HomePage = () => {

  return (
    <>
      <Header />
      <Hero />
      <CounterDate />
      <Events />
      <PresentSports />
      <SectionTickets />
      <Footer />
    </>
  )
}

