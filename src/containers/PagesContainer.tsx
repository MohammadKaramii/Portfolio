import { Box, useTheme } from "@mui/material";

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: 1,
        marginLeft: { xs: 0, md: "220px", lg: "240px", xl: "260px" }, // Match sidebar widths
        height: "100vh", // Fixed height to create overflow
        backgroundColor: "background.default",
        overflow: "auto",
        scrollBehavior: "smooth",
        // Custom scrollbar for main content area only
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: theme.palette.mode === "dark" ? "#1e293b" : "#f1f5f9",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "4px",
          border: `1px solid ${
            theme.palette.mode === "dark" ? "#334155" : "#e2e8f0"
          }`,
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "linear-gradient(135deg, #5a6fd8 0%, #6d4190 100%)",
          borderColor: theme.palette.mode === "dark" ? "#475569" : "#cbd5e1",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ContentContainer;
