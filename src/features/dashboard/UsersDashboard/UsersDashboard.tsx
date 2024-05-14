import { FilterBarDashboard } from '@/components/dashboard/FilterBarDashboard';
import { HeaderCardInfo } from '@/components/dashboard/HeaderCardInfo';
import { TableGenericData } from '@/components/tables/TableGenericData';
import { USERS_COLUMNS } from './usersColumns';
import { useUserStore } from '@/stores/useUserStore';
import { useEffect } from 'react';
import { DashboardHeader } from '@/components/navigation/DashboardHeader';
import { GenericAlertDialog } from '@/components/common/AlertDialogGeneric';
import { useDelConfirmation, useFilter, usePagination } from '@/hooks';
import { FilterDropdown, SortByDropdown, SortOrderDropdown } from '@/components/button';
import { cardDataUser } from './generatedCardDataUser';
import { useAggregateUsersData } from '@/hooks/useAggregateUsersData';
import { PaginationComponent } from '@/components/common/PaginationComponent';
import { roleOptions, sortingOptions } from './dashboardUserOptions';

export const UsersDashboard = () => {
  const { users, fetchAllUsersFiltered, deleteUser, total } = useUserStore();
  const { isDialogOpen, error, requestDelete, confirmDeletion, cancelDeletion } =
    useDelConfirmation(deleteUser, 'userId');
  const { totalClients, totalRevenue, newSignUps } = useAggregateUsersData();
  const cardDataUsers = cardDataUser(totalClients, totalRevenue, newSignUps);
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
      <HeaderCardInfo cardData={cardDataUsers} />
      <div className="flex items-center gap-4">
        <div className="ml-auto flex items-center gap-2">
          <SortByDropdown sortBy={sortBy} onSortChange={setSortBy} options={sortingOptions} />
          <SortOrderDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          <FilterDropdown
            options={roleOptions}
            filterValue={filterValue}
            onChange={setFilterValue}
            label="Filter by Role"
          />
        </div>
      </div>
      <div className="border shadow-sm rounded-lg" key={users.length}>
        <TableGenericData data={users} columns={USERS_COLUMNS} onDelete={requestDelete} />
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
