import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import SidebarContainer from "./SidebarContainer";
import PagesContainer from "./PagesContainer";
import { Sidebar } from "../components/Sidebar";
import MainContext from "../context";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Menu } from "@mui/icons-material";

// Import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const AppContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [direction, setDirection] = useState<"ltr" | "rtl">(() => {
    const savedLang = localStorage.getItem("i18nextLng") || "en";
    return savedLang === "fa" ? "rtl" : "ltr";
  });

  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Pages array
  const pages = [
    <Home key="home" />,
    <About key="about" />,
    <Skills key="skills" />,
    <Experience key="experience" />,
    <Projects key="projects" />,
    <Contact key="contact" />,
  ];

  // Listen for theme changes
  useEffect(() => {
    const handleThemeChange = (event: CustomEvent) => {
      setMode(event.detail.theme);
    };

    window.addEventListener("themeChange", handleThemeChange as EventListener);

    return () => {
      window.removeEventListener(
        "themeChange",
        handleThemeChange as EventListener
      );
    };
  }, []);

  const handlePageNumber = (_: React.SyntheticEvent, newValue: number) => {
    setPageNumber(newValue);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const contextValue = {
    pageNumber,
    handlePageNumber,
    drawerOpen,
    setDrawerOpen,
    direction,
    setDirection,
    mode,
    setMode,
  };

  return (
    <MainContext.Provider value={contextValue}>
      <MainLayout mode={mode}>
        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{
              position: "fixed",
              top: 16,
              left: 16,
              zIndex: 1300,
              backgroundColor: "background.paper",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
          >
            <Menu />
          </IconButton>
        )}

        {/* Mobile overlay for sidebar */}
        {drawerOpen && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1100,
              display: { xs: "block", md: "none" },
            }}
            onClick={() => setDrawerOpen(false)}
          />
        )}

        {/* Sidebar */}
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>

        {/* Main content */}
        <PagesContainer>{pages[pageNumber]}</PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
};

export default AppContainer;
