type selectArray = {
  title: string;
  value: string;
};

export const sortOptions: selectArray[] = [
  { title: "Latest", value: "date,desc" },
  { title: "Oldest", value: "date,asc" },
  { title: "A to Z", value: "name,asc" },
  { title: "Z to A", value: "name,desc" },
  { title: "Highest", value: "amount,desc" },
  { title: "Lowest", value: "amount,asc" },
];

export const transactionsOptions: selectArray[] = [
  { title: "All Transactions", value: "all" },
  { title: "Entertainment", value: "Entertainment" },
  { title: "Bills", value: "Bills" },
  { title: "Groceries", value: "Groceries" },
  { title: "Dining Out", value: "Dining Out" },
  { title: "Transportation", value: "Transportation" },
  { title: "Personal Care", value: "Personal Care" },
  { title: "Education", value: "Education" },
  { title: "Lifestyle", value: "Lifestyle" },
  { title: "Shopping", value: "Shopping" },
  { title: "General", value: "General" },
];
