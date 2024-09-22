import { Box, Typography } from "@mui/material";
import LoginLayout from "../components/LoginLayout";
import FormBody from "../ui/FormBody";
import CustomInput from "../ui/CustomInput";
import Btn from "../ui/Btn";
import { Link } from "react-router-dom";
import PassInput from "../ui/PassInput";

const LoginPage = (): JSX.Element => {
  return (
    <LoginLayout>
      <FormBody>
        <Typography variant="h1">Login</Typography>
        <CustomInput label="Email" type="email" />
        <PassInput label="Password" sx={{ mb: "32px" }} />
        <Box sx={{ mb: "32px" }}>
          <Btn color="primary" fullWidth>
            Login
          </Btn>
        </Box>
        <Typography variant="body1" color="textSecondary" textAlign="center">
          Need to create an account?{" "}
          <Link to="/signup">
            <b>Sign Up</b>
          </Link>
        </Typography>
      </FormBody>
    </LoginLayout>
  );
};

export default LoginPage;
