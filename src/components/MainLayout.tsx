import { Box, BoxProps, styled } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";

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

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <Layout>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: "32px 40px" }}>
        {children}
      </Box>
    </Layout>
  );
};

export default MainLayout;
