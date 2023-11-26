import { useState, useEffect} from "react";

import { Typography, Card, CardContent, Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AccountCircle } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import { CustomDivider } from "../components/common";
import worldMap from "../assets/map.svg";
import ContactForm from "../components/pages/ContactForm";
import useTranslationSetup from "./../hooks/useTranslationSetup";

const Contact = ({ helmetTitle }: { helmetTitle: string }) => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslationSetup();

  useEffect(() => {
    setLoading(true);


    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        direction: "rtl",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="error.main"
          cColor="error"
          icon={<AccountCircle />}
          align="center"
          text={t("contact")}
        />

        <Grid container sx={{ mt: 5 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Grid xs={12} sm={12} md={8}>
              <Card
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContactForm />
              </Card>
            </Grid>
          </Slide>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Grid
              xs={0}
              sm={0}
              md={4}
              sx={{
                textAlign: "center",
                backgroundImage: `url(${worldMap})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Typography
                variant="body1"
                color="black"
                sx={{
                  mt: 20,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                  fontSize: "25px",
                }}
              >
                {t("send")}{" "}
                <a
                  href="mailto:karamiwp@gmail.com"
                  style={{
                    color: "#fa1d1d",
                    fontSize: "25px",
                    textDecoration: "none",
                  }}
                >
                  {t("email")}
                </a>
              </Typography>
            </Grid>
          </Slide>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Contact;
