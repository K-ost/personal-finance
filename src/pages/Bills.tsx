import { useTranslation } from "react-i18next";
import useGetData from "../hooks/useGetData";
import { Transaction } from "../types";
import Error from "../components/Error";
import TransactionsLoading from "../components/Transactions/Loading";
import BillsTable from "../components/BillsTable";
import Wrap from "../ui/Wrap";
import MainLayout from "../components/MainLayout";
import SummaryBills from "../components/SummaryBills";
import useRecurringBills from "../hooks/useRecurringBills";
import { Box, Grid2 } from "@mui/material";
import TotalBills from "../components/TotalBills";

const Bills = (): JSX.Element => {
  const { t } = useTranslation();

  const {
    data: billsData,
    isError,
    isLoading,
    isSuccess,
  } = useGetData<Transaction[]>({
    key: ["bills"],
    uri: "/transactions?recurring=true",
  });

  const { bills, info } = useRecurringBills({
    data: isSuccess ? billsData : [],
  });

  return (
    <MainLayout title={t("nav.recurringBills")}>
      <Grid2 container spacing={6}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box>
            <Grid2 container spacing={6}>
              <Grid2 size={{ xs: 12, sm: 6, md: 12 }}>
                {isSuccess && <TotalBills info={info} />}
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 12 }}>
                {isSuccess && <SummaryBills info={info} />}
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Wrap>
            {isLoading && <TransactionsLoading count={7} />}
            {isError && <Error />}
            {isSuccess && <BillsTable list={bills} />}
          </Wrap>
        </Grid2>
      </Grid2>
    </MainLayout>
  );
};

export default Bills;
