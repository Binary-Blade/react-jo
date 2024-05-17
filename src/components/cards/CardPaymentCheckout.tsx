import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CreditCardIcon, WalletCardsIcon } from '@/components/ui/IconComponents';

export const CardPaymentCheckout = () => (
  <Card>
    <CardHeader>
      <CardTitle>Payment Method</CardTitle>
      <CardDescription>Select your preferred payment method.</CardDescription>
    </CardHeader>
    <CardContent>
      <RadioGroup className="grid gap-4" defaultValue="credit-card">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="credit-card" value="credit-card" />
          <Label className="flex items-center gap-2" htmlFor="credit-card">
            <CreditCardIcon className="h-6 w-6" />
            Credit Card
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="paypal" value="paypal" />
          <Label className="flex items-center gap-2" htmlFor="paypal">
            <WalletCardsIcon className="h-6 w-6" />
            PayPal
          </Label>
        </div>
      </RadioGroup>
    </CardContent>
  </Card>
);
