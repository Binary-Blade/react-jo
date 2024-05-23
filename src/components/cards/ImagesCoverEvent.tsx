import { Link } from 'wouter';
import boxing from '@/assets/images/boxingg.webp';
import archery from '@/assets/images/archery.webp';
import basketball from '@/assets/images/Basketball.webp';
import badminton from '@/assets/images/badminton.webp';
import fencing from '@/assets/images/fencing.webp';
import { Button } from '../ui/button';
import { GripIcon } from '@/components/ui/IconComponents';

/**
 * `ImagesCoverEvent` component displays a grid of event images with links.
 * It includes a button to show all photos.
 *
 * @component
 * @returns {JSX.Element} The rendered ImagesCoverEvent component.
 *
 * @example
 * return <ImagesCoverEvent />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `Button` for the show all photos button.
 * - `GripIcon` for the icon inside the button.
 * - `Link` from `wouter` for navigation.
 */
export const ImagesCoverEvent = (): JSX.Element => (
  <section className="relative bg-gray-100 dark:bg-gray-800">
    <div className="grid sm:grid-cols-4 gap-2">
      {/* Fencing Image */}
      <Link
        className="col-span-2 row-span-2 relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all rounded-xl sm:rounded-l-xl overflow-hidden dark:focus-visible:ring-gray-300"
        href="#"
      >
        <img
          alt="Olympic Stadium"
          className="aspect-square object-cover"
          height="600"
          src={fencing}
          width="600"
        />
      </Link>
      {/* Archery Image */}
      <Link
        className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all rounded-tl-xl overflow-hidden dark:focus-visible:ring-gray-300"
        href="#"
      >
        <img
          alt="Olympic Torch"
          className="aspect-square object-cover"
          height="600"
          src={archery}
          width="600"
        />
      </Link>
      {/* Badminton Image */}
      <Link
        className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all overflow-hidden rounded-tr-xl dark:focus-visible:ring-gray-300"
        href="#"
      >
        <img
          alt="Olympic Rings"
          className="aspect-square object-cover"
          height="600"
          src={badminton}
          width="600"
        />
      </Link>
      {/* Boxing Image */}
      <Link
        className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all rounded-bl-xl overflow-hidden dark:focus-visible:ring-gray-300"
        href="#"
      >
        <img
          alt="Olympic Medals"
          className="aspect-square object-cover"
          height="600"
          src={boxing}
          width="600"
        />
      </Link>
      {/* Basketball Image */}
      <Link
        className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all overflow-hidden rounded-br-xl dark:focus-visible:ring-gray-300"
        href="#"
      >
        <img
          alt="Olympic Athletes"
          className="aspect-square object-cover"
          height="600"
          src={basketball}
          width="600"
        />
      </Link>
    </div>
    {/* Show All Photos Button */}
    <Button className="gap-1 absolute bottom-4 right-4" size="sm" variant="secondary">
      <GripIcon className="w-4 h-4" />
      Show all photos
    </Button>
  </section>
);
