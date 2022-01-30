import { DarkThemeConfig, IThemeConfig, LightThemeConfig, ThemeName } from "../styles";

export const useTheme = (): IThemeConfig => {
  return localStorage.getItem("theme") === ThemeName.Dark
    ? DarkThemeConfig
    : LightThemeConfig;
};
