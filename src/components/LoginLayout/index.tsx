import { Box, Typography } from "@mui/material";
import bg from "../../assets/illustration-authentication.svg";
import logo from "../../assets/logo-large.svg";
import { useTranslation } from "react-i18next";
import { Layout, LeftCol, LeftColText, RightCol } from "./styles";
import LangSwitcher from "../LangSwitcher";

type LoginLayoutProps = {
  children: React.ReactNode;
};

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
