import { Footer } from '@/features/Footer';
import { Header } from '@/features/Header';
import { Separator } from "@/components/ui/separator"
import { ImagesCoverEvent } from "@/components/one-event/ImagesCoverEvent"
import { DesktopTitleEvent } from '@/components/one-event/DesktopTitleEvent';
import { MobileTitleEvent } from '@/components/one-event/MobileTitleEvent';
import { DescriptionSelectedEvent } from '@/components/one-event/DescriptionSelectedEvent';
import { OlympicsOverviewEventSelected } from '@/features/selected-event/OlympicsOverviewEventSelected';
import { EventSelectAvailabilityCard } from '@/features/selected-event/EventSelectAvailabilityCard';
import { TicketPriceReserveCart } from '@/features/selected-event/TicketPriceReserveCart';
import { ReportedIssueButtonEvent } from '@/features/selected-event/ReportedIssueButtonEvent';

export default function EventSelected() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="max-w-6xl mx-auto p-4 lg:px-6 sm:py-8 md:py-10">
          <section className="hidden sm:flex flex-col gap-4 sm:flex-row sm:items-center pb-4 sm:pb-8">
            <DesktopTitleEvent />
          </section>

          <ImagesCoverEvent />

          <section className="py-8 grid md:grid-cols-2 lg:grid-cols-[1fr_400px] gap-8 sm:gap-12 md:gap-16 items-start">
            <div className="grid gap-8 row-start-2 md:row-start-auto">
              <OlympicsOverviewEventSelected />
              <Separator />
              <EventSelectAvailabilityCard />
              <Separator />
              <DescriptionSelectedEvent />
            </div>
            <div className="grid gap-4 row-start-1 md:row-start-auto">
              <MobileTitleEvent />
              <TicketPriceReserveCart />
              <ReportedIssueButtonEvent />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
