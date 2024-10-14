import { Box, TableRow, useMediaQuery, useTheme } from "@mui/material";
import { Transaction } from "../../types";
import { createDate } from "../../utils/utils";
import Amount from "../../ui/Amount";
import UserCard from "../../ui/UserCard";
import Cell from "../../ui/Cell";

type RowProps = {
  transaction: Transaction;
  min?: boolean;
};

const Row = (props: RowProps): JSX.Element => {
  const { transaction, min = false } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TableRow>
      <Cell>
        <UserCard
          avatar={transaction.avatar}
          name={transaction.name}
          category={isMobile && !min ? transaction.category : undefined}
        />
      </Cell>
      {!isMobile && !min && (
        <>
          <Cell>{transaction.category}</Cell>
          <Cell>{createDate(transaction.date)}</Cell>
        </>
      )}
      <Cell align="right">
        <Amount amount={transaction.amount} />
        {(isMobile || min) && (
          <Box sx={{ mt: 2 }}>{createDate(transaction.date)}</Box>
        )}
      </Cell>
    </TableRow>
  );
};

export default Row;
