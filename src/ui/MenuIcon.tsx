import { IconButton, Menu } from "@mui/material";
import ellipsis from "../assets/icon-ellipsis.svg";

type MenuIconProps = {
  children: React.ReactNode;
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

const MenuIcon = (props: MenuIconProps): JSX.Element => {
  const { children, anchorEl, setAnchorEl } = props;
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton
        sx={{ ml: "auto", width: 32, padding: 0, height: 32 }}
        onClick={handleClick}
      >
        <img src={ellipsis} alt="" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {children}
      </Menu>
    </>
  );
};

export default MenuIcon;
