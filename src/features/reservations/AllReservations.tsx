import { useEffect } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { useFilter, usePagination } from '@/hooks';
import { PaginationComponent } from '@/components/pagination/PaginationComponent';
import { ReservationEmpty } from '@/components/empty/ReservationEmpty';
import { Separator } from '@/components/ui/separator';
import { CardReservations } from './CardReservations';
import { FilterDropdown } from '../filter-sorting/FilterDropdown';
import { SortOrderDropdown } from '../filter-sorting/SortOrderDropdown';
import { SortByDropdown } from '../filter-sorting/SortByDropdown';
import { useTransactionStore } from '@/stores/useTransactionStore';
import { STATUSCOLOR } from '@/config/constants';
import { Card } from '@/components/ui/card';
import { FaCalendarAlt, FaEuroSign, FaReceipt } from 'react-icons/fa';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronRightIcon } from '@/components/ui/IconComponents';
import { FILTER_OPTIONS_TRANSACTIONS } from '@/config/filters/filtersTransactions';
import { SORTING_OPTIONS_TRANSACTIONS } from '@/config/sorting/sortingTransactions';

export const AllReservations = () => {
  const { transactions, fetchTransactions, total } = useTransactionStore();
  const { userId } = useAuthStore();
  const { currentPage, setPage, limit, totalPages, offset } = usePagination({
    initialPage: 1,
    initialLimit: 5,
    totalCount: total
  });

  const { sortBy, setSortBy, sortOrder, setSortOrder, filterBy, filterValue, setFilterValue } =
    useFilter('createdAt', 'DESC', 'statusPayment', 'ALL');

  useEffect(() => {
    setPage(1); // Reset to the first page whenever filters or sorting change
  }, [setPage, sortBy, sortOrder, filterBy, filterValue]);

  useEffect(() => {
    if (userId) {
      fetchTransactions(userId, { limit, offset, sortBy, sortOrder, filterBy, filterValue });
    }
  }, [
    currentPage,
    fetchTransactions,
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
  }, [setPage]);

  return (
    <>
      <section className="p-10">
        <div className="flex items-center space-x-4">
          <SortByDropdown
            sortBy={sortBy}
            onSortChange={setSortBy}
            options={SORTING_OPTIONS_TRANSACTIONS}
          />
          <SortOrderDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          <FilterDropdown
            groups={FILTER_OPTIONS_TRANSACTIONS}
            filterValue={filterValue}
            onChange={setFilterValue}
          />
        </div>
      </section>
      <div className="px-4 space-y-8">
        {transactions.length > 0 ? (
          transactions.map(transaction => (
            <div key={transaction.transactionId} className="mb-6">
              <div className="mb-4 flex flex-row justify-between items-center">
                <h3 className="text-2xl font-bold flex items-center">
                  <FaReceipt className="mr-2 text-rose-600" /> Transaction #
                  {transaction.transactionId}
                </h3>
                <div
                  className={`px-3 py-1 rounded-md border text-md font-semibold ${STATUSCOLOR[transaction.statusPayment]}`}
                >
                  {transaction.statusPayment}
                </div>
              </div>
              <div className="px-3">
                <div className="text-md font-semibold flex items-center mb-2">
                  <FaCalendarAlt className="mr-2 text-gray-600" />
                  Date d'achat:
                  <span className="text-sm text-gray-500 ml-1">{transaction.createdAt}</span>
                </div>
                <div className="text-md font-semibold flex items-center mb-4">
                  <FaEuroSign className="mr-2 text-gray-600" />
                  Montant total:
                  <span className="text-sm text-gray-500 ml-1">{transaction.totalAmount}€</span>
                </div>
              </div>
              <Collapsible>
                <CollapsibleTrigger className="font-semibold flex items-center gap-1 transition-transform duration-300 ease-in-out [&[data-state=open]>svg]:rotate-90">
                  Voir plus
                  <ChevronRightIcon className="w-4 h-4 translate-y-px transition-transform duration-300 ease-in-out" />
                </CollapsibleTrigger>
                <CollapsibleContent className="transition-opacity duration-300 ease-in-out">
                  <div className=" rounded-lg overflow-hidden py-8">
                    <div className="px-2 pb-4 grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5">
                      {transaction.reservation.map(reservation => (
                        <CardReservations
                          key={reservation.reservationId}
                          reservation={reservation}
                          statusPayment={transaction.statusPayment}
                        />
                      ))}
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Separator className="my-6" />
            </div>
          ))
        ) : (
          <ReservationEmpty />
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
