import { Table, TableBody, TableContainer } from "@mui/material";
import { Transaction } from "../../types";
import Head from "./Head";
import Row from "./Row";

type TransactionsTableProps = {
  list: Transaction[];
};

const TransactionsTable = (props: TransactionsTableProps): JSX.Element => {
  const { list } = props;

  return (
    <TableContainer sx={{ mb: 12 }}>
      <Table>
        <Head />
        <TableBody>
          {list.map((transaction) => (
            <Row key={transaction.id} transaction={transaction} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsTable;
