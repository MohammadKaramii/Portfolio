import { Avatar, Typography } from "@mui/material";
import userImg from "../../assets/user.jpg"
const SidebarHeader = () => {
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
            <Typography variant="h6" color="whitesmoke">
               محمد کرمی
            </Typography>

            <Typography variant="caption" color="whitesmoke">
                توسعه دهنده فرانت اند
            </Typography>
        </>
    );
};

export default SidebarHeader;
