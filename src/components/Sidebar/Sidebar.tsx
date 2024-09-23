import { Box, BoxProps, styled } from "@mui/material";
import logo from "../../assets/logo-large.svg";
import logoSmall from "../../assets/logo-small.svg";
import { duration, navMenuList, sideWidth, sideWidthMin } from "./constants";
import AsideBtn from "./AsideBtn";

type SidebarProps = BoxProps & {
  open: boolean;
  onClose: () => void;
};

// Styles
const Aside = styled(Box)<SidebarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "0 24px 24px 0",
  minWidth: open ? sideWidth : sideWidthMin,
  overflow: "hidden",
  transitionProperty: "all",
  transitionDuration: `${duration}ms`,
  transitionTimingFunction: "ease-in-out",
}));

const AsideInner = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  paddingBottom: theme.spacing(6),
  paddingRight: theme.spacing(6),
  width: sideWidth,
}));

const AsideLogo = styled(Box)<BoxProps>(({ theme }) => ({
  marginBottom: theme.spacing(6),
  padding: `${theme.spacing(10)} ${theme.spacing(8)}`,
}));

const Sidebar = (props: SidebarProps) => {
  const { open, onClose } = props;
  return (
    <Aside {...props}>
      <AsideInner>
        <Box sx={{ flex: 1 }}>
          <AsideLogo>
            <img src={open ? logo : logoSmall} alt="" />
          </AsideLogo>

          <nav>
            <ul style={{ margin: 0, padding: 0 }}>
              {navMenuList.map((item) => (
                <li key={item.id}>
                  <AsideBtn
                    open={open}
                    className={open ? "opened" : ""}
                    title={item.title}
                    icon={item.icon}
                    href={item.link}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </Box>

        <AsideBtn
          open={open}
          className={open ? "opened" : ""}
          onClick={onClose}
          title="Minimize Menu"
          icon="min"
        />
      </AsideInner>
    </Aside>
  );
};

export default Sidebar;
