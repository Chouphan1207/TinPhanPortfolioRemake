import type { Meta, StoryObj } from "@storybook/react";
import { bentoGridData } from "@/entities/portfolio";
import { BentoGrid } from "./Grid";

const meta = {
  title: "Pages/Home/UI/Grid",
  component: BentoGrid,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Responsive bento grid layout for displaying portfolio items with different sizes and hover effects.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Array of grid items to display",
    },
  },
} satisfies Meta<typeof BentoGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: bentoGridData,
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
