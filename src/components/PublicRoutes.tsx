import { Navigate, Outlet } from "react-router-dom";

import { useIsLogged } from "../store/useAuthStore";

const PublicRoutes = (): JSX.Element => {
  const isAuth = useIsLogged();
  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
