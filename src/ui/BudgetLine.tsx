import { Box, BoxProps, styled, Typography } from "@mui/material";
import { Budget } from "../types";
import { getLocalPrice } from "../utils/utils";

type BudgetLineProps = {
  budget: Budget;
};

const Item = styled(Box)<BoxProps & { bg: string }>(({ theme, bg }) => ({
  alignItems: "center",
  borderBottomWidth: 1,
  borderBottomColor: theme.palette.custom.grey100,
  borderBottomStyle: "solid",
  display: "flex",
  paddingLeft: 20,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  position: "relative",
  "&::before": {
    backgroundColor: bg,
    borderRadius: 4,
    content: '""',
    display: "block",
    width: 4,
    height: 21,
    left: 0,
    position: "absolute",
  },
  "&:first-of-type": {
    paddingTop: 0,
  },
  "&:last-of-type": {
    border: 0,
    paddingBottom: 0,
  },
}));

const BudgetLine = (props: BudgetLineProps): JSX.Element => {
  const { budget } = props;

  return (
    <Item bg={budget.theme}>
      <Typography variant="body1" color="textSecondary">
        {budget.category}
      </Typography>
      <Typography
        variant="h3"
        color="primary"
        component="b"
        sx={{ ml: "auto" }}
      >
        {getLocalPrice(15)}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ ml: 2 }}>
        {getLocalPrice(budget.maximum)}
      </Typography>
    </Item>
  );
};

export default BudgetLine;
