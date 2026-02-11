import type { Decorator } from "@storybook/react-vite";

export const ThemeDecorator: Decorator = (Story, context) => {
  return (
    <div className={context.globals.theme}>
      <Story />
    </div>
  );
};
