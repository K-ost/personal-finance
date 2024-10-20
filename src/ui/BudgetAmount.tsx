import {
  Box,
  BoxProps,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          sx={{ mb: big && !isMobile ? 3 : isMobile && big ? 1 : 1 }}
        >
          {title}
        </Typography>
        <Typography
          variant={big && !isMobile ? "h1" : isMobile && big ? "h2" : "body1"}
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
