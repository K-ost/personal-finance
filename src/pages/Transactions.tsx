import { useState } from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Wrap from "../ui/Wrap";
import useGetData from "../hooks/useGetData";
import { Transaction } from "../types";
import TransactionsTable from "../components/TransactionsTable";
import Pager from "../ui/Pager";
import Filter from "../components/Filter";
import Search from "../components/Filter/Search";
import Sorting from "../components/Filter/Sorting";
import FilterCategory from "../components/Filter/FilterCategory";

const pageCount = 10;

const Transactions = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [searchparams] = useSearchParams();
  const to = page * pageCount;
  const from = to - pageCount;
  const params = searchparams.toString();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, isLoading, isSuccess } = useGetData<Transaction[]>({
    key: ["transactions", params],
    uri: `/transactions?_start=${from}&_end=${to}${
      params.length ? "&" + params : ""
    }`,
  });

  return (
    <MainLayout>
      <Typography variant="h1">Transactions</Typography>
      <Wrap>
        {isLoading && "Loading..."}

        {isSuccess && (
          <>
            <Filter>
              <Search
                sx={{
                  m: 0,
                  mr: isMobile ? 0 : theme.spacing(6),
                  mb: isMobile ? theme.spacing(4) : 0,
                }}
              />
              <Sorting sx={{ ml: "auto" }} />
              <FilterCategory />
            </Filter>

            <TransactionsTable list={data.data} />

            <Pager
              count={Math.ceil(data.count / pageCount)}
              onChange={(__, page: number) => setPage(page)}
            />
          </>
        )}
      </Wrap>
    </MainLayout>
  );
};

export default Transactions;
