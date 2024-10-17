import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { getLocalPrice } from "../utils/utils";

type BalanceProps = {
  title: string;
  amount: number;
  dark?: boolean;
};

const Item = styled(Box)<{ bg: "true" | undefined }>(({ theme, bg }) => ({
  backgroundColor: bg ? theme.palette.primary.main : theme.palette.common.white,
  borderRadius: 12,
  color: bg ? theme.palette.common.white : theme.palette.primary.main,
  padding: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(4)} ${theme.spacing(5)}`,
  },
}));

const Balance = (props: BalanceProps): JSX.Element => {
  const { amount, title, dark } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Item bg={dark ? "true" : undefined}>
      <Typography
        variant={isMobile ? "body2" : "body1"}
        sx={{ mb: isMobile ? 2 : 3 }}
        color={dark ? "primary.contrastText" : "custom.grey500"}
      >
        {title}
      </Typography>
      <Typography variant={isMobile ? "h2" : "h1"} sx={{ m: 0 }}>
        {getLocalPrice(amount)}
      </Typography>
    </Item>
  );
};

export default Balance;
