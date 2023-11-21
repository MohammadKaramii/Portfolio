import {  createTheme } from '@mui/material/styles'
export const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "vazir, roboto",
    },
    
    palette :{
        mode : "dark",
        primary: {
       main:"#363636"
        },
        secondary: {
         main:"#af1d1d"
        }
    }
  }
  )