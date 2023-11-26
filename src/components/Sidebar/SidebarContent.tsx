import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SidebarHeader, SidebarTabs } from ".";

import ActionButtons from "../ActionButtons";

const SidebarContent = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 2,
      }}
    >
      <ActionButtons />
      <SidebarHeader />

      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

      <SidebarTabs />
    </Box>
  );
};

export default SidebarContent;
