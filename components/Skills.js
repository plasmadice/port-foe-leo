import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px 0 220px",
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: "20px",
    position: "relative",
    top: "-100px",
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Grid container>
        <Grid container justify="center" item xs={12} md={6}>
          <Typography variant="subtitle1">123</Typography>
        </Grid>
        <Grid container justify="center" item xs={12} md={6}>
          123
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
