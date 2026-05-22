import { Typography, useMediaQuery, useTheme } from "@mui/material";

import { RecurringBill } from "../../types/types";
import Cell from "../../ui/Cell";
import UserCard from "../../ui/UserCard";
import { getLocalPrice } from "../../utils/utils";
import BillsDate from "./BillsDate";

type RowProps = {
  transaction: RecurringBill;
};

const Row = (props: RowProps): JSX.Element => {
  const { transaction } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <tr>
      <Cell>
        <UserCard avatar={transaction.avatar} name={transaction.name} />
        {isMobile && (
          <div className="hidden sm:block mt-2">
            <BillsDate
              date={transaction.date}
              isPaid={transaction.isPaid}
              isSoon={transaction.isSoon}
            />
          </div>
        )}
      </Cell>
      {!isMobile && (
        <Cell>
          <BillsDate
            date={transaction.date}
            isPaid={transaction.isPaid}
            isSoon={transaction.isSoon}
          />
        </Cell>
      )}
      <Cell align="right">
        <Typography
          variant="body1"
          fontWeight={700}
          color={transaction.isSoon ? "error" : "primary"}
        >
          {getLocalPrice(Math.abs(transaction.amount))}
        </Typography>
      </Cell>
    </tr>
  );
};

export default Row;
