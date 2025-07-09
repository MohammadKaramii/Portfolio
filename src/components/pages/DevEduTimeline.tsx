import { Slide, Typography } from "@mui/material";
import MainContext from "./../../context";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from "@mui/lab";
import { SchoolRounded } from "@mui/icons-material";
import useTranslationSetup from "./../../hooks/useTranslationSetup";
import { useContext } from "react";
import { grey } from "@mui/material/colors";
const DevEduTimeline = ({ loading }: { loading: boolean }) => {
  const { t } = useTranslationSetup();
  const { mode } = useContext(MainContext);
  const devEdu = [
    {
      year: t("year-highSchool"),
      cert: t("highSchool"),
      major: t("major-highSchool"),
      place: t("place-highSchool"),
    },
    {
      year: t("year-uni"),
      cert: t("uni"),
      major: t("major-uni"),
      place: t("place-uni"),
    },
  ];

  return (
    <Timeline sx={{ direction: "ltr" }}>
      {devEdu.map((item, index) => (
        <Slide
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 3}99ms` : "0ms",
          }}
        >
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <SchoolRounded color="primary" />
              </TimelineDot>
              {index !== 3 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="caption" color={mode === "dark" ? grey[400] : grey[600]}>
                {item.year}
              </Typography>
              <Typography variant="body1" color={mode === "dark" ? "white" : "black"}>
                {item.cert}
              </Typography>
              <Typography variant="body2" color={mode === "dark" ? "white" : "black"}>
                {item.major}
              </Typography>
              <Typography variant="body2" color={mode === "dark" ? "white" : "black"}>
                {item.place}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevEduTimeline;
