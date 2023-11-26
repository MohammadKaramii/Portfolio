import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import useTranslationSetup from "./../../hooks/useTranslationSetup";
const Info = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "bottom",
          color: "primary.main",
        }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  const { t } = useTranslationSetup();

  return (
    <>
      <Info>
        {" "}
        {t("nameForm")} : {t("name")}
      </Info>
      <Info>
        {t("age")} : {t("twenty-five")}
      </Info>
      <Info>
        {t("city")} : {t("location")}
      </Info>
      <Info>karamiwp@gmail.com : {t("email")}</Info>
      <Info>
        {t("phone")} : {t("phone-number")}
      </Info>
    </>
  );
};

export default DevInfo;
