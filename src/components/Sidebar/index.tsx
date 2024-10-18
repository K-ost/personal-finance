import { Box, ListItem, useMediaQuery, useTheme } from "@mui/material";
import logo from "../../assets/logo-large.svg";
import logoSmall from "../../assets/logo-small.svg";
import { navMenuList } from "./constants";
import AsideBtn from "./AsideBtn";
import NavMenu from "./NavMenu";
import { NavLink } from "react-router-dom";
import {
  IconBills,
  IconBudgets,
  IconLogout,
  IconMin,
  IconOverview,
  IconPots,
  IconTransactions,
} from "./Icons";
import { useAppStore } from "../../store/useAppStore";
import { useTranslation } from "react-i18next";
import { Aside, AsideInner, AsideLogo } from "./styles";
import { useAuthStore } from "../../store/useAuthStore";

const Sidebar = () => {
  const { sidebar, setSidebar } = useAppStore();
  const { setLogout } = useAuthStore();
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Aside open={sidebar}>
      <AsideInner>
        <Box sx={{ flex: 1 }}>
          {isDesktop && (
            <AsideLogo>
              <img src={sidebar ? logo : logoSmall} alt="" />
            </AsideLogo>
          )}

          <NavMenu>
            {navMenuList.map((item) => (
              <ListItem key={item.id}>
                <AsideBtn
                  className={sidebar ? "opened" : ""}
                  component={NavLink}
                  to={item.link}
                >
                  <span className="iconBox">
                    {item.icon === "overview" && <IconOverview />}
                    {item.icon === "transactions" && <IconTransactions />}
                    {item.icon === "budgets" && <IconBudgets />}
                    {item.icon === "pots" && <IconPots />}
                    {item.icon === "recurringBills" && <IconBills />}
                  </span>
                  {sidebar && isTablet && (
                    <span className="btnTitle">{t(`nav.${item.icon}`)}</span>
                  )}
                </AsideBtn>
              </ListItem>
            ))}
            <ListItem>
              <AsideBtn onClick={() => setLogout()} data-testid="logoutBtn">
                <span className="iconBox">
                  <IconLogout />
                </span>
                {sidebar && isTablet && (
                  <span className="btnTitle">{t(`nav.logout`)}</span>
                )}
              </AsideBtn>
            </ListItem>
          </NavMenu>
        </Box>

        {isDesktop && (
          <AsideBtn
            className={sidebar ? "opened" : ""}
            onClick={() => setSidebar(!sidebar)}
          >
            <span className="iconBox">
              <IconMin />
            </span>
            {sidebar && (
              <span className="btnTitle">{t("settings.hideMenu")}</span>
            )}
          </AsideBtn>
        )}
      </AsideInner>
    </Aside>
  );
};

export default Sidebar;
