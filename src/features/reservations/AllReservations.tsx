import { useEffect } from 'react';
import useReservationStore from '@/stores/useReservationStore';
import { useAuthStore } from '@/stores/useAuthStore';
import { useFilter, usePagination } from '@/hooks';
import { Button } from '@/components/ui/button';
import { PaginationComponent } from '@/components/pagination/PaginationComponent';
import { CardReservations } from '@/components/cards/CardReservations';
import { SortOrderDropdown } from '@/components/dropdown/SortOrderDropdown';
import { FilterDropdown } from '@/components/dropdown/FilterDropdown';
import { SortByDropdown } from '@/components/dropdown/SortByDropdown';
import { FILTERS_EVENT } from '@/config/filters/filtersEvents';
import { SORTING_RESERVATION_PUBLIC } from '@/config/sorting/sortingReservation';
import { ReservationEmpty } from '@/components/empty/ReservationEmpty';
import { Separator } from '@/components/ui/separator';

export const AllReservations = () => {
  const { reservations, fetchReservations, total } = useReservationStore();
  const { userId } = useAuthStore();

  console.log(reservations);

  const { currentPage, setPage, limit, totalPages, offset } = usePagination({
    initialPage: 1,
    initialLimit: 12,
    totalCount: total
  });

  const { sortBy, setSortBy, sortOrder, setSortOrder, filterBy, filterValue, setFilterValue } =
    useFilter('reservationDetails.price', 'DESC', 'reservationDetails.event.categoryType', 'ALL');

  useEffect(() => {
    if (userId) {
      fetchReservations(userId, {
        limit,
        offset,
        sortBy,
        sortOrder,
        filterBy,
        filterValue
      });
    }
  }, [
    currentPage,
    fetchReservations,
    userId,
    limit,
    offset,
    sortBy,
    sortOrder,
    filterBy,
    filterValue
  ]);

  useEffect(() => {
    setPage(1); // Reset to the first page whenever filters or sorting change
  }, [setPage, sortBy, sortOrder, filterBy, filterValue]);

  return (
    <>
      <section className="p-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 ">
            <SortByDropdown
              sortBy={sortBy}
              onSortChange={setSortBy}
              options={SORTING_RESERVATION_PUBLIC}
            />
            <SortOrderDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
            <FilterDropdown
              groups={FILTERS_EVENT}
              filterValue={filterValue}
              onChange={setFilterValue}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">Rejected</Button>
            <Button variant="outline">Approved</Button>
            <Button variant="outline">Pending</Button>
          </div>
        </div>
      </section>
      <div className="px-10 pb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {reservations.map(reservation => (
          <CardReservations key={reservation.reservationId} reservation={reservation} />
        ))}
      </div>
      <div>{reservations.length <= 0 && <ReservationEmpty />}</div>
      <Separator />
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
};
