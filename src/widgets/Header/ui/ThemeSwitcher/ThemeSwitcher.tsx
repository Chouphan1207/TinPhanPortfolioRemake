import CircleIcon from "@/shared/assets/icons/Circle.svg?react";

import { useTheme } from "@/shared/config";
import { Button } from "@/shared/ui";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button theme="tertiary" onClick={toggleTheme}>
      <CircleIcon 
        style={{ 
          fill: "var(--text-color)", 
          width: 24, 
          height: 24 
        }} 
      />
    </Button>
  );
};
