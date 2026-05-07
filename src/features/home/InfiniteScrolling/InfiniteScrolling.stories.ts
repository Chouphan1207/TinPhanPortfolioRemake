import type { Meta, StoryObj } from "@storybook/react";
import { InfiniteScrollTools } from "./InfiniteScrolling";

const meta: Meta = {
  title: "Pages/Home/UI/InfiniteScrolling",
  component: InfiniteScrollTools,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: InfiniteScrollTools,
};
