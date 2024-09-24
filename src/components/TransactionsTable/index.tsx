import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { createDate } from "../../utils/utils";
import { Transaction } from "../../types";

type TransactionsTableProps = {
  list: Transaction[];
};

const TransactionsTable = (props: TransactionsTableProps): JSX.Element => {
  const { list } = props;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Recipient / Sender</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Transaction Date</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{createDate(row.date)}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsTable;
