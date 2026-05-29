import { Skeleton } from "@mui/material";

const BalanceLoading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
      {Array.from(new Array(3)).map((__, index) => (
        <Skeleton key={index} height={120} variant="rounded" />
      ))}
    </div>
  );
};

export default BalanceLoading;
