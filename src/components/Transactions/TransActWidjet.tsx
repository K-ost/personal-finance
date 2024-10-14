import Wrap from "../../ui/Wrap";
import useGetData from "../../hooks/useGetData";
import Error from "../Error";
import { Skeleton, Table, TableBody, TableContainer } from "@mui/material";
import Row from "./Row";
import { Transaction } from "../../types";

const TransActionsWidjet = (): JSX.Element => {
  const { data, isError, isLoading, isSuccess } = useGetData<Transaction[]>({
    key: ["transactions"],
    uri: "/transactions?_limit=5",
  });

  if (isLoading) return <Skeleton height={215} variant="rounded" />;
  if (isError) return <Error />;

  return (
    <Wrap title="Transactions" alllink="/transactions" all="View All">
      <TableContainer>
        <Table>
          <TableBody>
            {isSuccess &&
              data.data.map((row) => (
                <Row key={row.id} min transaction={row} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrap>
  );
};

export default TransActionsWidjet;
