import { TableGenericData } from '@/components/tables/TableGenericData';
import { useEventStore } from '@/stores/useEventStore';
import { useEffect } from 'react';
import { EditEventSidebar } from './EditEventSideBar';
import { useAggregateEventData, useDelConfirmation, useFilter, usePagination } from '@/hooks';
import { useSidebarForm } from '@/hooks/useSideBarForm';
import { CreateEventDto, UpdateEventDto } from '@/config/dtos/Event.dto';
import { PaginationComponent } from '@/components/pagination/PaginationComponent';
import { cardDataEvents } from '@/config/constants/cardDataDashbord';
import { FilterBarDashboard } from '@/components/hero/FilterBarDashboard';
import { GenericAlertDialog } from '@/components/dialog/AlertDialogGeneric';
import { FilterDropdown } from '@/features/filter-sorting/FilterDropdown';
import { SortOrderDropdown } from '@/features/filter-sorting/SortOrderDropdown';
import { SortByDropdown } from '@/features/filter-sorting/SortByDropdown';
import { HeaderCardInfoDashboard } from '@/components/cards/HeaderCardInfoDashboard';
import { DropDownAccount } from '@/features/header/DropDownAccount';
import { AlertDialogAddEvent } from './AlertDialogAddEvent';
import { eventColumnsTable } from '@/config/constants/columns-table/eventColumnsTable';
import { SORTING_EVENTS_DASHBOARD } from '@/config/constants/sorting/sortingEvents';
import { FILTERS_EVENT } from '@/config/constants/filters/filtersEvents';

/**
 * `EventsDashboard` component is responsible for displaying and managing the events dashboard.
 * It includes filtering, sorting, pagination, and CRUD operations on events.
 *
 * @component
 * @returns {JSX.Element} The rendered events dashboard component.
 *
 * @example
 * return (
 *   <EventsDashboard />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components, hooks, and stores:
 * - `TableGenericData` for displaying event data in a table.
 * - `EditEventSidebar` for editing event details.
 * - `PaginationComponent` for handling pagination.
 * - `FilterBarDashboard`, `HeaderCardInfoDashboard`, `GenericAlertDialog`, `FilterDropdown`,
 *   `SortOrderDropdown`, `SortByDropdown`, `DropDownAccount`, `AlertDialogAddEvent` for UI elements.
 * - `useEventStore` for managing event state.
 * - `useAggregateEventData`, `useDelConfirmation`, `useFilter`, `usePagination` hooks for state and data management.
 */
export const EventsDashboard = (): JSX.Element => {
  // Get the event columns configuration
  const eventColumn = eventColumnsTable();

  // Extract state and actions from the event store
  const { events, fetchEvents, total, updateEvent, deleteEvent } = useEventStore();

  // Manage deletion confirmation dialog state
  const { isDialogOpen, error, requestDelete, confirmDeletion, cancelDeletion } =
    useDelConfirmation(deleteEvent, 'eventId');

  // Manage filtering and sorting state
  const { sortBy, setSortBy, sortOrder, setSortOrder, filterBy, filterValue, setFilterValue } =
    useFilter('basePrice', 'DESC', 'categoryType', 'ALL');

  // Manage pagination state
  const { currentPage, setPage, limit, totalPages, offset } = usePagination({
    initialPage: 1,
    initialLimit: 10,
    totalCount: total
  });

  // Aggregate event data for dashboard cards
  const { totalQuantity, totalSold, totalRevenue } = useAggregateEventData();
  const cardDataEvent = cardDataEvents(totalQuantity, totalSold, totalRevenue);

  // Manage sidebar form state for editing events
  const {
    isSidebarOpen,
    selectedItem: selectedEvent,
    handleEdit,
    handleCloseSidebar,
    handleSave
  } = useSidebarForm<CreateEventDto, UpdateEventDto, number>(
    updateEvent,
    event => event.eventId as number
  );

  // Fetch events when filters, sorting, or pagination changes
  useEffect(() => {
    fetchEvents({ limit, offset, sortBy, sortOrder, filterBy, filterValue });
  }, [currentPage, limit, sortBy, sortOrder, filterBy, filterValue, fetchEvents]);

  // Reset to the first page whenever filters or sorting change
  useEffect(() => {
    setPage(1);
  }, [setPage, sortBy, sortOrder, filterBy, filterValue]);

  return (
    <>
      {/* User account dropdown */}
      <div className="flex items-center gap-4 justify-end">
        <DropDownAccount />
      </div>

      {/* Dashboard filter bar */}
      <FilterBarDashboard title="Événements" />

      {/* Header card info */}
      <HeaderCardInfoDashboard cardData={cardDataEvent} />

      {/* Action bar with sorting and filtering options */}
      <div className="flex items-center gap-4">
        <AlertDialogAddEvent />
        <div className="ml-auto flex items-center gap-2">
          <SortByDropdown
            sortBy={sortBy}
            onSortChange={setSortBy}
            options={SORTING_EVENTS_DASHBOARD}
          />
          <SortOrderDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          <FilterDropdown
            groups={FILTERS_EVENT}
            filterValue={filterValue}
            onChange={setFilterValue}
          />
        </div>
      </div>

      {/* Events data table with sidebar for editing */}
      <div className="border shadow-sm rounded-lg" key={events.length}>
        {isSidebarOpen && (
          <EditEventSidebar
            event={selectedEvent}
            onClose={handleCloseSidebar}
            onSave={handleSave}
          />
        )}
        <TableGenericData
          data={events}
          columns={eventColumn}
          onEdit={handleEdit}
          onDelete={requestDelete}
        />
        {error && <div className="error">{error}</div>}
        {isDialogOpen && (
          <GenericAlertDialog
            isOpen={isDialogOpen}
            onClose={cancelDeletion}
            onConfirm={confirmDeletion}
            title="Êtes-vous sûr ?"
            description="Cette action est irréversible. Cela supprimera définitivement l'événement."
          />
        )}
      </div>

      {/* Pagination component */}
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
};
