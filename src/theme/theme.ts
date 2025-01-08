import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light", // You can set "dark" if you prefer
  useSystemColorMode: false,
};

const styles = {
  global: {
    html: {
      height: "100%",
      overscrollBehavior: "none",
    },
  },
};

const theme = extendTheme({
  config,
  styles,
  fonts: {
    arial: `'Arial', sans-serif`,
    arialBlack: `'Arial Black', sans-serif`,
    heading: `'Arial Narrow', 'Arial Black', sans-serif`,
    body: "'Courier New', monospace",
    chalkboy: "'Chalkboy', sans-serif",
    courier: "'Courier New', monospace", 
  },
});

export default theme;
