import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { StatusPaymentEnum } from '@/config/enums/StatusPayment.enum';
import { StatusPayment } from '@/features/payment/StatusPayment';

vi.mock('@/stores/useCartStore');
vi.mock('wouter/use-browser-location', () => ({
  navigate: vi.fn()
}));

const mockReservationApproved = [
  {
    reservationId: 1,
    reservationDetails: [],
    user: {
      firstName: 'John',
      lastName: 'Doe'
    },
    transaction: {
      statusPayment: StatusPaymentEnum.APPROVED,
      paymentId: '12345',
      totalAmount: 100
    }
  }
];

const mockReservationRejected = [
  {
    reservationId: 1,
    reservationDetails: [],
    user: {
      firstName: 'John',
      lastName: 'Doe'
    },
    transaction: {
      statusPayment: StatusPaymentEnum.REJECTED,
      paymentId: '12345',
      totalAmount: 100
    }
  }
];

describe('StatusPayment', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders approved payment status correctly', () => {
    render(<StatusPayment reservation={mockReservationApproved} />);

    expect(screen.getByText('Paiement approuvé')).toBeInTheDocument();
    expect(screen.getByText('Votre paiement a été accepté.')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();
    expect(screen.getByText('€100')).toBeInTheDocument();
  });

  it('renders rejected payment status correctly', () => {
    render(<StatusPayment reservation={mockReservationRejected} />);

    expect(screen.getByText('Paiement rejeté')).toBeInTheDocument();
    expect(screen.getByText('Votre paiement a été rejeté.')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();
    expect(screen.getByText('€100')).toBeInTheDocument();
  });

  it('renders no payment data message when reservation is empty', () => {
    render(<StatusPayment reservation={[]} />);

    expect(screen.getByText('Aucune donnée de paiement disponible.')).toBeInTheDocument();
  });
});
