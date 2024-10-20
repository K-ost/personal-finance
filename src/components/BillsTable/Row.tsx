import { Box, TableRow, useMediaQuery, useTheme } from "@mui/material";
import { Transaction } from "../../types";
import Amount from "../../ui/Amount";
import UserCard from "../../ui/UserCard";
import Cell from "../../ui/Cell";
import { createBillsDate } from "../../utils/utils";
import paidIcon from "../../assets/icon-bill-paid.svg";
import dueIcon from "../../assets/icon-bill-due.svg";

type RowProps = {
  transaction: Transaction;
};

const Row = (props: RowProps): JSX.Element => {
  const { transaction } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const currentDate = new Date().getDate();
  const transactionDate = new Date(transaction.date).getDate();

  return (
    <TableRow>
      <Cell>
        <UserCard avatar={transaction.avatar} name={transaction.name} />
        {isMobile && (
          <Box sx={{ mt: 2 }}>{createBillsDate(transaction.date)}</Box>
        )}
      </Cell>
      {!isMobile && (
        <Cell>
          {createBillsDate(transaction.date)}
          {currentDate >= transactionDate && <img src={paidIcon} alt="" />}
          {transactionDate < currentDate + 5 &&
            currentDate < transactionDate && <img src={dueIcon} alt="" />}
        </Cell>
      )}
      <Cell align="right">
        <Amount amount={transaction.amount} />
      </Cell>
    </TableRow>
  );
};

export default Row;
