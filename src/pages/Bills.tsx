import MainLayout from "../components/MainLayout";
import PageHeader from "../ui/PageHeader";
import AlertBox from "../ui/AlertBox";
import { useTranslation } from "react-i18next";

const Bills = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <PageHeader title={t("nav.recurringBills")} />
      <AlertBox title={t("alerts.inDev.title")} color="info" severity="info">
        {t("alerts.inDev.text")}
      </AlertBox>
    </MainLayout>
  );
};

export default Bills;
