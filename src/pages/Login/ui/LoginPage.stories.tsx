import type { Meta, StoryObj } from "@storybook/react";

import LoginPage from "./LoginPage";

const meta = {
  title: "Pages/LoginPage",
  component: LoginPage,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Authentication page for user login with form validation and error handling.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginPage>;

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
