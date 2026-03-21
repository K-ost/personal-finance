import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ isAuth }: { isAuth: boolean }): JSX.Element => {
  const location = useLocation();
  if (!isAuth && location.pathname !== "/login") {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
