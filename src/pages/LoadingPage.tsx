import { MedalIcon } from '@/components/ui/IconComponents';

/**
 * `LoadingPage` component is responsible for displaying a loading screen.
 * It includes a central icon, a title, and animated bouncing dots to indicate
 * that content is being loaded.
 *
 * @component
 * @returns {JSX.Element} The rendered loading page component.
 *
 * @example
 * return (
 *   <LoadingPage />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on the `MedalIcon` component for visual branding.
 */
export default function LoadingPage(): JSX.Element {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="space-y-6 text-center">
        {/* Icon Section */}
        <div className="flex items-center justify-center">
          {/* MedalIcon: Displays a medal icon for visual branding */}
          <MedalIcon className="h-20 w-20 text-rose-600" />
        </div>

        {/* Title Section */}
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
          OlymTickets
        </h1>

        {/* Spacer for Alignment */}
        <div className="flex items-center justify-center" />

        {/* Loading Dots Section */}
        <div className="w-full gap-x-2 flex justify-center items-center">
          {/* Animated bouncing dots to indicate loading */}
          <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce [animation-delay:.7s]" />
          <div className="w-4 h-4 rounded-full bg-gray-900 animate-bounce [animation-delay:.3s]" />
          <div className="w-4 h-4 rounded-full bg-rose-600 animate-bounce [animation-delay:.7s]" />
        </div>
      </div>
    </div>
  );
}
