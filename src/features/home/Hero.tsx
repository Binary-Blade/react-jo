import { Link } from 'wouter';
import placeholderImage from '@/assets/images/bg_image4.webp';
import { useAuthStore } from '@/stores/useAuthStore';

/**
 * `Hero` component displays the main hero section of the page.
 * It includes a background image, title, description, and links to other sections of the website.
 *
 * @component
 * @returns {JSX.Element} The rendered hero section component.
 *
 * @example
 * return (
 *   <Hero />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and includes dynamic links that change based on the user's authentication status:
 * - `Link` from 'wouter' for client-side navigation.
 * - `useAuthStore` for checking if the user is authenticated.
 * - A placeholder image for the background.
 */
export const Hero = (): JSX.Element => {
  // Extract authentication status from the auth store
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  return (
    <section className="relative bg-gray-900">
      {/* Background image section */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt="Paris Skyline"
          className="object-cover w-full h-full opacity-35 z-10"
          height={1080}
          src={placeholderImage}
          style={{
            aspectRatio: '1920/1080',
            objectFit: 'cover'
          }}
          width={1920}
        />
      </div>

      {/* Content section */}
      <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          OlymTicket
        </h1>
        <p className="max-w-3xl mt-6 text-xl text-gray-300">
          Vivez l'excitation des Jeux Olympiques dans la Ville Lumière. Assistez à un moment
          historique où les plus grands athlètes du monde s'affrontent pour la gloire.
        </p>

        {/* Action buttons */}
        <div className="flex gap-4 mt-12">
          {/* Link to events page */}
          <Link
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-rose-500 border border-transparent rounded-md shadow-sm hover:bg-rose-600"
            href="/events"
          >
            Explorer
          </Link>

          {/* Conditional link based on authentication status */}
          {isAuthenticated ? (
            <Link
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-900 bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-50"
              href="/billets"
            >
              Mes Billets
            </Link>
          ) : (
            <Link
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-900 bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-50"
              href="/auth"
            >
              Connexion
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
