import { Budget } from "../../types";
import BudgetItem from "./BudgetItem";

type BudgetsListProps = {
  data: Budget[];
};

const BudgetsList = (props: BudgetsListProps) => {
  const { data } = props;
  return (
    <div>
      {data.map((budget) => (
        <BudgetItem key={budget.id} budget={budget} />
      ))}
    </div>
  );
};

export default BudgetsList;
