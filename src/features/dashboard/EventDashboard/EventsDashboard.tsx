import { TableGenericData } from '@/components/tables/TableGenericData';
import { useEventStore } from '@/stores/useEventStore';
import { useEffect } from 'react';
import { EditEventSidebar } from './EditEventSideBar';
import { useAggregateEventData, useDelConfirmation, useFilter, usePagination } from '@/hooks';
import { useSidebarForm } from '@/hooks/useSideBarForm';
import { CreateEventDto, UpdateEventDto } from '@/config/dtos/Event.dto';
import { DashboardHeader } from '@/components/header/DashboardHeader';
import { HeaderCardInfo } from '@/components/header/HeaderCardInfo';
import { PaginationComponent } from '@/components/pagination/PaginationComponent';
import { SortByDropdown } from '@/components/dropdown/SortByDropdown';
import { SortOrderDropdown } from '@/components/dropdown/SortOrderDropdown';
import { FilterDropdown } from '@/components/dropdown/FilterDropdown';
import { CollapsibleAddEvent } from '@/components/collapsible/CollapsibleAddEvent';
import { eventColumnsTable } from '@/config/columns-table/eventColumnsTable';
import { SORTING_EVENTS_DASHBOARD } from '@/config/sorting/sortingEvents';
import { FILTERS_EVENT } from '@/config/filters/filtersEvents';
import { cardDataEvents } from '@/utils/cardDataDashbord';
import { FilterBarDashboard } from '@/components/hero/FilterBarDashboard';
import { GenericAlertDialog } from '@/components/dialog/AlertDialogGeneric';

export const EventsDashboard = () => {
  const eventColumn = eventColumnsTable();
  const { events, fetchEvents, total, updateEvent, deleteEvent } = useEventStore();
  const { isDialogOpen, error, requestDelete, confirmDeletion, cancelDeletion } =
    useDelConfirmation(deleteEvent, 'eventId');
  const { sortBy, setSortBy, sortOrder, setSortOrder, filterBy, filterValue, setFilterValue } =
    useFilter('basePrice', 'DESC', 'categoryType', 'ALL');
  const { currentPage, setPage, limit, totalPages, offset } = usePagination({
    initialPage: 1,
    initialLimit: 10,
    totalCount: total
  });
  const { totalQuantity, totalSold, totalRevenue } = useAggregateEventData();
  const cardDataEvent = cardDataEvents(totalQuantity, totalSold, totalRevenue);
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

  useEffect(() => {
    fetchEvents({ limit, offset, sortBy, sortOrder, filterBy, filterValue });
  }, [currentPage, limit, sortBy, sortOrder, filterBy, filterValue, fetchEvents]);

  useEffect(() => {
    setPage(1); // Reset to the first page whenever filters or sorting change
  }, [setPage, sortBy, sortOrder, filterBy, filterValue]);
  return (
    <>
      <DashboardHeader />
      <FilterBarDashboard title="Events" />
      <HeaderCardInfo cardData={cardDataEvent} />
      <div className="flex items-center gap-4">
        <CollapsibleAddEvent />
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
      <div className="border shadow-sm rounded-lg" key={events.length}>
        {isSidebarOpen && (
          <EditEventSidebar
            event={selectedEvent}
            onClose={handleCloseSidebar}
            onSave={handleSave} // Implement saving logic
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
            title="Are you sure?"
            description="This action cannot be undone. This will permanently delete the event."
          />
        )}
      </div>

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
};
