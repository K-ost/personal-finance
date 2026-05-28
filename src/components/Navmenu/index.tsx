import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import useMutateData from "../../hooks/useMutateData";
import { useAuthStore, useUserRole } from "../../store/useAuthStore";
import { useNotificationStore } from "../../store/useNotificationStore";
import { AuthType } from "../../types/apiTypes";
import { navlinkClass, navMenuList } from "./constants";
import NavmenuItem from "./NavmenuItem";

type NavmenuProps = {
  isHidden?: boolean;
  isMobile?: boolean;
};

const Navmenu = ({ isHidden, isMobile }: NavmenuProps): JSX.Element => {
  const { t } = useTranslation();
  const role = useUserRole();
  const setLogout = useAuthStore((state) => state.setLogout);
  const setNotification = useNotificationStore((state) => state.setNotification);

  const { mutate, isPending } = useMutateData<AuthType, undefined>({
    key: ["logout"],
    method: "POST",
    uri: "/logout",
  });

  const logoutHandler = () => {
    mutate(undefined, {
      onSuccess(data) {
        setNotification(data.msg);
        setLogout();
      },
    });
  };

  return (
    <nav className="px-4 sm:px-10 lg:px-0">
      <ul className={isMobile ? "flex" : ""}>
        {navMenuList.map((item) => {
          const label = t(`nav.${item.icon}`);
          return (
            <li key={item.id} className="w-full">
              <NavLink to={item.link} aria-label={label} className={navlinkClass}>
                <NavmenuItem icon={item.icon} isHidden={isHidden} label={label} />
              </NavLink>
            </li>
          );
        })}

        {role === "admin" && (
          <li className="w-full">
            <NavLink to="/profile" aria-label={t("nav.profile")} className={navlinkClass}>
              <NavmenuItem icon="profile" label={t("nav.profile")} isHidden={isHidden} />
            </NavLink>
          </li>
        )}

        <li className="w-full">
          <button
            data-testid="logoutBtn"
            aria-label={t(`nav.logout`)}
            className={navlinkClass}
            onClick={logoutHandler}
          >
            <NavmenuItem
              icon="logout"
              label={isPending ? "Loading..." : t("nav.logout")}
              isHidden={isHidden}
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navmenu;
