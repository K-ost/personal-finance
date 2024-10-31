import { AsideIconType } from "./AsideBtn";

export const duration = 150;
export const sideWidth = 300;
export const sideWidthMin = 88;

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
  { id: 6, title: "Profile", icon: "profile", link: "/profile" },
];
