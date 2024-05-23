import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CreditCardIcon, WalletCardsIcon } from '@/components/ui/IconComponents';

/**
 * `CardPaymentCheckout` component allows users to select their preferred payment method.
 * It includes options for credit card and PayPal, each with an associated icon.
 *
 * @component
 * @returns {JSX.Element} The rendered CardPaymentCheckout component.
 *
 * @example
 * return <CardPaymentCheckout />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `Card`, `CardTitle`, `CardDescription`, `CardHeader`, `CardContent` for the card layout.
 * - `RadioGroup`, `RadioGroupItem` for the radio button group.
 * - `Label` for labeling the radio buttons.
 * - `CreditCardIcon`, `WalletCardsIcon` for the payment method icons.
 */
export const CardPaymentCheckout = (): JSX.Element => (
  <Card>
    <CardHeader>
      <CardTitle>Méthode de Paiement</CardTitle>
      <CardDescription>Sélectionnez votre méthode de paiement préférée.</CardDescription>
    </CardHeader>
    <CardContent>
      <RadioGroup className="grid gap-4" defaultValue="credit-card">
        {/* Credit Card Payment Option */}
        <div className="flex items-center gap-2">
          <RadioGroupItem id="credit-card" value="credit-card" />
          <Label className="flex items-center gap-2" htmlFor="credit-card">
            <CreditCardIcon data-testid="credit-card-icon" className="h-6 w-6" />
            Carte de Crédit
          </Label>
        </div>
        {/* PayPal Payment Option */}
        <div className="flex items-center gap-2">
          <RadioGroupItem id="paypal" value="paypal" />
          <Label className="flex items-center gap-2" htmlFor="paypal">
            <WalletCardsIcon data-testid="paypal-icon" className="h-6 w-6" />
            PayPal
          </Label>
        </div>
      </RadioGroup>
    </CardContent>
  </Card>
);
