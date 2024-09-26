import { Grid2, Skeleton } from "@mui/material";

const PotLoading = (): JSX.Element => {
  return (
    <Grid2 container spacing={6}>
      {Array.from(Array(6)).map((__, index) => (
        <Grid2 key={index} size={{ xs: 12, sm: 6 }}>
          <Skeleton variant="rounded" height={300} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default PotLoading;
