import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Skills = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const skillCategories = [
    {
      title: t("skills.frontend-title"),
      skills: [
        {
          name: "React",
          years: t("skills.plus-three") + " " + t("skills.years"),
        },
        {
          name: "TypeScript",
          years: t("skills.plus-two") + " " + t("skills.years"),
        },
        {
          name: "Next.js",
          years: t("skills.plus-two") + " " + t("skills.years"),
        },
        {
          name: "JavaScript (ES6+)",
          years: t("skills.plus-four") + " " + t("skills.years"),
        },
        {
          name: "HTML5 & CSS3",
          years: t("skills.plus-five") + " " + t("skills.years"),
        },
        {
          name: "Material-UI",
          years: t("skills.plus-two") + " " + t("skills.years"),
        },
        {
          name: "Tailwind CSS",
          years: t("skills.plus-one") + " " + t("skills.years"),
        },
        {
          name: "Sass/SCSS",
          years: t("skills.plus-two") + " " + t("skills.years"),
        },
      ],
      color: "primary",
    },
    {
      title: t("skills.tools-technologies"),
      skills: [
        {
          name: "Git & GitHub",
          years: t("skills.plus-three") + " " + t("skills.years"),
        },
        {
          name: "Redux Toolkit",
          years: t("skills.plus-two") + " " + t("skills.years"),
        },
        { name: "Vite", years: t("skills.plus-one") + " " + t("skills.years") },
        {
          name: "Webpack",
          years: t("skills.plus-one") + " " + t("skills.years"),
        },
        {
          name: "React Query",
          years: t("skills.plus-one") + " " + t("skills.years"),
        },
        {
          name: "Zustand",
          years: t("skills.plus-one") + " " + t("skills.years"),
        },
      ],
      color: "secondary",
    },
    {
      title: t("skills.development-concepts"),
      skills: [
        {
          name: "Responsive Design",
          years: t("skills.plus-four") + " " + t("skills.years"),
        },
        {
          name: "REST APIs",
          years: t("skills.plus-three") + " " + t("skills.years"),
        },
        {
          name: "Performance Optimization",
          years: t("skills.plus-two") + " " + t("skills.years"),
        },
        {
          name: "Testing (Jest/Vitest)",
          years: t("skills.plus-one") + " " + t("skills.years"),
        },
        {
          name: "Progressive Web Apps",
          years: t("skills.plus-one") + " " + t("skills.years"),
        },
        {
          name: "Agile Development",
          years: t("skills.plus-two") + " " + t("skills.years"),
        },
      ],
      color: "info",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("meta.skills-title")}</title>
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
              {t("skills.title")}
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
              {t("skills.subtitle")}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {skillCategories.map((category, categoryIndex) => (
              <Grid item xs={12} md={6} lg={4} key={categoryIndex}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      background:
                        theme.palette.mode === "dark"
                          ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                          : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                      border: `1px solid ${theme.palette.divider}`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 3,
                          fontWeight: 600,
                          color: `${category.color}.main`,
                          textAlign: "center",
                        }}
                      >
                        {category.title}
                      </Typography>

                      <Stack spacing={2}>
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                p: 2,
                                borderRadius: 2,
                                background:
                                  theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)",
                                border: `1px solid ${theme.palette.divider}`,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  borderColor: `${category.color}.main`,
                                  transform: "translateX(4px)",
                                },
                              }}
                            >
                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 500,
                                  fontSize: "0.95rem",
                                }}
                              >
                                {skill.name}
                              </Typography>
                              <Chip
                                label={skill.years}
                                size="small"
                                sx={{
                                  backgroundColor: `${category.color}.main`,
                                  color: "white",
                                  fontWeight: 600,
                                  fontSize: "0.75rem",
                                }}
                              />
                            </Box>
                          </motion.div>
                        ))}
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

export default Skills;
