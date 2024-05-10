import { useAuthStore } from '@/stores/useAuthStore';
import { navigate } from 'wouter/use-browser-location';
import useReservationStore from '@/stores/useReservationStore';
import { FC, useEffect, useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { StatusPayment } from './StatusPayment';
import { PaymentProcessLoading } from './PaymentProcessLoading';

interface CheckOutPaymentProps {
  cartId: number | null | undefined;
  totalTaxes: number;
}

/**
 * ButtonCheckoutPayment component.
 *
 * @param {number} cartId - The cart id.
 * @param {string} totalTaxes - The total taxes.
 * @returns {JSX.Element} The ButtonCheckoutPayment component.
 */
export const ButtonCheckoutPayment: FC<CheckOutPaymentProps> = ({ cartId, totalTaxes }) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [paymentProcess] = useState(false);
  const { userId, isAuthenticated } = useAuthStore(state => ({
    userId: state.userId,
    isAuthenticated: state.isAuthenticated
  }));
  const { newReservation, addReservation } = useReservationStore(state => ({
    newReservation: state.newReservation,
    addReservation: state.addReservation
  }));

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress(prevProgress => {
          const nextProgress = prevProgress + 2;
          if (nextProgress > 100) {
            clearInterval(interval);
            return 100;
          }
          return nextProgress;
        });
      }, 150); // Update progress every 100ms
      return () => clearInterval(interval);
    }
  }, [loading]);

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      console.log('Please login to proceed to payment');
      return navigate('/login');
    }
    setLoading(true);
    try {
      if (userId && cartId) {
        await addReservation(userId, cartId);

        setTimeout(() => {
          setLoading(false);
        }, 4000); // Simulate a delay for the payment process
      }
    } catch (error) {
      console.error('Failed to add reservation:', error);
      setLoading(false);
      setProgress(0);
    }
  };

  return (
    <>
      {!paymentProcess && (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-full" size="lg" onClick={handleCheckout} disabled={loading}>
              {loading ? 'Processing...' : 'Proceed to Payment'}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="">
            {loading ? (
              <PaymentProcessLoading progress={progress} />
            ) : (
              <StatusPayment totalTaxes={totalTaxes} reservation={newReservation} />
            )}
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};
