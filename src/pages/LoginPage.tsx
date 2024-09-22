import { Box, Typography } from "@mui/material";
import LoginLayout from "../components/LoginLayout";
import FormBody from "../ui/FormBody";
import CustomInput from "../ui/CustomInput";
import Btn from "../ui/Btn";
import { Link } from "react-router-dom";
import PassInput from "../ui/PassInput";
import { useForm } from "react-hook-form";
import useMutateData from "../hooks/useMutateData";
import { AuthType } from "../types";
import { useAuthStore } from "../store/useAuthStore";
import { useEffect } from "react";
import { useNotificationStore } from "../store/useNotificationStore";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = (): JSX.Element => {
  const { setAuth } = useAuthStore();
  const { setNotification } = useNotificationStore();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>();

  const { data, mutate, isPending } = useMutateData<AuthType, FormData>({
    key: ["users"],
    method: "POST",
    uri: "/login",
  });

  useEffect(() => {
    if (data && data.accessToken) {
      setAuth(data);
    }
    setNotification(
      data?.accessToken ? "You've been logged successfully" : data?.message
    );
  }, [data]);

  const loginHandler = (formData: FormData) => {
    mutate({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <LoginLayout>
      <FormBody>
        <Typography variant="h1">Login</Typography>
        <form onSubmit={handleSubmit(loginHandler)} noValidate>
          <CustomInput
            label="Email"
            type="email"
            inputProps={{
              ...register("email", {
                required: "Required field",
                pattern: {
                  message: "Incorrect Email",
                  value: /^\S+@\S+$/i,
                },
              }),
            }}
            error={errors.email ? true : false}
            helperText={errors.email?.message}
          />

          <PassInput
            label="Password"
            sx={{ mb: "32px" }}
            inputProps={{
              ...register("password", {
                required: "Required field",
                minLength: {
                  value: 6,
                  message: "Should have 6 or more characters",
                },
              }),
            }}
            error={errors.password ? true : false}
            helperText={errors.password?.message}
          />

          <Box sx={{ mb: "32px" }}>
            <Btn type="submit" color="primary" fullWidth>
              {isPending ? "Loading..." : "Login"}
            </Btn>
          </Box>
        </form>
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
