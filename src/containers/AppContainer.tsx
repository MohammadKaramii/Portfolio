import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/Sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { Home, About, Skills } from "../pages";
function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState<string>("");
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
}, []);

  useEffect(() => {
    if (isMdUp) {
        setDrawerOpen(false);
    }
}, [isMdUp]);

const handleThemeChange = () => {
  setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
};
  const handlePageNumber = (_event: React.SyntheticEvent, newPage: number) => {
    setPageNumber(newPage);
  };

  return (
    <MainContext.Provider
      value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen,handleThemeChange, }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <PagesContainer>
          <Page pageNumber={pageNumber} index={0}>
            <Home helmetTitle="Mohammad Karami's Portfolio" />
          </Page>
          <Page pageNumber={pageNumber} index={1}>
            <About helmetTitle="Portfolio | About" />
          </Page>
          <Page pageNumber={pageNumber} index={2}>
            <Skills helmetTitle="Portfolio | Skills" />
          </Page>
          <Page pageNumber={pageNumber} index={3}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              نمونه کارها
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={4}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              ارتباط با من
            </Typography>
          </Page>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
