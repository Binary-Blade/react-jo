import { useState } from 'react';
import { AtSignIcon, BellIcon, EyeOffIcon } from '@/components/ui/IconComponents';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';

export const CardNotification = () => {
  const [selected, setSelected] = useState('Available');

  const handleSelect = (option: string) => {
    setSelected(option);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose what you want to be notified about.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div
          onClick={() => handleSelect('Everything')}
          className={`-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all cursor-pointer 
          ${selected === 'Everything' ? 'bg-blue-100 text-blue-900 dark:bg-blue-800 dark:text-blue-50' : 'hover:bg-blue-50 hover:text-blue-900 dark:hover:bg-blue-700 dark:hover:text-blue-50'}`}
        >
          <BellIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Everything</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Email digest, mentions & all activity.
            </p>
          </div>
        </div>
        <div
          onClick={() => handleSelect('Available')}
          className={`-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all cursor-pointer 
          ${selected === 'Available' ? 'bg-blue-100 text-blue-900 dark:bg-blue-800 dark:text-blue-50' : 'hover:bg-blue-50 hover:text-blue-900 dark:hover:bg-blue-700 dark:hover:text-blue-50'}`}
        >
          <AtSignIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Available</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Only mentions and comments.</p>
          </div>
        </div>
        <div
          onClick={() => handleSelect('Ignoring')}
          className={`-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all cursor-pointer 
          ${selected === 'Ignoring' ? 'bg-blue-100 text-blue-900 dark:bg-blue-800 dark:text-blue-50' : 'hover:bg-blue-50 hover:text-blue-900 dark:hover:bg-blue-700 dark:hover:text-blue-50'}`}
        >
          <EyeOffIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Ignoring</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Turn off all notifications.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
