import { AsideIconType } from "./constants";
import NavmenuIcons from "./Icons";

type NavmenuLinkProps = {
  label: string;
  icon: AsideIconType;
  isHidden?: boolean;
  iconsOnly?: boolean;
};

const NavmenuItem = (props: NavmenuLinkProps): JSX.Element => {
  const { icon, label, isHidden, iconsOnly } = props;
  return (
    <>
      <span className="w-5 h-5">
        {icon === "overview" && <NavmenuIcons.Overview />}
        {icon === "transactions" && <NavmenuIcons.Transactions />}
        {icon === "budgets" && <NavmenuIcons.Budgets />}
        {icon === "pots" && <NavmenuIcons.Pots />}
        {icon === "recurringBills" && <NavmenuIcons.Bills />}
        {icon === "profile" && <NavmenuIcons.Profile />}
        {icon === "logout" && <NavmenuIcons.Logout />}
        {icon === "min" && <NavmenuIcons.Min />}
      </span>
      {isHidden && !iconsOnly && <span className="ml-4">{label}</span>}
    </>
  );
};

export default NavmenuItem;
