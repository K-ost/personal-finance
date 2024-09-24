export const getLocalPrice = (num: number): string => {
  return "$" + num.toLocaleString("en-US", { minimumFractionDigits: 2 });
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
