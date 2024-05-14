import { SideBarDesktop } from '@/components/dashboard/SideBarDesktop';
import { SideBarMenu } from '@/components/header/SideBarMenu';
import { useEffect, useState } from 'react';
import { StatisticDashboard } from '@/features/dashboard/StatisticDashboard';
import { EventsDashboard } from '@/features/dashboard/EventDashboard/EventsDashboard';
import { UsersDashboard } from '@/features/dashboard/UsersDashboard/UsersDashboard';

export default function DashboardPage() {
  const [activeComponent, setActiveComponent] = useState(() => {
    return localStorage.getItem('activeDashboardComponent') || 'events';
  });

  useEffect(() => {
    localStorage.setItem('activeDashboardComponent', activeComponent);
  }, [activeComponent]);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'users':
        return <UsersDashboard />;
      case 'statistic':
        return <StatisticDashboard />;
      default:
        return <EventsDashboard />;
    }
  };

  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <SideBarDesktop setActiveComponent={setActiveComponent} />
        <div className="flex flex-col">
          <SideBarMenu hiddenValue="lg" />
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            {renderComponent()}
          </main>
        </div>
      </div>
    </>
  );
}
