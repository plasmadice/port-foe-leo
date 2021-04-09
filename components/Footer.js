import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  IconButton,
  Typography,
} from "@material-ui/core";
import Logo from "./logo";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: "0 0 60px",
  },
  journeyContainer: {
    padding: "50px 0",
    margin: "0 10%",
    borderRadius: "8px",
    backgroundColor: theme.palette.primary.light,
    position: "relative",
    top: "-55px",
  },
  boldText: {
    fontWeight: 600,
    marginRight: "1rem",
  },
  textContainer: {
    color: "#ebebeb",
    padding: "0 10px",
    [theme.breakpoints.only("xs")]: {
      marginTop: "1rem",
    },
  },
  email: {
    textDecoration: "none",
    color: "#ebebeb",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth={false}>
      <Grid container>
        <Grid container item xs={12} className={classes.journeyContainer}>
          <Grid
            item
            container
            className={classes.textContainer}
            direction="column"
            alignContent="center"
          >
            <Typography variant="h5" align="center">
              “Life before death, strength before weakness, journey before
              destination."
            </Typography>
            <Typography variant="subtitle2" align="right">
              -Brandon Sanderson
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          justify="center"
          alignContent="center"
          spacing={2}
        >
          <Grid
            item
            container
            xs={12}
            justify="center"
            className={classes.textContainer}
            id="contact"
          >
            <Typography variant="h5" className={classes.boldText}>
              Email:
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="mailto:phoenixquint@gmail.com"
              target="_blank"
              className={classes.email}
            >
              phoenixquint@gmail.com
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justify="center"
            className={classes.textContainer}
          >
            <Typography variant="h5" className={classes.boldText}>
              Phone#
            </Typography>
            <Typography variant="h6">555-555-5555</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          justify="center"
          className={classes.textContainer}
          spacing={2}
        >
          <Grid item container xs={12} justify="center">
            <Logo height={60} />
          </Grid>
          <Grid item container xs={12} justify="center">
            <Typography variant="h6" align="center">
              Living, learning, & leveling up one day at a time.
            </Typography>
          </Grid>
          <Grid item container xs={3} justify="space-around" wrap="nowrap">
            <IconButton
              aria-label="github profile"
              size="small"
              href="https://github.com/plasmadice"
              target="_blank"
            >
              <GitHubIcon fontSize="large" color="secondary" />
            </IconButton>
            <IconButton
              aria-label="linkedin profile"
              size="small"
              href="https://www.linkedin.com/in/herman-white/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" color="secondary" />
            </IconButton>
            <IconButton
              aria-label="email address"
              size="small"
              href="mailto:phoenixquint@gmail.com"
              target="_blank"
            >
              <EmailIcon fontSize="large" color="secondary" />
            </IconButton>
          </Grid>

          <Grid item container xs={12} justify="center">
            <Typography variant="h6">Made with love by Herman White</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
