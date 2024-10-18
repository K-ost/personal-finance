import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../Sidebar";
import LangSwitcher from "../LangSwitcher";
import { Layout, LayoutBody, LayoutContent, LayoutTop } from "./styles";

type MainLayoutProps = {
  children: React.ReactNode;
  title: string;
  btn?: React.ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
  const { children, title, btn } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Sidebar />
      <LayoutContent role="main">
        <LayoutTop>
          <Typography
            variant={isMobile ? "h2" : "h1"}
            sx={{ m: 0, mr: "auto", lineHeight: 1 }}
          >
            {title}
          </Typography>
          {btn && <Box sx={{ mr: 4 }}>{btn}</Box>}
          <LangSwitcher />
        </LayoutTop>
        <LayoutBody>{children}</LayoutBody>
      </LayoutContent>
    </Layout>
  );
};

export default MainLayout;
