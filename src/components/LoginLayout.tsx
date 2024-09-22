import { Box, BoxProps, styled, Typography } from "@mui/material";
import bg from "../assets/illustration-authentication.svg";
import logo from "../assets/logo-large.svg";

type LoginLayoutProps = {
  children: React.ReactNode;
};

const Layout = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  boxSizing: "border-box",
  display: "flex",
  height: "100vh",
  padding: theme.spacing(5),
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
}));

const RightCol = styled(Box)<BoxProps>(() => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  flexGrow: 1,
}));

const LoginLayout = (props: LoginLayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <Layout>
      <LeftCol>
        <img src={bg} alt="" className="bg" />
        <Box sx={{ position: "relative", flexGrow: 1 }}>
          <img src={logo} alt="" className="logo" />
        </Box>
        <Box sx={{ position: "relative" }}>
          <Typography variant="h1">
            Keep track of your money and save for your future
          </Typography>
          <Typography variant="body1">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </Typography>
        </Box>
      </LeftCol>
      <RightCol>{children}</RightCol>
    </Layout>
  );
};

export default LoginLayout;
