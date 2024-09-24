type selectArray = {
  title: string;
  value: string;
};

export const sortOptions: selectArray[] = [
  { title: "Latest", value: "latest" },
  { title: "Oldest", value: "oldest" },
  { title: "A to Z", value: "asc" },
  { title: "Z to A", value: "desc" },
  { title: "Highest", value: "highest" },
  { title: "Lowest", value: "lowest" },
];

export const transactionsOptions: selectArray[] = [
  { title: "All Transactions", value: "all" },
  { title: "Entertainment", value: "entertainment" },
  { title: "Bills", value: "bills" },
  { title: "Groceries", value: "groceries" },
  { title: "Dining Out", value: "dining-out" },
  { title: "Transportation", value: "transportation" },
  { title: "Personal Care", value: "personal-care" },
  { title: "Education", value: "education" },
  { title: "Lifestyle", value: "lifestyle" },
  { title: "Shopping", value: "shopping" },
  { title: "General", value: "general" },
];
