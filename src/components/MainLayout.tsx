import { Box, BoxProps, styled } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const Layout = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  display: "flex",
  height: "100vh",
}));

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Layout>
      <Sidebar open={open} onClose={() => setOpen(!open)} />
      <Box component="main" sx={{ flexGrow: 1, p: "32px 40px" }}>
        {children}
      </Box>
    </Layout>
  );
};

export default MainLayout;
