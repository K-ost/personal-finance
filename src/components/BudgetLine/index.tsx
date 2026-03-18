import { Typography } from "@mui/material";

import useBudgetHook from "../../hooks/useBudgetHook";
import { Budget } from "../../types/types";
import { getLocalPrice } from "../../utils/utils";
import { Item } from "./styles";

type BudgetLineProps = {
  budget: Budget;
};

const BudgetLine = (props: BudgetLineProps): JSX.Element => {
  const { budget } = props;

  const { spent } = useBudgetHook({ budget });

  return (
    <Item bg={budget.theme}>
      <Typography variant="body1" color="textSecondary">
        {budget.category}
      </Typography>
      <Typography variant="h3" color="primary" component="b" sx={{ ml: "auto" }}>
        {getLocalPrice(spent)}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ ml: 2 }}>
        {getLocalPrice(budget.maximum)}
      </Typography>
    </Item>
  );
};

export default BudgetLine;
