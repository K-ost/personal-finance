import { Stack, StackProps } from "@mui/material";

import { useAppStore, useLanguageStore } from "../../store/useAppStore";
import { useAuthStore } from "../../store/useAuthStore";
import { LangBtn } from "./styles";

type LangSwitcher = StackProps & {
  title?: string;
};

const LangSwitcher = (props: LangSwitcher): JSX.Element => {
  const lang = useLanguageStore();
  const setLang = useAppStore((state) => state.setLang);
  const token = useAuthStore((state) => state.token);
  const isAuth = token ? "true" : "false";

  return (
    <Stack direction="row" alignItems="center" {...props}>
      <LangBtn
        variant={lang === "en" ? "contained" : "outlined"}
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        sx={{ mr: 1 }}
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
    </Stack>
  );
};

export default LangSwitcher;
