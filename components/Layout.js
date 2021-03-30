import React from "react";
import Header from "./Header";
import Head from "next/head";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false} className={classes.root}>
      <Header />
      {children}
      <p>Footer</p>
    </Container>
  );
};

export default Layout;
