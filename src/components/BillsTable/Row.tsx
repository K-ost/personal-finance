import { Box, TableRow, useMediaQuery, useTheme } from "@mui/material";
import { Transaction } from "../../types";
import Amount from "../../ui/Amount";
import UserCard from "../../ui/UserCard";
import Cell from "../../ui/Cell";
import { createBillsDate } from "../../utils/utils";

type RowProps = {
  transaction: Transaction;
};

const Row = (props: RowProps): JSX.Element => {
  const { transaction } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TableRow>
      <Cell>
        <UserCard avatar={transaction.avatar} name={transaction.name} />
        {isMobile && (
          <Box sx={{ mt: 2 }}>{createBillsDate(transaction.date)}</Box>
        )}
      </Cell>
      {!isMobile && <Cell>{createBillsDate(transaction.date)}</Cell>}
      <Cell align="right">
        <Amount amount={transaction.amount} />
      </Cell>
    </TableRow>
  );
};

export default Row;
