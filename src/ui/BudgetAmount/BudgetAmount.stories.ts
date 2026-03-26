import { Meta, StoryObj } from "@storybook/react-vite";

import BudgetAmount from ".";

const meta = {
  title: "UI/BudgetAmount",
  component: BudgetAmount,
  argTypes: {
    big: {
      control: "radio",
      options: [undefined, "true"],
    },
  },
} satisfies Meta<typeof BudgetAmount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    amount: 1000,
    title: "Budget",
  },
};

export const Colored: Story = {
  args: {
    amount: 1000,
    title: "Budget",
    color: "green",
  },
};

export const Big: Story = {
  args: {
    amount: 1000,
    title: "Budget",
    big: "true",
  },
  argTypes: {
    color: {
      if: { arg: "big", exists: false },
    },
  },
};
