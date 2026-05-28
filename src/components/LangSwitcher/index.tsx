import { memo } from "react";

import { useAppStore, useLanguageStore } from "../../store/useAppStore";
import LangBtn from "./LangBtn";

const LangSwitcher = (): JSX.Element => {
  const lang = useLanguageStore();
  const setLang = useAppStore((state) => state.setLang);

  return (
    <div className="flex">
      <LangBtn
        onClick={() => setLang("en")}
        isactive={lang === "en" ? "true" : "false"}
        aria-label="English"
      >
        En
      </LangBtn>
      <LangBtn
        onClick={() => setLang("ru")}
        isactive={lang === "ru" ? "true" : "false"}
        aria-label="Russian"
      >
        Ru
      </LangBtn>
    </div>
  );
};

export default memo(LangSwitcher);
