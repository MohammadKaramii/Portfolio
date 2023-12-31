import { useEffect, useRef, useContext } from "react";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import MainContext from "../context/index"

const Home = ({ helmetTitle }: { helmetTitle: string }) => {
  const nameEl = useRef<any>(null);
  const infoEl = useRef<any>(null);
  const { i18n } = useTranslation();
  const { mode } = useContext(MainContext);
  

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: [i18n.t("name")],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });

    const typedInfo = new Typed(infoEl.current, {
      strings: [i18n.t("home-interduce")],
      startDelay: 1500,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typedName.destroy()
      typedInfo.destroy();
    };
  }, [i18n.language]);


  return (
    <Box
      sx={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Typography ref={nameEl} variant="h3" color={mode === "dark" ? "black" : "white"}></Typography>
      <Typography
        ref={infoEl}
        variant="h4"
        color={mode === "dark" ? "white" : "black"}
        sx={{ my: 3, textAlign: "center", px: 2}}
      ></Typography>
    </Box>
  );
};

export default Home;
