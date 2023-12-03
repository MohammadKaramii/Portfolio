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
      main: "#9d1a1a",
    },
    secondary: {
      main: "#363636",
    },
    lilac: palette.augmentColor({
      color: {
        main: "#2F3775",
      },
    }),
    yellow: palette.augmentColor({
      color: {
        main: "#504002",
      },
    }),
    lightPink: palette.augmentColor({
      color: {
        main: "#850033",
      },
    }),
    blue: palette.augmentColor({
      color: {
        main: "#005853",
      },
    }),
    brown: palette.augmentColor({
      color: {
        main: "#392714",
      },
    }),
    info: {
      main: "#00455C",
    },
    error:{
      main: "#540600"
    },
    warning:{
      main: "#5C3700"
    },    
    success:{
      main: "#214A23"
    },
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
  
},
)
export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#af1d1d",
    },
    secondary: {
      main: "#868686",
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
        main: "#96F0D9",
      },
    }),
    brown: palette.augmentColor({
      color: {
        main: "#E2C2A2",
      },
    }),
    info: {
      main: "#89D6F0"
    },
    error:{
      main: "#DAAAAA"
    },   
     warning:{
      main: "#FD9D4E"
    },    
    success:{
      main: "#CFE9D0"
    },
    
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
