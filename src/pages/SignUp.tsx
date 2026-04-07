import { Box, CircularProgress, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import LoginLayout from "../components/LoginLayout";
import useMutateData from "../hooks/useMutateData";
import useFormSettings from "../hooks/useSettings";
import { useNotificationStore } from "../store/useNotificationStore";
import { AuthType } from "../types/apiTypes";
import Btn from "../ui/Btn";
import CustomInput from "../ui/CustomInput";
import FormBody from "../ui/FormBody";
import PassInput from "../ui/PassInput";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const SignUp = (): JSX.Element => {
  const { t } = useTranslation();
  const { settings } = useFormSettings();
  const setNotification = useNotificationStore((state) => state.setNotification);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>();

  const { mutate, isPending } = useMutateData<AuthType, FormData>({
    key: ["register"],
    method: "POST",
    uri: "/register",
  });

  const signUpHandler = (data: FormData) => {
    mutate(data, {
      onSuccess(data) {
        if (data.msg) {
          setNotification(data.msg);
          reset();
        }
      },
    });
  };

  return (
    <LoginLayout>
      <FormBody>
        <Typography variant="h1">{t("signup.title")}</Typography>
        <form onSubmit={handleSubmit(signUpHandler)}>
          <CustomInput
            label={t("form.name.label")}
            slotProps={{
              input: { ...register("name", settings.name) },
            }}
            error={errors.name ? true : false}
            helperText={errors.name?.message}
          />

          <CustomInput
            label={t("form.email.label")}
            type="email"
            slotProps={{
              input: { ...register("email", settings.email) },
            }}
            error={errors.email ? true : false}
            helperText={errors.email?.message}
          />

          <PassInput
            label={t("form.createPassword.label")}
            slotProps={{
              input: { ...register("password", settings.password) },
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
