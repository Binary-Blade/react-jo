import { CardEventStatitics } from '@/components/dashboard/CardEventStatistics';
import { CardUsersStatistic } from '@/components/dashboard/CardUsersStatistics';
import { FilterBarDashboard } from '@/components/dashboard/FilterBarDashboard';

export const StatisticDashboard = () => {
  return (
    <>
      <FilterBarDashboard title="Statistics" />
      <CardEventStatitics />
      <CardUsersStatistic />
    </>
  );
};
