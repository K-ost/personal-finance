import MainLayout from "../components/MainLayout";
import { useTranslation } from "react-i18next";
import useGetData from "../hooks/useGetData";
import { Transaction } from "../types";
import Error from "../components/Error";
import TransactionsLoading from "../components/Transactions/Loading";
import BillsTable from "../components/BillsTable";
import Wrap from "../ui/Wrap";

const Bills = (): JSX.Element => {
  const { t } = useTranslation();

  const { data, isError, isLoading, isSuccess } = useGetData<Transaction[]>({
    key: ["bills"],
    uri: "/transactions?recurring=true",
  });

  return (
    <MainLayout title={t("nav.recurringBills")}>
      <Wrap>
        {isLoading && <TransactionsLoading count={7} />}
        {isError && <Error />}
        {isSuccess && <BillsTable list={data.data} />}
      </Wrap>
    </MainLayout>
  );
};

export default Bills;
