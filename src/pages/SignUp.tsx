import { Box, Typography } from "@mui/material";
import FormBody from "../ui/FormBody";
import CustomInput from "../ui/CustomInput";
import Btn from "../ui/Btn";
import { Link } from "react-router-dom";
import PassInput from "../ui/PassInput";
import LoginLayout from "../components/LoginLayout";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { FORM_SETTINGS } from "../utils/constants";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const SignUp = (): JSX.Element => {
  const { t } = useTranslation();
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>();

  const signUpHandler = (data: FormData) => {
    console.log(data);
  };

  return (
    <LoginLayout>
      <FormBody>
        <Typography variant="h1">{t("signup.title")}</Typography>
        <form onSubmit={handleSubmit(signUpHandler)}>
          <CustomInput
            label={t("form.name.label")}
            inputProps={{
              ...register("name", FORM_SETTINGS.name),
            }}
            error={errors.name ? true : false}
            helperText={errors.name?.message}
          />

          <CustomInput
            label={t("form.email.label")}
            type="email"
            inputProps={{
              ...register("email", FORM_SETTINGS.email),
            }}
            error={errors.email ? true : false}
            helperText={errors.email?.message}
          />

          <PassInput
            label={t("form.createPassword.label")}
            inputProps={{
              ...register("password", FORM_SETTINGS.password),
            }}
            error={errors.password ? true : false}
            helperText={
              errors.password?.message ?? t("form.createPassword.helper")
            }
            sx={{ mb: "32px" }}
          />

          <Box sx={{ mb: "32px" }}>
            <Btn color="primary" type="submit" fullWidth>
              {t("signup.btn")}
            </Btn>
          </Box>
        </form>

        <Typography variant="body1" color="textSecondary" textAlign="center">
          <Trans i18nKey="signup.footerText">
            Already have an account?{" "}
            <Link to="/signup" style={{ fontWeight: 700 }}>
              Sign Up
            </Link>
          </Trans>
        </Typography>
      </FormBody>
    </LoginLayout>
  );
};

export default SignUp;
