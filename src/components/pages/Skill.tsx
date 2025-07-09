import { Divider, Chip, Box, Typography, LinearProgress, Badge } from "@mui/material";
import { FC, useContext } from "react";
import MainContext from "../../context";

interface SkillProps {
  icon: string;
  color: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  name: string;
  value: number;
}

const Skill: FC<SkillProps> = ({ icon, color, name, value }) => {
  const { direction, mode } = useContext(MainContext);

  return (
    <>
      <Divider
        textAlign="center"
        sx={{
          "&::before, &::after": {
            borderColor: `${color}.main`,
          },
          mt: 1.2,
        }}
      >
        <Chip
          icon={<Box component="img" src={icon} sx={{ height: 30 }} />}
          color={color}
          label={name}
          sx={{
            color: `${mode === "dark" ? "white" : "black"}`,
            width: 160,
            height: 45,
            mb: "3px",
          }}
        />
      </Divider>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="purple">
            <Badge variant="standard" badgeContent={`${Math.round(value)}%`} color={color} />
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{
              height: 10,
              borderRadius: 2,
              transform: `${direction === "ltr" ? "rotateY(180deg)" : ""}`,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Skill;
