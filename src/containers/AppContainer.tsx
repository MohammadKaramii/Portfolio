import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useMediaQuery, Direction } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/Sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../components/pages/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { Home, About, Skills, Projects, Contact } from "../pages";
import useTranslationSetup from "../hooks/useTranslationSetup";





function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState<string>("");
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [language, setLanguage] = useState("fa");
  const [direction, setDirection] = useState<Direction>("rtl" as Direction);
  const { t } = useTranslationSetup();
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

  const handleChangeLanguage = () => {
    setLanguage((prevLang) => (prevLang === "fa" ? "en" : "fa"))
    setDirection(language === "fa" ? "ltr" : "rtl");
  };

  useEffect(() => {
    document.dir = direction;
    
  }, [direction]);


  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        drawerOpen,
        setDrawerOpen,
        handleThemeChange,
        handleChangeLanguage, 
        language,
        direction,
        mode
      }}
    >
      <MainLayout mode={mode}>
     
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <PagesContainer>
          <Page pageNumber={pageNumber} index={0}>
            <Home helmetTitle={t("home-title")} />
          </Page>
          <Page pageNumber={pageNumber} index={1}>
            <About helmetTitle={t("about-title")} />
          </Page>
          <Page pageNumber={pageNumber} index={2}>
            <Skills helmetTitle={t("skills-title")} />
          </Page>
          <Page pageNumber={pageNumber} index={3}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              <Projects helmetTitle={t("project-title")} />
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={4}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              <Contact helmetTitle={t("contact-title")} />
            </Typography>
          </Page>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer
