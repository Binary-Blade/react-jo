import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { FC } from 'react';

interface HeroProfileProps {
  selectedUser: {
    firstName: string;
    lastName: string;
    email: string;
  };
  initials: string;
}

export const HeroProfile: FC<HeroProfileProps> = ({ selectedUser, initials }) => (
  <div className="flex flex-col items-center justify-center bg-gray-100 py-12 dark:bg-gray-900">
    <div className="mx-auto flex max-w-md flex-col items-center space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
      <Avatar className="h-20 w-20">
        <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="space-y-1 text-center">
        <h2 className="text-2xl font-bold">
          {selectedUser.firstName} {selectedUser.lastName}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{selectedUser.email}</p>
      </div>
    </div>
  </div>
);
