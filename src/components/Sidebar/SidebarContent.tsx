import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SidebarHeader, SidebarTabs } from ".";


const SidebarContent = () => {
    return (
        <Box
            sx={{
                justifyContent: "center",
                textAlign: "center",
                mt: 2,
                
            }}
        >
            <SidebarHeader />

            <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

            <SidebarTabs />
    

        </Box>
    );
};

export default SidebarContent;
