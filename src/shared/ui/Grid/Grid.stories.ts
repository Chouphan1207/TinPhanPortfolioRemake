import type { Meta, StoryObj } from '@storybook/react';
import { BentoGrid } from './Grid';

const meta: Meta<typeof BentoGrid> = {
  title: 'Shared/UI/Grid',
  component: BentoGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of bento grid items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: '1',
        size: 'large' as const,
        title: 'Large Item',
        description: 'This is a large bento grid item',
      },
      {
        id: '2',
        size: 'medium' as const,
        title: 'Medium Item',
        description: 'This is a medium bento grid item',
      },
      {
        id: '3',
        size: 'small' as const,
        title: 'Small Item',
        description: 'This is a small bento grid item',
      },
    ],
  },
};

export const FullGrid: Story = {
  args: {
    items: [
      {
        id: '1',
        size: 'large' as const,
        title: 'About Me',
        description: 'Passionate developer creating innovative digital experiences',
      },
      {
        id: '2',
        size: 'medium' as const,
        title: 'Skills',
        description: 'React, TypeScript, Node.js',
      },
      {
        id: '3',
        size: 'small' as const,
        title: 'Years',
        description: '5+',
      },
      {
        id: '4',
        size: 'small' as const,
        title: 'Projects',
        description: '50+',
      },
      {
        id: '5',
        size: 'wide' as const,
        title: 'Featured Project',
        description: 'E-commerce platform with modern tech stack',
      },
      {
        id: '6',
        size: 'small' as const,
        title: 'Clients',
        description: '30+',
      },
      {
        id: '7',
        size: 'tall' as const,
        title: 'Experience',
        description: 'Full-stack development',
      },
      {
        id: '8',
        size: 'medium' as const,
        title: 'Education',
        description: 'Computer Science Degree',
      },
      {
        id: '9',
        size: 'small' as const,
        title: 'Awards',
        description: '3',
      },
    ],
  },
};
