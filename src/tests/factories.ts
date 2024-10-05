import * as Factory from "factory.ts";
import { Pot, Transaction } from "../types";
import { potsColorOptions } from "../components/Pots/constants";

export const PotFactory = Factory.Sync.makeFactory<Partial<Pot>>({
  id: Factory.each((i) => i + 1),
  name: Factory.each((i) => `Custom Pot ${i + 1}`),
  target: Factory.each((i) => (i + 1) * 1000),
  theme: Factory.each((i) => potsColorOptions[i].value),
  total: Factory.each((i) => (i + 1) * 100),
});

export const TransactionFactory = Factory.Sync.makeFactory<Transaction>({
  amount: 100,
  avatar: "http://image.link",
  category: "General",
  date: new Date("2024-07-09T08:55:27Z"),
  id: Factory.each((i) => i + 1),
  name: Factory.each((i) => `Transaction Title ${i + 1}`),
  recurring: false,
});
