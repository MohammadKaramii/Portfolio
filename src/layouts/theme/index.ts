import { createTheme } from "@mui/material/styles";


//NOTE Create Custom Theme
export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main:"#363636",
    },
    secondary: {
      main:"#af1d1d",
    },
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
