import { theme } from "antd";

export type TTheme = "Light" | "Dark";

const { darkAlgorithm, defaultAlgorithm } = theme;

export const EThemeAlgorithm = {
  Dark: darkAlgorithm,
  Light: defaultAlgorithm,
};
