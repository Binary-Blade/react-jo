import { Route, Redirect } from 'wouter';
import { useAuthStore } from '@/stores/useAuthStore';
import { UserRole } from '@/config/enums/UserRole.enum';

interface AdminRouteProps {
  path: string;
  component: React.ComponentType<any>;
}

/**
 * `AdminRoute` is a higher-order component that wraps a route and ensures only admin users can access it.
 *
 * @component
 * @param {AdminRouteProps} props - The properties object.
 * @param {string} props.path - The path for the route.
 * @param {React.ComponentType<any>} props.component - The component to render for the route.
 * @returns {JSX.Element} The rendered route component, or a redirect to the home page if the user is not an admin.
 *
 * @example
 * <AdminRoute path="/admin" component={AdminDashboard} />
 *
 * @remarks
 * This component uses `useAuthStore` to get the current user's ID and role, and `UserRole` to check if the user is an admin.
 */
const AdminRoute = ({ component: Component, ...rest }: AdminRouteProps): JSX.Element => {
  const { userId, role } = useAuthStore();
  return (
    <Route
      {...rest}
      component={(props: any) =>
        userId && role === UserRole.ADMIN ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AdminRoute;
