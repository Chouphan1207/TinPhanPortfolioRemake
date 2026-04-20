import CircleIcon from "@/shared/assets/icons/Circle.svg?react";

import { useTheme } from "@/shared/config";
import { AppIcon, Button } from "@/shared/ui";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button theme="tertiary" onClick={toggleTheme}>
      <AppIcon Icon={CircleIcon} filled />
    </Button>
  );
};
