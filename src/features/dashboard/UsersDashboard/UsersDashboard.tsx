import { TableGenericData } from '@/components/tables/TableGenericData';
import { useUserStore } from '@/stores/useUserStore';
import { useEffect } from 'react';
import { useDelConfirmation, useFilter, usePagination } from '@/hooks';
import { useAggregateUsersData } from '@/hooks/useAggregateUsersData';
import { PaginationComponent } from '@/components/pagination/PaginationComponent';
import { cardDataUsers } from '@/config/constants/cardDataDashbord';
import { FilterBarDashboard } from '@/components/hero/FilterBarDashboard';
import { GenericAlertDialog } from '@/components/dialog/AlertDialogGeneric';
import { SortByDropdown } from '@/features/filter-sorting/SortByDropdown';
import { SortOrderDropdown } from '@/features/filter-sorting/SortOrderDropdown';
import { FilterDropdown } from '@/features/filter-sorting/FilterDropdown';
import { HeaderCardInfoDashboard } from '@/components/cards/HeaderCardInfoDashboard';
import { useAuthStore } from '@/stores/useAuthStore';
import { DropDownAccount } from '@/features/header/DropDownAccount';
import { usersColumnsTable } from '@/config/constants/columns-table/usersColumnsTable';
import { FILTER_USERS_DASHBOARD } from '@/config/constants/filters/filterUsers';
import { SORTING_USERS_DASHBOARD } from '@/config/constants/sorting/sortingUsers';

/**
 * `UsersDashboard` component is responsible for displaying and managing the users dashboard.
 * It includes filtering, sorting, pagination, and deletion operations on users.
 *
 * @component
 * @returns {JSX.Element} The rendered users dashboard component.
 *
 * @example
 * return (
 *   <UsersDashboard />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components, hooks, and stores:
 * - `TableGenericData` for displaying user data in a table.
 * - `PaginationComponent` for handling pagination.
 * - `FilterBarDashboard`, `HeaderCardInfoDashboard`, `GenericAlertDialog`, `FilterDropdown`,
 *   `SortOrderDropdown`, `SortByDropdown`, `DropDownAccount` for UI elements.
 * - `useUserStore`, `useAuthStore` for managing user state.
 * - `useAggregateUsersData`, `useDelConfirmation`, `useFilter`, `usePagination` hooks for state and data management.
 */
export const UsersDashboard = (): JSX.Element => {
  // Extract user data and actions from the user store
  const { users, fetchAllUsersFiltered, total } = useUserStore();
  const { deleteUser } = useAuthStore();

  // Manage deletion confirmation dialog state
  const { isDialogOpen, error, requestDelete, confirmDeletion, cancelDeletion } =
    useDelConfirmation(deleteUser, 'userId');

  // Aggregate user data for dashboard cards
  const { totalClients, totalRevenue, newSignUps } = useAggregateUsersData();
  const cardDataUser = cardDataUsers(totalClients, totalRevenue, newSignUps);

  // Manage filtering and sorting state
  const { sortBy, setSortBy, sortOrder, setSortOrder, filterBy, filterValue, setFilterValue } =
    useFilter('email', 'DESC', 'role', 'ALL');

  // Manage pagination state
  const { currentPage, setPage, limit, totalPages, offset } = usePagination({
    initialPage: 1,
    initialLimit: 10,
    totalCount: total
  });

  // Fetch users when filters, sorting, or pagination changes
  useEffect(() => {
    fetchAllUsersFiltered({ limit, offset, sortBy, sortOrder, filterBy, filterValue });
  }, [currentPage, limit, sortBy, sortOrder, filterBy, filterValue, fetchAllUsersFiltered]);

  return (
    <>
      {/* User account dropdown */}
      <div className="flex items-center gap-4 justify-end">
        <DropDownAccount />
      </div>

      {/* Dashboard filter bar */}
      <FilterBarDashboard title="Utilisateurs" />

      {/* Header card info */}
      <HeaderCardInfoDashboard cardData={cardDataUser} />

      {/* Action bar with sorting and filtering options */}
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

      {/* Users data table */}
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

      {/* Pagination component */}
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
};
