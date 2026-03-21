import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ isAuth }: { isAuth: boolean }): JSX.Element => {
  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
