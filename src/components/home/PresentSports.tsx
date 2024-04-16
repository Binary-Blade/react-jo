import placeholderImage from "@/assets/images/PlaceholderParis.svg"
import { Separator } from "../ui/separator"
export const PresentSports = () => {

    return (
        <>
            <Separator />
            <section className="w-full py-12 md:py-2 lg:py-10">
                <div className="container grid items-center gap-10 px-4 text-center md:px-6 lg:gap-20">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sports</h2>
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            The Paris 2024 Olympic Games will feature 32 sports.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
                        <div className="space-y-2">
                            <img
                                alt="Image"
                                className="overflow-hidden rounded-xl aspect-[16/9] object-cover object-center group-hover:scale-105 group-hover:transition-transform group-hover:z-10"
                                height="337"
                                src={placeholderImage}
                                width="600"
                            />
                            <h3 className="font-bold">Athletics</h3>
                            <p>August 3-12</p>
                        </div>
                        <div className="space-y-2">
                            <img
                                alt="Image"
                                className="overflow-hidden rounded-xl aspect-[16/9] object-cover object-center group-hover:scale-105 group-hover:transition-transform group-hover:z-10"
                                height="337"
                                src={placeholderImage}
                                width="600"
                            />
                            <h3 className="font-bold">Swimming</h3>
                            <p>July 27-August 4</p>
                        </div>
                        <div className="space-y-2">
                            <img
                                alt="Image"
                                className="overflow-hidden rounded-xl aspect-[16/9] object-cover object-center group-hover:scale-105 group-hover:transition-transform group-hover:z-10"
                                height="337"
                                src={placeholderImage}
                                width="600"
                            />
                            <h3 className="font-bold">Basketball</h3>
                            <p>July 27-August 7</p>
                        </div>
                        <div className="space-y-2">
                            <img
                                alt="Image"
                                className="overflow-hidden rounded-xl aspect-[16/9] object-cover object-center group-hover:scale-105 group-hover:transition-transform group-hover:z-10"
                                height="337"
                                src={placeholderImage}
                                width="600"
                            />
                            <h3 className="font-bold">Tennis</h3>
                            <p>July 28-August 4</p>
                        </div>
                        <div className="space-y-2">
                            <img
                                alt="Image"
                                className="overflow-hidden rounded-xl aspect-[16/9] object-cover object-center group-hover:scale-105 group-hover:transition-transform group-hover:z-10"
                                height="337"
                                src={placeholderImage}
                                width="600"
                            />
                            <h3 className="font-bold">Football</h3>
                            <p>July 24-August 7</p>
                        </div>
                        <div className="space-y-2">
                            <img
                                alt="Image"
                                className="overflow-hidden rounded-xl aspect-[16/9] object-cover object-center group-hover:scale-105 group-hover:transition-transform group-hover:z-10"
                                height="337"
                                src={placeholderImage}
                                width="600"
                            />
                            <h3 className="font-bold">Cycling</h3>
                            <p>July 28-August 4</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
