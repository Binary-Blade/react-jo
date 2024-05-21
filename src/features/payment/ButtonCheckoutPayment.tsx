import { MultiStepLoader as Loader } from '@/components/ui/multi-step-loader';
import { IconSquareRoundedX } from '@tabler/icons-react';
import { useState, FC } from 'react';
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
 * ButtonCheckoutPayment component.
 */
export const ButtonCheckoutPayment: FC<CheckOutPaymentProps> = ({ cartId }) => {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { userId, isAuthenticated } = useAuthStore();
  const { newReservation, addReservation } = useReservationStore();

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
        }, 7400);
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
            Proceed to Payment
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
          <AlertDialogContent className="">
            <StatusPayment reservation={newReservation} />
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};
