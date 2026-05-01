import { Grid, Typography } from "@mui/material";
import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";

import MainLayout from "../components/MainLayout";
import BalanceWidget from "../components/widjets/BalanceWidget";
import PotsWidjet from "../components/widjets/PotsWidjet";
import TransActionsWidjet from "../components/widjets/TransActWidjet";
import { useAuthStore } from "../store/useAuthStore";

const BudgetsWidgetLazy = lazy(() => import("../components/widjets/BudgetsWidget"));
const BillsWidgetLazy = lazy(() => import("../components/widjets/BillsWidget"));

const Home = (): JSX.Element => {
  const { t } = useTranslation();
  const user = useAuthStore((state) => state.user);

  return (
    <MainLayout title={t("nav.overview")}>
      <Grid container spacing={6}>
        <Grid size={12}>
          <Typography variant="body1" mb={4}>
            Hi, {user?.name}, ({user?.email})
          </Typography>
          <BalanceWidget />
        </Grid>
        <Grid size={{ xs: 12, xl: 7 }}>
          <PotsWidjet sx={{ mb: 6 }} />
          <TransActionsWidjet />
        </Grid>
        <Grid size={{ xs: 12, xl: 5 }}>
          <Suspense fallback={"Loading..."}>
            <BudgetsWidgetLazy sx={{ mb: 6 }} />
            <BillsWidgetLazy />
          </Suspense>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;
