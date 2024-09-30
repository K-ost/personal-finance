import { Grid2, Skeleton } from "@mui/material";

const BudgetsLoading = (): JSX.Element => {
  return (
    <Grid2 container spacing={6}>
      <Grid2 size={{ xs: 12, md: 5 }}>
        <Skeleton variant="rounded" height={300} />
      </Grid2>

      <Grid2 size={{ xs: 12, md: 7 }}>
        <Skeleton variant="rounded" height={200} sx={{ mb: 4 }} />
        <Skeleton variant="rounded" height={200} sx={{ mb: 4 }} />
        <Skeleton variant="rounded" height={200} sx={{ mb: 4 }} />
        <Skeleton variant="rounded" height={200} sx={{ mb: 4 }} />
        <Skeleton variant="rounded" height={200} />
      </Grid2>
    </Grid2>
  );
};

export default BudgetsLoading;
