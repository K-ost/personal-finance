import { Pot } from "../types";

export const createUser = (user: "admin" | "user") => {
  return {
    accessToken: "token",
    message: "",
    user: {
      email: "admin@test.com",
      name: "Admin",
      role: user,
      avatar: "",
      id: 1,
    },
  };
};

export const mockedNewPotBody = {
  name: "New Pot",
  target: 1000,
  theme: "#626070",
  total: 0,
};

export const mockedEditPotBody = (name: string, full?: boolean) => {
  const output: Partial<Pot> = { name, target: 1000, theme: "#277C78" };
  if (full) {
    output.total = 100;
    output._id = "1";
  }
  return output;
};
