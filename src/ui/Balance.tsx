import { Box, styled, Typography } from "@mui/material";
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
}));

const Balance = (props: BalanceProps): JSX.Element => {
  const { amount, title, dark } = props;
  return (
    <Item bg={dark ? "true" : undefined}>
      <Typography
        variant="body1"
        sx={{ mb: 3 }}
        color={dark ? "primary.contrastText" : "custom.grey500"}
      >
        {title}
      </Typography>
      <Typography variant="h1" sx={{ m: 0 }}>
        {getLocalPrice(amount)}
      </Typography>
    </Item>
  );
};

export default Balance;
