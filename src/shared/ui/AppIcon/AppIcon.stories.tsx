import type { Meta, StoryObj } from '@storybook/react';
import { AppIcon } from './AppIcon';
import CheckIcon from '@/shared/assets/icons/Check.svg?react';

const meta: Meta<typeof AppIcon> = {
  title: 'Shared/UI/AppIcon',
  component: AppIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    Icon: {
      control: 'object',
      description: 'SVG icon component to render',
    },
    theme: {
      control: 'select',
      options: ['clean', 'background'],
      description: 'Visual theme for the icon',
    },
    size: {
      control: 'number',
      description: 'Size of the icon in pixels',
    },
    filled: {
      control: 'boolean',
      description: 'Whether the icon should be filled',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Icon: CheckIcon,
    size: 24,
  },
};

export const WithBackground: Story = {
  args: {
    Icon: CheckIcon,
    theme: 'background',
    size: 32,
  },
};

export const Filled: Story = {
  args: {
    Icon: CheckIcon,
    filled: true,
    size: 32,
  },
};

export const Large: Story = {
  args: {
    Icon: CheckIcon,
    size: 48,
  },
};

export const Small: Story = {
  args: {
    Icon: CheckIcon,
    size: 16,
  },
};
