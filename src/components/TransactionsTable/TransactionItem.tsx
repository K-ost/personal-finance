import { Box, styled, Typography } from "@mui/material";
import { Transaction } from "../../types";
import UserCard from "../../ui/UserCard";
import { createDate, transactionPrice } from "../../utils/utils";

type TransactionItemProps = {
  transaction: Transaction;
};

const Item = styled(Box)(({ theme }) => ({
  alignItems: "center",
  borderBottomColor: theme.palette.custom.beige300,
  borderBlockWidth: 1,
  borderBottomStyle: "solid",
  display: "flex",
  justifyContent: "space-between",
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  "&:first-of-type": {
    paddingTop: 0,
  },
  "&:last-of-type": {
    border: 0,
    paddingBottom: 0,
  },
}));

const TransactionItem = (props: TransactionItemProps): JSX.Element => {
  const { transaction } = props;
  return (
    <Item>
      <UserCard avatar={transaction.avatar} name={transaction.name} />
      <Box textAlign="right">
        <Typography
          variant="body2"
          component="div"
          fontWeight={700}
          sx={{ mb: 1 }}
        >
          {transactionPrice(transaction.amount)}
        </Typography>
        <Typography variant="body2" component="div" color="textSecondary">
          {createDate(transaction.date)}
        </Typography>
      </Box>
    </Item>
  );
};

export default TransactionItem;
