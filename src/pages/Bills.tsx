import MainLayout from "../components/MainLayout";
import PageHeader from "../ui/PageHeader";
import AlertBox from "../ui/AlertBox";
import { useTranslation } from "react-i18next";
import useGetData from "../hooks/useGetData";
import { Transaction } from "../types";
import Error from "../components/Error";
import TransactionsLoading from "../components/TransactionsTable/Loading";
import BillsTable from "../components/BillsTable";
import Wrap from "../ui/Wrap";

const Bills = (): JSX.Element => {
  const { t } = useTranslation();

  const { data, isError, isLoading, isSuccess } = useGetData<Transaction[]>({
    key: ["bills"],
    uri: "/transactions?recurring=true",
  });

  return (
    <MainLayout>
      <PageHeader title={t("nav.recurringBills")} />
      <Wrap>
        <AlertBox title={t("alerts.inDev.title")} color="info" severity="info">
          {t("alerts.inDev.text")}
        </AlertBox>

        {isLoading && <TransactionsLoading count={7} />}
        {isError && <Error />}
        {isSuccess && <BillsTable list={data.data} />}
      </Wrap>
    </MainLayout>
  );
};

export default Bills;
