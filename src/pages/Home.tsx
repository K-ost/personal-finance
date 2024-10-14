import { Grid2, useMediaQuery, useTheme } from "@mui/material";
import MainLayout from "../components/MainLayout";
import Balance from "../ui/Balance";
import PageHeader from "../ui/PageHeader";
import { useTranslation } from "react-i18next";
import PotsWidjet from "../components/Pots/PotsWidjet";
import TransActionsWidjet from "../components/Transactions/TransActWidjet";
import BudgetsWidget from "../components/Budgets/BudgetsWidget";

const Home = (): JSX.Element => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MainLayout>
      <PageHeader title={t("nav.overview")} />

      <Grid2 container spacing={isMobile ? 3 : 6}>
        <Grid2 size={{ xs: 12, sm: 4 }}>
          <Balance title="Current Balance" amount={4836} dark />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 4 }}>
          <Balance title="Income" amount={3814.25} />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 4 }}>
          <Balance title="Expenses" amount={4836} />
        </Grid2>
      </Grid2>

      <PotsWidjet />
      <TransActionsWidjet />
      <BudgetsWidget />
    </MainLayout>
  );
};

export default Home;
