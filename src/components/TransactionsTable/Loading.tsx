import { Skeleton } from "@mui/material";

type TransactionsLoadingProps = {
  count: number;
};

const TransactionsLoading = (props: TransactionsLoadingProps): JSX.Element => {
  const { count } = props;
  return (
    <div>
      {Array.from(Array(count)).map((__, index) => (
        <Skeleton key={index} variant="rounded" height={73} sx={{ mb: 2 }} />
      ))}
    </div>
  );
};

export default TransactionsLoading;
