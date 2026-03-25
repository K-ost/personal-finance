import { Meta, StoryObj } from "@storybook/react-vite";

import Balance from ".";

const meta = {
  title: "UI/Balance",
  component: Balance,
} satisfies Meta<typeof Balance>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BalanceLight: Story = {
  args: {
    title: "Balance",
    dark: false,
    amount: 1000,
  },
};

export const BalanceDark: Story = {
  args: {
    title: "Balance",
    dark: true,
    amount: 1000,
  },
};
