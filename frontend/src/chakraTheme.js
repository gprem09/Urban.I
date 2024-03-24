import { extendTheme } from "@chakra-ui/react";

// Dark theme configuration
const colors = {
  brand: {
    deep: `#ECF86E`,
    700: `#F6A8D4`,
    500: `#FB5680`,
    400: `#F87CC7`,
    300: `#FAB9D8`,
  },
  lgray: `#F6F6F6`,
  dgray: `#C4C7C8`,

  secondary: {
    700: `#20A1A2`,
    500: `#52DEEB`,
    300: `#78F3FE`,
  },
  transparent: `#00000000`,
  warning: `#FE8311`,
};
const components = {
  Select: {
    variants: {
      noStyles: {
        background: `none`,
        padding: `0`,
        height: `auto`,
        position: `relative`,
        alignItems: `auto`,
        whiteSpace: `auto`,
        textAlign: `left`,
        fontWeight: `auto`,
        lineHeight: `auto`,
      },
      filled: {
        background: `#F6F6F6`,
        fontFamily: `Montserrat`,
        color: `black`,
        borderRadius: `100px`,
      },
    },
  },
  Button: {
    variants: {
      noStyles: {
        background: `none`,
        padding: `0`,
        height: `auto`,
        position: `relative`,
        alignItems: `auto`,
        whiteSpace: `auto`,
        textAlign: `left`,
        fontWeight: `auto`,
        lineHeight: `auto`,
      },
      white: {
        background: `white`,
        fontFamily: `Montserrat`,
        color: `black`,
        borderRadius: `100px`,
      },
      lgrey: {
        background: `#F6F6F6`,
        fontWeight: `500`,
        letterSpacing: `-0.04em`,
        fontFamily: `Montserrat`,
        color: `black`,
        borderRadius: `100px`,
      },
      boutline: {
        background: `white`,
        fontWeight: `500`,
        letterSpacing: `-0.04em`,
        fontFamily: `Montserrat`,
        color: `black`,
        border: `1px solid #C4C7C8`,
        borderRadius: `100px`,
      },
      woutline: {
        background: `none`,
        fontWeight: `500`,
        letterSpacing: `-0.04em`,
        fontFamily: `Montserrat`,
        color: `white`,
        border: `1px solid white`,
        borderRadius: `100px`,
      },
      yellow: {
        background: `#ECF86E`,
        fontFamily: `Montserrat`,
        color: `black`,
        borderRadius: `100px`,
      },
    },
  },
  Text: {
    baseStyle: {
      color: "black", // Your desired text color
      fontFamily: `Manrope`,
      fontSize: `1rem`,
      letterSpacing: "-0.02em",
    },
  },
  Box: {
    baseStyle: {
      background: `white`,
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: `Montserrat`,
      fontWeight: `700`,
      color: "black",
      letterSpacing: `-0.01em`,
    },
  },
};

export const chakraTheme = extendTheme({
  colors,
  config: {
    initialColorMode: `dark`,
    useSystemColorMode: false,
  },
  components,
  styles: {
    global: {
      body: {
        fontFamily: "Manrope",
        bg: "#FFFFFF",
        color: "black",
      },
    },
  },
});
