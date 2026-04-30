import type { Meta, StoryObj } from "@storybook/react";
import NoiseGridBackground from "./NoisegridBackground";

const meta: Meta<typeof NoiseGridBackground> = {
  title: "Backgrounds/NoiseGridBackground",
  component: NoiseGridBackground,
  argTypes: {
    text: { control: { type: "text" } },
    showText: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof NoiseGridBackground>;

export const Default: Story = {
  args: {
    text: "Instant copywriting",
    showText: true,
  },
};

export const CustomText: Story = {
  args: {
    text: "Personalized noise grid background",
    showText: true,
  },
};

export const BackgroundOnly: Story = {
  args: {
    showText: false,
  },
};
