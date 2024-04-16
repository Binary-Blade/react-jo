import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"

export const CarouselHome = () => {
    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (!api) {
            return
        }

    }, [api])

    return (
        <div>

            <div className="space-y-3 py-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Experience the
                    <span className="shimmer translate-y-1 inline-block rounded-md bg-rose-500 px-2 py-1 text-rose-50 font-semibold animation duration-300ms ease-in-out">
                        Magic
                    </span>
                    of the Games
                </h2>
            </div>
            <Carousel setApi={setApi} opts={{
                align: "start",
                loop: true,
            }} className="w-full max-w-xs lg:max-w-none md:max-w-xl">
                <CarouselContent>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index} className="max-w-xs md:basis-1/2 lg:basis-1/3 ">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="py-4 text-center">
                <Button > All Events </Button>
            </div>

        </div>
    )
}
