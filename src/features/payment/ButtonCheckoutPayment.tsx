import { MultiStepLoader as Loader } from '@/components/ui/multi-step-loader';
import { IconSquareRoundedX } from '@tabler/icons-react';
import { useState } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { navigate } from 'wouter/use-browser-location';
import useReservationStore from '@/stores/useReservationStore';
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { StatusPayment } from './StatusPayment';

interface CheckOutPaymentProps {
  cartId: number | null | undefined;
}

const loadingStates = [
  {
    text: 'Sélection des billets'
  },
  {
    text: 'Vérification des disponibilités'
  },
  {
    text: 'Validation de votre commande'
  },
  {
    text: 'Paiement en cours'
  }
];

/**
 * `ButtonCheckoutPayment` component handles the checkout process,
 * including loading states and displaying the payment status.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {number | null | undefined} props.cartId - The ID of the cart.
 * @returns {JSX.Element} The rendered ButtonCheckoutPayment component.
 *
 * @example
 * return (
 *   <ButtonCheckoutPayment cartId={123} />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and hooks:
 * - `Loader` for displaying the multi-step loading process.
 * - `AlertDialog` and `AlertDialogContent` for displaying the status after checkout.
 * - `Button` for the checkout button.
 * - `StatusPayment` for displaying the reservation status.
 * It also interacts with the authentication and reservation stores to manage state.
 */
export const ButtonCheckoutPayment = ({ cartId }: CheckOutPaymentProps): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { userId, isAuthenticated } = useAuthStore();
  const { newReservation, addReservation } = useReservationStore();

  /**
   * Handle the checkout process.
   * If the user is not authenticated, navigate to the login page.
   * Otherwise, add the reservation and manage loading states.
   */
  const handleCheckout = async () => {
    if (!isAuthenticated) {
      return navigate('/login');
    }
    setLoading(true);
    setShowAlert(false); // Hide AlertDialog initially
    try {
      if (userId && cartId) {
        await addReservation(userId, cartId);

        setTimeout(() => {
          setLoading(false);
          setShowAlert(true);
        }, 7000);
      }
    } catch (error) {
      console.error("Échec de l'ajout de la réservation :", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        {loading ? (
          <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
        ) : (
          <Button
            className="w-full bg-rose-600 hover:bg:rose-700 text-white font-semibold rounded-lg"
            size="lg"
            onClick={handleCheckout}
            disabled={loading}
          >
            Procéder au paiement
          </Button>
        )}

        {loading && (
          <button
            className="fixed top-4 right-4 text-black dark:text-white z-[120]"
            onClick={() => setLoading(false)}
          >
            <IconSquareRoundedX className="h-10 w-10" />
          </button>
        )}
      </div>

      {showAlert && (
        <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
          <AlertDialogContent>
            <StatusPayment reservation={newReservation} />
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};
