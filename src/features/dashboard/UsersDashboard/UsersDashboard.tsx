import { TableGenericData } from '@/components/tables/TableGenericData';
import { useUserStore } from '@/stores/useUserStore';
import { useEffect } from 'react';
import { GenericAlertDialog } from '@/components/common/AlertDialogGeneric';
import { useDelConfirmation, useFilter, usePagination } from '@/hooks';
import { useAggregateUsersData } from '@/hooks/useAggregateUsersData';
import { DashboardHeader } from '@/components/header/DashboardHeader';
import { HeaderCardInfo } from '@/components/header/HeaderCardInfo';
import { PaginationComponent } from '@/components/pagination/PaginationComponent';
import { SortByDropdown } from '@/components/dropdown/SortByDropdown';
import { SortOrderDropdown } from '@/components/dropdown/SortOrderDropdown';
import { FilterDropdown } from '@/components/dropdown/FilterDropdown';
import { cardDataUsers } from '@/utils/cardDataDashbord';
import { FILTER_USERS_DASHBOARD } from '@/config/filters/filterUsers';
import { usersColumnsTable } from '@/config/columns-table/usersColumnsTable';
import { SORTING_USERS_DASHBOARD } from '@/config/sorting/sortingUsers';
import { FilterBarDashboard } from '@/components/hero/FilterBarDashboard';

export const UsersDashboard = () => {
  const { users, fetchAllUsersFiltered, deleteUser, total } = useUserStore();
  const { isDialogOpen, error, requestDelete, confirmDeletion, cancelDeletion } =
    useDelConfirmation(deleteUser, 'userId');
  const { totalClients, totalRevenue, newSignUps } = useAggregateUsersData();
  const cardDataUser = cardDataUsers(totalClients, totalRevenue, newSignUps);
  const { sortBy, setSortBy, sortOrder, setSortOrder, filterBy, filterValue, setFilterValue } =
    useFilter('email', 'DESC', 'role', 'ALL');
  const { currentPage, setPage, limit, totalPages, offset } = usePagination({
    initialPage: 1,
    initialLimit: 10,
    totalCount: total
  });

  useEffect(() => {
    fetchAllUsersFiltered({ limit, offset, sortBy, sortOrder, filterBy, filterValue });
  }, [currentPage, limit, sortBy, sortOrder, filterBy, filterValue, fetchAllUsersFiltered]);

  return (
    <>
      <DashboardHeader />
      <FilterBarDashboard title="Users" />
      <HeaderCardInfo cardData={cardDataUser} />
      <div className="flex items-center gap-4">
        <div className="ml-auto flex items-center gap-2">
          <SortByDropdown
            sortBy={sortBy}
            onSortChange={setSortBy}
            options={SORTING_USERS_DASHBOARD}
          />
          <SortOrderDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          <FilterDropdown
            groups={FILTER_USERS_DASHBOARD}
            filterValue={filterValue}
            onChange={setFilterValue}
          />
        </div>
      </div>
      <div className="border shadow-sm rounded-lg" key={users.length}>
        <TableGenericData data={users} columns={usersColumnsTable} onDelete={requestDelete} />
        {error && <div className="error">{error}</div>}
        {isDialogOpen && (
          <GenericAlertDialog
            isOpen={isDialogOpen}
            onClose={cancelDeletion}
            onConfirm={confirmDeletion}
            title="Are you sure?"
            description="This action cannot be undone. This will permanently delete that user."
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
