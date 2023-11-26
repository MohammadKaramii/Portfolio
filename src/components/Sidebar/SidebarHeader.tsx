import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import userImg from "../../assets/user.jpg";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabetPersian";
import SocialMediaIcons from "../SocialMediaIcons";

import { CustomAvatar } from "../common";
import useTranslationSetup from "./../../hooks/useTranslationSetup";

const SidebarHeader = () => {
  const { t, language, i18n } = useTranslationSetup();
  const [start, setStart] = useState(false);

  const [languageKey, setLanguageKey] = useState(language);

  useEffect(() => {
    setStart(true);
    setLanguageKey(language);
  }, [language, i18n]);

  return (
    <>
      <CustomAvatar avatar={userImg} size={200} fallback="MK" />
      <Typography variant="h6" color="primary">
        <RandomReveal
          key={languageKey}
          isPlaying
          duration={3}
          characterSet={languageKey === "fa"  ? alphabetPersian : undefined}
          characters={t("name")}
        />
      </Typography>
      {start && (
        <Typography variant="caption" color="whitesmoke">
          <RandomReveal
            key={languageKey}
            isPlaying
            duration={3}
            characterSet={languageKey === "fa"  ? alphabetPersian : undefined}
            characters={t("description")}
          />
        </Typography>
      )}
      <SocialMediaIcons />
    </>
  );
};

export default SidebarHeader;
