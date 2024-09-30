import { Grid2, useMediaQuery, useTheme } from "@mui/material";
import Btn from "../ui/Btn";
import { useAuthStore } from "../store/useAuthStore";
import MainLayout from "../components/MainLayout";
import Balance from "../ui/Balance";
import PageHeader from "../ui/PageHeader";
import AlertBox from "../ui/AlertBox";

const Home = (): JSX.Element => {
  const { setLogout } = useAuthStore();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MainLayout>
      <PageHeader title="Home Page" />

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
        title="in development"
        color="info"
        severity="info"
        sx={{ mt: 6, mb: 6 }}
      >
        Currently this page is being developed.
      </AlertBox>

      <Btn onClick={() => setLogout()}>Logout</Btn>
    </MainLayout>
  );
};

export default Home;
