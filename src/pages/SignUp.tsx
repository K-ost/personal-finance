import { Box, CircularProgress, Typography } from "@mui/material";
import FormBody from "../ui/FormBody";
import CustomInput from "../ui/CustomInput";
import Btn from "../ui/Btn";
import { Link, useNavigate } from "react-router-dom";
import PassInput from "../ui/PassInput";
import LoginLayout from "../components/LoginLayout";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import useMutateData from "../hooks/useMutateData";
import { useNotificationStore } from "../store/useNotificationStore";
import { User } from "../types";
import useFormSettings from "../hooks/useSettings";

type FormData = {
  name: string;
  email: string;
  password: string;
};

type Response = {
  message?: string;
  accessToken?: string;
  user?: User;
};

const SignUp = (): JSX.Element => {
  const { t } = useTranslation();
  const { setNotification } = useNotificationStore();
  const { settings } = useFormSettings();
  const navigate = useNavigate();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>();

  const { mutate, isPending } = useMutateData<Response, User>({
    key: ["users"],
    method: "POST",
    uri: "/signup",
  });

  const signUpHandler = (data: FormData) => {
    mutate(
      {
        ...data,
        role: "user",
        avatar: "",
      },
      {
        onSuccess: (response) => {
          if (response.message) {
            setNotification(response.message);
          } else {
            setNotification(t("signup.notification", { email: response.user?.email }));
            reset();
            navigate("/login");
          }
        },
      }
    );
  };

  return (
    <LoginLayout>
      <FormBody>
        <Typography variant="h1">{t("signup.title")}</Typography>
        <form onSubmit={handleSubmit(signUpHandler)}>
          <CustomInput
            label={t("form.name.label")}
            inputProps={{
              ...register("name", settings.name),
            }}
            error={errors.name ? true : false}
            helperText={errors.name?.message}
          />

          <CustomInput
            label={t("form.email.label")}
            type="email"
            inputProps={{
              ...register("email", settings.email),
            }}
            error={errors.email ? true : false}
            helperText={errors.email?.message}
          />

          <PassInput
            label={t("form.createPassword.label")}
            inputProps={{
              ...register("password", settings.password),
            }}
            error={errors.password ? true : false}
            helperText={errors.password?.message ?? t("form.createPassword.helper")}
            sx={{ mb: "32px" }}
          />

          <Box sx={{ mb: "32px" }}>
            <Btn color="primary" type="submit" fullWidth>
              {t("signup.btn")}
              {isPending && (
                <CircularProgress size={24} color="secondary" sx={{ ml: 4 }} />
              )}
            </Btn>
          </Box>
        </form>

        <Typography variant="body1" color="textSecondary" textAlign="center">
          <Trans i18nKey="signup.footerText">
            Already have an account?{" "}
            <Link to="/login" style={{ fontWeight: 700 }}>
              Sign Up
            </Link>
          </Trans>
        </Typography>
      </FormBody>
    </LoginLayout>
  );
};

export default SignUp;
