import React from "react";
import { Grid, makeStyles, Card, Typography } from "@material-ui/core";

const Projects = () => {
  return (
    <Grid container>
      <Grid item container justify="center" xs={12} md={4}>
        <Typography variant="body1">1</Typography>
      </Grid>
      <Grid item container justify="center" xs={12} md={4}>
        <Typography variant="body1">2</Typography>
      </Grid>
      <Grid item container justify="center" xs={12} md={4}>
        <Typography variant="body1">3</Typography>
      </Grid>
    </Grid>
  );
};

export default Projects;
