import { useEffect } from 'react';
import { DialogTrigger, Dialog, DialogContent } from "@/components/ui/dialog"
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TicketIcon } from "@/assets/icons/IconComponents";
import useReservationStore from "@/stores/useReservationStore";
import { useAuthStore } from '@/stores/useAuthStore';
import { STATUSCOLOR } from '@/config/constants';
import { TicketModal } from './TicketModal';

export const AllReservations = () => {
    const { reservations, fetchReservations } = useReservationStore(state => ({
        reservations: state.reservations,
        fetchReservations: state.fetchReservations,
    }));
    const userId = useAuthStore(state => state.userId);

    useEffect(() => {
        if (userId) {
            fetchReservations(userId);
        }
    }, [fetchReservations, userId]);

    if (!reservations.length) {
        return <p>No reservation data available.</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-4 lg:px-6 sm:py-8 md:py-10">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">Your Olympic Games 2024 Reservations</h1>
            </header>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                {reservations.map((reservation, index) => (
                    <Card key={index} id={reservation.reservationId}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>{reservation.cartItem?.event?.title}</CardTitle>
                                <div className={`px-2 py-1 rounded-md text-xs font-medium ${STATUSCOLOR[reservation.status]}`}>
                                    {reservation.status}
                                </div>
                            </div>
                            <CardDescription>{reservation.createdAt}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Tickets</div>
                                    <div className="font-medium">{reservation.cartItem?.quantity} x {reservation.cartItem?.ticketType}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Total</div>
                                    <div className="font-medium">${reservation.totalPrice}</div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="flex items-center justify-space-between w-full">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Order #: {reservation.user?.userId}-{reservation.reservationId}-{reservation.paymentId}
                                </div>
                                <div className="flex items-center gap-2">
                                    {reservation.status === 'APPROVED' && (
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button size="sm" variant="outline" className='gap-2'>
                                                    <TicketIcon className="w-4 h-4" />
                                                    View Ticket
                                                </Button>

                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px]">
                                                <TicketModal reservationId={reservation.reservationId} />
                                            </DialogContent>
                                        </Dialog>
                                    )}
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div >
    );
};
