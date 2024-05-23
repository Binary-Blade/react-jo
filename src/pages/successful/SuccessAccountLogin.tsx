import { CircleCheckIcon } from '@/components/ui/IconComponents';
import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * `SuccessAccountConnexion` component is responsible for displaying a success message
 * after a user successfully logs in. It includes a confirmation icon, a success message,
 * and automatically redirects the user to the homepage after a short delay.
 *
 * @component
 * @returns {JSX.Element} The rendered success account connexion component.
 *
 * @example
 * return (
 *   <SuccessAccountConnexion />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on the `CircleCheckIcon` component
 * for visual confirmation and the `useLocation` hook from `wouter` for navigation.
 */
export default function SuccessAccountConnexion(): JSX.Element {
  const [, navigate] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mx-auto flex max-w-md flex-col items-center justify-center text-center">
        {/* CircleCheckIcon: Displays a check icon indicating success */}
        <CircleCheckIcon className="text-green-500 h-20 w-20" />

        {/* Title: Success message title */}
        <h2 className="mt-6 text-3xl font-bold">Connexion réussie !</h2>

        {/* Description: Success message description */}
        <p className="mt-4 text-gray-500">Vous êtes maintenant connecté à votre compte.</p>
      </div>
    </div>
  );
}
