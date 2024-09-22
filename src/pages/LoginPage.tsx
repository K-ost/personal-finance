import { Typography } from "@mui/material";
import LoginLayout from "../components/LoginLayout";
import FormBody from "../ui/FormBody";
import CustomInput from "../ui/CustomInput";
import Btn from "../ui/Btn";
import { Link } from "react-router-dom";

const LoginPage = (): JSX.Element => {
  return (
    <LoginLayout>
      <FormBody>
        <Typography variant="h1">Login</Typography>
        <CustomInput label="Email" type="email" />
        <CustomInput label="Password" type="password" />
        <Btn color="primary" fullWidth>
          Login
        </Btn>
        <Typography variant="body1" color="textSecondary">
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
