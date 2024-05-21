import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const CardPromoCode = () => (
  <Card>
    <CardHeader>
      <CardTitle>Code Promo</CardTitle>
      <CardDescription>Entrez un code promo pour recevoir une réduction.</CardDescription>
    </CardHeader>
    <CardContent>
      <form className="flex gap-2">
        <Input placeholder="Enter promo code" />
        <Button variant="outline">Appliquer</Button>
      </form>
    </CardContent>
  </Card>
);
