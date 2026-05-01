import { Grid, Skeleton, useMediaQuery, useTheme } from "@mui/material";

const BalanceLoading = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={isMobile ? 3 : 6}>
      {Array.from(new Array(3)).map((__, index) => (
        <Grid size={{ xs: 12, sm: 4 }} key={index}>
          <Skeleton height={120} variant="rounded" />
        </Grid>
      ))}
    </Grid>
  );
};

export default BalanceLoading;
