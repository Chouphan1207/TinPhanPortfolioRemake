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
      options: [
        "button",     // base style
        "btnHover",   // hover effect variant
        "primary",
        "secondary",
        "tertiary",
        "outline",
        "ghost",
      ],
      description: "Button theme/style variant",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
      description: "Button size",
    },
    form: {
      control: { type: "select" },
      options: ["pill", "circle", "rounded", "fullWidth"],
      description: "Button shape modifier",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the button",
    },
    children: {
      control: { type: "text" },
      description: "Button text content",
    },
    onClick: {
      action: "clicked",
      description: "Click handler",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* Theme Variants */
export const BtnHover: Story = { args: { theme: "btnHover" } };
export const Primary: Story = { args: { theme: "primary" } };
export const Secondary: Story = { args: { theme: "secondary" } };
export const Tertiary: Story = { args: { theme: "tertiary" } };
export const Outline: Story = { args: { theme: "outline" } };
export const Ghost: Story = { args: { theme: "ghost" } };

/* Sizes */
export const ExtraSmall: Story = { args: { size: "xs" } };
export const Small: Story = { args: { size: "sm" } };
export const Medium: Story = { args: { size: "md" } };
export const Large: Story = { args: { size: "lg" } };

/* Forms */
export const Pill: Story = { args: { form: "pill" } };
export const Circle: Story = { args: { form: "circle" } };
export const Rounded: Story = { args: { form: "rounded" } };

/* States */
export const Disabled: Story = { args: { disabled: true } };

/* Showcase */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
      <Button theme="btnHover" size="sm">Hover Small</Button>
      <Button theme="btnHover" size="md">Hover Medium</Button>
      <Button theme="btnHover" size="lg">Hover Large</Button>
      <Button theme="primary" size="md">Primary</Button>
      <Button theme="secondary" size="md">Secondary</Button>
      <Button theme="tertiary" size="md">Tertiary</Button>
      <Button theme="outline" size="md">Outline</Button>
      <Button theme="ghost" size="md">Ghost</Button>
      <Button theme="primary" size="md" form="pill">Pill</Button>
      <Button theme="primary" size="md" form="circle">Circle</Button>
      <Button theme="primary" size="md" form="rounded">Rounded</Button>
      <Button theme="btnHover" size="md" disabled>Disabled</Button>
    </div>
  ),
};
