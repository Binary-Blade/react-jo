import { Route, Redirect } from 'wouter';
import { useAuthStore } from '@/stores/useAuthStore';
import { UserRole } from '@/config/enums/UserRole.enum';

interface AdminRouteProps {
  path: string;
  component: React.ComponentType<any>;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ component: Component, ...rest }) => {
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
