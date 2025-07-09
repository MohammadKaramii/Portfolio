import { useTranslation } from "react-i18next";

const useTranslationSetup = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return { t, language, i18n };
};

export default useTranslationSetup;
