import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: "0 0 40px",
  },
  journeyContainer: {
    padding: "50px 0",
    margin: "0 20px",
    borderRadius: "8px",
    backgroundColor: theme.palette.primary.light,
    position: "relative",
    top: "-55px",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth={false}>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          justify="center"
          className={classes.journeyContainer}
        >
          <Container>
            <Typography>My Journey:</Typography>
          </Container>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Typography>Email: example@example.com</Typography>
          <Typography>Phone# 555-555-5555</Typography>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Typography>
            Living, learning, & leveling up one day at a time.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
