import { SideBarDesktop } from '@/components/dashboard/SideBarDesktop';
import { SideBarMenu } from '@/components/header/SideBarMenu';
import { EventsDashboard } from '@/features/dashboard/EventsDashboard';
import { useState } from 'react';
import { UsersDashboard } from '@/features/dashboard/UsersDashboard';
import { StatisticDashboard } from '@/features/dashboard/StatisticDashboard';
import { TicketsDashboard } from '@/features/dashboard/TicketsDashboard';

export default function DashboardPage() {
  const [activeComponent, setActiveComponent] = useState('events');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'tickets':
        return <TicketsDashboard />;
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
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <SideBarMenu hiddenValue="lg" />
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            {renderComponent()}
          </main>
        </div>
      </div>
    </>
  );
}
