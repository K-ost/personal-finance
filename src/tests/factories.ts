import * as Factory from "factory.ts";
import { Pot } from "../types";
import { potsColorOptions } from "../components/Pots/constants";

export const PotFactory = Factory.Sync.makeFactory<Partial<Pot>>({
  id: Factory.each((i) => i + 1),
  name: Factory.each((i) => `Custom Pot ${i + 1}`),
  target: Factory.each((i) => (i + 1) * 1000),
  theme: Factory.each((i) => potsColorOptions[i].value),
  total: Factory.each((i) => (i + 1) * 100),
});
