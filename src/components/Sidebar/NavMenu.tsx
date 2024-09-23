import { Box, List, ListProps, styled } from "@mui/material";

type NavMenuProps = {
  children: React.ReactNode;
};

const Nav = styled(List)<ListProps>(({ theme }) => ({
  margin: 0,
  padding: 0,
  "& li": {
    display: "block",
    listStyle: "none",
    margin: `0 0 ${theme.spacing(1)}`,
    padding: 0,
  },
  [theme.breakpoints.down("lg")]: {
    display: "flex",
  },
}));

const NavMenu = (props: NavMenuProps): JSX.Element => {
  const { children } = props;
  return <Nav>{children}</Nav>;
};

export default NavMenu;
