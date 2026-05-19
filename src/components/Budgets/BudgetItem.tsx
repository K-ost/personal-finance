import { MenuItem, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Budget } from "../../types/types";
import BudgetAmount from "../../ui/BudgetAmount";
import IconTitle from "../../ui/IconTitle";
import MenuIcon from "../../ui/MenuIcon";
import ProgressBar from "../../ui/ProgressBar";
import Wrap from "../../ui/Wrap";
import BudgetService from "../../utils/BudgetService";
import { getLocalPrice } from "../../utils/utils";
import TransactionItem from "../Transactions/TransactionItem";
import BudgetLatest from "./BudgetLatest";
import DeleteBudget from "./DeleteBudget";
import EditBudget from "./EditBudget";

type BudgetItemProps = {
  budget: Budget;
};

const budgetService = new BudgetService();

const BudgetItem = (props: BudgetItemProps): JSX.Element => {
  const { budget } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [editDialog, setEditDialog] = useState<boolean>(false);
  const [deleteDialog, setDeleteDialog] = useState<boolean>(false);
  const { t } = useTranslation();

  const spent = budgetService.getBudgetSpent(budget);
  const remaining = budget.maximum - spent;
  const percent = budgetService.getBudgetPercent(budget.maximum, spent);

  const editHandler = () => {
    setAnchorEl(null);
    setEditDialog(true);
  };

  const deleteHandler = () => {
    setAnchorEl(null);
    setDeleteDialog(true);
  };

  return (
    <div className="mb-6">
      <Wrap>
        <div className="flex items-center">
          <IconTitle color={budget.theme} title={budget.category} />
          <MenuIcon id={budget._id} anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
            <MenuItem onClick={editHandler}>{t("budgets.edit.title")}</MenuItem>
            <MenuItem
              sx={(theme) => ({ color: theme.palette.error.main })}
              onClick={deleteHandler}
            >
              {t("budgets.delete.item")}
            </MenuItem>
          </MenuIcon>
        </div>

        <Typography variant="body1" color="textSecondary" component="div" sx={{ mb: 4 }}>
          {t("budgets.maximum", { amount: getLocalPrice(budget.maximum) })}
        </Typography>
        <div className="mb-4">
          <ProgressBar color={budget.theme} value={percent} size="large" />
        </div>

        <Stack direction="row">
          <BudgetAmount amount={spent} title={t("budgets.spent")} color={budget.theme} />
          <BudgetAmount amount={remaining} title={t("budgets.remaining")} />
        </Stack>
        {budget.latest.length > 0 && (
          <BudgetLatest category={budget.category} sx={{ mt: 5 }}>
            <div>
              {budget.latest.map((item) => (
                <TransactionItem key={item._id} transaction={item} />
              ))}
            </div>
          </BudgetLatest>
        )}
      </Wrap>

      <EditBudget budget={budget} close={() => setEditDialog(false)} open={editDialog} />
      <DeleteBudget
        budget={budget}
        close={() => setDeleteDialog(false)}
        open={deleteDialog}
      />
    </div>
  );
};

export default BudgetItem;
