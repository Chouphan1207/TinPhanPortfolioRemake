import type { Preview } from "@storybook/react-vite";

import {
  RouterDecorator,
  LanguageDecorator,
  ThemeDecorator,
} from "../src/shared/config/storybook";

import "../src/app/styles/index.scss";

const preview: Preview = {
  globalTypes: {
    locale: {
      name: "Locale",
      description: " App locale",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "vi", title: "Vietnamese" },
        ],
        dynamicTitle: true,
      },
      defaultValue: "en",
    },
    theme: {
      name: "Theme",
      description: "Global theme for components",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "light-theme", title: "Light" },
          { value: "dark-theme", title: "Dark" },
        ],
        dynamicTitle: true,
      },
      defaultValue: "light-theme",
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    ThemeDecorator,
    RouterDecorator,
    // LanguageDecorator, // Temporarily removed for debugging
  ],
};

export default preview;