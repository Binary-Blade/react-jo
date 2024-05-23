import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

/**
 * `CardPromoCode` component allows users to enter a promotional code to receive a discount.
 * It includes an input field for the promo code and a button to apply it.
 *
 * @component
 * @returns {JSX.Element} The rendered CardPromoCode component.
 *
 * @example
 * return <CardPromoCode />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Card`, `CardTitle`, `CardDescription`, `CardHeader`, `CardContent` for the card layout.
 * - `Input` for the promo code input field.
 * - `Button` for the apply button.
 */
export const CardPromoCode = (): JSX.Element => (
  <Card>
    <CardHeader>
      <CardTitle>Code Promo</CardTitle>
      <CardDescription>Entrez un code promo pour recevoir une réduction.</CardDescription>
    </CardHeader>
    <CardContent>
      <form className="flex gap-2">
        {/* Promo Code Input Field */}
        <Input placeholder="Enter promo code" />
        {/* Apply Button */}
        <Button variant="outline">Appliquer</Button>
      </form>
    </CardContent>
  </Card>
);
