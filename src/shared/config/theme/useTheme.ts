import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    setTheme?.(nextTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme);
  };

  return { theme, toggleTheme };
};