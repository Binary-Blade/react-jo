import { Route, Redirect } from 'wouter';
import { useAuthStore } from '@/stores/useAuthStore';

interface ProtectedRouteProps {
  path: string;
  component: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
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
