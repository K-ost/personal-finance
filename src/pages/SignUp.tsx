import { Typography } from "@mui/material";
import FormBody from "../ui/FormBody";
import CustomInput from "../ui/CustomInput";
import Btn from "../ui/Btn";
import useMutateData from "../hooks/useMutateData";
import { User } from "../types";
import { Link } from "react-router-dom";
import LoginLayout from "../components/LoginLayout";

const SignUp = (): JSX.Element => {
  const { mutate } = useMutateData<User>({
    key: ["users"],
    method: "POST",
    uri: "/register",
  });

  // const registerUser = () => {
  //   mutate({
  //     email,
  //     name,
  //     password,
  //     role: "user",
  //     avatar: "",
  //   });
  // };

  return (
    <LoginLayout>
      <FormBody>
        <Typography variant="h1">Sign Up</Typography>
        <CustomInput label="Name" />
        <CustomInput label="Email" type="email" />
        <CustomInput
          label="Create Password"
          type="password"
          helperText="Passwords must be at least 8 characters"
        />
        <Btn color="primary" fullWidth>
          Create Account
        </Btn>
        <Typography variant="body1" color="textSecondary">
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
