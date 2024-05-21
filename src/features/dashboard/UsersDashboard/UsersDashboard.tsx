import { TableGenericData } from '@/components/tables/TableGenericData';
import { useUserStore } from '@/stores/useUserStore';
import { useEffect } from 'react';
import { useDelConfirmation, useFilter, usePagination } from '@/hooks';
import { useAggregateUsersData } from '@/hooks/useAggregateUsersData';
import { PaginationComponent } from '@/components/pagination/PaginationComponent';
import { cardDataUsers } from '@/utils/cardDataDashbord';
import { FILTER_USERS_DASHBOARD } from '@/config/filters/filterUsers';
import { usersColumnsTable } from '@/config/columns-table/usersColumnsTable';
import { SORTING_USERS_DASHBOARD } from '@/config/sorting/sortingUsers';
import { FilterBarDashboard } from '@/components/hero/FilterBarDashboard';
import { GenericAlertDialog } from '@/components/dialog/AlertDialogGeneric';
import { SortByDropdown } from '@/features/filter-sorting/SortByDropdown';
import { SortOrderDropdown } from '@/features/filter-sorting/SortOrderDropdown';
import { FilterDropdown } from '@/features/filter-sorting/FilterDropdown';
import { HeaderCardInfoDashboard } from '@/components/cards/HeaderCardInfoDashboard';
import { useAuthStore } from '@/stores/useAuthStore';
import { DropDownAccount } from '@/features/header/DropDownAccount';

export const UsersDashboard = () => {
  const { users, fetchAllUsersFiltered, total } = useUserStore();
  const { deleteUser } = useAuthStore();
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
      <div className="flex items-center gap-4 justify-end">
        <DropDownAccount />
      </div>
      <FilterBarDashboard title="Utilisateurs" />
      <HeaderCardInfoDashboard cardData={cardDataUser} />
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
            title="Êtes-vous sûr ?"
            description="Cette action est irréversible. Cela supprimera définitivement cet utilisateur."
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
