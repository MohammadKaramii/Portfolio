import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SidebarHeader, SidebarTabs } from ".";
import { useContext } from "react";
import MainContext from "../../context";

import ActionButtons from "../ActionButtons";

const SidebarContent = () => {
  const { mode, handleThemeChange } = useContext(MainContext);

  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 2,
      }}
    >
      <ActionButtons />
      <SidebarHeader onThemeChange={handleThemeChange} isDarkMode={mode === "dark"} />

      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

      <SidebarTabs />
    </Box>
  );
};

export default SidebarContent;
