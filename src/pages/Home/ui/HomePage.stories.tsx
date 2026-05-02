import type { Meta, StoryObj } from "@storybook/react";

import HomePage from "./HomePage";

const meta = {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The main landing page showcasing portfolio content with hero section, infinite scrolling tools, and bento grid layout.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone12",
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
};
