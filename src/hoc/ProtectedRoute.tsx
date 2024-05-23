import { Route, Redirect } from 'wouter';
import { useAuthStore } from '@/stores/useAuthStore';

interface ProtectedRouteProps {
  path: string;
  component: React.ComponentType<any>;
}

/**
 * `ProtectedRoute` is a higher-order component that wraps a route and ensures only authenticated users can access it.
 *
 * @component
 * @param {ProtectedRouteProps} props - The properties object.
 * @param {string} props.path - The path for the route.
 * @param {React.ComponentType<any>} props.component - The component to render for the route.
 * @returns {JSX.Element} The rendered route component, or a redirect to the auth page if the user is not authenticated.
 *
 * @example
 * <ProtectedRoute path="/dashboard" component={Dashboard} />
 *
 * @remarks
 * This component uses `useAuthStore` to get the current user's ID and authentication status.
 */
const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps): JSX.Element => {
  const { userId, isAuthenticated } = useAuthStore(state => ({
    userId: state.userId,
    isAuthenticated: state.isAuthenticated
  }));

  return (
    <Route
      {...rest}
      component={(props: any) =>
        userId && isAuthenticated ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

export default ProtectedRoute;
