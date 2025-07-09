import { Box } from "@mui/material";
import SidebarHeader from "./SidebarHeader";
import SidebarTabs from "./SidebarTabs";
import { useState } from "react";

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const handleThemeChange = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");

    window.dispatchEvent(
      new CustomEvent("themeChange", {
        detail: { theme: newMode ? "dark" : "light" },
      }),
    );
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SidebarHeader onThemeChange={handleThemeChange} isDarkMode={isDarkMode} />
      <SidebarTabs />
    </Box>
  );
};

export default Sidebar;
