import { Box, Typography } from "@mui/material";
import FormBody from "../ui/FormBody";
import CustomInput from "../ui/CustomInput";
import Btn from "../ui/Btn";
import { Link } from "react-router-dom";
import LoginLayout from "../components/LoginLayout";
import PassInput from "../ui/PassInput";

const SignUp = (): JSX.Element => {
  return (
    <LoginLayout>
      <FormBody>
        <Typography variant="h1">Sign Up</Typography>
        <CustomInput label="Name" />
        <CustomInput label="Email" type="email" />
        <PassInput
          label="Create Password"
          helperText="Passwords must be at least 8 characters"
          sx={{ mb: "32px" }}
        />
        <Box sx={{ mb: "32px" }}>
          <Btn color="primary" fullWidth>
            Create Account
          </Btn>
        </Box>
        <Typography variant="body1" color="textSecondary" textAlign="center">
          Already have an account?{" "}
          <Link to="/login">
            <b>Login</b>
          </Link>
        </Typography>
      </FormBody>
    </LoginLayout>
  );
};

export default SignUp;
