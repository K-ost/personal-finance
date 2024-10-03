import { Button, Stack, StackProps, styled } from "@mui/material";
import { useAppStore } from "../store/useAppStore";
import { useAuthStore } from "../store/useAuthStore";
import { useTranslation } from "react-i18next";

const LangBtn = styled(Button)(({ theme }) => ({
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
}));

const LangSwitcher = (props: StackProps): JSX.Element => {
  const { lang, setLang } = useAppStore();
  const { setLogout } = useAuthStore();
  const { t } = useTranslation();

  return (
    <Stack direction="row" {...props}>
      <LangBtn
        variant={lang === "en" ? "contained" : "outlined"}
        onClick={() => setLang("en")}
        sx={{ mr: 1 }}
      >
        En
      </LangBtn>
      <LangBtn
        variant={lang === "ru" ? "contained" : "outlined"}
        onClick={() => setLang("ru")}
      >
        Ru
      </LangBtn>
      <LangBtn
        variant="outlined"
        onClick={() => setLogout()}
        sx={{ ml: "auto" }}
      >
        {t("settings.logout")}
      </LangBtn>
    </Stack>
  );
};

export default LangSwitcher;
