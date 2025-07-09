import { Box, Container, Typography, Card, CardContent, Chip, Stack, useTheme } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Work, School } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Experience = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const experiences = [
    {
      type: "work",
      title: t("jobs.dorfak.title"),
      company: t("jobs.dorfak.company"),
      location: t("jobs.dorfak.location"),
      period: t("jobs.dorfak.period"),
      achievements: t("jobs.dorfak.achievements", {
        returnObjects: true,
      }) as string[],
      current: true,
    },
    {
      type: "work",
      title: t("jobs.kara-ideh.title"),
      company: t("jobs.kara-ideh.company"),
      location: t("jobs.kara-ideh.location"),
      period: t("jobs.kara-ideh.period"),
      achievements: t("jobs.kara-ideh.achievements", {
        returnObjects: true,
      }) as string[],
      current: false,
    },
    {
      type: "education",
      title: t("education.degree"),
      company: t("education.university"),
      location: "Hamedan, Iran",
      period: t("education.year"),
      achievements: t("education.achievements", {
        returnObjects: true,
      }) as string[],
      current: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("meta.experience-title")}</title>
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
        <Container maxWidth="md">
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
              {t("experience.title")}
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
              {t("experience.subtitle")}
            </Typography>
          </motion.div>

          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: exp.current
                        ? "primary.main"
                        : exp.type === "work"
                          ? "secondary.main"
                          : "info.main",
                      p: 1,
                    }}
                  >
                    {exp.type === "work" ? <Work /> : <School />}
                  </TimelineDot>
                  {index < experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>

                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        mb: 2,
                        background:
                          theme.palette.mode === "dark"
                            ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                            : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                        border: `1px solid ${theme.palette.divider}`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 12px 35px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3, textAlign: "justify" }}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="start"
                          gap={3}
                          mb={2}
                          spacing={3}
                        >
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                mb: 0.5,
                                fontSize: { xs: "1.1rem", md: "1.2rem" },
                                lineHeight: 1.3,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {exp.title}
                            </Typography>
                            <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 500 }}>
                              {exp.company}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {exp.location}
                            </Typography>
                          </Box>

                          <Stack spacing={1} alignItems="flex-end" sx={{ flexShrink: 0 }}>
                            <Chip
                              label={exp.period}
                              size="small"
                              sx={{
                                backgroundColor: exp.current ? "success.main" : "default",
                                color: "white",
                                fontWeight: 500,
                                whiteSpace: "nowrap",
                              }}
                            />
                          </Stack>
                        </Stack>

                        <Box>
                          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                            {t("experience.key-achievements")}
                          </Typography>
                          <Stack spacing={1}>
                            {exp.achievements.map((achievement, achIndex) => (
                              <Box
                                key={achIndex}
                                sx={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: 1.5,
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    backgroundColor: "primary.main",
                                    mt: 1,
                                    flexShrink: 0,
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "text.secondary",
                                    lineHeight: 1.6,
                                  }}
                                >
                                  {achievement}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>
    </>
  );
};

export default Experience;
