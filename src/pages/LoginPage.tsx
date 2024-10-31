import { Box, CircularProgress, Typography } from "@mui/material";
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
import { Trans, useTranslation } from "react-i18next";
import LoginLayout from "../components/LoginLayout";
import useFormSettings from "../hooks/useSettings";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = (): JSX.Element => {
  const { setUserId } = useAuthStore();
  const { setNotification } = useNotificationStore();
  const { t } = useTranslation();
  const { settings } = useFormSettings();

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
    if (data && data.user) {
      setUserId(data.user.id);
    }
    setNotification(
      data?.accessToken ? "You've been logged successfully" : data?.message
    );
  }, [data, setUserId, setNotification]);

  const loginHandler = (formData: FormData) => {
    mutate({
      email: formData.email,
      password: formData.password,
    });
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
