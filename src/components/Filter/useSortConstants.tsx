import { useTranslation } from "react-i18next";

type selectArray = {
  title: string;
  value: string;
};

type useSortConstantsReturn = {
  sortOptions: selectArray[];
  transactionsOptions: selectArray[];
};

const useSortConstants = (): useSortConstantsReturn => {
  const { t } = useTranslation();

  const sortOptions: selectArray[] = [
    { title: t("filter.sort.latest"), value: "date,desc" },
    { title: t("filter.sort.oldest"), value: "date,asc" },
    { title: t("filter.sort.az"), value: "name,asc" },
    { title: t("filter.sort.za"), value: "name,desc" },
    { title: t("filter.sort.highest"), value: "amount,desc" },
    { title: t("filter.sort.lowest"), value: "amount,asc" },
  ];

  const transactionsOptions: selectArray[] = [
    { title: t("filter.cats.all"), value: "all" },
    { title: t("filter.cats.entertainment"), value: "Entertainment" },
    { title: t("filter.cats.bills"), value: "Bills" },
    { title: t("filter.cats.groceries"), value: "Groceries" },
    { title: t("filter.cats.dining"), value: "Dining Out" },
    { title: t("filter.cats.transportation"), value: "Transportation" },
    { title: t("filter.cats.personal"), value: "Personal Care" },
    { title: t("filter.cats.education"), value: "Education" },
    { title: t("filter.cats.lifestyle"), value: "Lifestyle" },
    { title: t("filter.cats.shopping"), value: "Shopping" },
    { title: t("filter.cats.general"), value: "General" },
  ];

  return {
    sortOptions,
    transactionsOptions,
  };
};

export default useSortConstants;
