import { Box, IconButton } from "@mui/material";
import { GitHub, Telegram, LinkedIn,WhatsApp } from "@mui/icons-material";

const SocialMediaIcons = () => {
    return (
        <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
            <IconButton aria-label="Github">
                <a
                    href="https://github.com/MohammadKaramii"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub sx={{ color: "gray" }} />
                </a>
            </IconButton>
            <IconButton aria-label="LinkedIn">
                <a
                    href="https://www.linkedin.com/in/mohammad-karami-a43675281"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedIn sx={{ color: "gray" }} />
                </a>
            </IconButton>
            <IconButton aria-label="Telegram">
                <a href="https://telegram.me/mrak98" target="_blank" rel="noopener noreferrer">
                    <Telegram sx={{ color: "gray" }} />
                </a>
            </IconButton>
            <IconButton aria-label="WhatsApp">
                <a href="https://wa.link/8zmv9t" target="_blank" rel="noopener noreferrer">
                    <WhatsApp sx={{ color: "gray" }} />
                </a>
            </IconButton>
        </Box>
    );
};

export default SocialMediaIcons;