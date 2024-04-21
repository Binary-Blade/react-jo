import { Link } from "wouter";
import { Button } from "../ui/button";
import React from "react";
import { EventPropsType } from "@/types/EventTypes";


export const EventCard: React.FC<EventPropsType> = ({ title, description, imageSrc }) => (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="group grid gap-4 rounded-lg overflow-hidden bg-gray-100 
            dark:bg-gray-800 transition-all hover:scale-[1.02] hover:shadow-lg">
            <img
                alt="Swimming"
                className="object-cover w-full aspect-[3/2] group-hover:opacity-90 transition-opacity"
                height="200"
                src={imageSrc}
                width="300"
            />
            <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg group-hover:underline">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                    {description}
                </p>
                <Link href="/tickets">
                    <Button className="w-full" variant="default">
                        Buy Tickets
                    </Button>
                </Link>
            </div>
        </div>
    </div>
);
