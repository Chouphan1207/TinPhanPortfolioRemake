import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Shared/UI/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for accessibility',
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
    src: 'https://via.placeholder.com/300x300/456882/ffffff?text=Sample+Image',
    alt: 'Sample image',
  },
};

export const WithCustomClass: Story = {
  args: {
    src: 'https://via.placeholder.com/200x200/79B4B7/000000?text=Custom',
    alt: 'Custom styled image',
    className: 'custom-image-class',
  },
};
