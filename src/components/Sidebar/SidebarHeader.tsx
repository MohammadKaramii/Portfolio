import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Stack,
  Switch,
  FormControlLabel,
  Tooltip,
  useTheme,
} from "@mui/material";
import {
  Language,
  GitHub,
  LinkedIn,
  WhatsApp,
  Email,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import MainContext from "../../context";

interface Props {
  onThemeChange: () => void;
  isDarkMode: boolean;
}

const SidebarHeader = ({ onThemeChange, isDarkMode }: Props) => {
  const { t, i18n } = useTranslation();
  const { setDirection } = useContext(MainContext);
  const theme = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
    setDirection(newLang === "fa" ? "rtl" : "ltr");
  };

  const socialLinks = [
    { icon: <Email />, href: `mailto:${t("email")}`, tooltip: t("email") },
    {
      icon: <GitHub />,
      href: `https://github.com/${t("github").replace("@", "")}`,
      tooltip: "GitHub",
    },
    {
      icon: <LinkedIn />,
      href: `https://linkedin.com/in/${t("linkedin").replace("@", "")}`,
      tooltip: "LinkedIn",
    },
    {
      icon: <WhatsApp />,
      href: `https://wa.me/${t("phone").replace(/\D/g, "")}`,
      tooltip: "WhatsApp",
    },
  ];

  return (
    <Box
      sx={{
        p: 1.5,
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      {/* Avatar and Basic Info */}
      <Stack alignItems="center" spacing={1} mb={1.5}>
        <Avatar
          src="/src/assets/person.jpg"
          alt={t("name")}
          sx={{
            width: 50,
            height: 50,
            border: `2px solid ${theme.palette.primary.main}`,
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        />
        <Box textAlign="center">
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 0.25,
              fontSize: "0.9rem",
            }}
          >
            {t("name")}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.7rem" }}
          >
            {t("title")}
          </Typography>
        </Box>
      </Stack>

      {/* Social Links */}
      <Stack direction="row" justifyContent="center" spacing={0.3} mb={1.5}>
        {socialLinks.map((link, index) => (
          <Tooltip key={index} title={link.tooltip}>
            <IconButton
              component="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                width: 24,
                height: 24,
                backgroundColor: "action.hover",
                color: "text.secondary",
                transition: "all 0.3s ease",
                "& svg": {
                  fontSize: "0.9rem",
                },
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {link.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Stack>

      {/* Controls */}
      <Stack spacing={1}>
        {/* Theme Toggle */}
        <FormControlLabel
          control={
            <Switch
              checked={isDarkMode}
              onChange={onThemeChange}
              size="small"
              icon={<LightMode sx={{ fontSize: 12, color: "#fff" }} />}
              checkedIcon={<DarkMode sx={{ fontSize: 12, color: "#fff" }} />}
              sx={{
                width: 42,
                height: 24,
                padding: 0,
                "& .MuiSwitch-switchBase": {
                  padding: 0,
                  margin: 0.5,
                  transitionDuration: "300ms",
                  "&.Mui-checked": {
                    transform: "translateX(18px)",
                    color: "#fff",
                    "& + .MuiSwitch-track": {
                      backgroundColor: theme.palette.primary.main,
                      opacity: 1,
                      border: 0,
                    },
                  },
                  "&.Mui-focusVisible .MuiSwitch-thumb": {
                    color: theme.palette.primary.main,
                    border: "6px solid #fff",
                  },
                  "&.Mui-disabled .MuiSwitch-thumb": {
                    color: theme.palette.grey[100],
                  },
                  "&.Mui-disabled + .MuiSwitch-track": {
                    opacity: 0.7,
                  },
                },
                "& .MuiSwitch-thumb": {
                  boxSizing: "border-box",
                  width: 20,
                  height: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                "& .MuiSwitch-track": {
                  borderRadius: 12,
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#39393D" : "#E9E9EA",
                  opacity: 1,
                  transition: theme.transitions.create(["background-color"], {
                    duration: 500,
                  }),
                },
              }}
            />
          }
          label={
            <Typography variant="body2" sx={{ fontSize: "0.65rem" }}>
              {t("theme.dark")}
            </Typography>
          }
          labelPlacement="start"
          sx={{ m: 0, justifyContent: "space-between" }}
        />

        {/* Language Toggle */}
        <Box
          onClick={toggleLanguage}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 0.5,
            borderRadius: "6px",
            backgroundColor: "action.hover",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
            },
          }}
        >
          <Typography variant="body2" sx={{ fontSize: "0.65rem" }}>
            {t("theme.language")}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
            <Language sx={{ fontSize: 12 }} />
            <Typography
              variant="body2"
              sx={{ fontSize: "0.6rem", fontWeight: 600 }}
            >
              {i18n.language.toUpperCase()}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default SidebarHeader;
