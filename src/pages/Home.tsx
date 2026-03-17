import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

import BalanceWidget from "../components/BalanceWidget";
import BillsWidget from "../components/BillsWidget";
import BudgetsWidget from "../components/Budgets/BudgetsWidget";
import MainLayout from "../components/MainLayout";
import PotsWidjet from "../components/Pots/PotsWidjet";
import TransActionsWidjet from "../components/Transactions/TransActWidjet";

const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <MainLayout title={t("nav.overview")}>
      <Grid container spacing={6}>
        <Grid size={12}>
          <BalanceWidget />
        </Grid>
        <Grid size={{ xs: 12, xl: 7 }}>
          <PotsWidjet sx={{ mb: 6 }} />
          <TransActionsWidjet />
        </Grid>
        <Grid size={{ xs: 12, xl: 5 }}>
          <BudgetsWidget sx={{ mb: 6 }} />
          <BillsWidget />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;
