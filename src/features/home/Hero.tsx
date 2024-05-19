import { Link } from 'wouter';
import placeholderImage from '@/assets/images/PlaceholderParis.svg';
import { useAuthStore } from '@/stores/useAuthStore';

// TODO: Create a Link Universal Component that accepts a path and text as props
const Hero = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  return (
    <section className="relative bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt="Paris Skyline"
          className="object-cover w-full h-full opacity-60 z-10"
          height={1080}
          src={placeholderImage}
          style={{
            aspectRatio: '1920/1080',
            objectFit: 'cover'
          }}
          width={1920}
        />
      </div>
      <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Paris 2024
        </h1>
        <p className="max-w-3xl mt-6 text-xl text-gray-300">
          Vivez l'excitation des Jeux Olympiques dans la Ville Lumière. Assistez à un moment
          historique où les plus grands athlètes du monde s'affrontent pour la gloire.
        </p>
        <div className="flex gap-4 mt-12">
          <Link
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-rose-500 border border-transparent rounded-md shadow-sm hover:bg-rose-600"
            href="/events"
          >
            Explorer
          </Link>
          {isAuthenticated ? (
            <Link
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-900 bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-50"
              href="/reservations"
            >
              Mes Réservations
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

export default Hero;
