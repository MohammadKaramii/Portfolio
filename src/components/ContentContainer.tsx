
import Grid from "@mui/material/Unstable_Grid2";

interface ContentContainerProps {
    children: React.ReactNode;
  }
  
const ContentContainer = ({children}: ContentContainerProps) => {
    return (
        <Grid
        xs={12}
        sm={12}
        md={9}
        lg={10}
        xl={10}
        sx={{ backgroundColor: "primary.main" }}
      >
        {children}
      </Grid>
    );
};

export default ContentContainer;
