import { Budget, ChartBudget } from "../types";

export const getLocalPrice = (num: number, nodigits?: boolean): string => {
  return (
    "$" +
    num.toLocaleString("en-US", {
      minimumFractionDigits: nodigits ? undefined : 2,
    })
  );
};

export const transactionPrice = (num: number): string => {
  return num > 0
    ? `+${getLocalPrice(num)}`
    : `-${getLocalPrice(Math.abs(num))}`;
};

export const getImageLink = (url: string): string => {
  return new URL(url, import.meta.url).href;
};

export const createDate = (date: Date | string): string => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[new Date(date).getMonth()];
  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();
  return `${day} ${month} ${year}`;
};

export const getProgressValue = (total: number, target: number): number => {
  const output = ((total * 100) / target).toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
  return Number(output);
};

export const getSortValue = (params: URLSearchParams): string => {
  if (params.get("_sort") && params.get("_order")) {
    return `${params.get("_sort")},${params.get("_order")}`;
  }
  return "date,desc";
};

export const getCategoryValue = (params: URLSearchParams): string => {
  if (params.get("category")) {
    return `${params.get("category")}`;
  }
  return "all";
};

export const getChartLimit = (data: Omit<Budget, "id">[]): string => {
  const output = data.reduce((acum, el) => (acum += el.maximum), 0);
  return getLocalPrice(output, true);
};
