import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";
import Styles from "./components/Styles";
import Bills from "./pages/Bills";
import Budgets from "./pages/Budgets";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Pots from "./pages/Pots";
import SignUp from "./pages/SignUp";
import Transactions from "./pages/Transactions";
import { useAppStore } from "./store/useAppStore";
import { useIsLogged } from "./store/useAuthStore";
import Notification from "./ui/Notification";

function App() {
  const { lang } = useAppStore();
  const isLogged = useIsLogged();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  // const { error } = useGetData({
  //   key: ["token"],
  //   uri: "/token",
  //   enabled: isLogged,
  // });

  // useEffect(() => {
  //   if (error && error.message && error.message === SERVER_MESSAGES.unauthorized) {
  //     setLogout();
  //   }
  // }, [error, setLogout]);

  return (
    <>
      <Styles />
      <Routes>
        <Route element={<PublicRoutes isAuth={isLogged} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<ProtectedRoutes isAuth={isLogged} />}>
          <Route path="/" index element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/bills" element={<Bills />} />
        </Route>
      </Routes>
      <div data-testid="not">
        <Notification />
      </div>
    </>
  );
}

export default App;
