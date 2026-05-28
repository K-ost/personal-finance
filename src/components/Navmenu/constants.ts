export type AsideIconType =
  | "min"
  | "overview"
  | "transactions"
  | "budgets"
  | "pots"
  | "recurringBills"
  | "profile"
  | "logout";

type NavMenuList = {
  id: number;
  title: string;
  icon: AsideIconType;
  link: string;
};

export const navMenuList: NavMenuList[] = [
  { id: 1, title: "Overview", icon: "overview", link: "/" },
  { id: 2, title: "Transactions", icon: "transactions", link: "/transactions" },
  { id: 3, title: "Budgets", icon: "budgets", link: "/budgets" },
  { id: 4, title: "Pots", icon: "pots", link: "/pots" },
  { id: 5, title: "Recurring bills", icon: "recurringBills", link: "/bills" },
];

export const navlinkClass = `
  flex
  h-14
  lg:rounded-tr-xl
  lg:rounded-br-xl
  w-full
  outline-0
  border-0
  justify-center
  lg:justify-normal
  cursor-pointer
  no-underline
  text-grey-300
  items-center
  text-md
  font-medium
  py-2
  px-2
  lg:px-6
  transition
  duration-300
  hover:bg-[rgba(255,255,255,.15)]
  [&.active]:bg-white
  [&.active]:text-primary
  [&.active_path]:fill-custom-green
  [&.hideSidebar.hid_svg]:transform-[matrix(-1,0,0,1,0,0)]`;
