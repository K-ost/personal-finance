import { Navigate, Outlet } from "react-router-dom";

import { useIsLogged } from "../store/useAuthStore";

const ProtectedRoutes = (): JSX.Element => {
  const isAuth = useIsLogged();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
