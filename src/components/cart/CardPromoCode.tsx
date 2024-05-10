import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const CardPromoCode = () => (
    <Card>
        <CardHeader>
            <CardTitle>Promo Code</CardTitle>
            <CardDescription>Enter a promo code to receive a discount.</CardDescription>
        </CardHeader>
        <CardContent>
            <form className="flex gap-2">
                <Input placeholder="Enter promo code" />
                <Button variant="outline">Apply</Button>
            </form>
        </CardContent>
    </Card>

)
