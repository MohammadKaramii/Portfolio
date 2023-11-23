import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    lilac: any;
    lightPink: any;
    yellow: any;
    blue: any;
    black: any;
  }
  interface PaletteOptions {
    lilac: any;
    lightPink: any;
    yellow: any;
    blue: any;
    brown: any;
  }
}

declare module "@mui/material/LinearProgress" {
  interface LinearPropsColorOverrides {
    lilac: true;
    lightPink: true;
    yellow: true;
    blue: true;
    brown: true;
  }
}
declare module "@mui/material/Chip" {
  interface ChiprPropsColorOverrides {
    lilac: true;
    lightPink: true;
    yellow: true;
    blue: true;
    brown: true;
  }
}
//NOTE Create Custom Theme
const { palette } = createTheme();
export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#af1d1d",
    },
    secondary: {
      main: "#363636",
    },
    lilac: palette.augmentColor({
      color: {
        main: "#b8c0ff",
      },
    }),
    yellow: palette.augmentColor({
      color: {
        main: "#Facd11",
      },
    }),
    lightPink: palette.augmentColor({
      color: {
        main: "#ffc8dd",
      },
    }),
    blue: palette.augmentColor({
      color: {
        main: "#0096c7",
      },
    }),
    brown: palette.augmentColor({
      color: {
        main: "#ca6702",
      },
    }),
  },
  typography: {
    fontFamily: "vazir, roboto",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
