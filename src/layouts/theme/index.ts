import { createTheme } from "@mui/material/styles";
import { PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: PaletteColor;
    gradient: {
      primary: string;
      secondary: string;
    };
  }
  interface PaletteOptions {
    accent: PaletteColor;
    gradient: {
      primary: string;
      secondary: string;
    };
  }
}

declare module "@mui/material/LinearProgress" {
  interface LinearPropsColorOverrides {
    lilac: true;
    lightPink: true;
    yellow: true;
    blue: true;
    brown: true;
  }
}
declare module "@mui/material/Chip" {
  interface ChiprPropsColorOverrides {
    lilac: true;
    lightPink: true;
    yellow: true;
    blue: true;
    brown: true;
  }
}
//NOTE Create Custom Theme
const { palette } = createTheme();

// Color palette for modern design
const colors = {
  primary: {
    main: "#2563eb", // Modern blue
    light: "#3b82f6",
    dark: "#1d4ed8",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#7c3aed", // Modern purple
    light: "#8b5cf6",
    dark: "#6d28d9",
    contrastText: "#ffffff",
  },
  accent: {
    main: "#06b6d4", // Cyan accent
    light: "#22d3ee",
    dark: "#0891b2",
  },
  gradient: {
    primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    secondary: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accent: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
};

// Light theme
const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: colors.primary,
    secondary: colors.secondary,
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },
    divider: "#e2e8f0",
  },
  typography: {
    fontFamily: "tanha, vazir, roboto, system-ui, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
      background: colors.gradient.primary,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.875rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "12px 24px",
          fontSize: "0.9rem",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          },
        },
        contained: {
          background: colors.gradient.primary,
          color: "#ffffff",
          "&:hover": {
            background: colors.gradient.secondary,
          },
        },
        outlined: {
          border: `2px solid ${colors.primary.main}`,
          color: colors.primary.main,
          "&:hover": {
            backgroundColor: colors.primary.main,
            color: "#ffffff",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          fontWeight: 500,
          fontSize: "0.8rem",
        },
        filled: {
          background: colors.gradient.accent,
          color: "#ffffff",
        },
        outlined: {
          borderColor: colors.primary.main,
          color: colors.primary.main,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            "&:hover fieldset": {
              borderColor: colors.primary.main,
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.primary.main,
              borderWidth: "2px",
            },
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

// Dark theme
const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: colors.primary,
    secondary: colors.secondary,
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    text: {
      primary: "#f1f5f9",
      secondary: "#94a3b8",
    },
    divider: "#334155",
  },
  typography: lightTheme.typography,
  components: {
    ...lightTheme.components,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          backgroundColor: "#1e293b",
          border: "1px solid #334155",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
            borderColor: colors.primary.main,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e293b",
          backgroundImage: "none",
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export { lightTheme, darkTheme, colors };
