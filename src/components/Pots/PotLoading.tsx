import { Skeleton } from "@mui/material";

const PotLoading = (): JSX.Element => {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {Array.from(Array(6)).map((__, index) => (
        <Skeleton variant="rounded" key={index} height={300} />
      ))}
    </div>
  );
};

export default PotLoading;
