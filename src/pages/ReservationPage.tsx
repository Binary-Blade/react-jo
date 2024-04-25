import { Footer } from "@/features/Footer"
import { Header } from "@/features/Header"
import { AllReservations } from "@/features/reservations/AllReservations"

export const ReservationPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <AllReservations />
      </div>
      <Footer />
    </>
  )
}
