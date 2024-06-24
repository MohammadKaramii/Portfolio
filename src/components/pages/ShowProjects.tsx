import {
  Button,
  Typography,
  Slide,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Tooltip,
} from "@mui/material";
import LinesEllipsis from "react-lines-ellipsis";
import Grid from "@mui/material/Unstable_Grid2";
import useTranslationSetup from "./../../hooks/useTranslationSetup";
import { Twitter, MusicPlayer, Splitwise } from "../../assets/Projects";

import { useContext } from "react";
import MainContext from "../../context";

const ShowProjects = ({ loading }: { loading: boolean }) => {
  const { mode } = useContext(MainContext);

  const { t } = useTranslationSetup();

  const projects = [
    {
      title: `${t("title-twitter")}`,
      image: Twitter,
      link: "https://twitter-clone2023.vercel.app/",
      info: `${t("info-twitter")}`,
    },
    {
      title: `${t("title-music-player")}`,
      image: MusicPlayer,
      link: "https://music-web-app-2024.vercel.app/",
      info: `${t("info-music-player")}`,
    },
    {
      title: `${t("title-splitwise")}`,
      image: Splitwise,
      link: "https://splitwise2024.vercel.app/",
      info: `${t("info-splitwise")}`,
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 2 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "#AF2655",
                borderRadius: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  width="200"
                  image={project.image}
                  alt={project.title}
                />
                <Tooltip title={project.info} arrow>
                  <CardContent>
                    <Typography
                      variant="body1"
                      color={mode === "dark" ? "white" : "black"}
                      textAlign="left"
                      gutterBottom
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={mode === "dark" ? "white" : "black"}
                      textAlign="left"
                      gutterBottom
                      sx={{ direction: "ltr" }}
                    >
                      <LinesEllipsis
                        text={project.info}
                        maxLine={"3"}
                        trimRight
                        ellipsis="..."
                      />
                    </Typography>
                  </CardContent>
                </Tooltip>
              </CardActionArea>
              <CardActions>
                <Button
                  href={project.link}
                  size="small"
                  color="warning"
                  target="_blank"
                >
                  {t("view")}
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  );
};

export default ShowProjects;
