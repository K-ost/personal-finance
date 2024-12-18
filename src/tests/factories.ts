import * as Factory from "factory.ts";
import { Budget, Pot, Transaction } from "../types";
import { potsColorOptions } from "../components/Pots/constants";
import { CategoriesOptions } from "../components/Budgets/constants";

const amounts = [110, 240, 350, 435, 578, 320, 180];
const cats = CategoriesOptions.map((el) => el.name);
const maximums = [1000, 1500, 750, 450, 310];

export const transactionFactory = Factory.Sync.makeFactory<Transaction>({
  amount: Factory.each((i) => amounts[i]),
  avatar: "http://image.link",
  category: Factory.each((i) => cats[i]),
  date: new Date("2024-07-09T08:55:27Z"),
  id: Factory.each((i) => i + 1),
  name: Factory.each((i) => `Transaction Title ${i + 1}`),
  recurring: false,
});

export const budgetFactory = Factory.Sync.makeFactory<Budget>({
  id: Factory.each((i) => i + 1),
  category: Factory.each((i) => cats[i]),
  maximum: Factory.each((i) => maximums[i]),
  latest: transactionFactory.buildList(3),
  theme: "#D1D1D1",
});

export const potFactory = Factory.Sync.makeFactory<Partial<Pot>>({
  id: Factory.each((i) => i + 1),
  name: Factory.each((i) => `Custom Pot ${i + 1}`),
  target: Factory.each((i) => (i + 1) * 1000),
  theme: Factory.each((i) => potsColorOptions[i].value),
  total: Factory.each((i) => (i + 1) * 100),
});
