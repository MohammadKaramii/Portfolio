import { ThemeProvider, createTheme } from '@mui/material/styles'
import rtlPlugin from "stylis-plugin-rtl"
import { CacheProvider } from '@emotion/react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import createCache from "@emotion/cache"
import {prefixer} from "stylis"
import Header from './components/ui/Header'
import './App.css'


function App() {
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazir, roboto",
  },
}
)

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin]
})


  return (
   <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
<title>Mohammad Karami Portfolio</title>
        </Helmet>
        <Header />
      </HelmetProvider>
    </ThemeProvider>
   </CacheProvider>
   
  )
}

export default App
