import { Box, BoxProps, styled, Typography } from "@mui/material";
import bg from "../assets/illustration-authentication.svg";
import logo from "../assets/logo-large.svg";
import LangSwitcher from "./LangSwitcher";
import { useTranslation } from "react-i18next";

type LoginLayoutProps = {
  children: React.ReactNode;
};

const Layout = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  boxSizing: "border-box",
  display: "flex",
  height: "100vh",
  padding: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: 0,
  },
}));

const LeftCol = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 12,
  color: theme.palette.common.white,
  display: "flex",
  flexDirection: "column",
  marginRight: theme.spacing(5),
  overflow: "hidden",
  padding: theme.spacing(10),
  position: "relative",
  width: 560,
  "& img.bg": {
    display: "block",
    position: "absolute",
    width: "100%",
    left: 0,
    top: 0,
  },
  [theme.breakpoints.down("lg")]: {
    width: 440,
  },
  [theme.breakpoints.down("md")]: {
    borderRadius: "0 0 12px 12px",
    margin: 0,
    padding: 24,
    width: "auto",
    textAlign: "center",
    "& img.bg": {
      display: "none",
    },
  },
}));

const LeftColText = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const RightCol = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
  },
}));

const LoginLayout = (props: LoginLayoutProps): JSX.Element => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <Layout>
      <LeftCol>
        <img src={bg} alt="" className="bg" />
        <Box sx={{ position: "relative", flexGrow: 1 }}>
          <img src={logo} alt="" />
        </Box>
        <LeftColText>
          <Typography variant="h1">{t("loginPage.text")}</Typography>
          <Typography variant="body1">{t("loginPage.subtext")}</Typography>
        </LeftColText>
      </LeftCol>
      <RightCol>
        <LangSwitcher
          sx={(theme) => ({
            position: "absolute",
            right: theme.spacing(4),
            top: theme.spacing(4),
            [theme.breakpoints.down("md")]: {
              top: theme.spacing(5),
            },
          })}
        />
        {children}
      </RightCol>
    </Layout>
  );
};

export default LoginLayout;
