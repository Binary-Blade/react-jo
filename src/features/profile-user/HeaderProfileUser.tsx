import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';

export const HeroProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-12 dark:bg-gray-900">
      <div className="mx-auto flex max-w-md flex-col items-center space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <Avatar className="h-20 w-20">
          <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className="space-y-1 text-center">
          <h2 className="text-2xl font-bold">Jared Palmer</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">jared@example.com</p>
        </div>
      </div>
    </div>
  );
};
