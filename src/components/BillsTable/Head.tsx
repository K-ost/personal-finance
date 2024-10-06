import { TableHead, TableRow } from "@mui/material";
import Cell from "../../ui/Cell";

const Head = (): JSX.Element => {
  return (
    <TableHead>
      <TableRow>
        <Cell sm="true">Bill Title</Cell>
        <Cell sm="true">Due Date</Cell>
        <Cell sm="true" align="right">
          Amount
        </Cell>
      </TableRow>
    </TableHead>
  );
};

export default Head;
