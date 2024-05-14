import { PaginationParams } from '@/services/EventService';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  totalSpent: number;
}

export interface UserState {
  users: User[];
  selectedUser: User | null;
  error: string | null;
}

export interface UserActions {
  usersValues: User[];
  users: User[];
  selectedUser: User | null;
  error: string | null;
  total: number;
  fetchAllUsersFiltered: (params: PaginationParams) => Promise<void>;
  fetchAllUsersValues: () => Promise<void>;
  fetchUserById: (userId: number) => Promise<void>;
  updateUser: (userId: number, updateData: Partial<User>) => Promise<void>;
  deleteUser: (userId: number) => Promise<void>;
  setError: (message: string) => void;
  clearError: () => void;
}

export type UserStore = UserState & UserActions;
