import { Box, BoxProps, styled } from "@mui/material";

type FilterProps = {
  children: React.ReactNode;
};

const FilterBody = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const Filter = (props: FilterProps): JSX.Element => {
  const { children } = props;
  return <FilterBody>{children}</FilterBody>;
};

export default Filter;
