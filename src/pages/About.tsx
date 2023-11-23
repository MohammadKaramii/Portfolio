import {
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { CodeRounded } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import DevInfo from "./components/DevInfo";
import avatar from "../../src/assets/wallpaper.jpg";

const About = ({ helmetTitle } : { helmetTitle: string }) => {
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        direction: "rtl",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <Divider textAlign="right">
              <Chip
                color="primary"
                icon={<CodeRounded />}
                label={
                  <Typography
                    variant="body1"
                    color="black"
                    sx={{ textAlign: "cener" }}
                  >
                    توسعه دهنده فول استک و مدرس برنامه نویسی
                  </Typography>
                }
                sx={{ p: 3 }}
              />
            </Divider>

            <DevInfo>نام و نام خانوادگی :محمد کرمی</DevInfo>
            <DevInfo>سن : 25</DevInfo>
            <DevInfo>شهر : تهران</DevInfo>
            <DevInfo>karamiwp@gmail.com : آدرس ایمیل</DevInfo>
            <DevInfo>شماره موبایل : 09393307065</DevInfo>
          </Grid>
          <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
            <Avatar
              src={avatar}
              variant="rounded"
              sx={{
                height: 250,
                width: 250,
                margin: "0 auto",
                display: {
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                },
              }}
            >
              MK
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
