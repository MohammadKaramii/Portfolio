import { createTheme } from "@mui/material/styles";
import { PaletteColor } from '@mui/material/styles';
declare module "@mui/material/styles" {
  interface Palette {
    lilac: PaletteColor;
    lightPink: PaletteColor;
    yellow: PaletteColor;
    blue: PaletteColor;
    brown: PaletteColor;
  }
  interface PaletteOptions {
    lilac: PaletteColor;
    lightPink: PaletteColor;
    yellow: PaletteColor;
    blue: PaletteColor;
    brown: PaletteColor;
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
export const darkTheme = createTheme({
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
    fontFamily: "tanha, vazir, roboto",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#9d1a1a",
    },
    secondary: {
      main: "#868686",
    },
    lilac: palette.augmentColor({
      color: {
        main: "#4a5fff",
      },
    }),
    yellow: palette.augmentColor({
      color: {
        main: "#deb405",
      },
    }),
    lightPink: palette.augmentColor({
      color: {
        main: "#ff84b3",
      },
    }),
    blue: palette.augmentColor({
      color: {
        main: "#006d91",
      },
    }),
    brown: palette.augmentColor({
      color: {
        main: "#934b01",
      },
    }),
  },
  typography: {
    fontFamily: "tanha, vazir, roboto",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
