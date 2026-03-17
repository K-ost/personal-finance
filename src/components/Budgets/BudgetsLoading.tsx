import { Grid, Skeleton } from "@mui/material";

const BudgetsLoading = (): JSX.Element => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Skeleton variant="rounded" height={300} />
      </Grid>

      <Grid size={{ xs: 12, md: 7 }}>
        <Skeleton variant="rounded" height={200} sx={{ mb: 4 }} />
        <Skeleton variant="rounded" height={200} sx={{ mb: 4 }} />
        <Skeleton variant="rounded" height={200} sx={{ mb: 4 }} />
        <Skeleton variant="rounded" height={200} sx={{ mb: 4 }} />
        <Skeleton variant="rounded" height={200} />
      </Grid>
    </Grid>
  );
};

export default BudgetsLoading;
