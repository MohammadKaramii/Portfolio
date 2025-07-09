import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
  Divider,
  useTheme,
  Paper,
} from "@mui/material";
import { LocationOn, Email, Phone, School, Work, Code, Timeline } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const personalInfo = [
    {
      icon: <LocationOn />,
      label: "Location",
      value: t("location"),
    },
    {
      icon: <Email />,
      label: "Email",
      value: t("email"),
    },
    {
      icon: <Phone />,
      label: "Phone",
      value: t("phone"),
    },
  ];

  const highlights = [
    {
      icon: <Code />,
      title: t("about.title-1"),
      description: t("skills.frontend"),
    },
    {
      icon: <Work />,
      title: t("about.title-2"),
      description: t("skills.tools-technologies"),
    },
    {
      icon: <Timeline />,
      title: t("about.title-3"),
      description: t("skills.development-concepts"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("meta.about-title")}</title>
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
                mb: 6,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
              }}
            >
              {t("about.title")}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                        : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Avatar
                      src="/user.jpg"
                      alt={t("name")}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: "auto",
                        mb: 3,
                        border: `3px solid ${theme.palette.primary.main}`,
                        boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                      }}
                    />

                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                      {t("name")}
                    </Typography>

                    <Typography variant="subtitle1" color="primary" sx={{ mb: 3, fontWeight: 500 }}>
                      {t("title")}
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {t("about.personal-info")}
                    </Typography>

                    <Stack spacing={2}>
                      {personalInfo.map((info, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            p: 1.5,
                            borderRadius: 2,
                            backgroundColor:
                              theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                          }}
                        >
                          <Box
                            sx={{
                              color: "primary.main",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {info.icon}
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{ flex: 1, textAlign: "left" }}
                            dir={info.label === "Phone" ? "ltr" : "auto"}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={8}>
              <Stack spacing={4}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card>
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.8,
                          fontSize: "1.1rem",
                          color: "text.secondary",
                        }}
                      >
                        {t("about.summary")}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                    {t("about.key-highlights")}
                  </Typography>

                  <Grid container spacing={3}>
                    {highlights.map((highlight, index) => (
                      <Grid item xs={12} sm={4} key={index}>
                        <Paper
                          sx={{
                            p: 3,
                            textAlign: "center",
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
                          <Box
                            sx={{
                              color: "primary.main",
                              mb: 2,
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {highlight.icon}
                          </Box>
                          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                            {highlight.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {highlight.description}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card>
                    <CardContent sx={{ p: 4 }}>
                      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                        <School color="primary" />
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {t("about.education-title")}
                        </Typography>
                      </Stack>

                      <Box
                        sx={{
                          p: 3,
                          borderRadius: 2,
                          background: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                        }}
                      >
                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                          {t("education.degree")}
                        </Typography>
                        <Typography variant="body1" color="primary" sx={{ mb: 1 }}>
                          {t("education.university")}
                        </Typography>
                        <Chip
                          label={t("education.year")}
                          size="small"
                          sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                          }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;
