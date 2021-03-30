import React from "react";
import { makeStyles, Grid, Button, Container } from "@material-ui/core";
import Link from "next/link";
import Logo from "./logo";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "absolute",
    margin: "auto",
    left: 0,
    right: 0,
    padding: "20px 0",
    // textAlign: "center",
    "& a": {
      textDecoration: "none",
    },
    "&::before": {
      // Shadow at top of page
      content: "''",
      position: "fixed",
      top: "-10px",
      left: 0,
      width: "100%",
      height: "10px",
      boxShadow: "0 0 10px rgb(0 0 0 / 80%)",
      zIndex: 100,
    },
    zIndex: 500,
  },
  item: {
    minWidth: "84px",
    marginLeft: "5px",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Grid container wrap="nowrap">
        <Grid item xs={6}>
          <Link href="/">
            <a>
              <Logo height={60} />
            </a>
          </Link>
        </Grid>
        <Grid container alignContent="center" justify="flex-end" item xs={6}>
          <Button
            color="secondary"
            size="medium"
            className={classes.item}
            href="/"
          >
            Works
          </Button>
          <Button
            color="secondary"
            size="medium"
            className={classes.item}
            href="/"
          >
            Contact
          </Button>
          <Button
            color="primary"
            size="medium"
            variant="outlined"
            className={classes.item}
            href="/"
          >
            Hire me!
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
