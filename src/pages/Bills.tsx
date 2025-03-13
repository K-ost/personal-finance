import { useTranslation } from "react-i18next";
import useGetData from "../hooks/useGetData";
import { ServerResponse, Transaction } from "../types";
import Error from "../components/Error";
import TransactionsLoading from "../components/Transactions/Loading";
import BillsTable from "../components/BillsTable";
import Wrap from "../ui/Wrap";
import MainLayout from "../components/MainLayout";
import SummaryBills from "../components/SummaryBills";
import useRecurringBills from "../hooks/useRecurringBills";
import { Box, Grid2, useMediaQuery, useTheme } from "@mui/material";
import TotalBills from "../components/TotalBills";
import Filter from "../components/Filter";
import Search from "../components/Filter/Search";
import Sorting from "../components/Filter/Sorting";
import { useSearchParams } from "react-router-dom";

const Bills = (): JSX.Element => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [searchParams] = useSearchParams();
  const params = searchParams.toString().length ? "&" + searchParams.toString() : "";

  const { data, isError, isLoading, isSuccess } = useGetData<ServerResponse<Transaction>>(
    {
      key: ["bills", params],
      uri: `/transactions?recurring=true${params}`,
    }
  );

  const { bills, info } = useRecurringBills({
    data: isSuccess ? data.data : [],
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
            {!isError && isSuccess && (
              <Filter>
                <Search sx={{ mb: isMobile ? 3 : 0 }} />
                <Sorting sx={{ ml: "auto" }} />
              </Filter>
            )}
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
