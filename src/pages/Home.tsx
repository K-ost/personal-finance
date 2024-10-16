import { Grid2 } from "@mui/material";
import MainLayout from "../components/MainLayout";
import PageHeader from "../ui/PageHeader";
import { useTranslation } from "react-i18next";
import PotsWidjet from "../components/Pots/PotsWidjet";
import TransActionsWidjet from "../components/Transactions/TransActWidjet";
import BudgetsWidget from "../components/Budgets/BudgetsWidget";
import BalanceWidget from "../components/BalanceWidget";

const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <PageHeader title={t("nav.overview")} />

      <Grid2 container spacing={6}>
        <Grid2 size={12}>
          <BalanceWidget />
        </Grid2>
        <Grid2 size={{ xs: 12, xl: 7 }}>
          <PotsWidjet sx={{ mb: 6 }} />
          <TransActionsWidjet />
        </Grid2>
        <Grid2 size={{ xs: 12, xl: 5 }}>
          <BudgetsWidget sx={{ mb: 6 }} />
        </Grid2>
      </Grid2>
    </MainLayout>
  );
};

export default Home;
