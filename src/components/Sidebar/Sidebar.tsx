import {
  Box,
  BoxProps,
  ListItem,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../../assets/logo-large.svg";
import logoSmall from "../../assets/logo-small.svg";
import { duration, navMenuList, sideWidth, sideWidthMin } from "./constants";
import AsideBtn from "./AsideBtn";
import NavMenu from "./NavMenu";
import { NavLink } from "react-router-dom";
import {
  IconBills,
  IconBudgets,
  IconMin,
  IconOverview,
  IconPots,
  IconTransactions,
} from "./Icons";
import { useAppStore } from "../../store/useAppStore";

type SidebarProps = BoxProps & {
  open: boolean;
};

// Styles
const Aside = styled(Box)<SidebarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "0 24px 24px 0",
  minWidth: open ? sideWidth : sideWidthMin,
  maxWidth: open ? sideWidth : sideWidthMin,
  overflow: "hidden",
  transitionProperty: "all",
  transitionDuration: `${duration}ms`,
  transitionTimingFunction: "ease-in-out",
  [theme.breakpoints.down("lg")]: {
    borderRadius: "8px 8px 0 0",
    minWidth: 0,
    order: 2,
    transition: "none",
  },
}));

const AsideInner = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  paddingBottom: theme.spacing(6),
  paddingRight: theme.spacing(6),
  width: sideWidth,
  [theme.breakpoints.down("lg")]: {
    padding: "8px 40px",
  },
}));

const AsideLogo = styled(Box)<BoxProps>(({ theme }) => ({
  marginBottom: theme.spacing(6),
  padding: `${theme.spacing(10)} ${theme.spacing(8)}`,
}));

const Sidebar = (props: BoxProps) => {
  const { sidebar, setSidebar } = useAppStore();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Aside open={sidebar} {...props}>
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
                  {item.icon === "overview" && <IconOverview />}
                  {item.icon === "transactions" && <IconTransactions />}
                  {item.icon === "budgets" && <IconBudgets />}
                  {item.icon === "pots" && <IconPots />}
                  {item.icon === "bills" && <IconBills />}
                  {sidebar && <span>{item.title}</span>}
                </AsideBtn>
              </ListItem>
            ))}
          </NavMenu>
        </Box>

        {isDesktop && (
          <AsideBtn
            className={sidebar ? "opened" : ""}
            onClick={() => setSidebar(!sidebar)}
          >
            <IconMin />
            {sidebar && <span>Minimize Menu</span>}
          </AsideBtn>
        )}
      </AsideInner>
    </Aside>
  );
};

export default Sidebar;
