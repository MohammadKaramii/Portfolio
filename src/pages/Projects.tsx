import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TerminalRounded } from "@mui/icons-material";

import { CustomDivider } from "../components/common";
import  ShowProjects  from "../pages/components/ShowProjects";

const Projects = ( { helmetTitle }: { helmetTitle: string }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor="warning.main"
                    cColor="warning"
                    icon={<TerminalRounded />}
                    align="center"
                    text="نمونه کار های من"
                />

                <Grid container sx={{ mx: 3, mt: 3 }}>
                    <ShowProjects loading={loading} />
                </Grid>
            </CardContent>
        </Card>
    );
};
export default Projects;
