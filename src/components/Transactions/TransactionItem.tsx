import { Typography } from "@mui/material";

import { Transaction } from "../../types/types";
import UserCard from "../../ui/UserCard";
import { createDate, transactionPrice } from "../../utils/utils";

type TransactionItemProps = {
  transaction: Transaction;
};

const TransactionItem = (props: TransactionItemProps): JSX.Element => {
  const { transaction } = props;
  return (
    <div className="flex items-center justify-between border-b border-b-beige-300 py-3 first:pt-0 last:pb-0 last:border-0">
      <UserCard avatar={transaction.avatar} name={transaction.name} />
      <div className="text-right">
        <Typography variant="body2" component="div" fontWeight={700} sx={{ mb: 1 }}>
          {transactionPrice(transaction.amount)}
        </Typography>
        <Typography variant="body2" component="div" color="textSecondary">
          {createDate(transaction.date)}
        </Typography>
      </div>
    </div>
  );
};

export default TransactionItem;
