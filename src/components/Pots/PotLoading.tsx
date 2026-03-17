import { Grid, Skeleton } from "@mui/material";

const PotLoading = (): JSX.Element => {
  return (
    <Grid container spacing={6}>
      {Array.from(Array(6)).map((__, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6 }}>
          <Skeleton variant="rounded" height={300} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PotLoading;
