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

  return (
    <Layout>
      <LeftCol>
        <img src={bg} alt="" className="bg" />
        <Box sx={{ position: "relative", flexGrow: 1 }}>
          <img src={logo} alt="" />
        </Box>
        <LeftColText>
          <Typography variant="h1">
            Keep track of your money and save for your future
          </Typography>
          <Typography variant="body1">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </Typography>
        </LeftColText>
      </LeftCol>
      <RightCol>{children}</RightCol>
    </Layout>
  );
};

export default LoginLayout;
