import { Box, BoxProps, styled } from "@mui/material";
import Sidebar from "./Sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};

const Layout = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  display: "flex",
  height: "100vh",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

const LayoutContent = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  padding: "32px 40px",
  [theme.breakpoints.down("lg")]: {
    order: 1,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "24px 16px",
  },
}));

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <Layout>
      <Sidebar />
      <LayoutContent role="main">{children}</LayoutContent>
    </Layout>
  );
};

export default MainLayout;
