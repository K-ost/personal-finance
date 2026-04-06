import { Box, CircularProgress, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import LoginLayout from "../components/LoginLayout";
import useMutateData from "../hooks/useMutateData";
import useFormSettings from "../hooks/useSettings";
import { useAuthStore } from "../store/useAuthStore";
import { useNotificationStore } from "../store/useNotificationStore";
import { AuthType } from "../types/apiTypes";
import Btn from "../ui/Btn";
import CustomInput from "../ui/CustomInput";
import FormBody from "../ui/FormBody";
import PassInput from "../ui/PassInput";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = (): JSX.Element => {
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const setNotification = useNotificationStore((state) => state.setNotification);
  const { t } = useTranslation();
  const { settings } = useFormSettings();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>();

  const { mutate, isPending } = useMutateData<AuthType, FormData>({
    key: ["users"],
    method: "POST",
    uri: "/login",
  });

  const loginHandler = (formData: FormData) => {
    mutate(
      {
        email: formData.email,
        password: formData.password,
      },
      {
        onSuccess: (data) => {
          if (data.msg) {
            setNotification(data.msg);
          }
          if (data.accessToken && data.user) {
            setToken(data.accessToken);
            setUser(data.user);
            setNotification(`You've been logged`);
          }
        },
      },
    );
  };

  return (
    <LoginLayout>
      <FormBody>
        <Typography variant="h1">{t("loginPage.title")}</Typography>
        <form onSubmit={handleSubmit(loginHandler)} noValidate>
          <CustomInput
            label={t("form.email.label")}
            type="email"
            inputProps={{
              ...register("email", settings.email),
              "data-testid": "email",
            }}
            error={errors.email ? true : false}
            helperText={errors.email?.message}
          />

          <PassInput
            label={t("form.password.label")}
            sx={{ mb: "32px" }}
            inputProps={{
              ...register("password", settings.password),
              "data-testid": "password",
            }}
            error={errors.password ? true : false}
            helperText={errors.password?.message}
          />

          <Box sx={{ mb: "32px" }}>
            <Btn type="submit" color="primary" fullWidth>
              {t("loginPage.btn")}
              {isPending && (
                <CircularProgress size={24} color="secondary" sx={{ ml: 4 }} />
              )}
            </Btn>
          </Box>
        </form>

        <Typography variant="body1" color="textSecondary" textAlign="center">
          <Trans i18nKey="loginPage.footerText">
            Need to create an account?{" "}
            <Link to="/signup" style={{ fontWeight: 700 }}>
              Sign Up
            </Link>
          </Trans>
        </Typography>
      </FormBody>
    </LoginLayout>
  );
};

export default LoginPage;
