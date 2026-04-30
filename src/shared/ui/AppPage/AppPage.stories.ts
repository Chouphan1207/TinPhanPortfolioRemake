import type { Meta, StoryObj } from '@storybook/react';
import { AppPage } from './AppPage';

const meta: Meta<typeof AppPage> = {
  title: 'Shared/UI/AppPage',
  component: AppPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to render inside the page',
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
    children: 'This is a page wrapper content',
  },
};

export const WithContent: Story = {
  args: {
    children: '<div style="padding: 2rem; text-align: center;"><h1>Page Title</h1><p>This is the main content area of the page.</p><button>Click me</button></div>',
  },
};

export const WithAppContent: Story = {
  args: {
    children: 'Page content with AppContent wrapper',
  },
};
