import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from "@/shared/config/theme/ThemeContext";
import type { ThemeType } from "@/shared/config/theme/ThemeContext";
import { useEffect, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) || "default";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
