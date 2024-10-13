import { Grid2, useMediaQuery, useTheme } from "@mui/material";
import MainLayout from "../components/MainLayout";
import Balance from "../ui/Balance";
import PageHeader from "../ui/PageHeader";
import AlertBox from "../ui/AlertBox";
import { useTranslation } from "react-i18next";
import PotsWidjet from "../components/Pots/PotsWidjet";

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

      <AlertBox
        title={t("alerts.inDev.title")}
        color="info"
        severity="info"
        sx={{ mt: 6, mb: 6 }}
      >
        {t("alerts.inDev.text")}
      </AlertBox>

      <PotsWidjet />
    </MainLayout>
  );
};

export default Home;
