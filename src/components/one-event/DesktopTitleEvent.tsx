import { FC } from "react";

type DesktopTitleEventProps = {
  title: string | undefined;
  eventDate: string | undefined;
}

export const DesktopTitleEvent: FC<DesktopTitleEventProps> = ({ title, eventDate }) => (
  <div className="hidden md:flex flex-col gap-1">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <p className="text-gray-500 dark:text-gray-400">{eventDate}</p>
  </div>
);
