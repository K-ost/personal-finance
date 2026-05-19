import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import bg from "../../assets/illustration-authentication.svg";
import logo from "../../assets/logo-large.svg";
import LangSwitcher from "../LangSwitcher";

type LoginLayoutProps = {
  children: React.ReactNode;
};

const LoginLayout = (props: LoginLayoutProps): JSX.Element => {
  const { children } = props;
  const { t } = useTranslation();

  const leftColClass =
    "bg-[#201F24] rounded-bl-xl rounded-br-xl text-white flex flex-col m-0 md:mr-5 overflow-hidden p-6 md:p-10 relative w-auto md:w-110 lg:w-140 md:rounded-xl";

  return (
    <div className="bg-beige-100 flex h-full p-0 md:p-5 flex-col md:flex-row">
      <div className={leftColClass}>
        <img src={bg} alt="" className="hidden absolute w-full left-0 top-0 md:block" />
        <div className="relative flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="hidden md:block relative">
          <Typography variant="h1">{t("loginPage.text")}</Typography>
          <Typography variant="body1">{t("loginPage.subtext")}</Typography>
        </div>
      </div>

      <main role="main" className="p-4 md:p-0 flex items-center justify-center grow">
        <div className="absolute right-4 top-5 md:top-4">
          <LangSwitcher />
        </div>
        {children}
      </main>
    </div>
  );
};

export default LoginLayout;
