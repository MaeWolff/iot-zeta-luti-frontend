import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;

      secondary: string;
      secondaryLight: string;

      grey: string;
      black: string;
    };
  }
}
