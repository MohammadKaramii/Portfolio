import { useState } from "react";
import { Avatar, Typography } from "@mui/material";
import userImg from "../../assets/user.jpg";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabetPersian";
import SocialMediaIcons from "../SocialMediaIcons";
const SidebarHeader = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <Avatar
        src={userImg}
        variant="rounded"
        sx={{
          height: 200,
          width: 200,

          borderRadius: 2,
          margin: "0 auto",
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        MK
      </Avatar>
      <Typography variant="h6" color="primary">
        <RandomReveal
          isPlaying
          duration={3}
          characterSet={alphabetPersian}
          characters="محمد کرمی"
          onComplete={() => setStart(true)}
        />
      </Typography>
      {start && (
      <Typography variant="caption" color="whitesmoke">
        <RandomReveal
          isPlaying
          duration={3}
          characterSet={alphabetPersian}
          characters="توسعه دهنده فرانت اند"
        />
      </Typography>
      )}
      <SocialMediaIcons />
    </>
  );
};

export default SidebarHeader;
