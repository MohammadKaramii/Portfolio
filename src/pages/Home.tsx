import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";



const Home = () => {
    const nameEl = useRef(null);
    const infoEl = useRef(null);

    const strings = [
        "من یک توسعه دهنده فرانت اند هستم",
    ];

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["محمد کرمی"],
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 10,
            showCursor: false,
        });

        const typedInfo = new Typed(infoEl.current, {
            strings: strings,
            startDelay: 1500,
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 50,
            loop: true,
            showCursor: false,
        });

        return () => {
            typedName.destroy();
            typedInfo.destroy();
        };
    }, []);

   
    return (
        <Box
            sx={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography ref={nameEl} variant="h3" color="black" ></Typography>
            <Typography
                ref={infoEl}
                variant="h4"
                color="whitesmoke"
                sx={{my:3}}
            ></Typography>
        </Box>
    );
};

export default Home;
