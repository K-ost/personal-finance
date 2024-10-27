import { Grid2, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PotsWidjet from "../components/Pots/PotsWidjet";
import TransActionsWidjet from "../components/Transactions/TransActWidjet";
import BudgetsWidget from "../components/Budgets/BudgetsWidget";
import BalanceWidget from "../components/BalanceWidget";
import MainLayout from "../components/MainLayout";
import BillsWidget from "../components/BillsWidget";
import { useAuthStore } from "../store/useAuthStore";

const Home = (): JSX.Element => {
  const { t } = useTranslation();
  const { auth } = useAuthStore();

  return (
    <MainLayout title={t("nav.overview")}>
      <Grid2 container spacing={6}>
        <Grid2 size={12}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            {t("home.hello", { name: auth?.user?.name })}
          </Typography>
          <BalanceWidget />
        </Grid2>
        <Grid2 size={{ xs: 12, xl: 7 }}>
          <PotsWidjet sx={{ mb: 6 }} />
          <TransActionsWidjet />
        </Grid2>
        <Grid2 size={{ xs: 12, xl: 5 }}>
          <BudgetsWidget sx={{ mb: 6 }} />
          <BillsWidget />
        </Grid2>
      </Grid2>
    </MainLayout>
  );
};

export default Home;
