import { useContext } from "react";

import { Fab, Box } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

import MainContext from "../../context";

const DrawerActionButton = () => {
  const { setDrawerOpen, mode } = useContext(MainContext);

  return (
    <Box
      sx={{
        position: "absolute",
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Fab
        aria-label="Sidebar"
        size="small"
        onClick={() => setDrawerOpen(true)}
        sx={{ backgroundColor: `${mode === "dark" ? "black" : "white"}`, m: 2 }}
      >
        <MenuRounded sx={{ fill: "#9d1a1a" }} />
      </Fab>
    </Box>
  );
};

export default DrawerActionButton;
