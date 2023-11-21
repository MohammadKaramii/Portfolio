import { Box, Typography } from "@mui/material";

interface TabPanelProps {
    value: number;
    index: number;
    children: React.ReactNode;
  }

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...others } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`sidebar-tab-${index}`}
            {...others}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

export default TabPanel;
