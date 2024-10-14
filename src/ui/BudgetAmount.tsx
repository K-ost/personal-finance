import { Box, BoxProps, styled, Typography } from "@mui/material";
import icon from "../assets/icon-pot.svg";
import { getLocalPrice } from "../utils/utils";

type BudgetAmountProps = BoxProps & {
  amount: number;
  color?: string;
  title: string;
  big?: "true";
};

const Div = styled(Box)<{ big?: string }>(({ theme, big }) => ({
  backgroundColor: big ? theme.palette.custom.beige100 : "none",
  borderRadius: 12,
  display: "flex",
  flexGrow: 1,
  padding: big ? `${theme.spacing(4)} ${theme.spacing(6)}` : 0,
  position: "relative",
}));
const Line = styled(Box)<{ bg?: string }>(({ theme, bg }) => ({
  backgroundColor: bg ? bg : theme.palette.custom.beige100,
  borderRadius: 4,
  minWidth: 4,
  marginRight: theme.spacing(4),
}));

const BudgetAmount = (props: BudgetAmountProps): JSX.Element => {
  const { amount, title, color, big } = props;

  return (
    <Div big={big}>
      {big ? (
        <img src={icon} alt="" style={{ marginRight: 20 }} />
      ) : (
        <Line bg={color} />
      )}
      <Box>
        <Typography
          variant={big ? "body1" : "body2"}
          color="textSecondary"
          component="div"
          sx={{ mb: big ? 3 : 1 }}
        >
          {title}
        </Typography>
        <Typography
          variant={big ? "h1" : "body1"}
          color="primary"
          component="div"
          fontWeight={700}
          sx={{ m: 0 }}
        >
          {getLocalPrice(amount, big ? true : false)}
        </Typography>
      </Box>
    </Div>
  );
};

export default BudgetAmount;
