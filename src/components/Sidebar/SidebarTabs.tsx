import { useContext } from "react";

import { Tabs, Tab } from "@mui/material";
import { grey } from "@mui/material/colors";

import MainContext from "../../context";
import { tabsData } from "../helpers/tabsData.sidebar";

const SidebarTabs = () => {
    const { pageNumber, handlePageNumber, setDrawerOpen } =
        useContext(MainContext);

    const data = tabsData();

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={pageNumber}
            onChange={handlePageNumber}
        >
            {data.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition="start"
                    sx={{
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        mx: 1,
                        mt: 3,
                        "&.MuiTab-root": {
                            minHeight: 60 ,
                        },
                    }}
                    onClick={() => setDrawerOpen(false)}
                
                />
            ))}
        </Tabs>
    );
};

export default SidebarTabs;
