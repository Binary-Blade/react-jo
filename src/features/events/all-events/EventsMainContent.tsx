import { useEventStore } from '@/stores/useEventStore';
import { useEffect } from 'react';
import { useFilter, usePagination } from '@/hooks';
import { EventCard } from './EventCard';
import { PaginationComponent } from '@/components/pagination/PaginationComponent';
import { GenericTitle } from '@/components/hero/GenericTitle';
import { Separator } from '@/components/ui/separator';
import LoadingPage from '@/pages/LoadingPage';
import { FilterDropdown } from '@/features/filter-sorting/FilterDropdown';
import { SortOrderDropdown } from '@/features/filter-sorting/SortOrderDropdown';
import { SortByDropdown } from '@/features/filter-sorting/SortByDropdown';
import { FILTERS_EVENT } from '@/config/constants/filters/filtersEvents';
import { SORTING_EVENTS_PUBLIC } from '@/config/constants/sorting/sortingEvents';

/**
 * `EventsMainContent` component displays the main content area for viewing events.
 * It includes filtering, sorting, pagination, and loading states.
 *
 * @component
 * @returns {JSX.Element} The rendered events main content component.
 *
 * @example
 * return (
 *   <EventsMainContent />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components, hooks, and stores:
 * - `EventCard` for displaying individual event details.
 * - `PaginationComponent` for handling pagination.
 * - `FilterBarDashboard`, `GenericTitle`, `Separator`, `FilterDropdown`,
 *   `SortOrderDropdown`, `SortByDropdown` for UI elements.
 * - `LoadingPage` for displaying a loading state.
 * - `useEventStore` for managing event state.
 * - `useFilter`, `usePagination` hooks for state and data management.
 */
export const EventsMainContent = (): JSX.Element => {
  // Extract state and actions from the event store
  const { events, fetchEvents, total, loading } = useEventStore();

  // Manage pagination state
  const { currentPage, setPage, limit, totalPages, offset } = usePagination({
    initialPage: 1,
    initialLimit: 8,
    totalCount: total
  });

  // Manage filtering and sorting state
  const { sortBy, setSortBy, sortOrder, setSortOrder, filterBy, filterValue, setFilterValue } =
    useFilter('title', 'DESC', 'categoryType', 'ALL');

  // Fetch events when filters, sorting, or pagination changes
  useEffect(() => {
    fetchEvents({ limit, offset, sortBy, sortOrder, filterBy, filterValue });
  }, [currentPage, limit, sortBy, sortOrder, filterBy, filterValue, fetchEvents]);

  // Reset to the first page whenever filters or sorting change
  useEffect(() => {
    setPage(1);
  }, [setPage, sortBy, sortOrder, filterBy, filterValue]);

  // Display loading page if data is still being fetched
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <section className="w-full h-full py-8 md:py-12 lg:py-14 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              {/* Section title and subtitle */}
              <GenericTitle
                title="Découvrez Tous les Événements"
                subtitle="Parcourez le programme complet des événements et compétitions des Jeux Olympiques de Paris 2024."
                titleClass="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 dark:text-white"
                subtitleClass="max-w-[900px] text-gray-600 md:text-xl lg:text-lg xl:text-xl dark:text-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              {/* Sorting and filtering controls */}
              <SortByDropdown
                sortBy={sortBy}
                onSortChange={setSortBy}
                options={SORTING_EVENTS_PUBLIC}
              />
              <SortOrderDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
              <FilterDropdown
                groups={FILTERS_EVENT}
                filterValue={filterValue}
                onChange={setFilterValue}
              />
            </div>
          </div>
          {/* Event cards grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </section>
      <Separator className="my-8" />
      <div className="container mx-auto px-4 md:px-6">
        {/* Pagination controls */}
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </>
  );
};
