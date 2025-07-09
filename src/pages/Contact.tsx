import { Email, GitHub, LinkedIn, LocationOn, Phone, Send } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Message from Portfolio Contact Form");
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` + `Email: ${formData.email}\n\n` + `Message:\n${formData.message}`,
    );

    const mailtoLink = `mailto:karamiwp@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: t("contact.form.email"),
      value: "karamiwp@gmail.com",
      link: `mailto:karamiwp@gmail.com`,
    },
    {
      icon: <Phone />,
      title: t("contact.form.phone"),
      value: t("phone"),
      link: `tel:${t("phone")}`,
    },
    {
      icon: <LocationOn />,
      title: t("contact.form.location"),
      value: t("location"),
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      label: "GitHub",
      url: `https://github.com/${t("github").replace("@", "")}`,
    },
    {
      icon: <LinkedIn />,
      label: "LinkedIn",
      url: `https://linkedin.com/in/${t("linkedin").replace("@", "")}`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("meta.contact-title")}</title>
      </Helmet>

      <Box
        id="contact"
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
              {t("contact.title")}
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
              {t("contact.subtitle")}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Paper
                      component={info.link !== "#" ? "a" : "div"}
                      href={info.link}
                      sx={{
                        p: 3,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        textDecoration: "none",
                        color: "inherit",
                        background:
                          theme.palette.mode === "dark"
                            ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                            : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                        border: `1px solid ${theme.palette.divider}`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {info.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          dir={info.title === "Phone" ? "ltr" : "auto"}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {t("contact.form.follow-me")}
                  </Typography>
                  <Stack direction="row" sx={{ gap: 2 }}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: "primary.main",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "primary.dark",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </motion.div>
              </Stack>
            </Grid>

            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  sx={{
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                        : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                      {t("contact.form.title")}
                    </Typography>

                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label={t("contact.form.name")}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label={t("contact.form.email")}
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label={t("contact.form.subject")}
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label={t("contact.form.message")}
                            name="message"
                            multiline
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            startIcon={<Send />}
                            sx={{
                              px: 4,
                              py: 1.5,
                              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              "&:hover": {
                                background: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
                                transform: "translateY(-2px)",
                              },
                            }}
                          >
                            {t("contact.form.send")}
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
