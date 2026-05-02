import type { Meta, StoryObj } from "@storybook/react";
import { BentoGrid } from "./Grid";
import { bentoGridData } from "@/entities/portfolio";

const meta = {
  title: "Shared/UI/Grid",
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

export const CustomItems: Story = {
  args: {
    items: [
      {
        id: "custom-1",
        title: "Custom Item 1",
        description: "A custom portfolio item",
        size: "large",
      },
      {
        id: "custom-2", 
        title: "Custom Item 2",
        description: "Another custom item",
        size: "small",
      },
      {
        id: "custom-3",
        title: "Custom Item 3",
        description: "Third custom item",
        size: "medium",
      },
    ],
  },
};
