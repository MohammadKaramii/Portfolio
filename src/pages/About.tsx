import { useState, useEffect} from "react";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { CodeRounded } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import DevInfo from "../components/pages/DevInfo";
import avatar from "../../src/assets/wallpaper.jpg";
import { CustomAvatar, CustomDivider } from "../components/common";
import { SchoolRounded } from "@mui/icons-material";
import DevEduTimeline from "../components/pages/DevEduTimeline";
import useTranslationSetup from "./../hooks/useTranslationSetup";


const About = ({ helmetTitle }: { helmetTitle: string }) => {
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
        direction: "rtl",
        overflowY: "auto",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={<CodeRounded />}
              align="right"
              text={t("description")}
            />

            <Grid xs={12} sm={8} md={9} lg={9}>
              <DevInfo />
            </Grid>
          </Grid>
          <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
            <CustomAvatar avatar={avatar} size={250} fallback="MK" />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 4 }}>
          <Grid xs={12}>
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={<SchoolRounded />}
              align="center"
              text={t("edu")}
            />

            <DevEduTimeline loading={loading} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
