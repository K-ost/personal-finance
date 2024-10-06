import { Table, TableBody, TableContainer } from "@mui/material";
import { Transaction } from "../../types";
import Row from "./Row";
import Head from "./Head";

type BillsTableProps = {
  list: Transaction[];
};

const BillsTable = (props: BillsTableProps): JSX.Element => {
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

export default BillsTable;
