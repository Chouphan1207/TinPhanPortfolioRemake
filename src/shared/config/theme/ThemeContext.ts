import { createContext } from "react";


export type ThemeType = string;

export interface ThemeContextProps {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light-theme',
    setTheme: () => {},
});