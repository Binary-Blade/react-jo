import { MedalIcon } from '@/components/ui/IconComponents';
import { Link } from 'wouter';

/**
 * `NotFoundPage` component is responsible for displaying a 404 error page.
 * It informs the user that the requested page could not be found and provides
 * a link to return to the homepage.
 *
 * @component
 * @returns {JSX.Element} The rendered not found page component.
 *
 * @example
 * return (
 *   <NotFoundPage />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on the `MedalIcon` component for visual branding.
 * The `Link` component from `wouter` is used for navigation.
 */
export default function NotFoundPage(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      {/* Icon Section */}
      <div className="flex items-center justify-center mb-8">
        {/* MedalIcon: Displays a medal icon for visual branding */}
        <MedalIcon className="h-16 w-16 text-rose-500" />
      </div>

      {/* Title Section */}
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Page non trouvée</h1>

      {/* Message Section */}
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Désolé, la page que vous recherchez n'existe pas.
      </p>

      {/* Link Section */}
      <Link
        className="inline-flex items-center justify-center px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-md shadow-sm"
        href="/"
      >
        Retourner à l'accueil
      </Link>
    </div>
  );
}
