import { Grid2, useMediaQuery, useTheme } from "@mui/material";
import Btn from "../ui/Btn";
import { useAuthStore } from "../store/useAuthStore";
import MainLayout from "../components/MainLayout";
import Balance from "../ui/Balance";
import PageHeader from "../ui/PageHeader";
import AlertBox from "../ui/AlertBox";
import CustomSelect from "../ui/CustomSelect";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../store/useAppStore";

const Home = (): JSX.Element => {
  const { lang, setLang } = useAppStore();
  const { setLogout } = useAuthStore();
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

      <CustomSelect
        label="Language"
        options={[
          { name: "En", value: "en" },
          { name: "Ru", value: "ru" },
        ]}
        value={lang}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLang(e.target.value)
        }
      />

      <Btn onClick={() => setLogout()}>Logout</Btn>
    </MainLayout>
  );
};

export default Home;
