import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import MainContext from "./../context";
import { Box, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { useContext } from "react";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const emptyCache = createCache({
  key: "muiltr",
});

const MainLayout = ({ children, mode }: { children: React.ReactNode; mode: string }) => {
  const { direction } = useContext(MainContext);
  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <CacheProvider value={direction === "rtl" ? cacheRTL : emptyCache}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <CssBaseline />
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              backgroundColor: "background.default",
              overflow: "hidden",
              "& > *:last-child": {
                marginLeft: {
                  xs: 0,
                  md: "220px",
                  lg: "240px",
                  xl: "260px",
                },
                width: {
                  xs: "100%",
                  md: "calc(100% - 220px)",
                  lg: "calc(100% - 240px)",
                  xl: "calc(100% - 260px)",
                },
                height: "100vh",
                transition: "all 0.3s ease",
              },
            }}
          >
            {children}
          </Box>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
