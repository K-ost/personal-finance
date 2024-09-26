import { styled, TableCell, TableRow } from "@mui/material";
import { Transaction } from "../../types";
import { createDate } from "../../utils/utils";
import Amount from "../../ui/Amount";
import UserCard from "../../ui/UserCard";

type RowProps = {
  transaction: Transaction;
};

const Cell = styled(TableCell)(({ theme }) => ({
  borderBottomColor: theme.palette.custom.grey100,
  color: theme.palette.custom.grey500,
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  lineHeight: theme.typography.body2.lineHeight,
  padding: theme.spacing(4),
}));

const Row = (props: RowProps): JSX.Element => {
  const { transaction } = props;

  return (
    <TableRow>
      <Cell>
        <UserCard avatar={transaction.avatar} name={transaction.name} />
      </Cell>
      <Cell>{transaction.category}</Cell>
      <Cell>{createDate(transaction.date)}</Cell>
      <Cell
        align="right"
        sx={(theme) => ({
          color: theme.palette.primary.main,
          fontSize: theme.typography.body1.fontSize,
          lineHeight: theme.typography.body1.lineHeight,
          fontWeight: 700,
        })}
      >
        <Amount amount={transaction.amount} />
      </Cell>
    </TableRow>
  );
};

export default Row;
