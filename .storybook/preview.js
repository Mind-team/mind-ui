import { ThemeProvider } from "styled-components";
import { DarkThemeConfig, LightThemeConfig } from "../src";

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider
        theme={
          localStorage.getItem("theme") === "dark"
            ? DarkThemeConfig
            : LightThemeConfig
        }
      >
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
