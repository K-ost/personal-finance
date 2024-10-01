import { useState } from "react";
import { MenuItem, Stack, Typography } from "@mui/material";
import IconTitle from "../../ui/IconTitle";
import Wrap from "../../ui/Wrap";
import BudgetAmount from "./BudgetAmount";
import BudgetProgress from "./BudgetProgress";
import { Budget } from "../../types";
import { getLocalPrice } from "../../utils/utils";
import BudgetLatest from "./BudgetLatest";
import TransactionItem from "../TransactionsTable/TransactionItem";
import MenuIcon from "../../ui/MenuIcon";
import useBudgetHook from "../../hooks/useBudgetHook";

type BudgetItemProps = {
  budget: Budget;
};

const BudgetItem = (props: BudgetItemProps): JSX.Element => {
  const { budget } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const { percent, remaining, spent } = useBudgetHook({ budget });

  return (
    <Wrap sx={{ mb: 6 }}>
      <Stack direction="row" alignItems="center">
        <IconTitle
          color={budget.theme}
          title={budget.category}
          sx={{ mb: 4 }}
        />
        <MenuIcon anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
          <MenuItem onClick={() => {}}>Edit Budget</MenuItem>
          <MenuItem
            sx={(theme) => ({ color: theme.palette.error.main })}
            onClick={() => {}}
          >
            Delete Budget
          </MenuItem>
        </MenuIcon>
      </Stack>

      <Typography
        variant="body1"
        color="textSecondary"
        component="div"
        sx={{ mb: 4 }}
      >
        Maximum of {getLocalPrice(budget.maximum)}
      </Typography>
      <BudgetProgress value={percent} range={budget.theme} sx={{ mb: 4 }} />

      <Stack direction="row" sx={{ mb: 5 }}>
        <BudgetAmount amount={spent} title="Spent" color={budget.theme} />
        <BudgetAmount amount={remaining} title="Remaining" />
      </Stack>
      <BudgetLatest category={budget.category}>
        <div>
          {budget.latest.map((item) => (
            <TransactionItem key={item.id} transaction={item} />
          ))}
        </div>
      </BudgetLatest>
    </Wrap>
  );
};

export default BudgetItem;
