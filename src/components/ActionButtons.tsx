import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Fab } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";

import MainContext from "../context";
import useTranslationSetup from "../hooks/useTranslationSetup";

const ActionButtons = () => {
  const { t, language } = useTranslationSetup();
  const theme = useTheme();
  const { handleThemeChange, handleChangeLanguage, mode } = useContext(MainContext);

  return (
    <Box
      sx={{
        position: "flex",
        display: {
          xs: "none",
          md: "flex",
        },
        mb: 2,
        justifyContent: "space-between",
      }}
    >
      <Fab
        aria-label="ThemeChanger"
        variant="extended"
        size="small"
        color="secondary"
        onClick={handleThemeChange}
        sx={{ ml: 1, color: `${mode === "dark" ? "white" : "black"}` }}
      >
        {theme.palette.mode === "dark" ? <WbSunnyOutlined sx={{ mr: 1 }} /> : <NightlightOutlined sx={{ mr: 1 }} />}
        {theme.palette.mode === "dark" ? t("dark") : t("light")}
      </Fab>

      <Fab
        aria-label="LanguageChanger"
        variant="extended"
        size="small"
        color="secondary"
        onClick={handleChangeLanguage}
        sx={{ mr: 1, color: `${mode === "dark" ? "white" : "black"}` }}
      >
        {language === "fa" ? "fa" : "en"}
      </Fab>
    </Box>
  );
};

export default ActionButtons;
