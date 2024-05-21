import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CreditCardIcon, WalletCardsIcon } from '@/components/ui/IconComponents';

export const CardPaymentCheckout = () => (
  <Card>
    <CardHeader>
      <CardTitle>Méthode de Paiement</CardTitle>
      <CardDescription>Sélectionnez votre méthode de paiement préférée.</CardDescription>
    </CardHeader>
    <CardContent>
      <RadioGroup className="grid gap-4" defaultValue="credit-card">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="credit-card" value="credit-card" />
          <Label className="flex items-center gap-2" htmlFor="credit-card">
            <CreditCardIcon data-testid="credit-card-icon" className="h-6 w-6" />
            Carte de Crédit
          </Label>
        </div>
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
