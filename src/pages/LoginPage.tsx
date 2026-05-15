import { CircularProgress, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import LoginLayout from "../components/LoginLayout";
import PassInput from "../components/PassInput";
import useMutateData from "../hooks/useMutateData";
import useFormSettings from "../hooks/useSettings";
import { useAuthStore } from "../store/useAuthStore";
import { useNotificationStore } from "../store/useNotificationStore";
import { AuthType } from "../types/apiTypes";
import Btn from "../ui/Btn";
import FormBody from "../ui/FormBody";
import InputField from "../ui/InputField";

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
        onError(error) {
          setNotification(error.message);
        },
        onSuccess: (data) => {
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
          <div className="mb-4">
            <InputField
              label={t("form.email.label")}
              isError={errors.email ? true : false}
              helper={errors.email?.message}
              inputProps={{
                type: "email",
                "aria-label": t("form.email.label"),
                ...register("email", settings.email),
              }}
            />
          </div>

          <div className="mb-8">
            <PassInput
              label={t("form.password.label")}
              inputProps={{
                "aria-label": t("form.password.label"),
                ...register("password", settings.password),
              }}
              isError={errors.password ? true : false}
              helper={errors.password?.message}
            />
          </div>

          <div className="mb-8">
            <Btn type="submit" color="primary" fullWidth>
              {t("loginPage.btn")}
              {isPending && (
                <CircularProgress size={24} color="secondary" sx={{ ml: 4 }} />
              )}
            </Btn>
          </div>
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
