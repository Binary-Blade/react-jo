import { useState } from 'react';
import { AtSignIcon, BellIcon, EyeOffIcon } from '@/components/ui/IconComponents';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';

/**
 * `CardNotification` component allows the user to select their notification preferences.
 * It provides options to choose between receiving all notifications, only mentions, or no notifications at all.
 *
 * @component
 * @returns {JSX.Element} The rendered CardNotification component.
 *
 * @example
 * return <CardNotification />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Card`, `CardTitle`, `CardDescription`, `CardHeader`, `CardContent` for the card layout.
 * - `AtSignIcon`, `BellIcon`, `EyeOffIcon` for the notification icons.
 */
export const CardNotification = (): JSX.Element => {
  const [selected, setSelected] = useState('Available');

  /**
   * Handle the selection of a notification option.
   *
   * @param {string} option - The selected notification option.
   */
  const handleSelect = (option: string) => {
    setSelected(option);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choisissez les notifications que vous souhaitez recevoir.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* Option for receiving all notifications */}
        <div
          onClick={() => handleSelect('Everything')}
          className={`-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all cursor-pointer 
          ${selected === 'Everything' ? 'bg-blue-100 text-blue-900 dark:bg-blue-800 dark:text-blue-50' : 'hover:bg-blue-50 hover:text-blue-900 dark:hover:bg-blue-700 dark:hover:text-blue-50'}`}
        >
          <BellIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Tout</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Digest par email, mentions et toutes les activités.
            </p>
          </div>
        </div>
        {/* Option for receiving mentions and comments only */}
        <div
          onClick={() => handleSelect('Available')}
          className={`-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all cursor-pointer 
          ${selected === 'Available' ? 'bg-blue-100 text-blue-900 dark:bg-blue-800 dark:text-blue-50' : 'hover:bg-blue-50 hover:text-blue-900 dark:hover:bg-blue-700 dark:hover:text-blue-50'}`}
        >
          <AtSignIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Disponible</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Seulement les mentions et commentaires.
            </p>
          </div>
        </div>
        {/* Option for turning off all notifications */}
        <div
          onClick={() => handleSelect('Ignoring')}
          className={`-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all cursor-pointer 
          ${selected === 'Ignoring' ? 'bg-blue-100 text-blue-900 dark:bg-blue-800 dark:text-blue-50' : 'hover:bg-blue-50 hover:text-blue-900 dark:hover:bg-blue-700 dark:hover:text-blue-50'}`}
        >
          <EyeOffIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Ignorer</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Désactiver toutes les notifications.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
