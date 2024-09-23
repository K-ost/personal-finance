import { Route, Routes } from "react-router-dom";
import Styles from "./components/Styles";
import PublicRoutes from "./components/PublicRoutes";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/Home";
import { useAuthStore } from "./store/useAuthStore";
import Notification from "./ui/Notification";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Pots from "./pages/Pots";
import Bills from "./pages/Bills";

function App() {
  const { auth } = useAuthStore();
  const isAuth = !!auth?.accessToken;

  return (
    <div>
      <Styles />
      <Routes>
        <Route element={<PublicRoutes isAuth={isAuth} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<ProtectedRoutes isAuth={isAuth} />}>
          <Route path="/" index element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/bills" element={<Bills />} />
        </Route>
      </Routes>
      <Notification />
    </div>
  );
}

export default App;
