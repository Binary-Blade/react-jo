import { useMemo } from 'react';
import { useCartStore } from '@/stores/useCartStore';
import { FC } from 'react';
import { navigate } from 'wouter/use-browser-location';
import { CheckIcon, XIcon } from '@/components/ui/IconComponents';
import { Button } from '@/components/ui/button';

interface StatusPaymentProps {
  reservation: {
    reservationId: number;
    reservationDetails: any[];
    user: {
      firstName: string;
      lastName: string;
    };
    transaction: {
      statusPayment: string;
      paymentId: string;
      totalAmount: number;
    };
  }[];
}

export const StatusPayment: FC<StatusPaymentProps> = ({ reservation }) => {
  const data = reservation[0];
  const clearCart = useCartStore(state => state.clearCart);
  const handleHome = () => {
    navigate('/');
    clearCart();
  };
  const descriptionStatus = useMemo(() => {
    if (!data) return 'No payment data available.';
    switch (data.transaction.statusPayment) {
      case 'APPROVED':
        return 'Your payment has been processed successfully.';
      case 'REJECTED':
        return 'Your payment has been declined.';
      default:
        return 'Payment status unknown.';
    }
  }, [data]);

  const StatusIcon = () => {
    if (!data) return null;
    switch (data.transaction.statusPayment) {
      case 'APPROVED':
        return <CheckIcon className="w-10 h-10 text-green-600 dark:text-green-400" />;
      case 'REJECTED':
        return <XIcon className="w-10 h-10 text-red-600 dark:text-red-400" />;
      default:
        return null;
    }
  };

  console.log(data);
  if (!reservation.length) {
    return <p>No reservation data available.</p>;
  }

  return (
    <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900 sm:py-8 sm:px-12">
      <StatusIcon />
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">PAYMENT {data.transaction.statusPayment}</h1>
        <p className="text-gray-500 dark:text-gray-400">{descriptionStatus}</p>
      </div>
      <div className="w-full space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Transaction ID</p>
          <p className="text-sm font-medium">{data.transaction.paymentId}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">First Name</p>
          <p className="text-sm font-medium">{data.user.firstName}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Name</p>
          <p className="text-sm font-medium">{data.user.lastName}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Amount</p>
          <p className="text-sm font-medium">€{data.transaction.totalAmount}</p>
        </div>
      </div>
      <Button
        onClick={handleHome}
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      >
        Go Home
      </Button>
    </div>
  );
};
