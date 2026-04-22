import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { children: "Button" },
  argTypes: {
    theme: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "outline", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
    },
    form: {
      control: { type: "select" },
      options: ["pill", "rounded", "circle"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: "primary",
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    theme: "tertiary",
  },
};

export const Outline: Story = {
  args: {
    theme: "outline",
  },
};

export const Ghost: Story = {
  args: {
    theme: "ghost",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
  },
};

export const Rounded: Story = {
  args: {
    form: "rounded",
  },
};

export const Pill: Story = {
  args: {
    form: "pill",
  },
};

export const Circle: Story = {
  args: {
    form: "circle",
  },
};