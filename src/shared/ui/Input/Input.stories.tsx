import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import ShowIcon from "@/shared/assets/icons/Show.svg?react";

const meta: Meta<typeof Input> = {
  title: "Shared/UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text", description: "Input placeholder text" },
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
      description: "Input type",
    },
    value: { control: "text", description: "Controlled input value" },
    defaultValue: { control: "text", description: "Uncontrolled default value" },
    disabled: { control: "boolean", description: "Whether the input is disabled" },
    rounded: { control: "boolean", description: "Whether the input has rounded corners" },
    error: { control: "boolean", description: "Error state styling" },
    label: { control: "text", description: "Optional label text" },
    Icon: { control: false, description: "Optional leading icon (ReactNode)" },
    className: { control: "text", description: "Additional CSS classes" },
    onChange: { action: "changed", table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Simple default (uncontrolled) */
export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
  },
};

/** Controlled example — demonstrates value + onChange */
export const Controlled: Story = {
  render: (args) => {
    const [val, setVal] = useState(args.value ?? "Sample text");
    return (
      <Input
        {...args}
        value={val}
        onChange={(v) => {
          setVal(v);
        }}
      />
    );
  },
  args: {
    value: "Sample text",
    placeholder: "Controlled input",
  },
};

/** Uncontrolled example using defaultValue */
export const Uncontrolled: Story = {
  args: {
    defaultValue: "Default value",
    placeholder: "Uncontrolled input (defaultValue)",
  },
};

/** Email type */
export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email...",
  },
};

/** Password with toggle visibility */
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password...",
  },
};

/** Rounded style */
export const Rounded: Story = {
  args: {
    placeholder: "Rounded input",
    rounded: true,
  },
};

/** Disabled state */
export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

/** Error state */
export const Error: Story = {
  args: {
    placeholder: "Error input",
    error: true,
  },
};

/** With label and an example leading icon */
export const WithLabelAndIcon: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username...",
    Icon: <ShowIcon />,
  },
};
