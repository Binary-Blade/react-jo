import { Link } from 'wouter';
import placeholderImage from '@/assets/images/PlaceholderParis.svg';

export const ExploreVenue = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 z-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Explore the Venues
            </h2>
            <p className="mt-4 text-gray-500">
              The Paris 2024 Olympic Games will take place across various iconic venues in the city,
              each offering a unique and unforgettable experience.
            </p>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 mt-8 text-base font-semibold text-white bg-rose-500 border border-transparent rounded-md shadow-sm hover:bg-rose-600"
              href="#"
            >
              View Venues
            </Link>
          </div>
          <div>
            <img
              alt="Stade de France"
              className="rounded-lg shadow-lg"
              height={427}
              src={placeholderImage}
              style={{
                aspectRatio: '640/427',
                objectFit: 'cover'
              }}
              width={640}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
