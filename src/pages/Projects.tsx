import { GitHub, Launch } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const projects = [
    {
      title: t("projects.musicWebApp.title"),
      description: t("projects.musicWebApp.description"),
      image: "/MusicWebApp.jpg",
      technologies: ["TypeScript", "React", "NextJs", "TailwindCSS", "ReactQuery", "Zustand"],
      demoUrl: "https://music-web-app-2024.vercel.app/",
      codeUrl: "https://github.com/MohammadKaramii/Music-web-app",
    },
    {
      title: t("projects.twitterClone.title"),
      description: t("projects.twitterClone.description"),
      image: "/TwitterClone.jpg",
      technologies: ["React", "TypeScript", "TailwindCSS", "NextJs", "NextAuth"],
      demoUrl: "https://twitter-clone2023.vercel.app/",
      codeUrl: "https://github.com/MohammadKaramii/Twitter-clone",
    },
    {
      title: t("projects.splitwiseApp.title"),
      description: t("projects.splitwiseApp.description"),
      image: "/Splitwise.jpg",
      technologies: ["React", "TypeScript", "Redux", "Supabase", "CSS"],
      demoUrl: "https://splitwise2024.vercel.app/",
      codeUrl: "https://github.com/MohammadKaramii/Splitwise-clone",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("meta.projects-title")}</title>
      </Helmet>

      <Box
        sx={{
          minHeight: "100vh",
          py: { xs: 3, md: 6 },
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
              : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                mb: 2,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
              }}
            >
              {t("projects.title")}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                mb: 6,
                color: "text.secondary",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              {t("projects.subtitle")}
            </Typography>
          </motion.div>

          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background:
                        theme.palette.mode === "dark"
                          ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                          : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                      border: `1px solid ${theme.palette.divider}`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />

                    <CardContent sx={{ flex: 1, p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: "text.primary",
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          mb: 3,
                          color: "text.secondary",
                          lineHeight: 1.6,
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                          {t("projects.technologies")}
                        </Typography>
                        <Stack
                          direction="row"
                          spacing={1}
                          flexWrap="wrap"
                          sx={{
                            gap: 0.5,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {project.technologies.map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: "primary.main",
                                color: "white",
                                fontSize: "0.75rem",
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>

                      <Stack direction="row" spacing={2} sx={{ mt: "auto" }}>
                        <Button
                          component="a"
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          startIcon={<Launch />}
                          size="small"
                          sx={{
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            "&:hover": {
                              background: "linear-gradient(135deg, #5a6fd8 0%, #6d4190 100%)",
                            },
                          }}
                        >
                          Demo
                        </Button>
                        <IconButton
                          component="a"
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            border: `1px solid ${theme.palette.divider}`,
                            "&:hover": {
                              backgroundColor: "primary.main",
                              color: "white",
                            },
                          }}
                        >
                          <GitHub />
                        </IconButton>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Projects;
