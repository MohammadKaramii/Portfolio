import { Avatar, Box, Divider, Hidden, Tab, Tabs, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import userImg from "../assets/user.jpg";
import { grey } from "@mui/material/colors";
import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";

interface SidebarProps {
  value: number;
  handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}


const Sidebar = ({ value, handleChange }: SidebarProps) => {
 


  const tabProps = (index: number) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};

return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
      sx={{ backgroundColor: "secondary.main" }}
    >
      <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
        <Hidden mdDown>
          <Avatar
            src={userImg}
            variant="rounded"
            sx={{ height: 200, width: 200, margin: "0 auto" }}
          >
            MK
          </Avatar>
        </Hidden>
        <Typography
          variant="h6"
          color="whitesmoke"
          sx={{ textAlign: "center" }}
        >
          محمد کرمی
        </Typography>
        <Typography
          variant="caption"
          color="whitesmoke"
          sx={{ textAlign: "center" }}
        >
          برنامه نویس فرانت اند
        </Typography>
        <Divider variant="middle" color={grey[400]} sx={{ mt: 2 }} />
      <Tabs orientation="vertical" variant="scrollable" scrollButtons="auto" value={value} onChange={handleChange} allowScrollButtonsMobile>

        <Tab
                        label="صفحه اصلی"
                        icon={<HomeRounded />}
                        iconPosition="start"
                        {...tabProps(0)}
                    />

                    <Tab
                        label="درباره من"
                        icon={<FaceRounded />}
                        iconPosition="start"
                        {...tabProps(1)}
                    />
                    <Tab
                        label="رزومه من"
                        icon={<TextSnippetRounded />}
                        iconPosition="start"
                        {...tabProps(2)}
                    />
                    <Tab
                        label="نمونه کارها"
                        icon={<TerminalRounded />}
                        iconPosition="start"
                        {...tabProps(3)}
                    />

                    <Tab
                        label="ارتباط با من"
                        icon={<ConnectWithoutContactRounded />}
                        iconPosition="start"
                        {...tabProps(5)}
                    />
      </Tabs>
      </Box>
    </Grid>
  );
};

export default Sidebar;
