import { Meta, StoryObj } from "@storybook/react-vite";

import avatar from "../../assets/avatars/daniel-carter.jpg";
import UserCard from ".";

const meta = {
  title: "UI/UserCard",
  component: UserCard,
} satisfies Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar,
    name: "Daniel Carter",
  },
};

export const WithText: Story = {
  args: {
    avatar,
    name: "Daniel Carter",
    category: "Entertainment",
  },
};
