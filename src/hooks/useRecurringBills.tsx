import { RecurringBill, Transaction } from "../types";

type RecurringBillsProps = {
  data: Transaction[];
};

type BillAmount = {
  amount: number;
  length: number;
};

export type BillInfo = {
  paid: BillAmount;
  soon: BillAmount;
  upcoming: BillAmount;
};

type ReqBillsReturn = {
  bills: RecurringBill[];
  info: BillInfo;
};

const useRecurringBills = (props: RecurringBillsProps): ReqBillsReturn => {
  const { data } = props;
  const currentDate = new Date().getDate();

  const output: RecurringBill[] = data.map((bill) => {
    const transactionDate = new Date(bill.date).getDate();
    return {
      ...bill,
      isPaid: currentDate >= transactionDate,
      isSoon: transactionDate < currentDate + 5 && currentDate < transactionDate,
    };
  });

  const paidBills = output.filter((bill) => bill.isPaid);
  const soonBills = output.filter((bill) => bill.isSoon);
  const upcomingBills = output.filter((bill) => !bill.isPaid && !bill.isSoon);
  const calculate = (list: RecurringBill[]) =>
    list.reduce((acum, el) => (acum += Math.abs(el.amount)), 0);

  return {
    bills: output,
    info: {
      paid: {
        amount: calculate(paidBills),
        length: paidBills.length,
      },
      soon: {
        amount: calculate(soonBills),
        length: soonBills.length,
      },
      upcoming: {
        amount: calculate(upcomingBills),
        length: upcomingBills.length,
      },
    },
  };
};

export default useRecurringBills;
