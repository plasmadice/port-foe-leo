import React from "react";
import { Container, makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    // marginTop: "20px",
    background: `no-repeat url('cityscape.svg')`,
    backgroundSize: "auto",
    backgroundPosition: "bottom",
    backgroundSize: "100%",
    padding: "210px 0 380px",
    zIndex: 99,
    [theme.breakpoints.down("md")]: {
      backgroundSize: "110%",
    },
    [theme.breakpoints.only("sm")]: {
      backgroundSize: "150%",
      padding: "210px 0 480px",
    },
    [theme.breakpoints.only("xs")]: {
      backgroundSize: "200%",
      padding: "210px 0 610px",
    },
  },
  heroContainer: {
    // position: "relative",
    // width: "100vw",
    // paddingTop: "20px",
  },
  heroTextContainer: {
    textAlign: "center",
    margin: theme.spacing(4),
    width: "100%",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  heroText: {
    // fontSize: "4rem",
    fontWeight: "800",
    width: "100%",
    overflowWrap: "break-word",
  },
  heroSubtitle: { fontWeight: "600" },
  heroIcon: {
    height: "250px",
    backgroundPosition: "center center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
    backgroundImage: `url('avatar.svg')`,
    zIndex: 100,
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <h1 className={classes.heroText}>Front-end Developer</h1>
    //   <h2 className={classes.heroSubtitle}>I make stuff, and love doing it.</h2>
    //   <div alt="Avatar of site creator" className={classes.heroIcon} />
    // </div>
    <Container
      maxWidth={false}
      disableGutters
      className={classes.heroContainer}
    >
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignContent="center"
        wrap="wrap"
        className={classes.root}
      >
        <Grid item xs={12} className={classes.heroTextContainer}>
          <Typography variant="h3" className={classes.heroText}>
            Front-end Developer
          </Typography>
          <h2 className={classes.heroSubtitle}>
            I make stuff, and love doing it.
          </h2>
        </Grid>
        <Grid item xs={12}>
          <div alt="Avatar of site creator" className={classes.heroIcon} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
