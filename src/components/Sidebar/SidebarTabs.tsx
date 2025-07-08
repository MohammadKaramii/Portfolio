import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { useTabsData } from "../../constants/tabsData";
import MainContext from "../../context";

const SidebarTabs = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const tabsData = useTabsData();
  const { pageNumber, handlePageNumber } = useContext(MainContext);

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        px: { xs: 0.3, sm: 0.5 },
        py: 0.5,
      }}
    >
      <List
        sx={{
          p: 0,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {tabsData.map((tab, index) => (
          <ListItem
            key={index}
            sx={{
              p: 0,
              mb: 0,
            }}
          >
            <ListItemButton
              selected={pageNumber === index}
              onClick={(event) => handlePageNumber(event, index)}
              sx={{
                borderRadius: "8px",
                px: { xs: 0.8, sm: 1 },
                py: { xs: 0.4, sm: 0.6 },
                minHeight: { xs: 28, sm: 32 },
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                mx: { xs: 0.3, sm: 0 },
                "&.Mui-selected": {
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  boxShadow: "0 2px 8px rgba(102, 126, 234, 0.3)",
                  "&:hover": {
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  },
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                  "& .MuiListItemText-primary": {
                    fontWeight: 600,
                  },
                },
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 0, 0, 0.04)",
                  transform: "translateX(2px)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: "2px",
                  backgroundColor: "primary.main",
                  opacity: pageNumber === index ? 1 : 0,
                  transition: "opacity 0.3s ease",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: { xs: 20, sm: 24 },
                  color: pageNumber === index ? "white" : "text.secondary",
                  transition: "color 0.3s ease",
                  "& svg": {
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  },
                }}
              >
                {tab.icon}
              </ListItemIcon>
              <ListItemText
                primary={t(tab.label)}
                primaryTypographyProps={{
                  variant: "body2",
                  fontWeight: pageNumber === index ? 600 : 500,
                  fontSize: { xs: "0.65rem", sm: "0.7rem" },
                  color: pageNumber === index ? "white" : "text.primary",
                  noWrap: true,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SidebarTabs;
