import CircleIcon from "@/shared/assets/icons/Circle.svg?react";

import { useTheme } from "@/shared/config";
import { AppIcon, Button } from "@/shared/ui";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  // Define a color for each theme
  const themeColors: Record<string, string> = {
    "light-theme": "#79B4B7", // Amber
    "dark-theme": "#1B3C53", // Sky blue
    // Add more themes and colors as needed
  };

  const iconColor = themeColors[theme]; // Default gray

  return (
    <Button theme="tertiary" onClick={toggleTheme}>
      <CircleIcon style={{ fill: iconColor, width: 24, height: 24 }} />
    </Button>
  );
};
