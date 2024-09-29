import { LinearProgress, Stack } from "@mui/material";
import IconTitle from "../../ui/IconTitle";
import Wrap from "../../ui/Wrap";
import BudgetAmount from "./BudgetAmount";

type BudgetItemProps = {};

const BudgetItem = (props: BudgetItemProps): JSX.Element => {
  const {} = props;

  return (
    <Wrap>
      <IconTitle color="#ccc" title="Entertainment" />
      Maximum of $50.00
      <LinearProgress variant="determinate" value={35} color="primary" />
      <Stack direction="row">
        <BudgetAmount amount={30} title="Spent" color="#ccc" />
        <BudgetAmount amount={20} title="Remaining" />
      </Stack>
    </Wrap>
  );
};

export default BudgetItem;
