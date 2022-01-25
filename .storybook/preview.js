import { ThemeProvider } from "styled-components";
import { DarkThemeConfig, LightThemeConfig } from "../src/styles";

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider
        theme={
          localStorage.getItem("theme") === "light"
            ? LightThemeConfig
            : DarkThemeConfig
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
