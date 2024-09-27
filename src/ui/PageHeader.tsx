import { Stack, Typography } from "@mui/material";

type PageHeaderProps = {
  children?: React.ReactNode;
  title: string;
};

const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const { title, children } = props;
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ mb: 8 }}
    >
      <Typography variant="h1" sx={{ m: 0 }}>
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export default PageHeader;
