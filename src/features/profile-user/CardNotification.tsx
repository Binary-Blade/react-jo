import { AtSignIcon, BellIcon, EyeOffIcon } from '@/components/ui/IconComponents';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';

export const CardNotification = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose what you want to be notified about.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div
          className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all 
          hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
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
          className="-mx-2 flex items-start space-x-4 rounded-md bg-gray-100 p-2 text-gray-900 
          transition-all dark:bg-gray-800 dark:text-gray-50"
        >
          <AtSignIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Available</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Only mentions and comments.</p>
          </div>
        </div>
        <div
          className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all 
          hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
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
