import { memo } from "react";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo-large.svg";
import logoSmall from "../../assets/logo-small.svg";
import { useAppStore, useSidebarStore } from "../../store/useAppStore";
import Navmenu from "../Navmenu";
import { navlinkClass } from "../Navmenu/constants";
import NavmenuItem from "../Navmenu/NavmenuItem";

const sideWidth = 300;
const sideWidthMin = 75;

const Sidebar = () => {
  const isSidebarFull = useSidebarStore();
  const setSidebar = useAppStore((state) => state.setSidebar);
  const { t } = useTranslation();

  const width = isSidebarFull ? sideWidth : sideWidthMin;

  return (
    <div
      className="hidden lg:block bg-primary h-full rounded-tr-3xl rounded-br-3xl overflow-hidden slide"
      style={{ minWidth: width, maxWidth: width }}
    >
      <div className={`flex flex-col h-full pb-6 pr-6`} style={{ minWidth: sideWidth }}>
        <div className="flex flex-col grow">
          <div className={`mb-6 py-10 px-${isSidebarFull ? "8" : "6"}`}>
            <img src={isSidebarFull ? logo : logoSmall} alt="" className="h-6" />
          </div>
          <Navmenu isHidden={isSidebarFull} />
        </div>
        <button
          className={`${navlinkClass} hideSidebar ${isSidebarFull ? "" : "hid"}`}
          onClick={() => setSidebar(!isSidebarFull)}
        >
          <NavmenuItem
            icon="min"
            label={t("settings.hideMenu")}
            isHidden={isSidebarFull}
          />
        </button>
      </div>
    </div>
  );
};

export default memo(Sidebar);
