import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Shared/UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Customizable button component with multiple themes, sizes, and hover effects.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: ["btnHover", "primary", "secondary"],
      description: "Button theme/style variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Button size",
    },
    children: {
      control: "text",
      description: "Button text content",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    onClick: {
      action: "clicked",
      description: "Click handler",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: "btnHover",
    size: "md",
    children: "Click me",
  },
};

export const Primary: Story = {
  args: {
    theme: "primary",
    size: "md",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
    size: "md",
    children: "Secondary Button",
  },
};

export const Small: Story = {
  args: {
    theme: "btnHover",
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    theme: "btnHover",
    size: "lg",
    children: "Large Button",
  },
};

export const Disabled: Story = {
  args: {
    theme: "btnHover",
    size: "md",
    children: "Disabled Button",
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    // eslint-disable-next-line react/forbid-component-props
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
      <Button theme="btnHover" size="sm">Small Hover</Button>
      <Button theme="btnHover" size="md">Medium Hover</Button>
      <Button theme="btnHover" size="lg">Large Hover</Button>
      <Button theme="primary" size="md">Primary</Button>
      <Button theme="secondary" size="md">Secondary</Button>
      <Button theme="btnHover" size="md" disabled>Disabled</Button>
    </div>
  ),
};
