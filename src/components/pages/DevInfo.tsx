import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from "@mui/icons-material";
import useTranslationSetup from "./../../hooks/useTranslationSetup";
import MainContext from "./../../context"; 
import { useContext } from "react";
const Info = ({ children }: { children: React.ReactNode }) => {
  const { direction, mode } = useContext(MainContext);
  return (
    <Typography variant="body1" color={mode === "dark" ? "white" : "black"} textAlign="left" sx={{ mt: 2 }}>
      {children}
      {direction === "rtl" ? (
      <KeyboardArrowLeftRounded
      sx={{
        verticalAlign: "bottom",
        color: "primary.main",
      }}
    />
      ) : (
        <KeyboardArrowRightRounded
        sx={{
          verticalAlign: "bottom",
          color: "primary.main",
          
        }}
      />
      )
      }
      

    </Typography>
  );
};

const DevInfo = () => {
  const { t, language } = useTranslationSetup();

  return (
    <>
      <Info>
        
        {t("nameForm")} : {t("name")}
      </Info>
      <Info>
        {t("age")} : {t("twenty-five")}
      </Info>
      <Info>
        {t("city")} : {t("location")}
      </Info>
   {language === "en" ?  (<Info>
      {t("email")} : Karamiwp@gmail.com    
    </Info>) : (
      <Info>
      Karamiwp@gmail.com : {t("email")}
    </Info>
    )
    }
     


      <Info>
        {t("phone")} : {t("phone-number")}
      </Info>
    </>
  );
};

export default DevInfo;
