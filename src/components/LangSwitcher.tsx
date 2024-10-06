import { Button, ButtonProps, Stack, StackProps, styled } from "@mui/material";
import { useAppStore } from "../store/useAppStore";
import { useAuthStore } from "../store/useAuthStore";
import { useTranslation } from "react-i18next";

const LangBtn = styled(Button)<ButtonProps & { isauth?: "true" | "false" }>(
  ({ theme, isauth }) => ({
    borderColor: theme.palette.custom.grey300,
    borderRadius: 4,
    boxShadow: "none",
    minHeight: 0,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 700,
    lineHeight: theme.typography.body2.lineHeight,
    minWidth: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      color:
        isauth === "true"
          ? theme.palette.primary.main
          : theme.palette.common.white,
      "&.active": {
        backgroundColor: isauth === "true" ? 0 : theme.palette.common.white,
        color:
          isauth === "true"
            ? theme.palette.common.white
            : theme.palette.primary.main,
      },
    },
  })
);

const LangSwitcher = (props: StackProps): JSX.Element => {
  const { lang, setLang } = useAppStore();
  const { auth } = useAuthStore();
  const { setLogout } = useAuthStore();
  const { t } = useTranslation();
  const isAuth = auth ? "true" : "false";

  return (
    <Stack direction="row" {...props}>
      <LangBtn
        variant={lang === "en" ? "contained" : "outlined"}
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        sx={{ mr: 2 }}
        isauth={isAuth}
      >
        En
      </LangBtn>
      <LangBtn
        variant={lang === "ru" ? "contained" : "outlined"}
        className={lang === "ru" ? "active" : ""}
        onClick={() => setLang("ru")}
        isauth={isAuth}
      >
        Ru
      </LangBtn>
      {auth && (
        <LangBtn
          variant="outlined"
          onClick={() => setLogout()}
          sx={{ ml: "auto" }}
          isauth={isAuth}
        >
          {t("settings.logout")}
        </LangBtn>
      )}
    </Stack>
  );
};

export default LangSwitcher;
