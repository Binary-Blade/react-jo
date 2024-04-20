import Events from "@/components/home/Events"
import Hero from "@/components/home/Hero"
import SectionTickets from "@/components/home/SectionTickets"
import { CounterDate } from "@/components/home/CounterDate"
import { PresentSports } from "@/components/home/PresentSports"
import { Header } from "@/components/common/header/Header"
import Footer from "@/components/common/footer/Footer"

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

