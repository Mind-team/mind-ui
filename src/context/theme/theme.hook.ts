import {useContext} from "react";
import {IThemeContext, ThemeContext} from "./theme.context";

export const useThemeContext = (): IThemeContext =>
  useContext(ThemeContext) as IThemeContext;
