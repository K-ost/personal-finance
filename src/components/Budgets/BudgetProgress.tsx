type BudgetProgressProps = { range: string; value: number };

const BudgetProgress = (props: BudgetProgressProps): JSX.Element => {
  const { range, value } = props;
  return (
    <div className="bg-beige-100 rounded-sm h-8 p-1">
      <div
        className="rounded-sm h-6"
        style={{ backgroundColor: range, width: `${value}%` }}
      ></div>
    </div>
  );
};

export default BudgetProgress;
