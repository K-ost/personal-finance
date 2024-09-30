import { Stack, Typography } from "@mui/material";
import IconTitle from "../../ui/IconTitle";
import Wrap from "../../ui/Wrap";
import BudgetAmount from "./BudgetAmount";
import BudgetProgress from "./BudgetProgress";
import { Budget } from "../../types";
import { getLocalPrice } from "../../utils/utils";
import BudgetLatest from "./BudgetLatest";
import useGetData from "../../hooks/useGetData";

type BudgetItemProps = {
  budget: Budget;
};

const BudgetItem = (props: BudgetItemProps): JSX.Element => {
  const { budget } = props;

  const { data, isSuccess } = useGetData({
    key: ["last_transactions"],
    uri: `/transactions?_limit=3&category=${budget.category}`,
  });

  return (
    <Wrap sx={{ mb: 6 }}>
      <IconTitle color={budget.theme} title={budget.category} sx={{ mb: 4 }} />
      <Typography
        variant="body1"
        color="textSecondary"
        component="div"
        sx={{ mb: 4 }}
      >
        Maximum of {getLocalPrice(budget.maximum)}
      </Typography>
      <BudgetProgress value={35} range={budget.theme} sx={{ mb: 4 }} />
      <Stack direction="row" sx={{ mb: 5 }}>
        <BudgetAmount amount={30} title="Spent" color={budget.theme} />
        <BudgetAmount amount={20} title="Remaining" />
      </Stack>
      <BudgetLatest>
        {isSuccess && <pre>{JSON.stringify(data.data, null, 2)}</pre>}
      </BudgetLatest>
    </Wrap>
  );
};

export default BudgetItem;
