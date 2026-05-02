import type { Decorator } from "@storybook/react-vite";
import { useEffect } from "react";

export const ThemeDecorator: Decorator = (Story, context) => {
  useEffect(() => {
    // Apply theme class to body element
    document.body.className = context.globals.theme || 'light-theme';
    
    // Cleanup on unmount
    return () => {
      document.body.className = 'light-theme';
    };
  }, [context.globals.theme]);

  return <Story />;
};
