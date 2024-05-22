import { MedalIcon } from '@/components/ui/IconComponents';
import { Link } from 'wouter';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center justify-center mb-8">
        <MedalIcon className="h-16 w-16 text-rose-500" />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Page non trouvée</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <Link
        className="inline-flex items-center justify-center px-4 py-2
        bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-md 
        shadow-sm"
        href="/"
      >
        Retourner à l'accueil
      </Link>
    </div>
  );
}
