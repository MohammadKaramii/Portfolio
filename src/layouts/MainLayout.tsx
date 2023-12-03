// export default MainLayout;
import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import MainContext from "./../context";
import Grid from "@mui/material/Unstable_Grid2";
import { lightTheme, darkTheme } from "./theme";
import { useContext } from "react";

//NOTE Create RTL Cache
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const emptyCache = createCache({
  key: "muiltr",
});


const MainLayout = ({ children, mode }: { children: React.ReactNode, mode: string }) => {
  const { direction} = useContext(MainContext);
  const theme = mode === "dark" ? darkTheme : lightTheme;
  
  return (
    <CacheProvider value={direction === "rtl" ? cacheRTL : emptyCache}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          {/* Grid System */}
          <Grid container sx={{ height: "100vh" }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
