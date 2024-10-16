import { Box, BoxProps, styled } from "@mui/material";
import Sidebar from "./Sidebar";
import LangSwitcher from "./LangSwitcher";

type MainLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const Layout = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  display: "flex",
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

const LayoutContent = styled(Box)<BoxProps>(() => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "scroll",
}));

const LayoutTop = styled(Box)<BoxProps>(({ theme }) => ({
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: theme.palette.custom.beige300,
  padding: `${theme.spacing(3)} ${theme.spacing(10)}`,
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  },
}));

const LayoutBody = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  padding: `${theme.spacing(8)} ${theme.spacing(10)}`,
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(4)} ${theme.spacing(4)}`,
  },
}));

const MainLayout = (props: MainLayoutProps) => {
  const { children, title } = props;
  return (
    <Layout>
      <Sidebar />
      <LayoutContent role="main">
        <LayoutTop>
          <LangSwitcher title={title} />
        </LayoutTop>
        <LayoutBody>{children}</LayoutBody>
      </LayoutContent>
    </Layout>
  );
};

export default MainLayout;
