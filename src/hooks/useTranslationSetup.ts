import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MainContext from "./../context";

const useTranslationSetup = () => {
  const { t, i18n } = useTranslation();
  const { language } = useContext(MainContext);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return { t, language, i18n };
};

export default useTranslationSetup;