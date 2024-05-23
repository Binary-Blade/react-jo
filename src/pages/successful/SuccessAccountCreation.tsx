import { CircleCheckIcon } from '@/components/ui/IconComponents';
import { Link } from 'wouter';

/**
 * `SuccessAccountCreation` component is responsible for displaying a success message
 * after a user successfully creates an account. It includes a confirmation icon,
 * a success message, and a link to navigate to the authentication page.
 *
 * @component
 * @returns {JSX.Element} The rendered success account creation component.
 *
 * @example
 * return (
 *   <SuccessAccountCreation />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on the `CircleCheckIcon` component
 * for visual confirmation and the `Link` component from `wouter` for navigation.
 */
export default function SuccessAccountCreation(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mx-auto flex max-w-md flex-col items-center justify-center text-center">
        {/* CircleCheckIcon: Displays a check icon indicating success */}
        <CircleCheckIcon className="text-green-500 h-20 w-20" />

        {/* Title: Success message title */}
        <h2 className="mt-6 text-3xl font-bold">Compte créé avec succès</h2>

        {/* Description: Success message description */}
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter.
        </p>

        {/* Link: Navigation link to the authentication page */}
        <Link
          className="mt-8 inline-flex items-center justify-center rounded-md bg-rose-600 
          px-8 py-3 text-sm font-medium text-gray-50 shadow transition-colors 
          hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 
          disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/auth"
        >
          Continuer
        </Link>
      </div>
    </div>
  );
}
