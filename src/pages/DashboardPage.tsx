import { useEffect, useState } from 'react';
import { EventsDashboard } from '@/features/dashboard/EventDashboard/EventsDashboard';
import { UsersDashboard } from '@/features/dashboard/UsersDashboard/UsersDashboard';
import { SideBarDesktop } from '@/features/navbar/SideBarDesktop';
import { SideBarMenu } from '@/features/navbar/SideBarMenu';

/**
 * `DashboardPage` component is responsible for displaying the dashboard page.
 * It includes a sidebar for navigation and dynamically renders different dashboard
 * components based on the user's selection.
 *
 * @component
 * @returns {JSX.Element} The rendered dashboard page component.
 *
 * @example
 * return (
 *   <DashboardPage />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `SideBarDesktop` for displaying the desktop sidebar navigation.
 * - `SideBarMenu` for displaying the sidebar menu for smaller screens.
 * - `EventsDashboard` for displaying the events dashboard.
 * - `UsersDashboard` for displaying the users dashboard.
 */
export default function DashboardPage(): JSX.Element {
  // State for managing the active dashboard component
  const [activeComponent, setActiveComponent] = useState<string>(() => {
    return localStorage.getItem('activeDashboardComponent') || 'events';
  });

  // Effect to store the active component in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activeDashboardComponent', activeComponent);
  }, [activeComponent]);

  /**
   * Renders the active dashboard component based on the current state.
   *
   * @returns {JSX.Element} The active dashboard component.
   */
  const renderComponent = (): JSX.Element => {
    switch (activeComponent) {
      case 'users':
        return <UsersDashboard />;
      default:
        return <EventsDashboard />;
    }
  };

  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        {/* SideBarDesktop: Displays the desktop sidebar navigation */}
        <SideBarDesktop setActiveComponent={setActiveComponent} />

        <div className="flex flex-col">
          {/* SideBarMenu: Displays the sidebar menu for smaller screens */}
          <SideBarMenu hiddenValue="lg" />

          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            {/* Render the active dashboard component */}
            {renderComponent()}
          </main>
        </div>
      </div>
    </>
  );
}
