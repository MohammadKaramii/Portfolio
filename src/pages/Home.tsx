import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  useTheme,
  alpha,
  Chip,
  IconButton,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  KeyboardArrowDown,
  Download,
  Work,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import MainContext from "../context";

const Home = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { pageNumber, handlePageNumber, direction } = useContext(MainContext);
  console.log(direction);
  const socialLinks = [
    {
      icon: <Email />,
      href: `mailto:${t("email")}`,
      label: "Email",
    },
    {
      icon: <GitHub />,
      href: `https://github.com/${t("github").replace("@", "")}`,
      label: "GitHub",
    },
    {
      icon: <LinkedIn />,
      href: `https://linkedin.com/in/${t("linkedin").replace("@", "")}`,
      label: "LinkedIn",
    },
  ];

  const scrollToNext = () => {
    // Navigate to the next page (About page = index 1)
    if (pageNumber === 0) {
      // Currently on Home page - navigate to About page
      handlePageNumber({} as React.SyntheticEvent, 1);
    }
  };

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Put your CV file in public/cv.pdf
    link.download = "Mohammad_Karami_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = () => {
    // Scroll to contact section or open email
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: open email
      window.location.href = `mailto:${t(
        "email"
      )}?subject=Work Opportunity&body=Hi Mohammad, I'm interested in discussing a work opportunity with you.`;
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("meta.home-title")}</title>
      </Helmet>

      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
              : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Animated background elements */}
        <Box
          sx={{
            position: "absolute",
            width: "200%",
            height: "200%",
            background:
              theme.palette.mode === "dark"
                ? "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)"
                : "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)",
            animation: "float 20s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
              "33%": { transform: "translate(-30px, -30px) rotate(120deg)" },
              "66%": { transform: "translate(30px, -60px) rotate(240deg)" },
            },
          }}
        />

        <Container maxWidth="lg" sx={{ zIndex: 1 }}>
          {/* Content Section - Centered */}
          <Box sx={{ textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "text.secondary",
                  mb: 1,
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                }}
              >
                {t("home.greeting")}
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: 800,
                  mb: 2,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("name")}
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  fontWeight: 600,
                  color: "primary.main",
                  mb: 3,
                }}
              >
                {t("home.description")}
              </Typography>

              <Typography
                variant="body1"
                dir={direction}
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  color: "text.secondary",
                  mb: 4,
                  maxWidth: "600px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                {t("home.bio")}
              </Typography>

              {/* Social Links */}
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ mb: 4 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <IconButton
                      component="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        color: "primary.main",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "white",
                          transform: "translateY(-3px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>

              {/* Action Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 3, sm: 6 }}
                justifyContent="center"
                alignItems="center"
                sx={{
                  mb: 6,
                  gap: { xs: 3, sm: 6 },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleDownloadCV}
                  sx={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    px: 5,
                    py: 2,
                    fontSize: "1.1rem",
                    borderRadius: "12px",
                    minWidth: { xs: "220px", sm: "200px" },
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #5a6fd8 0%, #6d4190 100%)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Download sx={{ fontSize: "1.2rem" }} />
                  {t("home.download-cv")}
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleHireMe}
                  sx={{
                    borderColor: "primary.main",
                    borderWidth: 2,
                    color: "primary.main",
                    px: 5,
                    py: 2,
                    fontSize: "1.1rem",
                    borderRadius: "12px",
                    minWidth: { xs: "220px", sm: "200px" },
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                      borderWidth: 2,
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Work sx={{ fontSize: "1.2rem" }} />
                  {t("home.hire-me")}
                </Button>
              </Stack>

              {/* Skills Badge */}
              <Box sx={{ mb: 4 }}>
                <Chip
                  label={t("home.available")}
                  sx={{
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#1e3a33" : "#e6f7ff",
                    color:
                      theme.palette.mode === "dark" ? "#00ff88" : "#0066cc",
                    border: `2px solid ${
                      theme.palette.mode === "dark" ? "#00ff88" : "#0066cc"
                    }`,
                    fontWeight: 700,
                    px: 3,
                    py: 1.5,
                    fontSize: "1rem",
                    "& .MuiChip-label": {
                      fontSize: "1rem",
                      fontWeight: 700,
                    },
                  }}
                />
              </Box>
            </motion.div>
          </Box>
        </Container>

        {/* Navigate to Next Page Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
            zIndex: 1000,
          }}
          onClick={scrollToNext}
        >
          <KeyboardArrowDown
            sx={{
              fontSize: 32,
              color: "primary.main",
              "&:hover": {
                color: "primary.dark",
              },
              transition: "color 0.3s ease",
            }}
          />
        </motion.div>
      </Box>
    </>
  );
};

export default Home;
