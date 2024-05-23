import { createContext, useEffect, useMemo, useState } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import LoadingPage from '@/pages/LoadingPage';
import { AuthProviderProps } from '@/config/types/authprovider.type';
import { AuthContextType } from '@/config/interfaces/authentication/auth-context.interface';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * `AuthProvider` component provides authentication context to its children.
 * It manages the authentication state and initializes the session.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components that require access to the auth context.
 * @returns {JSX.Element} The rendered AuthProvider component.
 *
 * @example
 * return (
 *   <AuthProvider>
 *     <YourComponent />
 *   </AuthProvider>
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom hooks and components:
 * - `useAuthStore` for authentication state management.
 * - `LoadingPage` for displaying a loading indicator while the session is being initialized.
 */
export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const { accessProtectedRoute, isAuthenticated, userId, role } = useAuthStore();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    accessProtectedRoute()
      .then(() => setInitialized(true))
      .catch((err: string) => {
        console.error('Failed to initialize session:', err);
        setInitialized(true); // Consider setting initialized to true even on error to render children with error message
      });
  }, [accessProtectedRoute]);

  const value = useMemo(
    () => ({
      initialized,
      isAuthenticated,
      userId,
      role
    }),
    [initialized, isAuthenticated, userId, role]
  );

  return (
    <AuthContext.Provider value={value}>
      {initialized ? children : <LoadingPage />}
    </AuthContext.Provider>
  );
};
