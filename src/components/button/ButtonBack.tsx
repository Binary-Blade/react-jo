import { LogOutIcon } from '@/components/ui/IconComponents';

export const ButtonBack = () => {
  const handleBack = () => {
    window.history.back(); // Navigue à la page précédente
  };

  return (
    <button onClick={handleBack} className="button ghost">
      <LogOutIcon className="h-8 w-8 rotate-180" />
      <span className="sr-only">Logout</span>
    </button>
  );
};
