import { useMediaQuery, useTheme } from "@mui/material";
import { memo } from "react";

import { Transaction } from "../../types/types";
import Amount from "../../ui/Amount";
import Cell from "../../ui/Cell";
import UserCard from "../../ui/UserCard";
import { createDate } from "../../utils/utils";

type RowProps = {
  transaction: Transaction;
  min?: boolean;
};

const Row = (props: RowProps): JSX.Element => {
  const { transaction, min = false } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <tr>
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
        {(isMobile || min) && <div className="mt-2">{createDate(transaction.date)}</div>}
      </Cell>
    </tr>
  );
};

export default memo(Row);
