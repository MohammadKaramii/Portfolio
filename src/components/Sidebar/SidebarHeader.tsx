import { Typography } from "@mui/material";
import userImg from "../../assets/user.jpg";
import SocialMediaIcons from "../SocialMediaIcons";
import { CustomAvatar } from "../common";
import useTranslationSetup from "./../../hooks/useTranslationSetup";
import MainContext from "./../../context"; 
import { useContext } from "react";
const SidebarHeader = () => {
  const { t } = useTranslationSetup();
  const { mode } = useContext(MainContext);


  return (
    <>
      <CustomAvatar avatar={userImg} size={200} fallback="MK" />
      <Typography variant="h6" color="primary">

        {t("name")}
 
      </Typography>
  
        <Typography variant="caption" color={mode === "dark" ? "white" : "black"}>
       {t("description")}
     
        </Typography>
      
      <SocialMediaIcons />
    </>
  );
};

export default SidebarHeader;
