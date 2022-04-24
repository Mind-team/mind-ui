import { createContext } from "react";
import {IThemeConfig, ThemeName} from "./theme.provider";

export interface IThemeContext {
  config: IThemeConfig,
  name: ThemeName,
  toggleTheme: (theme?: ThemeName) => void,
}

// @ts-ignore
export const ThemeContext = createContext();
