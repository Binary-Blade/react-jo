import { CircleCheckIcon } from '@/components/ui/IconComponents';
import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function SuccessAccountConnexion() {
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
        <CircleCheckIcon className="text-green-500 h-20 w-20" />
        <h2 className="mt-6 text-3xl font-bold">Connexion réussie !</h2>
        <p className="mt-4 text-gray-500">Vous êtes maintenant connecté à votre compte.</p>
      </div>
    </div>
  );
}
