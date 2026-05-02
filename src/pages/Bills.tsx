import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import BillsTable from "../components/BillsTable";
import Filter from "../components/Filter";
import Sorting from "../components/Filter/Sorting";
import MainLayout from "../components/MainLayout";
import Search from "../components/Search";
import SummaryBills from "../components/SummaryBills";
import TotalBills from "../components/TotalBills";
import TransactionsLoading from "../components/Transactions/Loading";
import useRecurringBills from "../hooks/useRecurringBills";
import useRefresh from "../hooks/useRefresh";
import { ServerResponse } from "../types/apiTypes";
import { Transaction } from "../types/types";
import Error from "../ui/Error";
import Wrap from "../ui/Wrap";

const Bills = (): JSX.Element => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [searchParams] = useSearchParams();
  const params = searchParams.toString().length ? "&" + searchParams.toString() : "";

  const { data, isError, isLoading, isSuccess } = useRefresh<ServerResponse<Transaction>>(
    {
      key: ["bills", params],
      uri: `/transactions?recurring=true${params}`,
    },
  );

  const { bills, info } = useRecurringBills({
    data: isSuccess ? data.data : [],
  });

  return (
    <MainLayout title={t("nav.recurringBills")}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 4 }}>
          {isSuccess && (
            <Box>
              <Grid container spacing={6}>
                <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                  <TotalBills info={info} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                  <SummaryBills info={info} />
                </Grid>
              </Grid>
            </Box>
          )}
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
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
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Bills;
