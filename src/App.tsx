import { lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";
import Styles from "./components/Styles";
import UpdateRefresh from "./components/UpdateRefresh";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import { useLanguageStore } from "./store/useAppStore";
import { useIsLogged } from "./store/useAuthStore";
import Notification from "./ui/Notification";

const Home = lazy(() => import("./pages/Home"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Budgets = lazy(() => import("./pages/Budgets"));
const Pots = lazy(() => import("./pages/Pots"));
const Bills = lazy(() => import("./pages/Bills"));

function App() {
  const lang = useLanguageStore();
  const { i18n } = useTranslation();
  const isAuth = useIsLogged();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <>
      <Styles />
      <Routes>
        <Route element={<PublicRoutes isAuth={isAuth} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoutes isAuth={isAuth} />
            </Suspense>
          }
        >
          <Route path="/" index element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/bills" element={<Bills />} />
        </Route>
      </Routes>
      <Notification />
      <UpdateRefresh />
    </>
  );
}

export default App;
