import MainLayout from "../components/MainLayout";
import { Pagination, Typography } from "@mui/material";
import Wrap from "../ui/Wrap";
import Sorting from "../components/Sorting";
import useGetData from "../hooks/useGetData";
import { Transaction } from "../types";
import TransactionsTable from "../components/TransactionsTable";
import { useState } from "react";

const pageCount = 10;

const Transactions = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const to = page * pageCount;
  const from = to - pageCount;

  const { data, isLoading, isSuccess } = useGetData<Transaction[]>({
    key: ["transactions"],
    uri: "/transactions",
  });

  return (
    <MainLayout>
      <Typography variant="h1">Transactions</Typography>
      <Wrap>
        <Sorting />

        {isLoading && "Loading..."}
        {isSuccess && <TransactionsTable list={data.slice(from, to)} />}

        {isSuccess && (
          <Pagination
            count={Math.floor(data.length / pageCount)}
            variant="outlined"
            shape="rounded"
            onChange={(__, page: number) => setPage(page)}
          />
        )}
      </Wrap>
    </MainLayout>
  );
};

export default Transactions;
