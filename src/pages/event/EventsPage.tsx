import Footer from "@/components/common/footer/Footer";
import { Header } from "@/components/common/header/Header";
import imageTicket from '@/assets/images/GamesTicketOptions.svg'
import { EventCard } from "@/components/event/EventCard";
import { EventHero } from "@/components/event/EventHero";
import { EventTitle } from "@/components/event/EventTitle";

export default function EventsPage() {

  return (
    <>
      <Header />
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <EventHero />
      </div>
      <div className="container grid gap-8 md:py-4 px-4 md:px-6">
        <EventTitle />
        <EventCard
          title="Swimming"
          description="Watch the world's best swimmers compete in the pool."
          imageSrc={imageTicket}
        />
      </div >
      <Footer />
    </>
  )
}
