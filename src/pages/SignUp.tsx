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
  name: string;
  email: string;
  password: string;
};

const SignUp = (): JSX.Element => {
  const { t } = useTranslation();
  const { settings } = useFormSettings();
  const setNotification = useNotificationStore((state) => state.setNotification);
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>();

  const { mutate, isPending } = useMutateData<AuthType, FormData>({
    key: ["register"],
    method: "POST",
    uri: "/register",
  });

  const signUpHandler = (data: FormData) => {
    mutate(data, {
      onError(error) {
        setNotification(error.message);
      },
      onSuccess(data) {
        if (data.accessToken && data.user) {
          setToken(data.accessToken);
          setUser(data.user);
          setNotification(`You've been successfully registered and logged`);
        }
      },
    });
  };

  return (
    <LoginLayout>
      <FormBody>
        <Typography variant="h1">{t("signup.title")}</Typography>
        <form onSubmit={handleSubmit(signUpHandler)}>
          <div className="mb-4">
            <InputField
              label={t("form.name.label")}
              inputProps={{
                "aria-label": t("form.name.label"),
                ...register("name", settings.name),
              }}
              isError={errors.name ? true : false}
              helper={errors.name?.message}
            />
          </div>

          <div className="mb-4">
            <InputField
              label={t("form.email.label")}
              inputProps={{
                type: "email",
                "aria-label": t("form.email.label"),
                ...register("email", settings.email),
              }}
              isError={errors.email ? true : false}
              helper={errors.email?.message}
            />
          </div>

          <div className="mb-8">
            <PassInput
              label={t("form.createPassword.label")}
              inputProps={{
                "aria-label": t("form.createPassword.label"),
                ...register("password", settings.password),
              }}
              isError={errors.password ? true : false}
              helper={errors.password?.message ?? t("form.createPassword.helper")}
            />
          </div>

          <div className="mb-8">
            <Btn color="primary" type="submit" fullWidth>
              {t("signup.btn")}
              {isPending && (
                <CircularProgress size={24} color="secondary" sx={{ ml: 4 }} />
              )}
            </Btn>
          </div>
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
