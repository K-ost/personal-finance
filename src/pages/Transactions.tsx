import { useState } from "react";
import { Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Wrap from "../ui/Wrap";
import Sorting from "../components/Sorting";
import useGetData from "../hooks/useGetData";
import { Transaction } from "../types";
import TransactionsTable from "../components/TransactionsTable";
import Pager from "../ui/Pager";

const pageCount = 10;

const Transactions = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const to = page * pageCount;
  const from = to - pageCount;
  const params = searchParams.toString();

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
            <Sorting
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />

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
