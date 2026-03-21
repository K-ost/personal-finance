import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRoutes = ({ isAuth }: { isAuth: boolean }): JSX.Element => {
  const location = useLocation();
  if (isAuth && location.pathname !== "/") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default PublicRoutes;
