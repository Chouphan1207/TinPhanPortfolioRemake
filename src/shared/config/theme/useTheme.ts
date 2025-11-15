import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeType } from "./ThemeContext";


interface useThemeReturn {
    theme?: ThemeType;
    toggleTheme: () => void;
}

export const useTheme = (): useThemeReturn => {
    const{ theme, setTheme } =  useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.NEUTRAL ? Theme.CALM ? Theme.HEAVY: Theme.NEUTRAL : Theme.NEUTRAL;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);};
    return { theme, toggleTheme};
    };