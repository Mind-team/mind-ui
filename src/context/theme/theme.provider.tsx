import React, {FC, useState} from "react";
import {ThemeContext} from "styled-components";
import {DarkThemeConfig, LightThemeConfig} from "../../styles";

export interface IThemeConfig {
  accent: string;
  background: string;
  header: string;
  plainText: string;
  widgetBackground: string;
}

export enum ThemeName {
  Light = "Light",
  Dark = "Dark",
}

const identityTheme = (): ThemeName => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme") === ThemeName.Dark
      ? ThemeName.Dark
      : ThemeName.Light
  }
  return ThemeName.Light;
}

const identityThemeConfig = (): IThemeConfig => {
  const themeName = identityTheme();
  switch (themeName) {
    case ThemeName.Light:
      return LightThemeConfig;
    case ThemeName.Dark:
      return DarkThemeConfig;
    default:
      return LightThemeConfig;
  }
}

export const ThemeProvider: FC = ({ children }) => {
  const [name, setName] = useState<ThemeName>(identityTheme());
  const [config, setConfig] = useState<IThemeConfig>(identityThemeConfig());

  const toggleTheme = (themeName?: ThemeName) => {
    if (!themeName) {
      themeName = name === ThemeName.Light ? ThemeName.Dark : ThemeName.Light;
    }
    setName(themeName);
    if (themeName === ThemeName.Light) {
      setConfig(LightThemeConfig)
    } else {
      setConfig(DarkThemeConfig);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ name, config, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
