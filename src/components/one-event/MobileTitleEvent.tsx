import { FC } from "react";

type MobileTitleEventProps = {
  title: string | undefined;
  eventDate: string | undefined;
}

export const MobileTitleEvent: FC<MobileTitleEventProps> = ({ title, eventDate, }) => (
  <div className="flex sm:hidden flex-col items-center gap-1 py-4">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <p className="text-xl sm:text-base text-gray-500 dark:text-gray-400">
      {eventDate} · Paris, France
    </p>
  </div>
);
