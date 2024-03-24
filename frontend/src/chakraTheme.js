import { extendTheme } from "@chakra-ui/react";

// Dark theme configuration
const colors = {
  brand: {
    deep: `#ECF86E`,
    bold: `#DFF124`,
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
        letterSpacing: "-0.04em",
        color: `black`,
        borderRadius: `100px`,
      },
    },
  },
  Button: {
    variants: {
      noStyles: {
        background: `none`,
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
        padding: `1.4rem`,
        letterSpacing: "-0.04em",
        borderRadius: `100px`,
        transition: "background-color 0.3s ease-in-out", // Add transition property
        "&:hover": {
          background: `#DFF124`,
        },
      },
      lgrey: {
        padding: `1.4rem`,
        background: `#F6F6F6`,
        fontWeight: `500`,
        letterSpacing: `-0.04em`,
        fontFamily: `Montserrat`,
        color: `black`,
        borderRadius: `100px`,
        "&:hover": {
          background: `#DFF124`,
        },
      },
      boutline: {
        padding: `1.4rem`,
        background: `white`,
        fontWeight: `500`,
        letterSpacing: `-0.04em`,
        fontFamily: `Montserrat`,
        color: `black`,
        border: `1px solid #C4C7C8`,
        borderRadius: `100px`,
        "&:hover": {
          // Corrected hover syntax
          background: `#DFF124`, // Change background color on hover
          border: `white`,
        },
      },
      woutline: {
        padding: `1.4rem`,
        background: `none`,
        fontWeight: `500`,
        letterSpacing: `-0.04em`,
        fontFamily: `Montserrat`,
        color: `white`,
        border: `1px solid white`,
        borderRadius: `100px`,
        "&:hover": {
          // Corrected hover syntax
          background: `#DFF124`, // Change background color on hover
          color: `black`,
        },
      },
      yellow: {
        padding: `1.4rem`,
        background: `#ECF86E`,
        fontFamily: `Montserrat`,
        color: `black`,
        borderRadius: `100px`,
        "&:hover": {
          background: `black`,
          color: `white`,
        },
      },
    },
  },
  Text: {
    baseStyle: {
      color: "black", // Your desired text color
      fontFamily: `Manrope`,
      fontSize: `1rem`,
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
      fontWeight: `500`,
      letterSpacing: "-0.04em",
      color: "black",
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
