import { Footer } from "@/features/Footer"
import { Header } from "@/features/Header"
import { AllReservations } from "@/features/reservations/AllReservations"

// FIX: Fix to refresh the page when the user will navigate to that page
export default function ReservationPage() {


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
