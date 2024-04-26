import { Button } from "@/components/ui/button"
import { navigate } from "wouter/use-browser-location"

export const CartEmpty = () => (

    <div className="container mx-auto py-12 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="text-center">
            <p className="text-xl text-gray-600">Your cart is empty.</p>
            <Button className="mt-6" onClick={() => { navigate('/events') }}>
                Start Shopping
            </Button>
        </div>
    </div>
)
