import { FilterBarDashboard } from '@/components/dashboard/FilterBarDashboard';
import { HeaderCardInfo } from '@/components/dashboard/HeaderCardInfo';
import { TableGenericData } from '@/components/tables/TableGenericData';
import { useEventStore } from '@/stores/useEventStore';
import { useEffect } from 'react';
import { DashboardHeader } from '@/components/navigation/DashboardHeader';
import { eventColumns } from './eventColumns';
import { generateCardDataEvent } from './generateCardDataEvent';
import { GenericAlertDialog } from '@/components/common/AlertDialogGeneric';
import { CardAddEvent } from './CardAddEvent';
import { EditEventSidebar } from './EditEventSideBar';
import { PaginationComponent } from '@/components/common/PaginationComponent';
import { FilterDropdown, SortByDropdown, SortOrderDropdown } from '@/components/button';
import { useAggregateEventData, useDelConfirmation, useFilter, usePagination } from '@/hooks';
import { useSidebarForm } from '@/hooks/useSideBarForm';
import { categoryDashboardGroups, sortingDashboardOptions } from './dashboardEventOptions';
import { CreateEventDto, UpdateEventDto } from '@/config/dtos/Event.dto';

export const EventsDashboard = () => {
  const eventColumn = eventColumns();
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
  const cardDataEvent = generateCardDataEvent(totalQuantity, totalSold, totalRevenue);
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
        <CardAddEvent />
        <div className="ml-auto flex items-center gap-2">
          <SortByDropdown
            sortBy={sortBy}
            onSortChange={setSortBy}
            options={sortingDashboardOptions}
          />
          <SortOrderDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          <FilterDropdown
            groups={categoryDashboardGroups}
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
