import React, { useState } from "react"
import { makeStyles, Grid, Button, Container } from "@material-ui/core"
import Link from "next/link"
import Logo from "./logo"
import WebIcon from "@mui/icons-material/Web"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "absolute",
    margin: "auto",
    left: 0,
    right: 0,
    padding: "20px 0",
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
    marginLeft: "8px",
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <Container fixed className={classes.root}>
      <Grid container wrap="nowrap">
        <Grid item xs={6}>
          <Link
            aria-label="Herman White personal logo"
            href="https://hwhite.dev/"
          >
            <Logo height={60} />
          </Link>
        </Grid>
        <Grid container alignContent="center" justify="flex-end" item xs={6}>
          <Button
            startIcon={<WebIcon />}
            color="secondary"
            size="medium"
            className={classes.item}
            href="https://hwhite.dev/"
          >
            New Portfolio
          </Button>
          <Button
            color="secondary"
            size="medium"
            className={classes.item}
            href="#work"
          >
            Works
          </Button>
          <Button
            color="primary"
            size="medium"
            variant="outlined"
            className={classes.item}
            href="https://www.linkedin.com/in/herman-white/"
            rel="noopener"
            target="_blank"
          >
            Hire me!
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header
