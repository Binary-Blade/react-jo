import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { FC } from 'react';
import placeholderImage from '@/assets/images/test.png';

interface HeroProfileProps {
  selectedUser: {
    firstName: string;
    lastName: string;
    email: string;
  };
  initials: string;
}

export const HeroProfile: FC<HeroProfileProps> = ({ selectedUser, initials }) => (
  <div className="relative flex items-center justify-center h-96 bg-gray-100 dark:bg-gray-900">
    <img
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
      src={placeholderImage}
    />
    <div
      className="relative mx-auto flex max-w-md flex-col items-center 
      space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800 backdrop-filter backdrop-blur-md"
    >
      <Avatar className="h-40 w-40 ">
        <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />

        <AvatarFallback className="text-white bg-rose-500 text-4xl ">{initials}</AvatarFallback>
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
