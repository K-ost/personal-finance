import { Typography } from "@mui/material";

import { Budget } from "../../types/types";
import { getLocalPrice } from "../../utils/utils";

type BudgetLineProps = {
  budget: Budget;
  spent: number;
};

const BudgetLine = (props: BudgetLineProps): JSX.Element => {
  const { budget, spent } = props;

  return (
    <div className="flex items-center border-b border-b-gray-100 py-4 relative first:pt-0 last:pb-0 last:border-0">
      <div
        className="w-1 h-5 rounded-lg mr-4"
        style={{ backgroundColor: budget.theme }}
      ></div>
      <Typography variant="body1" color="textSecondary">
        {budget.category}
      </Typography>
      <Typography variant="h3" color="primary" component="b" sx={{ ml: "auto" }}>
        {getLocalPrice(spent)}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ ml: 2 }}>
        {getLocalPrice(budget.maximum)}
      </Typography>
    </div>
  );
};

export default BudgetLine;
