import { TableHead, TableRow } from "@mui/material";
import Cell from "../../ui/Cell";

const Head = (): JSX.Element => {
  return (
    <TableHead>
      <TableRow>
        <Cell sm="true">Recipient / Sender</Cell>
        <Cell sm="true">Category</Cell>
        <Cell sm="true">Transaction Date</Cell>
        <Cell sm="true" align="right">
          Amount
        </Cell>
      </TableRow>
    </TableHead>
  );
};

export default Head;
