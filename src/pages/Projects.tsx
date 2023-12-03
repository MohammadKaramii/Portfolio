import { useState, useEffect, useContext } from "react";

import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TerminalRounded } from "@mui/icons-material";
import useTranslationSetup from "./../hooks/useTranslationSetup";
import { CustomDivider } from "../components/common";
import ShowProjects from "../components/pages/ShowProjects";
import MainContext from "../context/index"
const Projects = ({ helmetTitle }: { helmetTitle: string }) => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslationSetup()
  const { mode } = useContext(MainContext);

  

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
        backgroundColor:  `${mode === "dark" ? "black" : "white"}`,

      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="warning.main"
          cColor="warning"
          icon={<TerminalRounded />}
          align="center"
          text={t("examples")}
        />

        <Grid container sx={{ mx: 3, mt: 3 }}>
          <ShowProjects loading={loading} />
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Projects;
