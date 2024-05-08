import { Link } from "wouter";
import imageTicket from '@/assets/images/GamesTicketOptions.svg'
import { Button } from "../ui/button";
import { GripIcon } from "@/assets/icons/IconComponents";

export const ImagesCoverEvent = () => (
    <section className="relative bg-gray-100 dark:bg-gray-800">
        <div className="grid sm:grid-cols-4 gap-2">
            <Link
                className="col-span-2 row-span-2 relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all rounded-xl sm:rounded-l-xl overflow-hidden dark:focus-visible:ring-gray-300"
                href="#"
            >
                <img
                    alt="Olympic Stadium"
                    className="aspect-square object-cover"
                    height="600"
                    src={imageTicket}
                    width="600"
                />
            </Link>
            <Link
                className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all rounded-tl-xl overflow-hidden dark:focus-visible:ring-gray-300"
                href="#"
            >
                <img
                    alt="Olympic Torch"
                    className="aspect-square object-cover"
                    height="600"
                    src={imageTicket}
                    width="600"
                />
            </Link>
            <Link
                className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all overflow-hidden rounded-tr-xl dark:focus-visible:ring-gray-300"
                href="#"
            >
                <img
                    alt="Olympic Rings"
                    className="aspect-square object-cover"
                    height="600"
                    src={imageTicket}
                    width="600"
                />
            </Link>
            <Link
                className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all rounded-bl-xl overflow-hidden dark:focus-visible:ring-gray-300"
                href="#"
            >
                <img
                    alt="Olympic Medals"
                    className="aspect-square object-cover"
                    height="600"
                    src={imageTicket}
                    width="600"
                />
            </Link>
            <Link
                className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all overflow-hidden rounded-br-xl dark:focus-visible:ring-gray-300"
                href="#"
            >
                <img
                    alt="Olympic Athletes"
                    className="aspect-square object-cover"
                    height="600"
                    src={imageTicket}
                    width="600"
                />
            </Link>
        </div>
        <Button className="gap-1 absolute bottom-4 right-4" size="sm" variant="secondary">
            <GripIcon className="w-4 h-4" />
            Show all photos
        </Button>
    </section>
);
