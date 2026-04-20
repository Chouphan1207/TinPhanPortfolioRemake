import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, type ThemeType } from "./ThemeContext";


interface useThemeReturn {
    theme?: ThemeType;
    toggleTheme: () => void;
}

export const useTheme = (): useThemeReturn => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme?.('default');
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'default');
  };

  return { theme, toggleTheme };
};