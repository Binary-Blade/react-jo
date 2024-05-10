import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { FC } from "react"
import { ticketDescriptions } from "@/config/constants"
import { CardOneTicket } from "./CardOneTicket"
import { CartFormuleProps } from "@/config/types/CartTypes"

// FIX: SHOULD APPEAR SOLO DUO AND FAMILY TICKETS IN ORDER
export const CardFormule: FC<CartFormuleProps> = ({ priceFormula, items }) => {
    const description = ticketDescriptions[priceFormula];

    return (
        <Card>
            <CardHeader>
                <CardTitle>{priceFormula} Tickets</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    {items.map((item, index) => (
                        <CardOneTicket
                            key={`${item.cartItemId}-${index}`}
                            cartId={item.cart.cartId}
                            cartItemId={item.cartItemId}
                            eventName={item.event.title}
                            quantity={item.quantity}
                            startDate={item.event.startDate}
                            endDate={item.event.endDate}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
