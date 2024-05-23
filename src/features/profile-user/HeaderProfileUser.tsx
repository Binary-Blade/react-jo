import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import placeholderImage from '@/assets/images/test.png';

interface HeroProfileProps {
  selectedUser: {
    firstName: string;
    lastName: string;
    email: string;
  };
  initials: string;
}

/**
 * `HeroProfile` component displays a user's profile information in a hero section.
 * It includes a background image, user's avatar, and user's name and email.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.selectedUser - The selected user's information.
 * @param {string} props.selectedUser.firstName - The first name of the user.
 * @param {string} props.selectedUser.lastName - The last name of the user.
 * @param {string} props.selectedUser.email - The email of the user.
 * @param {string} props.initials - The initials of the user to be displayed in the avatar fallback.
 * @returns {JSX.Element} The rendered HeroProfile component.
 *
 * @example
 * return (
 *   <HeroProfile
 *     selectedUser={{ firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' }}
 *     initials="JD"
 *   />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Avatar`, `AvatarImage`, `AvatarFallback` for the user avatar.
 *
 * It also uses a placeholder image for the background.
 */
export const HeroProfile = ({ selectedUser, initials }: HeroProfileProps): JSX.Element => (
  <div className="relative flex items-center justify-center h-96 bg-gray-100 dark:bg-gray-900">
    {/* Background Image */}
    <img
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
      src={placeholderImage}
    />
    <div
      className="relative mx-auto flex max-w-md flex-col items-center 
      space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800 backdrop-filter backdrop-blur-md"
    >
      {/* User Avatar */}
      <Avatar className="h-40 w-40">
        <AvatarImage
          alt={`${selectedUser.firstName} ${selectedUser.lastName}`}
          src="/placeholder-avatar.jpg"
        />
        <AvatarFallback className="text-white bg-rose-500 text-4xl">{initials}</AvatarFallback>
      </Avatar>
      <div className="space-y-1 text-center">
        {/* User Name */}
        <h2 className="text-2xl font-bold">
          {selectedUser.firstName} {selectedUser.lastName}
        </h2>
        {/* User Email */}
        <p className="text-sm text-gray-500 dark:text-gray-400">{selectedUser.email}</p>
      </div>
    </div>
  </div>
);
