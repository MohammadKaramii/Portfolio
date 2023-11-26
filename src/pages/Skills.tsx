import { useState, useEffect } from "react";
import Skill from "../components/pages/Skill";
import { devSkills } from "../constants/skills";
import Grid from "@mui/material/Unstable_Grid2";
import { DeveloperMode } from "@mui/icons-material";
import { Typography, Box, Chip, Card } from "@mui/material";
import { Helmet } from "react-helmet-async";
import useTranslationSetup from "./../hooks/useTranslationSetup";

const Skills = ({ helmetTitle }: { helmetTitle: string }) => {
  const {
    htmlSkill,
    cssSkill,
    jsSkill,
    reactSkill,
    gitSkill,
    nextSkill,
    typescriptSkill,
    reduxSkill,
    materialuiSkill,
  } = devSkills;

  const [javascript, setJavascript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [reactJs, setReactJs] = useState(0);
  const [git, setGit] = useState(0);
  const [next, setNext] = useState(0);
  const [redux, setRedux] = useState(0);
  const [typescript, setTypescript] = useState(0);
  const [mui, setMui] = useState(0);
  const { t } = useTranslationSetup();


  useEffect(() => {
    const timer = setInterval(() => {
      setJavascript((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 40);
      });

      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 80);
      });

      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 80);
      });

      setReactJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 55);
      });

      setMui((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 55);
      });

      setGit((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 40);
      });
      setTypescript((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 40);
      });
      setRedux((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 35);
      });
      setNext((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 40);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        direction: "rtl",
        overflowY: "scroll",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Grid container sx={{ mx: 4 }}>
        <Grid sx={{ width: 1, mt: 1 }}>
          <Box textAlign="left">
            <Chip
              color={"yellow" as any}
              icon={<DeveloperMode />}
              label={
                <Typography
                  variant="body1"
                  color="black"
                  sx={{ textAlign: "center" }}
                >
                  {t("skills")}
                </Typography>
              }
              sx={{
                p: 3,
                display: {
                  xs: "none",
                  sm: "none",
                  md: "inline-flex",
                  lg: "inline-flex",
                  xl: "inline-flex",
                },
              }}
            />
          </Box>
          <Skill
            name={htmlSkill.name}
            icon={htmlSkill.icon}
            color={htmlSkill.color}
            value={html}
          />
          <Skill
            name={cssSkill.name}
            icon={cssSkill.icon}
            color={cssSkill.color}
            value={css}
          />
          <Skill
            name={jsSkill.name}
            icon={jsSkill.icon}
            color={jsSkill.color}
            value={javascript}
          />
          <Skill
            name={gitSkill.name}
            icon={gitSkill.icon}
            color={gitSkill.color}
            value={git}
          />
          <Skill
            name={reactSkill.name}
            icon={reactSkill.icon}
            color={reactSkill.color}
            value={reactJs}
          />
          <Skill
            name={nextSkill.name}
            icon={nextSkill.icon}
            color={nextSkill.color}
            value={next}
          />
          <Skill
            name={typescriptSkill.name}
            icon={typescriptSkill.icon}
            color={typescriptSkill.color}
            value={typescript}
          />
          <Skill
            name={reduxSkill.name}
            icon={reduxSkill.icon}
            color={reduxSkill.color}
            value={redux}
          />
          <Skill
            name={materialuiSkill.name}
            icon={materialuiSkill.icon}
            color={materialuiSkill.color}
            value={mui}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Skills;
