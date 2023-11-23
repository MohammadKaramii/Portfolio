import { Divider, Chip, Box, Typography, LinearProgress } from "@mui/material";
import  { FC } from 'react';
interface SkillProps {
    icon: string;
    color: any
    name: string;
    value: number;
  }

const Skill: FC<SkillProps> = ({ icon, color, name, value }) => {
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
                    icon={
                        <Box component="img" src={icon} sx={{ height: 30 }} />
                    }
                    color={color}
                    label={name}
                    sx={{ color: "#000", width: 160, height: 45, mb: "3px" }}
                />
            </Divider>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="purple">
                        {Math.round(value)}
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
                        }}
                    />
                </Box>
            </Box>
        </>
    );
};

export default Skill;
