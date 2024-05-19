import { CardPaymentCheckout } from '@/components/cards/CardPaymentCheckout';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('CardPaymentCheckout', () => {
  it('renders the card with title and description', () => {
    render(<CardPaymentCheckout />);

    expect(screen.getByText('Méthode de Paiement')).toBeInTheDocument();
    expect(
      screen.getByText('Sélectionnez votre méthode de paiement préférée.')
    ).toBeInTheDocument();
  });

  it('renders the radio buttons with labels and icons', () => {
    render(<CardPaymentCheckout />);

    const creditCardLabel = screen.getByLabelText('Carte de Crédit');
    expect(creditCardLabel).toBeInTheDocument();
    expect(screen.getByTestId('credit-card-icon')).toBeInTheDocument();

    const paypalLabel = screen.getByLabelText('PayPal');
    expect(paypalLabel).toBeInTheDocument();
    expect(screen.getByTestId('paypal-icon')).toBeInTheDocument();
  });

  it('sets the default value of the radio group to credit-card', () => {
    render(<CardPaymentCheckout />);

    const creditCardRadio = screen.getByLabelText('Carte de Crédit') as HTMLInputElement;
    expect(creditCardRadio).toBeChecked();
  });
});
