export const getLocalPrice = (num: number): string => {
  return "$" + num.toLocaleString("en-US", { minimumFractionDigits: 2 });
};
