import {
  Box,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { RecurringBill } from "../../types";
import UserCard from "../../ui/UserCard";
import Cell from "../../ui/Cell";
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
    <TableRow>
      <Cell>
        <UserCard avatar={transaction.avatar} name={transaction.name} />
        {isMobile && (
          <Box sx={{ mt: 2 }}>
            <BillsDate
              date={transaction.date}
              isPaid={transaction.isPaid}
              isSoon={transaction.isSoon}
            />
          </Box>
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
    </TableRow>
  );
};

export default Row;
