import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./Typography";
import styles from "./Typography.stories.module.scss";

const meta = {
  title: "Shared/UI/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "p", "span", "div"],
      description: "HTML element to render",
    },
    family: {
      control: "select",
      options: ["bungee", "montserrat", "primary", "secondary", "mono"],
      description: "Font family",
    },
    weight: {
      control: "select",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      description: "Font weight",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
      description: "Font size",
    },
    lineHeight: {
      control: "select",
      options: ["tight", "snug", "normal", "relaxed", "loose"],
      description: "Line height",
    },
    preset: {
      control: "select",
      options: ["heading-display", "heading-1", "heading-2", "heading-3", "heading-4", "body-large", "body-base", "body-small", "caption"],
      description: "Typography preset",
    },
    children: {
      control: "text",
      description: "Text content",
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default typography text",
  },
};

export const Presets: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div className={styles.storyContainer}>
      <Typography preset="heading-display">Display Heading (Bungee)</Typography>
      <Typography preset="heading-1">Heading 1 (Montserrat)</Typography>
      <Typography preset="heading-2">Heading 2 (Montserrat)</Typography>
      <Typography preset="heading-3">Heading 3 (Montserrat)</Typography>
      <Typography preset="heading-4">Heading 4 (Montserrat)</Typography>
      <Typography preset="body-large">Large body text for important content that needs more emphasis.</Typography>
      <Typography preset="body-base">Base body text for regular content and paragraphs.</Typography>
      <Typography preset="body-small">Small body text for secondary information and metadata.</Typography>
      <Typography preset="caption">Caption text for labels and annotations.</Typography>
    </div>
  ),
};

export const FontFamilies: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div className={styles.storyContainer}>
      <Typography family="bungee" size="2xl">Bungee Font Family</Typography>
      <Typography family="montserrat" size="2xl">Montserrat Font Family</Typography>
      <Typography family="primary" size="2xl">Primary Font Family (Montserrat)</Typography>
      <Typography family="secondary" size="2xl">Secondary Font Family (Bungee)</Typography>
      <Typography family="mono" size="2xl">Monospace Font Family</Typography>
    </div>
  ),
};

export const CustomStyles: Story = {
  args: {
    family: "montserrat",
    weight: 700,
    size: "3xl",
    lineHeight: "tight",
    children: "Custom styled typography",
  },
};

export const AsDifferentElements: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div className={styles.storyContainer}>
      <Typography as="h1" preset="heading-1">H1 Heading</Typography>
      <Typography as="h2" preset="heading-2">H2 Heading</Typography>
      <Typography as="h3" preset="heading-3">H3 Heading</Typography>
      <Typography as="p" preset="body-base">Paragraph text content</Typography>
      <Typography as="span" preset="body-small">Span text content</Typography>
      <Typography as="div" preset="caption">Div text content</Typography>
    </div>
  ),
};

export const SemanticPrefixes: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div className={styles.storyContainer}>
      <div className={styles.storyRow}>
        <h3>Bungee Font (bun- prefix)</h3>
        <Typography preset="heading-display">bun-heading-display</Typography>
      </div>
      <div className={styles.storyRow}>
        <h3>Montserrat Font (mst- prefix)</h3>
        <Typography preset="heading-1">mst-heading-1</Typography>
        <Typography preset="body-base">mst-body-base</Typography>
        <Typography preset="caption">mst-caption</Typography>
      </div>
    </div>
  ),
};
