import { Meta, StoryObj } from "@storybook/react-vite";

import Wrap from ".";

const meta = {
  title: "UI/Wrap",
  component: Wrap,
} satisfies Meta<typeof Wrap>;

export default meta;

type Story = StoryObj<typeof meta>;

const title = "What is Lorem Ipsum?";
const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const OnlyContent: Story = {
  args: {
    children: text,
  },
};

export const ContentWithTitle: Story = {
  args: {
    title,
    children: text,
  },
};

export const ContentWithMoreButton: Story = {
  args: {
    title,
    children: text,
    all: "Readmore",
    alllink: "#",
  },
};
