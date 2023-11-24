import { useState, useEffect, ReactElement } from "react";

import { Divider, Chip, Typography, Slide } from "@mui/material";


interface DivderProps{
    bColor : any;
    cColor : any;
    icon: ReactElement;
    align: "center" | "left" | "right" | undefined;
    text: string;
}





const CustomDivider = ({ bColor, cColor, icon, align, text }: DivderProps) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    return (
        <>
            <Slide
                direction="down"
                in={loading}
                style={{
                    transitionDelay: loading ? "200ms" : "0ms",
                }}
            >
                <Divider
                    variant="middle"
                    textAlign={align}
                    sx={{
                        "&::before, &::after": {
                            borderColor: bColor,
                        },
                    }}
                >
                    <Chip
                        icon={icon}
                        color={cColor}
                        label={
                            <Typography
                                variant="body1"
                                color="black"
                                sx={{ textAlign: "center" }}
                            >
                                {text}
                            </Typography>
                        }
                        sx={{ p: 3 }}
                    />
                </Divider>
            </Slide>
        </>
    );
};

export default CustomDivider;
