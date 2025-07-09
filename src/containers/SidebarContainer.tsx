import { Box, Drawer, useTheme, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import MainContext from "../context";

const SidebarContainer = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);

  const sidebarContent = (
    <Box
      sx={{
        width: {
          xs: "100vw",
          sm: 240,
          md: 220,
        },
        maxWidth: { xs: "100vw", sm: 280, md: 240 },
        height: "100%",
        backgroundColor: "background.paper",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: { xs: "75vw", sm: 240 },
            maxWidth: 280,
            backgroundColor: "background.paper",
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  return (
    <Box
      sx={{
        width: {
          md: 220,
          lg: 240,
          xl: 260,
        },
        height: "100vh",
        minHeight: "100vh",
        backgroundColor: "background.paper",
        borderRight: `1px solid ${theme.palette.divider}`,
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1200,
        overflow: "hidden",
        boxShadow: theme.palette.mode === "dark" ? "4px 0 20px rgba(0,0,0,0.3)" : "4px 0 20px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </Box>
  );
};

export default SidebarContainer;
