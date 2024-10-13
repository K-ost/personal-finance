import { Box, styled, Typography } from "@mui/material";
import { getLocalPrice } from "../../utils/utils";
import icon from "../../assets/icon-pot.svg";

type BudgetAmountProps = {
  amount: number;
  color?: string;
  title: string;
  big?: "true";
};

const Div = styled(Box)<{ $big?: string }>(({ theme, $big }) => ({
  background: $big ? theme.palette.custom.beige100 : 0,
  borderRadius: 6,
  display: "flex",
  flexGrow: 1,
  padding: $big ? theme.spacing(4) : 0,
  position: "relative",
}));
const Line = styled(Box)(({ theme }) => ({
  borderRadius: 4,
  minWidth: 4,
  marginRight: theme.spacing(4),
}));

const BudgetAmount = (props: BudgetAmountProps): JSX.Element => {
  const { amount, title, color, big } = props;

  return (
    <Div $big={big}>
      {big ? (
        <img src={icon} alt="" style={{ marginRight: 20 }} />
      ) : (
        <Line
          sx={(theme) => ({
            bgcolor: color ? color : theme.palette.custom.beige100,
          })}
        />
      )}
      <Box>
        <Typography
          variant="body2"
          color="textSecondary"
          component="div"
          sx={{ mb: 1 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          component="div"
          fontWeight={700}
        >
          {getLocalPrice(amount)}
        </Typography>
      </Box>
    </Div>
  );
};

export default BudgetAmount;
