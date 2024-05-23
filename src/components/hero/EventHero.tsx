import placeholderImage from '@/assets/images/crop_bg.webp';

/**
 * `EventHero` component displays a hero section with an image and a label.
 * It includes a background image, a title, and some styling to make it visually appealing.
 *
 * @component
 * @returns {JSX.Element} The rendered EventHero component.
 *
 * @example
 * return <EventHero />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on the `placeholderImage` for the background image.
 */
export const EventHero = (): JSX.Element => (
  <div className="bg-white shadow-md overflow-hidden">
    <div className="relative">
      {/* Hero Image */}
      <img
        alt="Olympic Games"
        className="w-full h-48 object-cover aspect-h-9"
        height={360}
        src={placeholderImage}
        style={{
          aspectRatio: '640/360',
          objectFit: 'cover'
        }}
        width={640}
      />
      {/* Hero Label */}
      <div className="absolute top-4 left-4 bg-gray-900 text-white bg-rose-500 px-3 py-1 rounded-full text-xs ">
        Paris 2024
      </div>
    </div>
  </div>
);
