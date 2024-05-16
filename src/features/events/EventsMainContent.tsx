import { useEventStore } from '@/stores/useEventStore';
import { useEffect } from 'react';
import { EventCard } from './EventCard';
import { EventTitlePage } from '@/components/all-events/EventTitlePage';
import { PaginationComponent } from '@/components/common/PaginationComponent';
import { useFilter, usePagination } from '@/hooks';
import { FilterDropdown, SortByDropdown, SortOrderDropdown } from '@/components/button';
import { sortingOptions } from './eventOptions';
import { categoryDashboardGroups } from '../dashboard/EventDashboard/dashboardEventOptions';

export const EventsMainContent: React.FC = () => {
  const { events, fetchEvents, total } = useEventStore();
  const { currentPage, setPage, limit, totalPages, offset } = usePagination({
    initialPage: 1,
    initialLimit: 9,
    totalCount: total
  });
  const { sortBy, setSortBy, sortOrder, setSortOrder, filterBy, filterValue, setFilterValue } =
    useFilter('title', 'DESC', 'categoryType', 'ALL');
  useEffect(() => {
    fetchEvents({ limit, offset, sortBy, sortOrder, filterBy, filterValue });
  }, [currentPage, limit, sortBy, sortOrder, filterBy, filterValue, fetchEvents]);

  useEffect(() => {
    setPage(1); // Reset to the first page whenever filters or sorting change
  }, [setPage, sortBy, sortOrder, filterBy, filterValue]);

  return (
    <section className="w-full py-12 md:py-14 lg:py-14 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <EventTitlePage />
          <div className="ml-auto flex items-center gap-2">
            <SortByDropdown sortBy={sortBy} onSortChange={setSortBy} options={sortingOptions} />
            <SortOrderDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
            <FilterDropdown
              groups={categoryDashboardGroups}
              filterValue={filterValue}
              onChange={setFilterValue}
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {events.map(event => (
            <EventCard
              eventId={event.eventId}
              key={event.eventId}
              title={event.title}
              categoryType={event.categoryType}
              shortDescription={event.shortDescription}
              quantityAvailable={event.quantityAvailable}
              startDate={event.startDate}
              endDate={event.endDate}
            />
          ))}
        </div>
      </div>

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </section>
  );
};
