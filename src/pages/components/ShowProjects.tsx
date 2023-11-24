import {
    Button,
    Typography,
    Slide,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    CardActions,
    Tooltip,
} from "@mui/material";
import LinesEllipsis from 'react-lines-ellipsis'
import Grid from "@mui/material/Unstable_Grid2";

import { projects } from "../../constants/projects.ts";

const ShowProjects = ({ loading }: { loading: boolean }) => {
    return (
        <>
            {projects.map((project, index) => (
                <Grid
                    key={index}
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    sx={{ px: 2, mb: 2 }}
                >
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading
                                ? `${index + 3}99ms`
                                : "0ms",
                        }}
                    >
                        <Card
                            sx={{
                                maxWidth: 345,
                                backgroundColor: "#AF2655",
                                borderRadius: 2,
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    width="200"
                                    image={project.image}
                                    alt={project.title}
                                />
                                 <Tooltip title={project.info} arrow>
                                <CardContent>
                                    <Typography
                                        variant="body1"
                                        textAlign="left"
                                        gutterBottom
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        textAlign="left"
                                        gutterBottom
                                        sx={{ direction: "ltr" }}
                                    >
                                        <LinesEllipsis
                                            text={project.info}
                                            maxLine={"3"}
                                            trimRight
                                            ellipsis='...'
                                        />
                                    </Typography>
                                  
                                </CardContent>
                                </Tooltip>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    href={project.link}
                                    size="small"
                                    color="warning"
                                    target="_blank"
                                >
                                    مشاهده دمو
                                </Button>
                            </CardActions>
                        </Card>
                    </Slide>
                </Grid>
            ))}
        </>
    );
};

export default ShowProjects;
