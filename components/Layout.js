import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  Container,
  useTheme,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import CustomSpeedDial from "./CustomSpeedDial";

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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only("xs"));

  // provides access to theme object in development
  const isWindowContext = typeof window !== "undefined";
  if (isWindowContext && process.env.NODE_ENV === "development") {
    window.theme = theme;
  }

  return (
    <Container disableGutters maxWidth={false} className={classes.root}>
      {matches ? <CustomSpeedDial /> : <Header />}
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
