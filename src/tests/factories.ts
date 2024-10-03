import * as Factory from "factory.ts";
import { Pot } from "../types";

export const PotFactory = Factory.Sync.makeFactory<Pot>({
  id: Factory.each((i) => i + 1),
  name: Factory.each((i) => `Custom Pot ${i + 1}`),
  target: Factory.each((i) => (i + 1) * 1000),
  theme: "#d1d1d1",
  total: Factory.each((i) => (i + 1) * 100),
});
