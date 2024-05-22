import { CircleCheckIcon } from '@/components/ui/IconComponents';
import { Link } from 'wouter';

export default function SuccessAccountDeleted() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mx-auto flex max-w-md flex-col items-center justify-center text-center">
        <CircleCheckIcon className="text-green-500 h-20 w-20" />
        <h2 className="mt-6 text-3xl font-bold">Compte supprimé!</h2>
        <p className="mt-4 text-gray-500">
          Votre compte a été supprimé avec succès. Nous espérons vous revoir bientôt!
        </p>
        <Link
          className="mt-8 inline-flex items-center justify-center rounded-md bg-rose-600 
          px-8 py-3 text-sm font-medium text-gray-50 shadow transition-colors 
          hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 
          disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
