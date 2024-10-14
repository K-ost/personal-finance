import { TableRow } from "@mui/material";
import { Transaction } from "../../types";
import { createDate } from "../../utils/utils";
import Amount from "../../ui/Amount";
import UserCard from "../../ui/UserCard";
import Cell from "../../ui/Cell";

type RowProps = {
  transaction: Transaction;
};

const Row = (props: RowProps): JSX.Element => {
  const { transaction } = props;

  return (
    <TableRow>
      <Cell>
        <UserCard avatar={transaction.avatar} name={transaction.name} />
      </Cell>
      <Cell>{transaction.category}</Cell>
      <Cell>{createDate(transaction.date)}</Cell>
      <Cell align="right">
        <Amount amount={transaction.amount} />
      </Cell>
    </TableRow>
  );
};

export default Row;
