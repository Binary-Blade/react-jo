export interface User {
    id: number;
    name: string;
    email: string;
    role: string; // or enum if you have defined roles as TypeScript enums
}

export interface UserState {
    users: User[];
    selectedUser: User | null;
    error: string | null;
}

export interface UserActions {
    fetchAllUsers: () => Promise<void>;
    fetchUserById: (userId: number) => Promise<void>;
    updateUser: (userId: number, updateData: Partial<User>) => Promise<void>;
    deleteUser: (userId: number) => Promise<void>;
    setError: (message: string) => void;
    clearError: () => void;
}

export type UserStore = UserState & UserActions;
