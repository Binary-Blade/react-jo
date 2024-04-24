import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import { navigate } from "wouter/use-browser-location";
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import useReservationStore from "@/stores/useReservationStore";
import { FC, useState } from "react";
import { InputReservation } from "../reservations/InputReservation";

interface CheckOutPaymentProps {
    cartId: number | null | undefined;
}

export const CheckOutPayment: FC<CheckOutPaymentProps> = ({ cartId }) => {
    const [loading, setLoading] = useState(false);
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const userId = useAuthStore(state => state.userId);
    const { addReservation } = useReservationStore(state => ({
        addReservation: state.addReservation,
    }));

    const handleCheckout = async () => {
        if (!isAuthenticated) {
            console.log("Please login to proceed to payment");
            return navigate("/reservations");
        }

        setLoading(true); // Set loading to true when the checkout process starts
        if (userId && cartId) {
            try {
                await addReservation(userId, cartId); // Assuming you need to pass an object to addReservation
                setTimeout(() => {
                    navigate("/");
                    setLoading(false); // Set loading to false after navigation or at the end of the process
                }, 5000);
            } catch (error) {
                console.error("Failed to add reservation:", error);
                setLoading(false); // Ensure loading is set to false on error
            }
        }
    };

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-full" size="lg" onClick={handleCheckout} disabled={loading}>
                        {loading ? "Processing..." : "Proceed to Payment"}
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl p-6 bg-white dark:bg-gray-950 shadow-lg rounded-lg">
                    <DialogHeader>
                        <div className="flex items-center justify-between">
                            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-50">Reservation Confirmation</DialogTitle>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                                Pending
                            </div>
                        </div>
                        <DialogDescription className="text-gray-700 dark:text-gray-300">
                            Review your reservation details before final confirmation.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <InputReservation label="Event" name="event" value="test" />
                        <InputReservation label="Location" name="location" value="Paris, France" />
                        <InputReservation label="Reservation Number" name="reservation-number" value="RES-2024-0001" />
                        <InputReservation label="Date" name="date" value="August 10, 2024" />
                        <InputReservation label="Ticket Type" name="ticket-type" value="General Admission" />
                        <InputReservation label="Quantity" name="quantity" value="2" />
                        <InputReservation label="Total Amount" name="total-amount" value="$300.00" />
                        <InputReservation label="Payment Method" name="payment-method" value="Visa ending in 1234" />
                    </div>
                    <DialogFooter className=" mt-8 mr-10">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                            Your reservation is currently pending. You will receive an email with further instructions once your payment is processed.
                        </p>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </>
    )
}

